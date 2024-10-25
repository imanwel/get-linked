import React from "react";
import ClickButton from "../../components/button";
import Inputs from "../../components/inputs";
import regImage from "../../assets/images/3d-graphic-designer-showing-thumbs-up-png 1.svg";
import { Link } from "react-router-dom";
import getLinked from "../../assets/images/getlinked.svg";
import toggleBar from "../../assets/images/togglebar.svg";

export default function Register() {
  function openNav() {
    console.log("open");
  }
  function closeNav() {
    document.querySelector("nav").classList.add("hidden");
  }

  return (
    <div className="bg-[#150E28] flex flex-col">
      <div className="headNav py-2 w-full h-[10vh] flex justify-center gap-[35%] lg:items-center border px-[8%]">
        <div className="flex w-full justify-between items-center px-3">
          <div className="w-[30%]">
            <img src={getLinked} alt="" className="" />
          </div>

          <div
            className="cursor-pointer flex justify-center items-center w-[10%] h-full md:hidden"
            onClick={openNav}
          >
            <img src={toggleBar} alt="" className="w-[70%]" />
          </div>
        </div>

        <nav className="flex flex-col gap-8 h-[492px] w-[348px] md:h-fit md:w-fit p-14 md:p-0 rounded-[8px] md:rounded-none bg-[#150E28]/60 backdrop-filter backdrop-blur-[60px] fixed md:relative">
          <div
            className="md:hidden flex justify-end text-white font-bold cursor-pointer "
            onClick={closeNav}
          >
            <p className="flex justify-center items-center border-2 rounded-[50px] w-[23px] h-[23px] ">
              X
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-12 ">
            <ul className="flex flex-col md:flex-row gap-3 lg:gap-8 font-semibold">
              <li className="text-[#FFFFFF]">
                <Link>Timeline</Link>
              </li>
              <li className="text-[#FFFFFF]">
                <Link>Overview</Link>
              </li>
              <li className="text-[#FFFFFF]">
                <Link>FAQs</Link>
              </li>
              <li className="bg-gradient-to-r from-[#9A39FF] to-[#FF29B9] bg-clip-text text-transparent">
                <Link>Contact</Link>
              </li>
            </ul>

            <div className="w-[70%] md:w-[30%]">
              <ClickButton message={"Register"} />
            </div>
          </div>
        </nav>
      </div>

      <div className="body flex md:flex-row flex-col">
        <div className="md:w-1/2 h-[155px] md:h-[717px] flex justify-center items-center">
          <img src={regImage} alt="" className="h-full" />
        </div>

        <div className="md:w-[740px] items-center justify-center md:h-[740px] md:relative right-[50px] flex text-[#FFFFFF] flex-col h-full gap-4">
          <div className="form-section flex flex-col justify-between w-full md:w-[558px] md:h-[610px] p-6 md:p-0">
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

            <form className="flex flex-col gap-6 items-center md:items-start">
              <h2 className="uppercase font-[Montserrat] text-[20px] font-[400]">
                create your account
              </h2>

              <div className="w-full flex flex-col gap-6">
                <div className="w-full flex flex-col md:flex-row gap-2 md:gap-0 justify-between">
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

                <div className="w-full flex flex-col md:flex-row gap-2 md:gap-0 justify-between">
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
                    I agree with the event terms and conditions and privacy
                    policy
                  </label>
                </div>
              </div>
              <ClickButton message={"Register Now"} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
