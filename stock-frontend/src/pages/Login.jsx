import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSubmit() {
    if (!username || !password) {
      alert("Fill all fields");
      return;
    }

    const url = isLogin
      ? "http://localhost:5000/login"
      : "http://localhost:5000/register";

    try {
       setLoading(true);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Error");
        return;
      }

      if (isLogin) {
        localStorage.setItem("token", data.token);
        alert("Login successful");
        navigate("/dashboard");
      } else {
        alert("Register successful, now login");
        setIsLogin(true);
      }

      setUsername("");
      setPassword("");
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
    finally {
    setLoading(false);}
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>{isLogin ? "Login" : "Register"}</h2>

        <input
          style={styles.input}
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {loading ? (
  <Loader />
) : (
  <button
    style={styles.button}
    onClick={handleSubmit}
  >
    {isLogin ? "Login" : "Register"}
  </button>
)}
        <p
          style={styles.switch}
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin
            ? "Don't have an account? Register"
            : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#0f172a",
    color: "white",
    fontFamily: "Arial",
  },

  card: {
    background: "#1e293b",
    padding: "40px",
    borderRadius: "12px",
    width: "320px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    textAlign: "center",
  },

  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    outline: "none",
  },

  button: {
    padding: "10px",
    background: "#22c55e",
    border: "none",
    borderRadius: "6px",
    color: "white",
    cursor: "pointer",
  },

  switch: {
    marginTop: "10px",
    fontSize: "14px",
    color: "#cbd5e1",
    cursor: "pointer",
  },
};

export default Auth;