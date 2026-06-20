import { deleteStock } from "../services/api";

function PortfolioTable({ portfolio, refreshData }) {
  const handleSell = async (id) => {
    await deleteStock(id);
    refreshData();
  };

  return (
    <div className="card">
      <h2>Portfolio Holdings</h2>

      <table>
        <thead>
          <tr>
            <th>Stock</th>
            <th>Quantity</th>
            <th>Buy Price</th>
            <th>Total Value</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {portfolio.map((stock) => (
            <tr key={stock.id}>
              <td>{stock.stock_name}</td>
              <td>{stock.quantity}</td>
              <td>₹{stock.buy_price}</td>
              <td>
                ₹{stock.quantity * stock.buy_price}
              </td>
              <td>
                <button
                  onClick={() =>
                    handleSell(stock.id)
                  }
                >
                  SELL
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PortfolioTable;