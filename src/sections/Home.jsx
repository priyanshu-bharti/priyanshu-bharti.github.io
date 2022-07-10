import React from "react";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <section className="max-w-screen-lg mx-auto w-full pt-20 min-h-screen flex flex-col justify-between px-5 lg:px-0">
      <div data-aos="fade-in" className="flex flex-1 flex-col md:flex-row items-center justify-between gap-4">
        <Hero />
        <div className="">
          <img src="./img/hero-img.svg" className="h-72" alt="Avatar" />
        </div>
      </div>
      <div data-aos="fade-in" data-aos-delay="100" className="flex py-8 justify-center md:justify-start items-center gap-4">
        <a target="_blank" href="https://www.linkedin.com/in/priyanshubharti" className="fill-slate-600 md:hover:scale-110 md:transition md:hover:fill-sky-400" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="h-10 w-10"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 0 1-1.548-1.549 1.548 1.548 0 1 1 1.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" />
          </svg>
        </a>

        <a target="_blank" href="https://www.github.com/priyanshu-bharti" className="fill-slate-600 md:hover:scale-110 md:transition md:hover:fill-sky-400" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="h-10 w-10"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z" />
          </svg>
        </a>

        <a href="./img/Priyanshu_Bharti_Resume.pdf" className="">
          <div className="shadow-xl shadow-sky-200 cursor-pointer text-white p-4 bg-gradient-to-br from-sky-500 to-cyan-400 md:hover:scale-105 transition md:hover:from-slate-600 md:hover:to-zinc-900 rounded-xl ">
            Download Resume
          </div>
        </a>
      </div>
    </section>
  );
}
