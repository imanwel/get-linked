import React from "react";
import getLinked from "../../assets/images/getlinked.svg";
import { Link, Outlet } from "react-router-dom";
import ClickButton from "../../components/button";
import toggleBar from "../../assets/images/togglebar.svg";

export default function Homepage() {
  function openNav() {
    console.log("open");
    // if (document.querySelector("nav").classList.contains("hidden")) {
    //   document.querySelector("nav").classList.remove("hidden");
    // }

    document.querySelector("nav").style.top = "62px";
    document.querySelector("nav").style.left = "50px";
  }
  function closeNav() {
    // document.querySelector("nav").classList.add("hidden");
    document.querySelector("nav").style.left = "387px";
  }

  return (
    <div className="bg-[#150E28] w-full h-screen flex flex-col overflow-auto">
      <div className="headNav px-[8%] py-6 w-full flex justify-center gap-[35%] md:items-center relative z-50">
        <div className="flex w-full justify-between items-center px-3">
          <div className="">
            <img src={getLinked} alt="" className="w-[70%]" />
          </div>

          <div
            className="cursor-pointer flex justify-center items-center w-[10%] h-full md:hidden"
            onClick={openNav}
          >
            <img src={toggleBar} alt="" className="w-[70%]" />
          </div>
        </div>

        <nav className="flex flex-col gap-8 h-[492px] w-[348px] md:h-fit md:w-fit p-14 md:p-0 rounded-[8px] md:rounded-none bg-[#150E28]/60 backdrop-filter backdrop-blur-[60px] fixed left-[387px] md:relative md:left-0">
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
                <Link to={"/"}>Timeline</Link>
              </li>
              <li className="text-[#FFFFFF]">
                <Link>Overview</Link>
              </li>
              <li className="text-[#FFFFFF]">
                <Link>FAQs</Link>
              </li>
              <li className="bg-gradient-to-r from-[#9A39FF] to-[#FF29B9] bg-clip-text text-transparent">
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>

            <div className="w-[70%] md:w-[30%]">
              <ClickButton message={"Register"} buttonLocation={"/reg"} />
            </div>
          </div>
        </nav>
      </div>

      <div className="text-white w-full h-full flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}
