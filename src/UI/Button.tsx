import React from "react";
interface IButton {
  text: string;
}
export default function Button({ text }: IButton) {
  return <button className="button">{text}</button>;
}
