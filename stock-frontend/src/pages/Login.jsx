import { useState } from "react";
import { loginUser } from "../services/api";

function Login({ setPage }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const data = await loginUser(username, password);

      if (data.token) {
        localStorage.setItem("token", data.token);
        setPage("dashboard");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("Server Error");
    }
  };

  return (
    <div className="auth-container">
    <h1>Stock Portfolio </h1>
    <h2>Tracker</h2> 
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleLogin}>
        Login
      </button>

      <button
        style={{ marginLeft: "10px" }}
        onClick={() => setPage("register")}
      >
        Register
      </button>

      <p>{message}</p>
    </div>
  );
}

export default Login;