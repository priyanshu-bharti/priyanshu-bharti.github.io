import React from "react";
import { projects } from "../data/Project";

export default function ProjectRenderer() {
  const url = "project-1.png";
  const [active, setActive] = React.useState(0);

  const handleNext = () => {
    if (active !== projects.length - 1) {
      setActive((active + 1) % projects.length);
    }
  };
  const handlePrev = () => {
    if (active !== 0) {
      setActive((active - 1) % projects.length);
    }
  };

  let list = projects[active].tech.map((item) => <li>{item}</li>);

  return (
    <>
      <div data-aos="fade-in" data-aos-delay="500"  className="col-span-3 flex items-center" >
        <img
          src={`./img/${projects[active].url}`}
          alt="Project Screenshot"
          className="lg:px-0 w-full flex items-center rounded-2xl shadow-2xl"
        />
      </div>
      <div data-aos="fade-in" data-aos-delay="300" className="col-span-2 pl-5 lg:px-0">
        <div className="py-8 h-full flex flex-col gap-4 justify-between">
          {/* Start */}
          <div className="flex justify-between items-center">
            <div>
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-violet-600 font-bold text-xl mr-1">
                {projects[active].sno}
              </span>
              <span className="font-bold text-xl ml-1">
                {projects[active].title}
              </span>
            </div>
            <span className="text-xs py-1 px-2 bg-slate-400 rounded-xl text-white shadow-md shadow-slate-300">
              {projects[active].type}
            </span>
          </div>
          <div>
            <div className="font-medium text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-violet-600 mb-1 mt-4">
              Description
            </div>
            <div className="font-light leading-normal text-sm">
              {projects[active].desc}
            </div>
          </div>
          <div>
            <div className="font-medium text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-violet-600 mb-1 mt-4">
              Technologies Used
            </div>
            <div>
              <ul className="text-sm list-disc ml-4 mb-8">{list}</ul>
            </div>
          </div>
          {/* End */}
          <div className="flex items-center gap-4">
            <div
              className="shadow-xl md:hover:scale-105 transition cursor-pointer p-4 bg-slate-50 hover:bg-white hover:text-purple-700 select-none w-min text-sm font-bold rounded-lg border-slate-600"
              onClick={() => handlePrev()}
            >
              Previous
            </div>
            <div
              className="shadow-xl md:hover:scale-105 transition shadow-purple-200 cursor-pointer p-4 bg-gradient-to-br from-pink-400 to-violet-600 w-fit text-sm select-none font-bold rounded-lg text-white hover:from-slate-600 hover:to-zinc-900"
              onClick={() => handleNext()}
            >
              Next Project
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
