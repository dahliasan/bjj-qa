"use client";
import { useState, useRef, useEffect, useMemo } from "react";
import { Message as MessageType } from "@/types/chat";
import { fetchEventSource } from "@microsoft/fetch-event-source";
import ReactMarkdown from "react-markdown";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import * as Form from "@radix-ui/react-form";
import * as Avatar from "@radix-ui/react-avatar";
import Sources from "./sources";
import Spinner from "./spinner";

const Chat = () => {
  const [messageState, setMessageState] = useState<{
    messages: MessageType[];
    pending?: string;
    history: [string, string][];
    pendingSourceDocuments?: any[];
  }>({
    messages: [
      {
        message:
          "Hi! I'm grapple sensei, how can I help you today? fyi I've only been watching lots of half guard and guard passing videos so far...",
        type: "apiMessage",
      },
    ],
    history: [],
  });
  const [query, setQuery] = useState<string>(
    "give me a chain for passing half guard"
  );
  const [loading, setLoading] = useState<boolean>(false);

  const { messages, pending, history, pendingSourceDocuments } = messageState;

  // set focus to the text area when the component is mounted
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const chatContainerRef = useRef<ScrollArea.ScrollAreaViewportElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  //handle form submission
  async function handleSubmit(e: any) {
    e.preventDefault();

    if (!query) {
      alert("Please input a question");
      return;
    }

    const question = query.trim();

    setMessageState((state) => ({
      ...state,
      messages: [
        ...state.messages,
        {
          type: "userMessage",
          message: question,
        },
      ],
      pending: undefined,
    }));

    setLoading(true);
    setQuery("");
    setMessageState((state) => ({ ...state, pending: "" }));

    const ctrl = new AbortController();

    try {
      fetchEventSource("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question,
          history,
        }),
        signal: ctrl.signal,
        onmessage: (event) => {
          const eventData = JSON.parse(event.data);
          console.log(eventData);

          if (eventData.type === "token") {
            const { value } = eventData;
            setMessageState((state) => ({
              ...state,
              pending: (state.pending ?? "") + value,
            }));
          } else if (eventData.type === "done") {
            const { sourceDocuments } = eventData.data;

            setMessageState((state) => ({
              ...state,
              pendingSourceDocuments: sourceDocuments,
            }));

            setMessageState((state) => ({
              history: [...state.history, [question, state.pending ?? ""]],
              messages: [
                ...state.messages,
                {
                  type: "apiMessage",
                  message: state.pending ?? "",
                  sources: pendingSourceDocuments,
                },
              ],
              pending: undefined,
              pendingSourceDocuments: undefined,
            }));

            setLoading(false);

            ctrl.abort();
          } else {
            throw new Error("Unknown event data type:", eventData);
          }
        },
      });
    } catch (error) {
      setLoading(false);
      console.log("error", error);
    }
  }

  // prevent empty submissions
  const handleEnter = (e: any) => {
    if (e.key === "Enter" && query) {
      handleSubmit(e);
    } else if (e.key == "Enter") {
      e.preventDefault();
    }
  };

  const chatMessages = useMemo(() => {
    return [
      ...messages,
      ...(pending
        ? [
            {
              type: "apiMessage",
              message: pending,
              sources: pendingSourceDocuments,
            },
          ]
        : []),
    ];
  }, [messages, pending]);

  return (
    <div className="w-full">
      {/* chat area */}
      <ScrollArea.Root
        type="scroll"
        className="h-[60vh] overflow-hidden rounded-lg border border-black bg-stone-300 dark:text-black"
      >
        <ScrollArea.Viewport
          className="h-full w-full border-inherit"
          ref={chatContainerRef}
        >
          <div>
            {chatMessages.map((message, index) => {
              const avatarSrc =
                message.type == "apiMessage"
                  ? "/martial-arts-uniform_1f94b.png"
                  : "/owl.png";

              const avatarBg =
                message.type == "apiMessage" ? "bg-slate-800" : "bg-blue-300";

              return (
                <div
                  key={index}
                  className="border-b border-b-black bg-neutral-100 p-4"
                >
                  <div className="flex gap-4">
                    <Avatar.Root
                      className={`grid h-[45px] w-[45px] shrink-0 select-none place-items-center overflow-hidden rounded-full ${avatarBg} align-middle`}
                    >
                      <Avatar.Image
                        className="h-2/3 w-2/3 rounded-[inherit] object-cover"
                        src={avatarSrc}
                        alt="chat avatar"
                      />
                      <Avatar.Fallback
                        className={`leading-1 flex h-full w-full items-center justify-center ${avatarBg} text-[15px] font-medium`}
                        delayMs={600}
                      >
                        GS
                      </Avatar.Fallback>
                    </Avatar.Root>
                    <ReactMarkdown
                      className="markdown leading-relaxed"
                      linkTarget="_blank"
                    >
                      {message.message}
                    </ReactMarkdown>
                  </div>

                  {message.sources && <Sources sources={message.sources} />}
                </div>
              );
            })}
          </div>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          className="flex w-2 touch-none select-none bg-slate-300 transition hover:bg-slate-400"
          orientation="vertical"
        >
          <ScrollArea.Thumb className="relative grid flex-grow rounded-full border border-black bg-slate-700" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>

      {/* radix ui form */}
      <Form.Root className="mt-4 dark:text-black" onSubmit={handleSubmit}>
        <Form.Field name="question">
          <div className="flex items-baseline justify-between">
            <Form.Message
              className="text-[13px] text-slate-500 opacity-[0.8] dark:text-slate-50"
              match="valueMissing"
            >
              Please enter a question
            </Form.Message>
          </div>
          <Form.Control asChild>
            <textarea
              className="box-border inline-flex w-full resize-none appearance-none items-center justify-center rounded-md p-2 outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] dark:bg-neutral-100"
              required
              onKeyDown={handleEnter}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              ref={inputRef}
              placeholder={
                loading ? "Waiting for response..." : "ask a question"
              }
            />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <button
            type="submit"
            disabled={loading}
            className="mt-2 box-border inline-flex h-[35px] w-full items-center justify-center rounded-md bg-slate-950 px-4 py-1 font-medium leading-none text-white hover:opacity-90 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none dark:bg-yellow-300 dark:text-black"
          >
            {loading ? <Spinner /> : "Ask"}
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
};

export default Chat;
