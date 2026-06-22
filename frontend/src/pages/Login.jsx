import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    console.log({
      username,
      password,
    });
  }

  return (
    <div>
      <h1>STOCK PORTFOLIO TRACKER</h1>

      <h2>Login</h2>

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

      <p>
        Don't have an account?
        <Link to="/register"> Register</Link>
      </p>
    </div>
  );
}

export default Login;