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
  extraImgClass,
  titleClass,
  extraText,
  class_sect,
  nextClass,
}) {
  return (
    <div className={`flex flex-col md:flex-row p-[8%] w-full ${addClassname}`}>
      <div className={`flex justify-center md:w-1/2 ${imageDiv}`}>
        {/* <img src={extraImage} alt="" className={extraImgClass} /> */}

        {extraImage}

        {<img src={image} alt="" className={imageClass} />}
      </div>

      <div
        className={`md:w-1/2 flex flex-col gap-4 justify-center p-[3%] ${class_sect}`}
      >
        <div className={`flex flex-col gap-[1rem] ${nextClass}`}>
          <div
            className={`font-[clash Display] font-bold text-[32px] leading-[42.56px] ${titleClass}`}
          >
            {heading} <br />{" "}
            <span className="text-fuchsia-500">{spanHead}</span>
          </div>

          {/* <div className="relative"></div> */}
          {extraText}
        </div>

        <div
          className={`font-sans text-[#FFFFFF] leading-[27.5px] ${textClass}`}
        >
          {textContent}
        </div>
      </div>
    </div>
  );
}
