import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

import { FaRegFilePdf } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-16">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic web Magic with next.js
          </h2>

          <div className="flex">
            <TextGenerateEffect
              className="text-center text-[44px] md:text-5xl lg:text-5xl"
              words="Hi, I'm Tanay Chakraborty"
            />
          </div>

          <p className="text-center md:tracking-wider mb-4 text-xl md:text-lg lg:text-xl">
            I am a <span className="text-[#855dda]">Computer Science </span>{" "}
            Engineer currently studying in chandigarh university
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          <div className="my-4">
            <a
              href="./resume.pdf"
              className="block w-44 dark:bg-black-100 text-white text-center rounded-md "
              download
              style={{ textDecoration: "none" }}
            >
              <span className="flex items-center justify-center">
                Resume
                <FaRegFilePdf className="ml-2" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
