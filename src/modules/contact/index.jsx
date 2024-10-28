import React from "react";
import Inputs from "../../components/inputs";
import ClickButton from "../../components/button";

export default function Contact() {
  return (
    <div className="body flex md:flex-row flex-col items-center w-full h-full">
      <div className="md:w-1/2 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center">
          <h2 className="font-bold text-[32px] text-fuchsia-500">
            Get in touch
          </h2>

          <div className="flex flex-col gap-3">
            <p className="">Contact Information</p>
            <p className="">27,Alara Street Yaba 100012 Lagos State</p>
            <p className="">Call Us : 07067981819</p>
            <p className="">we are open from Monday-Friday 08:00am - 05:00pm</p>
          </div>
        </div>
      </div>

      <div className="w-1/2 h-full p-[5%] items-center justify-center md:relative right-[50px] flex text-[#FFFFFF] flex-col gap-4">
        <div className="form-section flex flex-col justify-center border p-6 md:p-[10%] w-full h-[65%]">
          <form className="flex flex-col gap-6 items-center md:items-start h-full">
            <div className="flex flex-col gap-8">
              <h2 className=" text-fuchsia-500">
                Questions or need assistance? Let us know about it
              </h2>
            </div>

            <Inputs
              label={""}
              id={"teamName"}
              htmlFor={"teamName"}
              type={"text"}
              placeholder={"Enter the name of your group"}
            />

            <Inputs
              label={""}
              id={"email"}
              htmlFor={"email"}
              type={"email"}
              placeholder={"Enter your email address"}
            />

            <textarea
              name="message"
              id=""
              value={"Message"}
              className="h-full w-[80%] border bg-transparent p-2"
            ></textarea>

            <div className="w-full flex justify-center">
              <ClickButton
                message={"Submit"}
                className={"w-1/2 justify-center"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
