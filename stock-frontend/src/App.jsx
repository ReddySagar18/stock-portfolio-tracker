import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Portfolio from "./pages/Portfolio";
import Transactions from "./pages/Transactions";
import BuySell from "./pages/BuySell";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import TrendingStocks from "./pages/TrendingStocks";
function App() {
  return (
    <Routes>
       <Route path="/" element={<Landing/>} />
       <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/buysell" element={<BuySell />} />
      <Route
  path="/trending"
  element={<TrendingStocks />}
/>
    </Routes>
  );
}

export default App;