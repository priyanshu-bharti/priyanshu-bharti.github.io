import React from "react";
import Title from "../components/Title";
import Footer from "../components/Footer";

export default function Contact() {
  const title = "Get in Touch";
  const description =
    "I'm open to and looking for opportunities for showcasing my skills and making a contribution by providing value.";

  return (
    <section
      className="px-5 flex flex-col min-h-screen pt-20 justify-center text-center"
      id="contact"
    >
      <div className="grid place-items-center mt-auto gap-5">
        <img data-aos="fade in" className="h-64" src="./img/contact-img.svg" alt="" />

        <h2 data-aos="fade left" data-aos-delay="500" className="text-3xl font-bold">{title}</h2>
        <p data-aos="fade right" data-aos-delay="700" className="font-light">{description}</p>
        
        <a data-aos="fade in" data-aos-delay="900" href="mailto:priyanshub25@gmail.com">
          <div className="shadow-xl shadow-pink-200 font-bold cursor-pointer text-white p-4 bg-gradient-to-br from from-pink-500 to-red-400 hover:from-slate-600 hover:to-zinc-900 md:hover:scale-105 transition rounded-xl w-fit">
            Send Message
          </div>
        </a>
      </div>
      <Footer />
    </section>
  );
}
