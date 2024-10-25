import React from "react";
import { useNavigate } from "react-router-dom";

export default function ClickButton({ message, className, buttonLocation }) {
  const navigate = useNavigate();

  function Button() {
    navigate(buttonLocation);
  }
  return (
    <div
      className={`text-white font-semibold w-full h-full flex items-center ${className}`}
    >
      <button
        onClick={Button}
        className="bg-gradient-to-r from-[#9A39FF] to-[#FF29B9] p-2 rounded-[4px]"
      >
        {message}
      </button>
    </div>
  );
}
