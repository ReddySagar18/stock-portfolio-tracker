import Navbar from "../components/Navbar";

function TrendingStocks() {
  const stocks = [
    { symbol: "AAPL", price: 214.25, change: "+1.5%" },
    { symbol: "MSFT", price: 510.30, change: "+0.8%" },
    { symbol: "NVDA", price: 180.15, change: "+2.3%" },
    { symbol: "TSLA", price: 325.40, change: "-1.2%" },
    { symbol: "GOOGL", price: 195.20, change: "+0.6%" },
    { symbol: "AMZN", price: 240.10, change: "+1.1%" },
  ];

  const longTermStocks = [
    { symbol: "INFY", name: "Infosys" },
    { symbol: "TCS", name: "Tata Consultancy Services" },
    { symbol: "RELIANCE", name: "Reliance Industries" },
    { symbol: "HDFCBANK", name: "HDFC Bank" },
    { symbol: "ICICIBANK", name: "ICICI Bank" },
    { symbol: "LT", name: "Larsen & Toubro" },
  ];

  return (
    <div style={styles.container}>
      <Navbar />

      <h1 style={styles.heading}>
        Trending Stocks
      </h1>

      {/* ✅ NEW BLOCK */}
      <div style={styles.longBox}>
        <h3>📊 Long Term Picks</h3>

        <div style={styles.longGrid}>
          {longTermStocks.map((s) => (
            <div key={s.symbol} style={styles.longCard}>
              <strong>{s.symbol}</strong>
              <p>{s.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* EXISTING TRENDING GRID */}
      <div style={styles.grid}>
        {stocks.map((stock) => (
          <div key={stock.symbol} style={styles.card}>
            <h2>{stock.symbol}</h2>

            <p>₹ {stock.price}</p>

            <p
              style={{
                color: stock.change.includes("-")
                  ? "#ef4444"
                  : "#22c55e",
              }}
            >
              {stock.change}
            </p>
          </div>
        ))}
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

  heading: {
    marginBottom: "20px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },

  card: {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
  },
  longBox: {
  background: "#1e293b",
  padding: "15px",
  borderRadius: "12px",
  marginBottom: "20px",
},

longGrid: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
  gap: "10px",
  marginTop: "10px",
},

longCard: {
  background: "#0f172a",
  padding: "10px",
  borderRadius: "10px",
  textAlign: "center",
  color: "#cbd5e1",
},
};

export default TrendingStocks;