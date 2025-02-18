import React from "react";
import { SmallServiceTitle } from "../../../UI/SmallServiceTitle";
import Diogram from "../../../UI/Diogram";
import { MicroGraphicContainer } from "../MicroGraphicContainer";
import "../HomeBudgets/budgets.css";
import { useTypedSelector } from "../../../customHooks/useTypedSelector";
export default function HomeBudgets() {
  const budgets = useTypedSelector((state) => state.board.data.budgets);
  return (
    <section className="budgets">
      <div className="budgets__container">
        <SmallServiceTitle title="Budgets" route="/budgets" />
        <div className="budgets__wrapper">
          <Diogram />
          <MicroGraphicContainer data={budgets} />
        </div>
      </div>
    </section>
  );
}
