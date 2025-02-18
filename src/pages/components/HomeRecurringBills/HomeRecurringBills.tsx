import React from "react";
import { SmallServiceTitle } from "../../../UI/SmallServiceTitle";
import { useTypedSelector } from "../../../customHooks/useTypedSelector";
import "../HomeRecurringBills/homeRecccuringBills.css";
import HomeReccuringItem from "./HomeReccuringItem";
export function HomeRecurringBills() {
  const reccuringBills = useTypedSelector((state) => state.board.data.pots);
  return (
    <section className="home-reccuring-bills">
      <div className="home-reccuring-bills__container">
        <SmallServiceTitle title="Recurring Bills" route="/recurring bills" />
        <div className="home-reccuring-bills__wrapper">
          {reccuringBills.slice(0, 3).map((bill) => (
            <HomeReccuringItem
              theme={bill.theme}
              total={bill.total}
              name={bill.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
