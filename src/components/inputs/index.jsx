import React from "react";

export default function Inputs({ label, id, type, placeholder, htmlFor }) {
  return (
    <div className="flex flex-col md:w-[47%]">
      <label htmlFor={htmlFor}>{label}</label>
      <input
        type={type}
        id={id}
        className="bg-transparent border border-white p-3 rounded-[4px]"
        placeholder={placeholder}
      />
    </div>
  );
}
