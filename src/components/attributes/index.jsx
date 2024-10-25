import React from "react";

export default function Attribute({ span, text, extraDiv = false, questions }) {
  return (
    <div className="text-[93%] font-sans">
      {extraDiv && (
        <div className="border-b border-[#D434FE] flex justify-between">
          {questions} <p className="font-bold text-[#D434FE]">+</p>
        </div>
      )}

      <span className="font-bold leading-[27.76px] text-pink-500">{span}</span>
      <span className="leading-[24.29px] text-[95%]">{text}</span>
    </div>
  );
}
