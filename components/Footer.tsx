"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import { BackgroundGradientDemo } from "./BackgroundGradientDemo";

const Footer = () => {
  return (
    <footer className="w-full  pb-10 mb-[100px] md:mb-1" id="contact">
      <div className="flex flex-col ">
        <div className="flex flex-col items-center mb-7">
          <h1 className="heading lg:max-w-[45vw]">
            Ready to take <span className="text-purple">your</span> digital
            presence to the next level?
          </h1>
          <p className="text-white-200 md:mt-10 my-5 text-center">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>
        </div>
        <div className="flex gap-0">
          <div className="flex-none w-[60%]">
            <div className="sm:w-[165%] w-[160%] mx-auto">
              <BackgroundGradientDemo />
            </div>
          </div>
          <div className="flex-1">
            <div className="pt-5 w-[90%]">
              <img
                src="./3dimg.png"
                alt="Coding"
                className="object-fill rounded-2xl"
              />
            </div>
          </div>
        </div>

        <a href="mailto:tanaywork56@gmail.com" className="sm:mt-6 md:mt-2">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-xl md:font-normal font-light text-purple ">
          Lets Connect on -
        </p>

        <div className="flex items-center md:gap-3 gap-6 ">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 sm:mt-4"
            >
              <a href={info.link} target="_blank" rel="noopener noreferrer">
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;