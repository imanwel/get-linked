import React from "react";
import { Link } from "react-router-dom";
// import regImage from "../assets/images/3d-graphic-designer-showing-thumbs-up-png 1.png";
impprt
import ClickButton from "../button";

export default function Unauthenticated() {
  return (
    <div className=" bg-[#150E28]">
      <div className="headNav p-6 w-full hidden md:flex justify-between ">
        <div className="getlinked h-[44px] flex items-center px-8 font-[700] text-[36px] text-[#FFFFFF]">
          get
          <span className="text-fuchsia-500">linked</span>
          {/* bg-gradient-to-r from-[#9A39FF] to-[#FF29B9] bg-clip-text text-transparent */}
        </div>

        <nav className="md:flex md:w-[716px] h-[53px] justify-around items-center gap-[100px]">
          <ul className="flex gap-8 font-semibold">
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

          <div className="reg border-2 p-2 text-[#FFFFFF] ">Register</div>
        </nav>
      </div>

      <div className="body flex md:flex-row flex-col">
        <div className="md:w-1/2 h-[155px] md:h-[717px] flex justify-center items-center border">
          <img src={regImage} alt="" className="h-full" />
        </div>

        <div className="md:w-1/2 border-2 border-red-500 md:relative right-[50px] flex text-[#FFFFFF] p-9 flex-col h-full gap-4">
          {/* <div className="form-section  flex flex-col w-full md:w-[558px] md:h-[610px] border border-white"> */}
          <div className="flex flex-col gap-8 border">
            <h2 className="font-bold text-[32px] text-fuchsia-500">Register</h2>

            <div className="flex items-end">
              <p className="hidden md:block text-[12px]">
                Be part of this movement!
              </p>
              <p className="border-b border-dashed">🚶‍♀️🚶‍♂️</p>
            </div>
          </div>

          <form className="flex flex-col gap-6 items-center md:items-start border">
            <h2 className="uppercase font-[Montserrat] text-[20px] font-[400]">
              create your account
            </h2>

            <div className="w-full flex flex-col gap-6">
              <div className="w-full flex flex-col md:flex-row gap-2 md:gap-0 justify-between">
                <div className="flex flex-col md:w-[47%]">
                  <label htmlFor="teamName">Team's Name</label>
                  <input
                    type="text"
                    id="teamName"
                    className="bg-transparent border border-white p-3"
                    placeholder="Enter the name of your group"
                  />
                </div>

                <div className="flex flex-col md:w-[47%]">
                  <label htmlFor="number">Phone</label>
                  <input
                    type="tel"
                    id="number"
                    className="bg-transparent border border-white p-3"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="w-full flex flex-col md:flex-row gap-2 md:gap-0 justify-between">
                <div className="flex flex-col md:w-[47%]">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="bg-transparent border border-white p-3"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="flex flex-col md:w-[47%]">
                  <label htmlFor="topic">Project Topic</label>
                  <input
                    type="text"
                    id="topic"
                    className="bg-transparent border border-white p-3"
                    placeholder="What is your group project topic"
                  />
                </div>
              </div>

              <div className="w-full flex flex-col md:flex-row gap-2 md:gap-0 justify-between">
                <div className="flex flex-col md:w-[47%]">
                  <label htmlFor="category">Category</label>
                  <select
                    name=""
                    id="category"
                    className="bg-transparent border border-white p-3"
                  >
                    <option value="">Select your category</option>
                  </select>
                </div>

                <div className="flex flex-col md:w-[47%]">
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

              <div className="border flex gap-3 items-center text-[12px]">
                <input type="checkbox" name="" id="terms" className="" />
                <label htmlFor="terms">
                  I agree with the event terms and conditions and privacy policy
                </label>
              </div>
            </div>

            <ClickButton />
          </form>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
