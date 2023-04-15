"use client";
import { useState, useRef, useEffect, useMemo } from "react";
import { Message as MessageType } from "@/types/chat";
import { fetchEventSource } from "@microsoft/fetch-event-source";
import ReactMarkdown from "react-markdown";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import * as Form from "@radix-ui/react-form";
import * as Avatar from "@radix-ui/react-avatar";

const Chat = () => {
  const [messageState, setMessageState] = useState<{
    messages: MessageType[];
    pending?: string;
    pendingSourceDocuments?: {}[];
    history: [string, string][];
  }>({
    messages: [
      {
        message: "Hi! I'm grapple sensei, how can I help you today?",
        type: "apiMessage",
      },
    ],
    history: [],
  });
  const [query, setQuery] = useState<string>("how do i pass the knee shield?");
  const [loading, setLoading] = useState<boolean>(false);

  const { messages, pending, history, pendingSourceDocuments } = messageState;

  // set focus to the text area when the component is mounted
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    console.log("pending", pending);
    console.log("history", history);
    console.log("messages", messages);
    console.log(chatMessages);
  }, [pending, history, messages]);

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
          // if end of messages
          if (event.data === "[DONE]") {
            // when we get the end of messages, we set the message and history
            setMessageState((state) => ({
              history: [...state.history, [question, state.pending ?? ""]],
              messages: [
                ...state.messages,
                {
                  type: "apiMessage",
                  message: state.pending ?? "",
                  sources: state.pendingSourceDocuments,
                },
              ],
              pending: undefined,
              pendingSourceDocuments: undefined,
            }));

            setLoading(false);

            ctrl.abort();
          } else {
            const data = JSON.parse(event.data);

            const { msg, sources } = data;

            if (msg) {
              // if message is still coming, we only set pending
              setMessageState((state) => ({
                ...state,
                pending: (state.pending ?? "") + msg,
              }));
            }

            if (sources) {
              const { sourceDocuments } = sources;
              setMessageState((state) => ({
                ...state,
                pendingSourceDocuments: sourceDocuments,
              }));
            }
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
    <div className="w-full px-4">
      {/* chat area */}
      <ScrollArea.Root
        type="scroll"
        className="h-[60vh] overflow-hidden rounded-lg border border-black bg-slate-100 dark:text-black"
      >
        <ScrollArea.Viewport className="h-full w-full border-inherit">
          <div>
            {chatMessages.map((message, index) => {
              console.log(message);
              const avatarSrc =
                message.type == "apiMessage"
                  ? "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                  : "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80";

              return (
                <div
                  key={index}
                  className="border-b border-b-black bg-neutral-100 p-4"
                >
                  <div className="flex gap-4">
                    <Avatar.Root className="h-[45px] w-[45px] shrink-0 select-none overflow-hidden rounded-full bg-black align-middle">
                      <Avatar.Image
                        className="h-full w-full rounded-[inherit] object-cover"
                        src={avatarSrc}
                        alt="Grapple Sensei"
                      />
                      <Avatar.Fallback
                        className="leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
                        delayMs={600}
                      >
                        GS
                      </Avatar.Fallback>
                    </Avatar.Root>
                    <ReactMarkdown linkTarget="_blank">
                      {message.message}
                    </ReactMarkdown>
                  </div>

                  {message.sources && (
                    <div className="mt-4 flex items-center justify-end gap-4 font-mono text-xs">
                      <span>sources:</span>
                      {message.sources.map((source: any, index: number) => {
                        return <span key={index}>{source.metadata.id}</span>;
                      })}
                    </div>
                  )}
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
              className="box-border inline-flex w-full resize-none appearance-none items-center justify-center rounded-md p-2 leading-none shadow-[0_0_0_1px] outline-none selection:bg-black hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
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
            className="mt-2 box-border inline-flex h-[35px] w-full items-center justify-center rounded-md bg-slate-950 px-4 py-1 font-medium leading-none text-white hover:opacity-90 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none dark:bg-yellow-200 dark:text-black"
          >
            Ask
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
};

export default Chat;