"use client";

import { useState, useEffect, useRef } from "react";
import * as Toast from "@radix-ui/react-toast";
import * as Tooltip from "@radix-ui/react-tooltip";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import TooltipWrapper from "./tooltipWrapper";

export default function FeedbackButtons({
  queryId,
}: {
  queryId?: string | number;
}) {
  const [helpful, setHelpful] = useState<boolean | null>(null);
  const [open, setOpen] = useState(false);
  const timerRef = useRef(0);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const handleClick = async (isHelpful: boolean) => {
    setHelpful(isHelpful);
    setOpen(false);
    window.clearTimeout(timerRef.current);

    try {
      const response = await fetch("/api/save-feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: queryId, helpful: isHelpful }),
      });

      if (!response.ok) {
        throw new Error("Error saving feedback");
      }

      // Handle the response from the server, e.g., update the UI or show a message
      timerRef.current = window.setTimeout(() => {
        setOpen(true);
        console.log(response);
      }, 100);
    } catch (error) {
      console.error(error);
      // Handle the error, e.g., show an error message to the user
    }
  };

  return (
    <div className={`${!queryId && "invisible"} flex items-start gap-2`}>
      <Toast.Provider>
        <TooltipWrapper tooltipContent="helpful">
          <button onClick={() => handleClick(true)}>
            {helpful ? (
              <ThumbUpIcon fontSize="small" sx={{ fontSize: 16 }} />
            ) : (
              <ThumbUpOutlinedIcon fontSize="small" sx={{ fontSize: 16 }} />
            )}
          </button>
        </TooltipWrapper>

        <TooltipWrapper tooltipContent="not helpful">
          <button onClick={() => handleClick(false)}>
            {helpful === false ? (
              <ThumbDownIcon fontSize="small" sx={{ fontSize: 16 }} />
            ) : (
              <ThumbDownOutlinedIcon fontSize="small" sx={{ fontSize: 16 }} />
            )}
          </button>
        </TooltipWrapper>

        <Toast.Root
          className="border[grid-template-areas:_'title_action'_'description_action'] rounded-md border border-black bg-white p-2 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-hide data-[state=open]:animate-slideIn data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out] "
          open={open}
          onOpenChange={setOpen}
        >
          <Toast.Title className="text-sm font-medium">
            thanks for your feedback!
          </Toast.Title>
        </Toast.Root>

        <Toast.Viewport className="fixed right-0 top-0 z-[2147483647] m-0 flex max-w-[100vw] list-none flex-col gap-[10px] p-[var(--viewport-padding)] outline-none [--viewport-padding:_25px]" />
      </Toast.Provider>
    </div>
  );
}
