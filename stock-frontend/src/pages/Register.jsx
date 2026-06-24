import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleRegister() {
    if (!username || !password) {
      setMessage("Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const response = await fetch(
        "http://localhost:5000/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage("Registration Successful");

        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else {
        setMessage(
          data.message || "Registration Failed"
        );
      }
    } catch (error) {
      console.error(error);
      setMessage("Server Error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>
          Stock
           Portfolio 
          Tracker
        </h1>

        <h2 style={styles.subtitle}>
          Create Account
        </h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          style={styles.input}
        />      {loading ? (
  <Loader />
) : (
  <button
    onClick={handleRegister}
    style={styles.button}
  >
    Register
  </button>
)}

        {message && (
          <p style={styles.message}>
            {message}
          </p>
        )}

        <p>
          Already have an account?
          <Link to="/login">
            {" "}
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#0f172a",
  },

  card: {
    background: "#1e293b",
    padding: "40px",
    borderRadius: "12px",
    width: "350px",
    textAlign: "center",
    color: "white",
  },

  title: {
    fontSize: "32px",
  fontWeight: "700",
  letterSpacing: "1px",
  marginBottom: "8px",
  },

  subtitle: {
    color: "#94a3b8",
  fontSize: "16px",
  marginBottom: "30px",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "none",
    boxSizing: "border-box",
  },

  button: {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    background: "#22c55e",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  },

  message: {
    marginTop: "15px",
  },
};

export default Register;