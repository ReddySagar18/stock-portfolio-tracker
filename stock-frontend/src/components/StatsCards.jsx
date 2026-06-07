function StatsCards({
  totalInvestment,
  totalStocks,
  transactionCount,
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "15px",
        marginBottom: "25px",
      }}
    >
      <div className="card">
        <h3>Investment</h3>
        <h2>₹{totalInvestment}</h2>
      </div>

      <div className="card">
        <h3>Holdings</h3>
        <h2>{totalStocks}</h2>
      </div>

      <div className="card">
        <h3>Transactions</h3>
        <h2>{transactionCount}</h2>
      </div>
    </div>
  );
}

export default StatsCards;