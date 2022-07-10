import React from "react";

export default function Card({ title, desc, src, alt, list, grad, sh }) {
  const List = list.map((item) => <li>{item}</li>);
  

  return (
    <div data-aos="fade-in" data-aos-delay="300" className={`shadow-xl md:hover:scale-105 bg-slate-50 transition-transform rounded-lg overflow-hidden flex flex-col mb-5 md:mb-0`}>
      <div className={`py-8 bg-gradient-to-br ${grad}`}>
        <img src={"./img/" + src} alt={alt} className="glyph" />
      </div>
      <div className="p-5 flex flex-col items-center">
        <div className="font-bold text-center">{title}</div>
        <div className="font-light text-sm my-4 text-center">{desc}</div>
        <div>
          <ul className="text-sm leading-normal font-medium list-disc">
            {List}
          </ul>
        </div>
      </div>
    </div>
  );
}
