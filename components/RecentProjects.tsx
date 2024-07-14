"use client";

import { projects } from "@/data";
import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "./ui/3d-pin";

const RecentProjects = () => {
  return (
    <div className="py-16" id="projects">
      <h1 className="heading">
        My Work On Some <span className="text-purple">recent projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24  mt-10 ">
        {projects.map((item) => (
          <div
            className=" sm:h-[34rem]  lg:min-h-[24rem] h-[25rem]  flex items-center justify-center sm:w-[460px] w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.name}>
              <div className="relative flex items-center justify-center sm:w-[460px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh]  mb-10">
                <div
                  className="relative w-full h-full overflow-hidden rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  className="z-10 absolute bottom-0 rounded-xl w-[85%] h-[35vh] rotate-2"
                  src={item.img}
                  alt="cover"
                />
              </div>

              <h1 className="font-bold lg:text-xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <a href={item.name} className="flex" target="_blank">
                    <p className="flex  md:text-xs text-sm text-purple">
                      Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </a>
                </div>
                <div className="flex justify-center items-center">
                  <a href={item.link} className="flex">
                    <p className="flex  md:text-xs text-sm text-purple">
                      GitHUB
                    </p>
                  </a>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
