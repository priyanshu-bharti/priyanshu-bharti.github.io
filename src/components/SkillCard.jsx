import React from "react";

export default function SkillCard({ sno, title, grad }) {
  return (
    <div
      data-aos="fade-in"
      data-aos-delay="300"
      className={`rounded-xl shadow-lg flex md:flex-col gap-4 items-center md:items-start bg-slate-50 min-w-fit p-4 md:hover:scale-105 md:hover:shadow-xl md:hover:bg-white md:hover:transition`}
    >
      <div
        className={`p-3 bg-gradient-to-br ${grad} w-min text-white text-xs rounded-lg font-bold shadow-md`}
      >
        {sno}
      </div>
      <div className="xl:px-10 mb-4 lg:px-8 text-sm font-medium text-center ">
        {title}
      </div>
    </div>
  );
}
