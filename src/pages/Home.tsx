import Header from "./Header/Header";
import { useTypedSelector } from "../customHooks/useTypedSelector";
import { Summary } from "./components/Summary/Summary";
import { HomeMain } from "./components/HomeMain/HomeMain";
import Footer from "./components/Footer/Footer";
import "./home.css";
export function Home() {
  const { balance } = useTypedSelector((state) => state.board.data);
  return (
    <div className="home">
      <div className="container">
        <Header title="Overview" />
        <section className="summary">
          {Object.entries(balance).map(([title, balance]) => (
            <Summary key={title} title={title} balance={balance} />
          ))}
        </section>
        <HomeMain />
      </div>
      <Footer />
    </div>
  );
}
