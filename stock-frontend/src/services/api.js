const BASE_URL = "https://stock-portfolio-tracker-4.onrender.com";

const getToken = () => {
  return localStorage.getItem("token");
};

export const loginUser = async (username, password) => {
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

  return response.json();
};

export const registerUser = async (username, password) => {
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

  return response.json();
};

export const fetchPortfolio = async () => {
  const response = await fetch(`${BASE_URL}/portfolio`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return response.json();
};

export const addStock = async (
  stock_name,
  quantity,
  buy_price
) => {
  const response = await fetch(`${BASE_URL}/portfolio`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({
      stock_name,
      quantity,
      buy_price,
    }),
  });

  return response.json();
};

export const deleteStock = async (id) => {
  const response = await fetch(`${BASE_URL}/portfolio`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({
      id,
    }),
  });

  return response.json();
};

export const fetchTransactions = async () => {
  const response = await fetch(`${BASE_URL}/transactions`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return response.json();
};
