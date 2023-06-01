import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import LoginLayout from "./layout/Login";
import Home from "./views/Home";
import Login from "./views/Login";
import About from "./views/About";

import "./assets/style.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/about" element={<MainLayout />}>
            <Route index element={<About />} />
          </Route>
          <Route path="/login" element={<LoginLayout />}>
            <Route index element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
