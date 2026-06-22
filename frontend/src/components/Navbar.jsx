import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/dashboard">Dashboard</Link> |{" "}
      <Link to="/portfolio">Portfolio</Link> |{" "}
      <Link to="/transactions">Transactions</Link> |{" "}
      <Link to="/buysell">Buy/Sell</Link> |{" "}
      <Link to="/search">Search</Link>
    </nav>
  );
}

export default Navbar;