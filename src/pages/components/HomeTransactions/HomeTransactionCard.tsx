import React from "react";
import "./hometransactions.css";
interface IHomeTransactionsCard {
  key: number;
  avatar: string;
  name: string;
  date: string;
  amount: number;
}
export function HomeTransactionsCard({
  avatar,
  name,
  date,
  amount,
}: IHomeTransactionsCard) {
  const isAmountTrue = String(amount).includes("-");
  const userDate = new Date(date);
  const month = userDate.toLocaleString("en-US", { month: "short" });
  const fullDate = `${userDate.getDate()} ${month} ${userDate.getFullYear()}`;
  return (
    <>
      <div className="home-transactions__card">
        <div className="home-transactions__user">
          <img className="home-transactions__avatar" src={`src/${avatar}`} />
          <p className="home-transactions__name">{name}</p>
        </div>
        <div className="home-transactions__info">
          <p
            className={
              isAmountTrue
                ? "home-transactions__amount"
                : "home-transactions__amount--green"
            }
          >{`${!isAmountTrue ? "+" : ""}${amount}$`}</p>
          <p className="home-transactions__date">{fullDate}</p>
        </div>
        <hr />
      </div>
    </>
  );
}
