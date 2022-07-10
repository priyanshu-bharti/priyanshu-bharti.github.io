import React from "react";
import EducationFragment from "../components/EducationFragment";
import Title from "../components/Title";
import { education } from "../data/Education";

export default function About() {
  const title = "About Me";
  const description = "A brief introduction about myself.";

  const list = education.map((item) => (
    <EducationFragment
      title={item.title}
      org={item.org}
      year={item.year}
      sno={item.sno}
    />
  ));

  return (
    <section id="about" className="px-5 min-h-screen pt-20 flex items-center">
      <div className="flex-1 md:grid grid-cols-1 gap-5 auto-rows-max max-w-screen-lg mx-auto">
        <div className="lg:px-0">
          <Title title={title} description={description} />
        </div>
        <div data-aos="fade-in" className="text-justify font-light">
          I'm an ardent and dedicated individual seeking a position where I
          could apply the skills that I've accumulated for the benefit of my
          organization whilst following my never-ending quest of exploring the
          computer science domain and its applications in a multitude of areas.
        </div>

        <h4 data-aos="fade-in" data-aos-delay="300" className="text-xl font-bold my-4 text-transparent bg-clip-text bg-gradient-to-br from-teal-500 to-cyan-400">
          My Education
        </h4>
        <div className="grid md:grid-cols-2 gap-8">{list}</div>
      </div>
    </section>
  );
}
