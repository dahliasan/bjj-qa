import { Source } from "@/types/transcript";
import { extractMetadata } from "@/utils/transcript";
import Link from "next/link";
import HoverCardDemo from "./sourceCard";
import SourceCard from "./sourceCard";

const Sources = ({ sources }: { sources: Source[] }) => {
  //  extract metadata from each source
  let sourcesMetadata = sources.map((source) => source.metadata);

  sourcesMetadata = sourcesMetadata.map((source) => {
    const { metadata, remainingText } = extractMetadata(source.chunk, [
      "video title",
      "channel",
      "start time",
    ]);
    return (source = { ...source, ...metadata, chunk: remainingText });
  });

  return (
    <div className="mt-4 flex items-start gap-2">
      <div className="font-mono text-xs">sources</div>
      <div className="flex flex-wrap gap-2">
        {sourcesMetadata.map((source, index) => {
          return <SourceCard key={index} source={source} />;
        })}
      </div>
    </div>
  );
};

export default Sources;
