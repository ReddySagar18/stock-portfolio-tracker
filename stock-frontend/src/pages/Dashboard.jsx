import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import StatsCards from "../components/StatsCards";
import GoalTracker from "../components/GoalTracker";
import AddStock from "../components/AddStock";
import PortfolioTable from "../components/PortfolioTable";
import TransactionTable from "../components/TransactionTable";

import {
  fetchPortfolio,
  fetchTransactions,
} from "../services/api";

function Dashboard({ setPage }) {
  const [portfolio, setPortfolio] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [goalAmount, setGoalAmount] = useState(1000000);

  const loadData = async () => {
    const portfolioData =
      await fetchPortfolio();

    const transactionData =
      await fetchTransactions();

    setPortfolio(
      portfolioData.data || []
    );

    setTransactions(
      transactionData.data || []
    );
  };

  useEffect(() => {
    loadData();
  }, []);

  const logoutUser = () => {
    localStorage.removeItem("token");
    setPage("login");
  };

  const totalInvestment =
    portfolio.reduce(
      (sum, stock) =>
        sum +
        stock.quantity *
          stock.buy_price,
      0
    );

  const totalStocks =
    portfolio.length;

  const transactionCount =
    transactions.length;

  return (
    <div className="container">
      <Navbar
        logoutUser={logoutUser}
      />

      <StatsCards
        totalInvestment={
          totalInvestment
        }
        totalStocks={totalStocks}
        transactionCount={
          transactionCount
        }
      />

      <GoalTracker
        goalAmount={goalAmount}
        setGoalAmount={
          setGoalAmount
        }
        totalInvestment={
          totalInvestment
        }
      />

      <AddStock
        refreshData={loadData}
      />

      <PortfolioTable
        portfolio={portfolio}
        refreshData={loadData}
      />

      <TransactionTable
        transactions={
          transactions
        }
      />
    </div>
  );
}

export default Dashboard;