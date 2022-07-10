import React from "react";
import SkillCard from "./SkillCard";

export default function SkillRow({ data, scroll }) {
  const list = data.map((item) => (
    <SkillCard sno={item.sno} title={item.title} grad={item.grad} />
  ));

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-5 gap-5 ${scroll}`}
    >
      {list}
    </div>
  );
}
