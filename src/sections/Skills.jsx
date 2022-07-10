import React from "react";
import SkillRow from "../components/SkillRow";
import Title from "../components/Title";
import { rowOne, rowTwo } from "../data/PersonalSkills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen pt-16 relative pb-16 md:grid md:grid-rows-5 place-items-center overflow-hidden"
    >
      <div className="max-w-screen-lg mx-auto row-span-2 w-full px-5 lg:px-0">
        <Title
          title="Personal Skills"
          description="Variety of soft-skills I've accumulated thus far."
        />
      </div>
      <div className="px-4 md:px-0 grid gap-5 off-bounds md:absolute md:-translate-x-1/2 md:-translate-y-1/2 md:left-1/2 md:top-2/4 pt-16 ">
        <div className="md:-translate-x-10 pl-20 ">
          <SkillRow data={rowOne} scroll="fwd" />
        </div>
        <div className="md:translate-x-10 pr-20 ">
          <SkillRow data={rowTwo} scroll="rev" />
        </div>
      </div>
    </section>
  );
}
