import React from "react";
import ClickButton from "../../components/button";
import Inputs from "../../components/inputs";
import regImage from "../../assets/images/3d-graphic-designer-showing-thumbs-up-png 1.svg";

export default function Register() {
  return (
    <div className="body flex md:flex-row flex-col items-center w-full border p-[4%]">
      <div className="md:w-1/2 flex justify-center items-center">
        <img src={regImage} alt="" className="" />
      </div>

      <div className="w-1/2 h-full border p-[4%] items-center justify-center md:relative right-[50px] flex text-[#FFFFFF] flex-col gap-4">
        <div className="form-section flex flex-col justify-center w-full">
          <form className="flex flex-col gap-6 items-center md:items-start">
            <div className="flex flex-col gap-8">
              <h2 className="font-bold text-[32px] text-fuchsia-500">
                Register
              </h2>

              <div className="flex items-end justify-end md:justify-normal">
                <p className="hidden md:block text-[12px]">
                  Be part of this movement!
                </p>
                <p className="border-b border-dashed">🚶‍♀️🚶‍♂️</p>
              </div>
            </div>

            <h2 className="uppercase font-[Montserrat] text-[20px] font-[400]">
              create your account
            </h2>

            <div className="w-full flex flex-col gap-6">
              <div className="w-full flex flex-col md:flex-row gap-6">
                <Inputs
                  label={"Team's Name"}
                  id={"teamName"}
                  htmlFor={"teamName"}
                  type={"text"}
                  placeholder={"Enter the name of your group"}
                />

                <Inputs
                  label={"Phone"}
                  id={"number"}
                  htmlFor={"number"}
                  type={"tel"}
                  placeholder={"Enter your phone number"}
                />
              </div>

              <div className="w-full flex flex-col md:flex-row gap-6">
                <Inputs
                  label={"Email"}
                  id={"email"}
                  htmlFor={"email"}
                  type={"email"}
                  placeholder={"Enter your email address"}
                />

                <Inputs
                  label={"Project Topic"}
                  id={"topic"}
                  htmlFor={"topic"}
                  type={"text"}
                  placeholder={"What is your group project topic"}
                />
              </div>

              <div className="w-full flex justify-between">
                <div className="flex flex-col w-[60%] md:w-[47%]">
                  <label htmlFor="category">Category</label>
                  <select
                    name=""
                    id="category"
                    className="bg-transparent border border-white p-3"
                  >
                    <option value="">Select your category</option>
                  </select>
                </div>

                <div className="flex flex-col w-[35%] md:w-[47%]">
                  <label htmlFor="groupSize">Group Size</label>
                  <select
                    name=""
                    id="groupSize"
                    className="bg-transparent border border-white p-3"
                  >
                    <option value="">Select</option>
                  </select>
                </div>
              </div>

              <p className="text-fuchsia-500 text-[12px]">
                Please review your registration details before submitting
              </p>

              <div className="flex gap-3 items-center text-[12px]">
                <input type="checkbox" name="" id="terms" className="" />
                <label htmlFor="terms">
                  I agree with the event terms and conditions and privacy policy
                </label>
              </div>
            </div>

            <ClickButton message={"Register Now"} className={"w-full"} />
          </form>
        </div>
      </div>
    </div>
  );
}
