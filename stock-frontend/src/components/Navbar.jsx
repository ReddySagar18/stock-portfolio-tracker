import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  const isActive = (path) => location.pathname === path;

  return (
    <div style={styles.navbar}>
      {/* Logo */}
      <div style={styles.logo}>
        📊 STOCK AND STOCKS
      </div>

      {/* Links */}
      <div style={styles.links}>
        <Link
          to="/dashboard"
          style={isActive("/dashboard") ? styles.active : styles.link}
        >
          Dashboard
        </Link>

        <Link
          to="/portfolio"
          style={isActive("/portfolio") ? styles.active : styles.link}
        >
          Portfolio
        </Link>

        <Link
          to="/buysell"
          style={isActive("/buysell") ? styles.active : styles.link}
        >
          Buy/Sell
        </Link><Link
  to="/trending"
  style={
    isActive("/trending")
      ? styles.active
      : styles.link
  }
>
              Trending
</Link>

        <Link
          to="/transactions"
          style={isActive("/transactions") ? styles.active : styles.link}
        >
          
          Transactions
        </Link>
      </div>

      {/* Logout */}
      <button style={styles.logout} onClick={logout}>
        Logout
      </button>
    </div>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 20px",
    background: "#1e293b",
    color: "white",
    position: "sticky",
    top: 0,
  },

  logo: {
    fontWeight: "bold",
    fontSize: "18px",
  },

  links: {
    display: "flex",
    gap: "20px",
  },

  link: {
    color: "#cbd5e1",
    textDecoration: "none",
    fontSize: "14px",
  },

  active: {
    color: "#22c55e",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "bold",
  },

  logout: {
    background: "#ef4444",
    border: "none",
    padding: "6px 12px",
    color: "white",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Navbar;