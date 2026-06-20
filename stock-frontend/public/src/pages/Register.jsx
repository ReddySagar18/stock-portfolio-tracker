import { useState } from "react";
import { registerUser } from "../services/api";

function Register({ setPage }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    try {
      const data = await registerUser(
        username,
        password
      );

      setMessage(data.message);
    } catch (error) {
      setMessage("Server Error");
    }
  };

  return (
    <div className="auth-container">
      <h1>Create Account</h1>

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

      <button
        style={{ marginLeft: "10px" }}
        onClick={() => setPage("login")}
      >
        Back
      </button>

      <p>{message}</p>
    </div>
  );
}

export default Register;