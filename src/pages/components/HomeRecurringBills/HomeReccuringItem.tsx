import React from "react";
import "../HomeRecurringBills/homeRecccuringBills.css";
interface IReccuringData {
  theme: string;
  name: string;
  total: number;
}
export default function HomeReccuringItem({
  theme,
  name,
  total,
}: IReccuringData) {
  return (
    <div className="reccuring-item" style={{ borderLeft: `3px solid${theme}` }}>
      <div className="reccuring-item__info">
        <div className="reccuring-item__name">{name}</div>
      </div>
      <div className="reccuring-item__total">{`$${total}`}</div>
    </div>
  );
}
