import React from "react";

export default function Detail({
  image,
  heading,
  spanHead,
  textContent,
  textClass,
  addClassname,
  imageClass,
  imageDiv,
  extraImage,
  titleClass,
  extraText,
  class_sect,
  nextClass,
}) {
  return (
    <div
      className={`flex flex-col md:flex-row md:p-10 md:px-16 w-full ${addClassname}`}
    >
      <div className={`flex justify-center md:w-1/2 ${imageDiv}`}>
        <img
          src={extraImage}
          alt=""
          className="absolute w-[70%] bottom-[42%] left-[7%]"
        />

        {<img src={image} alt="" className={imageClass} />}
      </div>

      <div
        className={`md:w-1/2 flex flex-col gap-4 justify-center border p-6 ${class_sect}`}
      >
        <div className={`flex flex-col gap-[1rem] ${nextClass}`}>
          <div
            className={`font-[clash Display] font-bold text-[32px] leading-[42.56px] ${titleClass}`}
          >
            {heading} <br />{" "}
            <span className="text-fuchsia-500">{spanHead}</span>
          </div>

          <div className="">{extraText}</div>
        </div>

        <div
          className={`font-sans text-[95%] text-[#FFFFFF] leading-[27.5px] ${textClass} font-[500]`}
        >
          {textContent}
        </div>
      </div>
    </div>
  );
}
