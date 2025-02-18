import React from "react";
import { useTypedSelector } from "../customHooks/useTypedSelector";
import Header from "./Header/Header";
import Button from "../UI/Button";
export default function Pots() {
  const pots = useTypedSelector((state) => state.board.data.pots);
  return (
    <>
      <Header title="Pots">
        <Button text="+ Add New Pot" />
      </Header>
      <section className="pots"></section>
    </>
  );
}
