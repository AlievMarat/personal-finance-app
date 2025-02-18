import React from "react";
import { useTypedSelector } from "../../customHooks/useTypedSelector";
import { MicroGraphicItem } from "../../UI/MicroGraphicItem";
import "../../UI/microGraph.css";

interface IData {
  data: { [key: string]: any }[];
}

export function MicroGraphicContainer({ data }: IData) {
  return (
    <div className="micro-graph--container">
      {data.slice(0, 4).map((item, index) => (
        <MicroGraphicItem key={index} {...item} />
      ))}
    </div>
  );
}
