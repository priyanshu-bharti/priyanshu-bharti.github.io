import React from "react";

export default function EducationFragment({sno, title, org, year}) {
  return (
    <>
      <div data-aos="fade-in" data-aos-delay="500" className="flex shadow-lg shadow-slate-200 rounded-2xl md:hover:bg-white md:hover:scale-105 transition bg-slate-50  p-4">
        <div className="text-transparent bg-clip-text bg-gradient-to-br from-teal-500 to-cyan-400 font-bold text-6xl mr-4">
          {sno}
        </div>
        <div className="">
          <h5 className="font-bold">{title}</h5>
          <p className="text-sm">{org}</p>
          <p className="font-light text-sm opacity-50">{year}</p>
        </div>
      </div>
    </>
  );
}
