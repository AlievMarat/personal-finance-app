import { SmallServiceTitle } from "../../../UI/SmallServiceTitle";
import "./hometransactions.css";
import { HomeTransactionsCard } from "../HomeTransactions/HomeTransactionCard";
import { useTypedSelector } from "../../../customHooks/useTypedSelector";
export function HomeTransactions() {
  const transactions = useTypedSelector(
    (state) => state.board.data.transactions
  );
  return (
    <div className="home-transactions">
      <div className="home-transactions__container">
        <SmallServiceTitle
          title="Transactions"
          route="/transactions"
          linkTitle="View All"
        />
        <div className="home-transactions__cards">
          {transactions
            .slice(0, 4)
            .map(({ name, avatar, date, amount }, index) => (
              <HomeTransactionsCard
                key={index}
                name={name}
                avatar={avatar}
                date={date}
                amount={amount}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
