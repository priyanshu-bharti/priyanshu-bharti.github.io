import React from "react";
import Footer from "./components/Footer";
import MobileNavigation from "./components/MobileNavigation";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Tech from "./sections/Tech";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  const [navOpen, setNavOpen] = React.useState(false);

  React.useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);

  return (
    <main
      id="home"
      className="master-grid grid text-slate-600 relative "
    >
      <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />
      {navOpen === true ? <MobileNavigation /> : <></>}
      <Home />
      <Tech />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
