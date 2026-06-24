import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Portfolio() {
  const [portfolio, setPortfolio] = useState([]);

  async function fetchPortfolio() {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:5000/portfolio", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      setPortfolio(data.data || []);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchPortfolio();
  }, []);

  async function handleDelete(id) {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:5000/portfolio", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id }),
      });

      const data = await response.json();

      alert(data.message);

      fetchPortfolio();
    } catch (error) {
      console.error(error);
      alert("Delete failed");
    }
  }

  return (
    <div style={styles.container}>
      <Navbar />

      <h2 style={styles.title}>My Portfolio</h2>

      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Stock</th>
              <th>Quantity</th>
              <th>Buy Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {portfolio.map((stock) => (
              <tr key={stock.id}>
                <td>{stock.stock_name}</td>
                <td>{stock.quantity}</td>
                <td>{stock.buy_price}</td>
                <td>
                  <button
                    style={styles.deleteBtn}
                    onClick={() => handleDelete(stock.id)}
                  >
                    Sell
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {portfolio.length === 0 && (
          <p style={{ marginTop: "20px" }}>No stocks in portfolio</p>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#0f172a",
    color: "white",
  },

  title: {
    padding: "20px",
  },

  tableContainer: {
    padding: "20px",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    background: "#1e293b",
    borderRadius: "10px",
    overflow: "hidden",
  },

  deleteBtn: {
    background: "#ef4444",
    border: "none",
    padding: "6px 10px",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Portfolio;