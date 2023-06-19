// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HomePage from "./pages/HomePage/HomePage";
import QuestionPage from "./pages/QuestionPage/QuestionPage";

// Component Imports
import NavBar from "./components/NavBar/NavBar";
import { useState } from "react";

function App() {
  // CorrectCounter
  const [correctCounter, setCorrectCounter] = useState(0);

  const incrementCounter = () => {
    setCorrectCounter(correctCounter + 1);
  };

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/*" element={<HomePage correctCounter={correctCounter} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/question" element={<QuestionPage incrementCounter={incrementCounter} />} />
      </Routes>
    </div>
  );
}

export default App;
