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
import theBigIdea from "../../assets/images/The big idea.svg";
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
    <div className="h-full">
      <img src={line1} alt="" className="border-b" />

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

        <div className="flex flex-col md:flex-row relative">
          <img
            src={flare1}
            alt=""
            className="absolute bottom-0 opacity-[50%]"
          />

          <div className="md:w-1/2">
            <div className="p-5 md:p-0 flex flex-col gap-5 justify-center items-center md:items-start md:relative md:left-[18%] ">
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
                    className="absolute top-[6%] right-0 opacity-[75%]"
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
                    className={"cursor-pointer"}
                  />
                  {/* </div> */}
                </div>
              </div>

              <div className="md:my-4 w-[291px] h-[85px]">
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
                src={idea}
                alt=""
                className="w-[83%] absolute bottom-[13%] left-[9%] "
              />

              <img
                src={smartGlass}
                alt=""
                className="border border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      <Detail
        addClassname={"border-b"}
        image={theBigIdea}
        imageDiv={"p-[5%]"}
        imageClass={""}
        heading={" Introduction to getlinked"}
        spanHead={"tech Hackathon 1.0"}
        titleClass={"border"}
        textContent={`Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!`}
      />

      <Detail
        addClassname={"md:flex-row-reverse md:h-[664px] border-b"}
        image={rulesImage}
        imageDiv={"md:relative items-center"}
        imageClass={"md:absolute top-[-52px] md:w-[664px] md:h-[664px]"}
        heading={"Rules and"}
        spanHead={"Guidelines"}
        titleClass={"border"}
        textContent={`Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!`}
        textClass={""}
      />

      <Detail
        addClassname={"border-b py-[35px] md:py-0"}
        image={keyAttributes}
        imageDiv={""}
        imageClass={""}
        heading={"Judging Criteria"}
        spanHead={" Key attributes"}
        titleClass={"border"}
        textContent={
          <div className="flex flex-col gap-5">
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
      />

      <Detail
        addClassname={"md:flex-row-reverse md:px-[10%] border-b"}
        image={questions}
        imageDiv={""}
        imageClass={""}
        heading={"Frequently Ask"}
        spanHead={"Question"}
        titleClass={"border"}
        textContent={
          <div className="flex flex-col gap-5">
            <div className="w-[75%]">
              We got answers to the questions that you might want to ask about{" "}
              <span>getlinked Hackathon 1.0</span>{" "}
            </div>

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
              questions={"What happens if I don't have an idea for a project?"}
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
        }
      />

      <div className="timeline relative flex justify-center p-[5%]">
        <p className="border w-[26%] absolute top-[8%] left-[40%] text-center">
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>

        <div className="">
          <h2>Timeline</h2>
          <p>
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
          <div className="">
            <div className="lines"></div>
            <div className=""></div>
          </div>
        </div>
        <img src={Timeline} alt="" />
      </div>

      <Detail
        addClassname={"border-y"}
        image={cup}
        imageDiv={""}
        imageClass={""}
        heading={"Prizes and"}
        spanHead={"Rewards"}
        titleClass={"border"}
        textContent={
          <div>
            <img src={Rewards} alt="" />
          </div>
        }
        extraText={
          "Highlight of the prizes of rewards for winners and for participants."
        }
        class_sect={"items-center relative top-[-40px]"}
        nextClass={"md:w-[65%]"}
      />

      <Detail
        addClassname={"flex-col-reverse md:flex-col-reverse"}
        image={sponsors}
        imageDiv={"md:w-full border"}
        imageClass={""}
        heading={"Partners and Sponsors"}
        spanHead={""}
        titleClass={"border "}
        textContent={<div>{/* <img src={Rewards} alt="" /> */}</div>}
        extraText={
          "Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors"
        }
        class_sect={"border md:w-full gap-0 items-center"}
        nextClass={"md:w-[45%] items-center text-center leading-[27.5px]"}
      />

      <Detail
        addClassname={"border-y md:flex-row-reverse justify-end"}
        image={privacy}
        extraImage={privacyShield}
        imageDiv={"flex-col relative"}
        imageClass={"relative w-[75%]"}
        heading={"Privacy Poliicy and"}
        spanHead={"Terms"}
        titleClass={"border"}
        textContent={
          <div className="flex flex-col gap-8 border">
            <p>
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>

            <div className="flex flex-col gap-5">
              <div className="">
                <h3 className="">Licensing Policy</h3>
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

            <ClickButton
              message={"Read more"}
              buttonLocation={""}
              className={"justify-center"}
            />
          </div>
        }
        textClass={"items-start"}
        extraText={
          <div className="flex flex-col gap-5">
            <small>Last updated on September 12, 2023</small>
            <p className="w-[80%]">
              Below are our privacy & policy, which outline a lot of goodies.
              it's our aim to always take of our participant
            </p>
          </div>
        }
        class_sect={"justify-between"}
      />

      <footer className="flex flex-col gap-5 p-8 border">
        <div className="flex">
          {" "}
          <div className="md:w-1/2 border flex md:flex-col gap-9">
            <div className="flex flex-col gap-3">
              <div className="">
                <img src={getLinked} alt="" className="" />
              </div>

              <p>
                Getlinked Tech Hackathon is a technology innovation program
                established by a group of organizations with the aim of
                showcasing young and talented individuals in the field of
                technology{" "}
              </p>
            </div>

            <div className="">
              <img src={termsOfUse} alt="" />
            </div>
          </div>
          <div className="flex w-1/2 border font-semibold">
            <div className="flex flex-col justify-between">
              <ul className="flex flex-col gap-1">
                <p className="text-[#D434FE]">Useful Links</p>

                <li>Overview</li>
                <li>Timeline</li>
                <li>FAQs</li>
                <li>Register</li>
              </ul>

              <div className="flex gap-2 items-center">
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

            <div className=""></div>
          </div>
        </div>

        <p className="text-center leading-[14.63px] font-[400] ">
          All rights reserved. © getlinked Ltd.
        </p>
      </footer>
    </div>
  );
}