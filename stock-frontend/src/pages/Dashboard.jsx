import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

function Dashboard() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    // simple fallback username logic
    if (token) {
      setUsername("Trader");
    }
  }, []);

  return (
    <div style={styles.container}>
      <Navbar />

      {/* HEADER */}
      <div style={styles.header}>
        <h1>Welcome, {username} 📊</h1>
        <p>Track your portfolio and grow your investments</p>
      </div>

      {/* CARDS */}
      <div style={styles.grid}>
        <div style={styles.card}>
          <h3>Portfolio Value</h3>
          <p>₹ 0.00</p>
        </div>

        <div style={styles.card}>
          <h3>Total Transactions</h3>
          <p>0</p>
        </div>

        <div style={styles.card}>
          <h3>Today's Profit/Loss</h3>
          <p>₹ 0.00</p>
        </div>
      </div>

      {/* ACTIONS */}
      <div style={styles.actions}>
        <div style={styles.actionCard}>
          📈 Go to Buy / Sell
        </div>

        <div style={styles.actionCard}>
          🔥 View Trending Stocks
        </div>

        <div style={styles.actionCard}>
          📊 Check Portfolio
        </div>
      </div>

      {/* ACTIVITY */}
      <div style={styles.activity}>
        <h3>Recent Activity</h3>
        <p>No transactions yet</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#0f172a",
    color: "white",
    padding: "20px",
  },

  header: {
    marginBottom: "20px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "15px",
    marginBottom: "20px",
  },

  card: {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "center",
  },

  actions: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "15px",
    marginBottom: "20px",
  },

  actionCard: {
    background: "#334155",
    padding: "15px",
    borderRadius: "10px",
    textAlign: "center",
    cursor: "pointer",
  },

  activity: {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "12px",
  },
};

export default Dashboard;
