import React from "react";

export default function Poll({ show = true }) {
  if (!show) return null;

  return (
    <div className="absolute bottom-5 right-6 self-end">
      {/* Put this part before </body> tag */}

      {/* The button to open modal */}
      <label
        htmlFor="modal-poll"
        className="cursor-pointer rounded-lg border border-black bg-yellow-300 px-4 py-1 text-xs font-semibold"
      >
        give feedback
      </label>

      <input type="checkbox" id="modal-poll" className="modal-toggle" />
      <label htmlFor="modal-poll" className="modal max-h-screen cursor-pointer">
        {/* <label className="bg-back relative" htmlFor=""> */}
        <iframe
          className="h-[80vh]"
          src="https://docs.google.com/forms/d/e/1FAIpQLSdOrrtvk4JIur5X281NjB_wQ8DU0XbjDJdXx7xNPMnoiT0LKA/viewform?embedded=true"
          scrolling="no"
          width={400}
        >
          Loading…
        </iframe>
        {/* </label> */}
      </label>
    </div>
  );
}
