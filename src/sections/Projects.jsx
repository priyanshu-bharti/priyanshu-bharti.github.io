import React from "react";
import ProjectRenderer from "../components/ProjectRenderer";
import Title from "../components/Title";

export default function Projects() {
  return (
    <section className="min-h-screen pt-16 pb-16 md:grid place-items-center " id="projects">
      <div className="w-full md:grid gap-10 md:grid-cols-5 auto-rows-max max-w-screen-lg mx-auto px-5 lg:px-0">
        <div className="col-span-5 lg:px-0">
          <Title
            title="Key Projects"
            description="Where I have put my skills to the test"
          />
        </div>
        <ProjectRenderer />
      </div>
    </section>
  );
}
