import * as Avatar from "@radix-ui/react-avatar";
import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { ChatMessage } from "@/types/chat";
import FeedbackButtons from "./feedbackButtons";

function addLineBreaksToLists(text: string) {
  // Split text by numbered list items (e.g., "1. ", "2. ", etc.) and unordered list items (e.g., "- ", "* ", etc.)
  const regex = /(\d+\. |[-*] )/g;
  const parts = text.split(regex);

  // Add a line break before each matched list item
  const processedParts = parts.map((part, index) => {
    if (regex.test(part) && index > 0) {
      return `\n${part}`;
    }
    return part;
  });

  // Join the processed parts back together
  return processedParts.join("");
}

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

  console.log(addLineBreaksToLists(message.message));

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
        <ReactMarkdown
          remarkPlugins={[gfm]}
          className="prose leading-normal dark:text-black"
          linkTarget="_blank"
        >
          {addLineBreaksToLists(message.message)}
        </ReactMarkdown>
      </div>

      <FeedbackButtons queryId={message.savedQueryId} />
    </div>
  );
}
