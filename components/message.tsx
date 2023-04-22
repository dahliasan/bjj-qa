import * as Avatar from "@radix-ui/react-avatar";
import React from "react";
import ReactMarkdown from "react-markdown";
import { ChatMessage, MessageType } from "@/types/chat";
import FeedbackButtons from "./feedbackButtons";

export default function Message({
  message,
  avatarBg,
  avatarSrc,
}: {
  message: ChatMessage;
  avatarBg: string;
  avatarSrc: string;
}) {
  const avatarInitials = message.type === "userMessage" ? "Me" : "GS";

  return (
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
          {avatarInitials}
        </Avatar.Fallback>
      </Avatar.Root>
      <div className="w-full">
        <ReactMarkdown className="markdown leading-relaxed" linkTarget="_blank">
          {message.message}
        </ReactMarkdown>
      </div>

      <FeedbackButtons queryId={message.savedQueryId} />
    </div>
  );
}
