import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  async function fetchTransactions() {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        "http://localhost:5000/transactions",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      setTransactions(data.data || []);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div style={styles.container}>
      <Navbar />

      <h1 style={styles.heading}>
        Transaction History
      </h1>

      {transactions.length === 0 ? (
        <div style={styles.empty}>
          No Transactions Found
        </div>
      ) : (
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Stock</th>
                <th>Action</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
             <tbody>
                            {transactions.map((tx) => (
                <tr key={tx.id}>
                  <td>
                    {new Date(
                      tx.created_at
                    ).toLocaleDateString()}
                  </td>

                  <td>{tx.stock_name}</td>

                  <td>
                    <span
                      style={{
                        background:
                          tx.action === "BUY"
                            ? "#16a34a"
                            : "#dc2626",
                        color: "white",
                        padding: "5px 10px",
                        borderRadius: "20px",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      {tx.action}
                    </span>
                  </td>

                  <td>{tx.quantity}</td>

                  <td>₹ {tx.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
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

  empty: {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "10px",
  },

  tableContainer: {
    background: "#1e293b",
    borderRadius: "10px",
    overflow: "hidden",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
};

export default Transactions;
