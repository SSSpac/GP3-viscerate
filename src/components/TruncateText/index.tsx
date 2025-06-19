"use client"

import { useState } from "react";
import { TruncateTextProps } from "../../types/globals";

export default function TruncateText({
  text,
  wordLimit = 20,
  className,
}: TruncateTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const contentToProcess = text || "No description";

  if (
    (contentToProcess === "No description" && text === undefined) ||
    text === null ||
    text === ""
  ) {
    return <p className={className}>{contentToProcess}</p>;
  }

  const words = contentToProcess.split(/\s+/);

  const isLongerThanLimit = words.length > wordLimit;

  const truncatedText = isLongerThanLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : contentToProcess;
  const displayText = isExpanded ? contentToProcess : truncatedText;

  return (
    <p className={className}>
      {displayText}
      {isLongerThanLimit && (
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="ml-1 text-blue-300 hover:underline focus:outline-none focus:ring-2 focus:ring-opacity-50 cursor-pointer"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </p>
  );
}
