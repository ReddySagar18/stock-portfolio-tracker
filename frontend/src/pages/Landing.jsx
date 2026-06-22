import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <h1>STOCK PORTFOLIO TRACKER</h1>

      <h3>Track. Analyze. Grow.</h3>

      <p>
        Manage your stock portfolio from one dashboard.
      </p>

      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
}

export default Landing;