// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";

// Util Imports
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;