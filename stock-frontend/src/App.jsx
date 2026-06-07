import { useState } from "react";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

import "./styles/dashboard.css";

function App() {
  const [page, setPage] = useState(
    localStorage.getItem("token")
      ? "dashboard"
      : "login"
  );

  if (page === "login") {
    return (
      <Login setPage={setPage} />
    );
  }

  if (page === "register") {
    return (
      <Register
        setPage={setPage}
      />
    );
  }

  return (
    <Dashboard
      setPage={setPage}
    />
  );
}

export default App;