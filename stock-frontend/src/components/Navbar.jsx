function Navbar({ logoutUser }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#1e293b",
        color: "white",
        padding: "15px 25px",
        borderRadius: "10px",
        marginBottom: "20px",
      }}
    >
      <h2>Stock Portfolio Tracker</h2>

      <button
        onClick={logoutUser}
        style={{
          padding: "10px 15px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;