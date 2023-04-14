import React from "react";

export default function Poll({ show = false }) {
  if (!show) return null;

  return (
    <div className="absolute right-10">
      <iframe
        className="h-[60vh] overflow-hidden"
        src="https://docs.google.com/forms/d/e/1FAIpQLSdOrrtvk4JIur5X281NjB_wQ8DU0XbjDJdXx7xNPMnoiT0LKA/viewform?embedded=true"
        scrolling="no"
        width={440}
      >
        Loading…
      </iframe>
    </div>
  );
}
