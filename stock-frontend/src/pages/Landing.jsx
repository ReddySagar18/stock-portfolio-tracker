import { Link } from "react-router-dom";

function Landing() {
  return (
    <div style={styles.container}>
      {/* Top Bar */}
      <div style={styles.nav}>
        <h2 style={styles.logo}>stocks and stocks</h2>

        <Link to="/login" style={styles.loginBtn}>
          Login
        </Link>
      </div>

      {/* Hero Section */}
      <div style={styles.hero}>
        <h1 style={styles.title}>
          Smart Stock Portfolio Tracker
        </h1>

        <p style={styles.subtitle}>
          Track your investments, manage your portfolio, and analyze your trading activity in one place.
        </p>

        <div style={styles.ctaBox}>
          <Link to="/register" style={styles.primaryBtn}>
            Register
          </Link>

          <Link to="/login" style={styles.secondaryBtn}>
            Login
          </Link>
        </div>
      </div>

      {/* Feature Section */}
      <div style={styles.features}>
        <div style={styles.card}>
          📊 Portfolio Tracking
        </div>

        <div style={styles.card}>
          💰 Buy & Sell Simulation
        </div>

        <div style={styles.card}>
          📈 Transaction History
        </div>

        <div style={styles.card}>
          🔍 Stock Insights
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#0f172a",
    color: "white",
    fontFamily: "Arial",
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 40px",
    alignItems: "center",
  },

  logo: {
    fontSize: "20px",
    fontWeight: "bold",
  },

  loginBtn: {
    padding: "8px 16px",
    background: "#2563eb",
    color: "white",
    borderRadius: "6px",
    textDecoration: "none",
  },

  hero: {
    textAlign: "center",
    marginTop: "80px",
  },

  title: {
    fontSize: "42px",
    fontWeight: "bold",
  },

  subtitle: {
    marginTop: "10px",
    fontSize: "18px",
    color: "#cbd5e1",
  },

  ctaBox: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },

  primaryBtn: {
    padding: "10px 20px",
    background: "#22c55e",
    color: "white",
    borderRadius: "6px",
    textDecoration: "none",
  },

  secondaryBtn: {
    padding: "10px 20px",
    background: "#334155",
    color: "white",
    borderRadius: "6px",
    textDecoration: "none",
  },

  features: {
    marginTop: "80px",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
    padding: "0 100px",
  },

  card: {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
  },
};

export default Landing;