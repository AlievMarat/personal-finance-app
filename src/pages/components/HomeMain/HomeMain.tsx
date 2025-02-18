import React from "react";
import { HomePots } from "../../components/HomePots/HomePots";
import { HomeTransactions } from "../../components/HomeTransactions/HomeTransactions";
import HomeBudgets from "../HomeBudgets/HomeBudgets";
import { HomeRecurringBills } from "../HomeRecurringBills/HomeRecurringBills";
import Footer from "../Footer/Footer";
import "./homeMain.css";
export function HomeMain() {
  return (
    <main className="home-main">
      <HomePots />
      <HomeTransactions />
      <HomeBudgets />
      <HomeRecurringBills />
      <Footer />
    </main>
  );
}
