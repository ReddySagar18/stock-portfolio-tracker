import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister() {
    console.log({
      username,
      password,
    });
  }

  return (
    <div>
      <h1>STOCK PORTFOLIO TRACKER</h1>

      <h2>Register</h2>

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

      <button onClick={handleRegister}>
        Register
      </button>

      <p>
        Already have an account?
        <Link to="/login"> Login</Link>
      </p>
    </div>
  );
}

export default Register;