import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";

const TooltipWrapper = ({
  children,
  tooltipContent,
}: {
  children: React.ReactNode;
  tooltipContent?: string;
}) => {
  return (
    <Tooltip.Provider delayDuration={0}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="select-none rounded-[4px] bg-yellow-300 px-2 py-1 text-[15px] text-xs leading-none text-black shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
            sideOffset={5}
          >
            {tooltipContent}
            <Tooltip.Arrow className="fill-yellow-300" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default TooltipWrapper;
