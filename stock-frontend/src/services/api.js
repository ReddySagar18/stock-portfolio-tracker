const API_BASE_URL = 
 import.meta.env.VITE_API_URL || "http://localhost:5000";
export default API_BASE_URL;
export async function registerUser(username, password) {
  const response = await fetch(`${BASE_URL}/register`, {
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
  return data;
}

export async function loginUser(username, password) {
  const response = await fetch(`${BASE_URL}/login`, {
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
  return data;
}