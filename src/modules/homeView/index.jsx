import React, { useState } from "react";
import line1 from "../../assets/images/Line 1.svg";
import igniteWrite from "../../assets/images/Igniting a Revolution in HR Innovation.svg";
import igniteLine from "../../assets/images/Vector 4.svg";
import hackathonTitle from "../../assets/images/Title.svg";
// import smallScreenTitle from "../../assets/images/Title2.svg";
import ClickButton from "../../components/button";
import countdownTime from "../../assets/images/Countdown time.svg";
import smartGlass from "../../assets/images/man-wearing-smart-glasses-touching-virtual-screen 1.svg";
import idea from "../../assets/images/Image 1.svg";
import arrow from "../../assets/images/arrow.svg";
import theBigIdea from "../../assets/images/The big idea.svg";
import ideaStar1 from "../../assets/images/pink star1.svg";
import ideaStar2 from "../../assets/images/pink star2.svg";
import ellipse from "../../assets/images/Ellipse 1.svg";
// import { useNavigate } from "react-router-dom";
import rulesImage from "../../assets/images/7450159 1.svg";
import star1 from "../../assets/images/star1.svg";
import star2 from "../../assets/images/star2.svg";
import Detail from "../../components/detail";
import keyAttributes from "../../assets/images/key attributes.svg";
import Attribute from "../../components/attributes";
import questions from "../../assets/images/cwok_casual_21 1.svg";
import flare1 from "../../assets/images/Purple-Lens-Flare1.svg";
import flare2 from "../../assets/images/Purple-Lens-Flare2.svg";
import flare3 from "../../assets/images/Purple-Lens-Flare3.svg";
import Timeline from "../../assets/images/Timeline.svg";
import cup from "../../assets/images/cup.svg";
import Rewards from "../../assets/images/Rewards.svg";
import sponsors from "../../assets/images/Partner and sponsors section.svg";
import privacy from "../../assets/images/privacy policy.svg";
import privacyShield from "../../assets/images/privacy vector.svg";
import listTerms from "../../assets/images/list terms.svg";
import getLinked from "../../assets/images/getlinked.svg";
import termsOfUse from "../../assets/images/Terms of use.svg";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";

export default function HomeView() {
  // const navigate = useNavigate();

  // function Register() {
  //   navigate("/reg");
  // }

  // const [timeline, setTimeline] = useState(Timeline);

  const [titleImage, setTitle] = useState(hackathonTitle);
  // let size;
  // if(size==='sm'){
  //   setTitle()
  // }else{
  //   setTitle(hackathonTitle)
  // }

  return (
    <div className="h-full flex flex-col relative border-t">
      {/* <img src={line1} alt="" className="" /> */}

      <div className="border-b flex flex-col">
        <div className="flex flex-col items-end p-5">
          <div className="md:w-1/2">
            <img src={igniteWrite} alt="" />

            {/* <h2 className="font-Montserrat font-bold italic text-[30px] leading-[43.88px] px-5 h-[44px]">
              Igniting a Revolution in HR Innovation
            </h2> */}
          </div>

          <div className="flex justify-center w-[40%] md:w-[20%]">
            <img src={igniteLine} alt="" className="w-[90%]" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <img
            src={flare1}
            alt=""
            className="absolute bottom-[40%] left-[0%] opacity-[50%]"
          />

          <div className="md:w-1/2">
            <div className="p-5 md:p-0 flex flex-col gap-12 justify-center items-center md:items-start md:relative md:left-[18%] ">
              <div className="relative">
                <div className="">
                  <img
                    src={star1}
                    alt=""
                    className="absolute top-[-30px] left-[50px]"
                  />

                  <img
                    src={star2}
                    alt=""
                    className="absolute top-0 right-0 opacity-[75%]"
                  />

                  <img src={titleImage} alt="" className="w-[722px]" />
                </div>

                <div className="w-[264px] lg:w-[522px] flex flex-col gap-8">
                  <p className="text-[14px] leading-[21.58px] lg:text-[20px] lg:leading-[33.2px] font-Montserrat text-center md:text-left">
                    Participate in getlinked tech Hackathon 2023 stand a chance
                    to win a Big prize
                  </p>

                  {/* <div
                    className="flex justify-center w-full md:w-[172px] cursor-pointer"
                    // onClick={Register}
                  > */}
                  <ClickButton
                    message={"Register"}
                    buttonLocation={"/reg"}
                    className={"cursor-pointer w-1/2"}
                  />
                  {/* </div> */}
                </div>
              </div>

              <div className="md:my-4 w-[291px] h-[85px] relative">
                <img
                  src={star2}
                  alt=""
                  className="absolute bottom-[100%] right-[-100px] opacity-[75%]"
                />

                <img src={countdownTime} alt="" />
              </div>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <img
              src={flare2}
              alt=""
              className="hidden md:block md:absolute bottom-3 opacity-[68%]"
            />

            {/* <div className="border   "> */}
            {/* </div> */}

            <div className="relative">
              <img
                src={smartGlass}
                alt=""
                className="border border-transparent mix-blend-luminosity"
              />

              <img
                src={idea}
                alt=""
                className="w-[83%] absolute bottom-[13%] left-[9%] mix-blend-hard-light"
              />
            </div>
          </div>
        </div>
      </div>

      <Detail
        addClassname={"border-b"}
        image={theBigIdea}
        extraImage={
          <div className="flex items-end">
            <img src={ideaStar1} alt="" className="absolute top-[35%] left-0" />
            <img src={arrow} alt="" className="absolute right-0" />
          </div>
        }
        // extraImgClass={"relative"}
        imageDiv={"relative"}
        imageClass={""}
        heading={" Introduction to getlinked"}
        spanHead={"tech Hackathon 1.0"}
        titleClass={""}
        textContent={`Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!`}
        extraText={
          <div className="absolute right-0 top-[25%]">
            <img src={ideaStar2} alt="" />
          </div>
        }
        nextClass={"relative"}
      />

      <Detail
        addClassname={"md:flex-row-reverse md:h-[664px] border-b"}
        image={rulesImage}
        extraImage={
          <div className="">
            <img
              src={star1}
              alt=""
              className="absolute right-[97%] bottom-[23%]"
            />

            <img
              src={ellipse}
              alt=""
              className="absolute right-[12%] top-[3%]"
            />
          </div>
        }
        imageDiv={"md:relative items-center"}
        imageClass={"md:relative top-[-52px] md:w-[664px] md:h-[664px]"}
        heading={"Rules and"}
        spanHead={"Guidelines"}
        titleClass={""}
        textContent={`Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!`}
        textClass={""}
        extraText={
          <div className="absolute left-[50%] top[20%]">
            <img src={star2} alt="" />
            <img src={flare3} alt="" />
          </div>
        }
        class_sect={"relative"}
      />

      <Detail
        addClassname={"border-b py-[35px] md:py-0"}
        image={keyAttributes}
        extraImage={
          <div className="">
            <img
              src={ideaStar1}
              alt=""
              className="absolute top-[5%] left-[20%]"
            />

            <img
              src={ellipse}
              alt=""
              className="w-[20%] absolute left-[13%] top-[13%]"
            />

            <img
              src={star2}
              alt=""
              className="absolute bottom-[45%] right-[35%]"
            />
          </div>
        }
        imageDiv={"relative"}
        imageClass={"relative"}
        heading={"Judging Criteria"}
        spanHead={" Key attributes"}
        titleClass={""}
        textContent={
          <div className="flex flex-col gap-5">
            <img
              src={star1}
              alt=""
              className="absolute bottom-[4%] left-[-50px]"
            />

            <Attribute
              span={"Innovation and Creativity"}
              text=": Evaluate the uniqueness
              and creativity of the solution. Consider whether it addresses a
              real-world problem in a novel way or introduces innovative
              features."
            />

            <Attribute
              span={"Functionality"}
              text=": Assess how well the solution works.
              Does it perform its intended functions effectively and without
              major issues? Judges would consider the completeness and
              robustness of the solution."
            />

            <Attribute
              span={"Impact and relevance"}
              text=": Determine the potential impact of the solution 
              in the real world. Does it address a significant problem, and is it relevant 
              to the target audience? Judges would assess the potential social, 
              economic, or environmental benefits."
            />

            <Attribute
              span={"Technical Complexity"}
              text=": Evaluate the technical sophistication of the solution. 
              Judges would consider the complexity of the code, the use of advanced 
              technologies or algorithms, and the scalability of the solution."
            />

            <Attribute
              span={"Adherence to Hackathon Rules"}
              text=": Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements."
            />

            <ClickButton message={"Read More"} />
          </div>
        }
        class_sect={"relative"}
      />

      <Detail
        addClassname={"md:flex-row-reverse md:px-[10%] border-b"}
        image={questions}
        imageDiv={""}
        imageClass={""}
        heading={"Frequently Ask"}
        spanHead={"Question"}
        titleClass={""}
        textContent={
          <div className="flex flex-col gap-[4rem]">
            <div className="w-[75%]">
              We got answers to the questions that you might want to ask about{" "}
              <span>getlinked Hackathon 1.0</span>{" "}
            </div>

            <div className="attribute flex flex-col gap-6">
              <Attribute
                extraDiv={true}
                questions={
                  "Can I work on a project I started before the hackathon?"
                }
              />

              <Attribute
                extraDiv={true}
                questions={"What happens if I need help during the hackathon?"}
              />

              <Attribute
                extraDiv={true}
                questions={
                  "What happens if I don't have an idea for a project?"
                }
              />

              <Attribute
                extraDiv={true}
                questions={"Can I join a team of do I have to come with one?"}
              />

              <Attribute
                extraDiv={true}
                questions={"What happens after the Hackathon ends?"}
              />

              <Attribute
                extraDiv={true}
                questions={
                  "Can I work on a project I started before the Hackathon?"
                }
              />
            </div>
          </div>
        }
      />

      <div className="timeline relative flex justify-center p-[5%]">
        <p className="border w-[26%] absolute top-[8%] left-[40%] text-center">
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>

        {/* <div className="">
          <h2>Timeline</h2>
          <p >
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
          <div className="">
            <div className="lines"></div>
            <div className=""></div>
          </div>
        </div> */}

        <img src={Timeline} alt="" />
      </div>

      <Detail
        addClassname={"border-y"}
        image={cup}
        imageDiv={""}
        imageClass={""}
        heading={"Prizes and"}
        spanHead={"Rewards"}
        titleClass={""}
        textContent={
          <div>
            <img src={Rewards} alt="" />
          </div>
        }
        extraText={
          "Highlight of the prizes of rewards for winners and for participants."
        }
        class_sect={"items-center gap-[3rem] relative top-[-40px]"}
        nextClass={"md:w-[65%]"}
      />

      <Detail
        addClassname={"flex-col-reverse md:flex-col-reverse"}
        image={sponsors}
        imageDiv={"md:w-full"}
        imageClass={""}
        heading={"Partners and Sponsors"}
        spanHead={""}
        titleClass={""}
        textContent={<div>{/* <img src={Rewards} alt="" /> */}</div>}
        extraText={
          "Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors"
        }
        class_sect={"md:w-full gap-0 items-center"}
        nextClass={"md:w-[45%] items-center text-center leading-[27.5px]"}
      />

      <Detail
        addClassname={"border-y md:flex-row-reverse justify-end relative"}
        image={privacy}
        extraImage={
          <div className="relative bottom-[15%]">
            <img src={privacyShield} alt="" />
          </div>
        }
        extraImgClass={""}
        imageDiv={"relative flex-col items-center"}
        imageClass={"absolute bottom-0 left-0 w-[90%]"}
        heading={"Privacy Policy and"}
        spanHead={"Terms"}
        titleClass={""}
        textContent={
          <div className="flex flex-col gap-8">
            <p>
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>

            <div className="flex flex-col gap-7">
              <div className="">
                <h3 className="font-bold text-pink-500">Licensing Policy</h3>
                <p className="">Here are terms of our Standard License:</p>
              </div>

              <ul className="flex flex-col gap-4">
                <li className="flex gap-[3%]">
                  <img src={listTerms} alt="" />{" "}
                  <p>
                    The Standard License grants you a non-exclusive right to
                    navigate and register for our event
                  </p>
                </li>

                <li className="flex gap-[3%]">
                  <img src={listTerms} alt="" />{" "}
                  <p>
                    The Standard License grants you a non-exclusive right to
                    navigate and register for our event
                  </p>
                </li>
              </ul>
            </div>

            <div className="button flex justify-center">
              {" "}
              <ClickButton
                message={"Read more"}
                buttonLocation={""}
                className={"justify-center w-1/2"}
              />
            </div>
          </div>
        }
        textClass={
          "items-start border border-pink-500 rounded[4px] p-[10%] bg-[white] bg-opacity-[10%]"
        }
        extraText={
          <div className="flex flex-col gap-5">
            <small>Last updated on September 12, 2023</small>
            <p className="w-[80%]">
              Below are our privacy & policy, which outline a lot of goodies.
              it's our aim to always take of our participant
            </p>
          </div>
        }
        class_sect={"justify-between relative gap-[4rem]"}
      />

      <footer className="flex flex-col gap-9 p-8 bg-[#100B20]">
        <div className="flex flex-col md:flex-row gap-[10%]">
          {" "}
          <div className="md:w-1/2 flex md:flex-col gap-9 items-center">
            <div className="flex flex-col gap-3 w-[85%] h-full justify-between">
              <div className="">
                <img src={getLinked} alt="" className="" />
              </div>

              <p className="">
                Getlinked Tech Hackathon is a technology innovation program
                established by a group of organizations with the aim of
                showcasing young and talented individuals in the field of
                technology
              </p>

              <div className="">
                <img src={termsOfUse} alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:w-1/2 font-[500] justify-between gap-4 px-5">
            <div className="flex flex-col justify-between w-1/2">
              <ul className="flex flex-col gap-1">
                <p className="text-[#D434FE]">Useful Links</p>

                <li>Overview</li>
                <li>Timeline</li>
                <li>FAQs</li>
                <li>Register</li>
              </ul>

              <div className="flex gap-3 items-center">
                {" "}
                <p className="text-[#D434FE]">Follow us</p>
                <div className="flex gap-2">
                  <FaInstagram />
                  <BsTwitterX />
                  <FaFacebookF />
                  <FaLinkedinIn />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 w-1/2 px-5">
              <p className="text-[#D434FE]">Contact us</p>

              <div className="flex flex-col gap-2">
                <div className="flex gap-3 ">
                  <LuPhoneCall className="h-full w-[8%]" />

                  <p>+234 679 81819</p>
                </div>

                <div className="flex gap-3 ">
                  <FaLocationDot className="h-full w-[8%]" />

                  <p className="text-center">
                    27,Alara Street Yaba 100012 Lagos State
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center leading-[14.63px] font-[400] ">
          All rights reserved. © getlinked Ltd.
        </p>
      </footer>
    </div>
  );
}
