import React from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import * as Separator from "@radix-ui/react-separator";
import Link from "next/link";
import { Document } from "langchain/document";

export default function SourceCard({
  source,
  index,
}: {
  source: Document;
  index: number;
}) {
  const { pageContent, metadata } = source;

  return (
    <HoverCard.Root openDelay={50} closeDelay={50}>
      <HoverCard.Trigger asChild>
        <Link
          className="inline-block max-w-[15ch] cursor-pointer flex-col truncate rounded-lg border border-black bg-stone-200 p-1 px-2 text-[10px] text-black transition hover:bg-slate-50 focus:shadow-[0_0_0_2px_white]"
          href={`https://youtu.be/${metadata.videoId}?t=${
            metadata.startTime && parseInt(metadata.startTime)
          }`}
          target="_blank"
          rel="noreferrer noopener"
        >
          {index + 1}. {metadata.chunkTitle}
        </Link>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          className="data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[300px] rounded-md bg-white p-3 text-black shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all"
          sideOffset={5}
        >
          <div className="flex flex-col gap-2 text-[12px]">
            <div className="">
              <p className="font-medium">{metadata.chunkTitle}</p>
              <p>{metadata.description}</p>
            </div>

            <Separator.Root className=" bg-black data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px" />

            <div className="">
              <p className="font-medium">{metadata.videoTitle}</p>
              <p>{metadata.channel}</p>
            </div>
          </div>

          <HoverCard.Arrow className="fill-white" />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}
