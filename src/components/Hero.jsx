import React from "react";

export default function Hero() {
  return (
    <div className="mt-16 md:mt-0">
      <div className="flex flex-col my-8 text-center md:text-left">
        <h1 className="font-bold text-4xl leading-normal">
          Hello 👋, <br />
          I'm{" "}
          <span className="ml-1 bg-gradient-to-br from-sky-500 to-cyan-400 text-transparent bg-clip-text">
            Priyanshu Bharti
          </span>
        </h1>
        <p className="text-lg font-light mt-5">
          I develop awesome things that live on the <br />
          internet and on your phone
        </p>
      </div>
    </div>
  );
}
