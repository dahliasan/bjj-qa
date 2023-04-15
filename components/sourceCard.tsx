import React from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import * as Separator from "@radix-ui/react-separator";

import { SourceMetadata } from "@/types/transcript";
import Link from "next/link";

const SourceCard = ({ source }: { source: SourceMetadata }) => (
  <HoverCard.Root openDelay={0} closeDelay={100} defaultOpen={true}>
    <HoverCard.Trigger asChild>
      <Link
        className="inline-block max-w-[20ch] cursor-pointer flex-col truncate rounded-lg border border-black bg-stone-200 p-1 px-2 text-xs text-black transition hover:bg-slate-50 focus:shadow-[0_0_0_2px_white]"
        href={`https://www.youtube.com/watch?v=${source.videoId}?t=${source["start time"]}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        {source["video title"]}
      </Link>
    </HoverCard.Trigger>
    <HoverCard.Portal>
      <HoverCard.Content
        className="data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[300px] rounded-md bg-white p-3 text-black shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all"
        sideOffset={5}
      >
        <div className="flex flex-col gap-2 text-[12px]">
          <div className="">
            <p>{source.chunk}</p>
          </div>

          <Separator.Root className=" bg-black data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px" />

          <div className="">
            <p className="font-medium">{source["video title"]}</p>
            <p>{source.channel}</p>
          </div>
        </div>

        <HoverCard.Arrow className="fill-white" />
      </HoverCard.Content>
    </HoverCard.Portal>
  </HoverCard.Root>
);

export default SourceCard;
