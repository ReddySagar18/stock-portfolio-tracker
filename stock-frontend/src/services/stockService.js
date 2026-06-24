const API_KEY = "d8sl9jhr01qh5reru8jgd8sl9jhr01qh5reru8k0";

export async function searchStock(symbol) {
  try {
    const response = await fetch(
      `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Stock API Error:", error);
    return null;
  }
}