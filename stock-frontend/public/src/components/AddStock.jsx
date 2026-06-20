import { useState } from "react";
import { addStock } from "../services/api";

function AddStock({ refreshData }) {
  const [stockName, setStockName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [buyPrice, setBuyPrice] = useState("");

  const handleAddStock = async () => {
    await addStock(
      stockName,
      Number(quantity),
      Number(buyPrice)
    );

    setStockName("");
    setQuantity("");
    setBuyPrice("");

    refreshData();
  };

  return (
    <div className="card">
      <h2>Buy Stock</h2>

      <input
        type="text"
        placeholder="Stock Name"
        value={stockName}
        onChange={(e) =>
          setStockName(e.target.value)
        }
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) =>
          setQuantity(e.target.value)
        }
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Buy Price"
        value={buyPrice}
        onChange={(e) =>
          setBuyPrice(e.target.value)
        }
      />

      <br />
      <br />

      <button onClick={handleAddStock}>
        BUY
      </button>
    </div>
  );
}

export default AddStock;