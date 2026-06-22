import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Portfolio from "./pages/Portfolio";
import Transactions from "./pages/Transactions";
import BuySell from "./pages/BuySell";
import Landing from "./pages/Landing";
function App() {
  return (
    <Routes>
       <Route path="/" element={<Landing/>} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/buysell" element={<BuySell />} />
    </Routes>
  );
}

export default App;