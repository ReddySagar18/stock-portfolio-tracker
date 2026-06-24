import { useState } from "react";
import Navbar from "../components/Navbar";

function BuySell() {
  const [symbol, setSymbol] = useState("");
  const [quantity, setQuantity] = useState("");
  const [action, setAction] = useState("BUY");

 const [stock, setStock] = useState({
  symbol: "",
  price: 0,
});
async function searchStock() {
  try {
    const response = await fetch(
      `https://finnhub.io/api/v1/quote?symbol=${symbol.toUpperCase()}&token=d8sl9jhr01qh5reru8jgd8sl9jhr01qh5reru8k0`
    );

    const data = await response.json();

    setStock({
      symbol: symbol.toUpperCase(),
      price: data.c,
    });
  } catch (error) {
    console.error(error);
    alert("Failed to fetch stock price");
  }
}

  return (
    <div style={styles.container}>
      <Navbar />

      <h1 style={styles.heading}>
        Buy / Sell Stocks
      </h1>

      <div style={styles.card}>
        <input
          type="text"
          placeholder="Enter Stock name"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          style={styles.input}
        />

       <button
  style={styles.searchButton}
  onClick={searchStock}
>
  Search
</button>
      </div>

      <div style={styles.card}>
        <h2>
  {stock.symbol || "Stock Symbol"}
</h2>

        <p>
          Current Price: ₹{stock.price || 0}
        </p>
      </div>

      <div style={styles.card}>
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          style={styles.input}
        />

        <div style={styles.actionContainer}>
          <button
            onClick={() => setAction("BUY")}
            style={{
              ...styles.actionButton,
              background:
                action === "BUY"
                  ? "#16a34a"
                  : "#334155",
            }}
          >
            BUY
          </button>

          <button
            onClick={() => setAction("SELL")}
            style={{
              ...styles.actionButton,
              background:
                action === "SELL"
                  ? "#dc2626"
                  : "#334155",
            }}
          >
            SELL
          </button>
        </div>
      </div>      <div style={styles.card}>
        <h3>Trade Summary</h3>

        <p>
  Stock: {stock.symbol || "-"}
</p>

        <p>Action: {action}</p>

        <p>Quantity: {quantity || 0}</p>

        <p>
          Total: ₹
          {(quantity || 0) * (stock.price || 0)}
        </p>
      </div>

      <button
        style={{
          ...styles.executeButton,
          background:
            action === "BUY"
              ? "#16a34a"
              : "#dc2626",
        }}
      >
        Execute Trade
      </button>
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

  card: {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "20px",
  },

  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    marginBottom: "10px",
    boxSizing: "border-box",
  },

  searchButton: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },

  actionContainer: {
    display: "flex",
    gap: "10px",
  },

  actionButton: {
    flex: 1,
    color: "white",
    border: "none",
    padding: "12px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  executeButton: {
    width: "100%",
    color: "white",
    border: "none",
    padding: "15px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
  },
};

export default BuySell;
