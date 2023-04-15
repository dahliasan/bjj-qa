import { useState } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { RowSpacingIcon, Cross2Icon } from "@radix-ui/react-icons";

import { Source } from "@/types/transcript";
import { extractMetadata } from "@/utils/transcript";
import Link from "next/link";

const Sources = ({ sources }: { sources: Source[] }) => {
  const [open, setOpen] = useState(false);

  //  extract metadata from each source
  let sourcesMetadata = sources.map((source) => source.metadata);
  sourcesMetadata = sourcesMetadata.map((source) => {
    const { metadata, remainingText } = extractMetadata(source.chunk, [
      "video title",
      "channel",
    ]);
    return (source = { ...source, ...metadata, chunk: remainingText });
  });

  // split the first source into a separate card
  const firstSource = sourcesMetadata[0];
  const remainingSources = sourcesMetadata.slice(1);

  return (
    <Collapsible.Root className="mt-2" open={open} onOpenChange={setOpen}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span className="font-bold">sources</span>
        <Collapsible.Trigger asChild>
          <button className="inline-flex h-[25px] w-[25px] items-center justify-center rounded-full outline-none hover:bg-violet-300 focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=closed]:bg-white data-[state=open]:bg-violet-300">
            {open ? <Cross2Icon /> : <RowSpacingIcon />}
          </button>
        </Collapsible.Trigger>
      </div>

      {/* render first source card */}
      <div className="grid gap-1 text-sm">
        <Link
          href={`https://www.youtube.com/watch?v=${firstSource.videoId}?t=${firstSource["start time"]}`}
          className="font-bold"
        >
          {firstSource["video title"]}
        </Link>
        <p>{firstSource.channel}</p>
        <p>{firstSource.chunk}</p>
      </div>

      {/* render remaining sources */}
      {remainingSources.length > 0 && (
        <Collapsible.Content className="mt-2 grid gap-2">
          {remainingSources.map((source, index) => {
            return (
              <div key={index} className="text-sm">
                <Link
                  href={`https://www.youtube.com/watch?v=${source.videoId}?t=${source["start time"]}`}
                  className="font-bold"
                >
                  {source["video title"]}
                </Link>
                <p>{source.channel}</p>
                <p>{source.chunk}</p>
              </div>
            );
          })}
        </Collapsible.Content>
      )}
    </Collapsible.Root>
  );
};

export default Sources;
