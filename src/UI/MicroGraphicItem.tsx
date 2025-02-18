import React from "react";
import "./microGraph.css";

export function MicroGraphicItem(props: Record<string, any>) {
  const keys = Object.keys(props);

  // Ищем ключ с цветом
  const colorKey = keys.find((k) => k.includes("theme"));
  const backgroundColor = colorKey && props[colorKey];

  return (
    <div className="micro-graph--item">
      <div className="micro-graph--color" style={{ backgroundColor }}></div>
      <div className="micro-graph__info">
        <div className="micro-graph--title">{props[keys[0]]}</div>
        <div className="micro-graph--target">{props[keys[1]]}</div>
      </div>
    </div>
  );
}
