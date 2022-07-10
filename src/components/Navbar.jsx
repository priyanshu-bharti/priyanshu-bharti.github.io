import React from "react";

export default function Navbar({ navOpen, setNavOpen }) {
  const menu = (
    <>
      <b> Menu </b>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="20"
        height="20"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z" />
      </svg>
    </>
  );

  const close = (
    <>
      <b> Close </b>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="20"
        height="20"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
      </svg>
    </>
  );
  return (
    <div className="z-20 w-full fixed -translate-x-1/2 left-1/2 top-0 bg-slate-100 bg-opacity-70 backdrop-blur">
      <div className="max-w-screen-lg mx-auto h-16 md:h-20 flex-1 col-span-2 flex justify-between items-center px-4 lg:px-0">
        <p className="font-bold">Priyanshu Bharti</p>
        <ul className="gap-8 font-light hidden md:flex">
          <li>
            <a className="hover:text-sky-600 transition-colors" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-sky-600 transition-colors" href="#tech">
              Tech Stack
            </a>
          </li>
          <li>
            <a className="hover:text-sky-600 transition-colors" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a
              className="hover:text-sky-600 transition-colors"
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a className="hover:text-sky-600 transition-colors" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="hover:text-sky-600 transition-colors" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <div
          className="flex items-center gap-4 md:hidden cursor-pointer select-none"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen === true ? close : menu}
        </div>
      </div>
    </div>
  );
}
