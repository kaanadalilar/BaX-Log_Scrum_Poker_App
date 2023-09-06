import React from "react";
import './App.css';
import Header from './components/Header';
import PokerPage from './pages/PokerPage';
import LandingPage from './pages/LandingPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/game/:sessionID/:role" element={<PokerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
