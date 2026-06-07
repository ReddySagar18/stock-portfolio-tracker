function TransactionTable({ transactions }) {
  return (
    <div className="card">
      <h2>Transaction History</h2>

      <table>
        <thead>
          <tr>
            <th>Action</th>
            <th>Stock</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.id}>
              <td>{tx.action}</td>
              <td>{tx.stock_name}</td>
              <td>{tx.quantity}</td>
              <td>₹{tx.price}</td>
              <td>{tx.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;