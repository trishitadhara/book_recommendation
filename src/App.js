import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";

import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
