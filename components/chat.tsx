"use client";
import { useState, useRef, useEffect, useMemo } from "react";
import { ChatMessage, MessageType } from "@/types/chat";
import { fetchEventSource } from "@microsoft/fetch-event-source";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import * as Form from "@radix-ui/react-form";
import Sources from "./sources";
import Spinner from "./spinner";
import Message from "./message";

const Chat = () => {
  const [messageState, setMessageState] = useState<{
    messages: ChatMessage[];
    history: [string, string][];
    pending?: string;
  }>({
    messages: [
      {
        message: "oss! how can i help?",
        type: MessageType.ApiMessage,
      },
    ],
    history: [],
  });

  const [query, setQuery] = useState<string>(
    "give me a chain for passing half guard"
  );
  const [loading, setLoading] = useState<boolean>(false);

  const { messages, pending, history } = messageState;

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
  }, [pending]);

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
          type: MessageType.UserMessage,
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
        onopen: async (response) => {
          // console.log("Connection opened:", response);
        },
        onerror: (error) => {
          console.log("Connection error:", error);
        },
        onmessage: (event) => {
          const eventData = JSON.parse(event.data);

          if (eventData.type === "token") {
            const { value } = eventData;
            setMessageState((state) => ({
              ...state,
              pending: (state.pending ?? "") + value,
            }));
          } else if (eventData.type === "response") {
            const { sourceDocuments } = eventData.data;

            setMessageState((state) => ({
              history: [...state.history, [question, state.pending ?? ""]],
              messages: [
                ...state.messages,
                {
                  type: MessageType.ApiMessage,
                  message: state.pending ?? "",
                  sources: sourceDocuments,
                  savedQueryId: eventData.id,
                },
              ],
              pending: undefined,
            }));
          } else if (eventData.type === "done") {
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
              type: MessageType.ApiMessage,
              message: pending,
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
                message.type == "assistantMessage"
                  ? "/martial-arts-uniform_1f94b.png"
                  : "/owl.png";

              const avatarBg =
                message.type == "assistantMessage"
                  ? "bg-slate-800"
                  : "bg-yellow-400";

              return (
                <div
                  key={index}
                  className="border-b border-b-black bg-neutral-100 p-4"
                >
                  <Message
                    message={message}
                    avatarBg={avatarBg}
                    avatarSrc={avatarSrc}
                  />

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
