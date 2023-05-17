import SourceCard from "./sourceCard";
import { Document } from "langchain/document";

const Sources = ({ sources }: { sources: Document[] }) => {
  return (
    <div className="mt-4 flex items-start gap-2">
      <div className="font-mono text-xs">sources</div>
      <div className="flex flex-wrap gap-2">
        {sources.map((source, index) => {
          return <SourceCard index={index} key={index} source={source} />;
        })}
      </div>
    </div>
  );
};

export default Sources;
