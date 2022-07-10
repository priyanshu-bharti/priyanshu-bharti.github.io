import React from "react";
import Card from "../components/Card";
import Title from "../components/Title";
import { cards } from "../data/Card";

export default function Tech() {
  const title = "Tech Stack";
  const description =
    "Tools and technologies which I utilize to build awesome things.";

  const Cards = cards.map((card, index) => (
    <Card
      title={card.title}
      src={card.src}
      alt={card.alt}
      desc={card.desc}
      list={card.list}
      grad={card.grad}
      key={index}
      sh={card.sh}
    />
  ));
  return (
    <section id="tech" className="px-5 min-h-screen grid place-items-center pt-16">
      <div className="md:grid grid-cols-4 gap-5 auto-rows-max max-w-screen-lg mx-auto">
        <div className="col-span-4">
          <Title title={title} description={description} />
        </div>
        {Cards}
      </div>
    </section>
  );
}
