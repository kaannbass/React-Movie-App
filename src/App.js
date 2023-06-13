import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import MovieFavorite from "./views/FavoriteMovie";
import Register from "./views/Register";
import NotFound from "./views/NotFound";
import MovieDetail from "./views/MovieDetails";
import Support from "./views/support";

import "./assets/style.css";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="moviedetail/:movieId" element={<MovieDetail />} />
          <Route path="/moviefavorite" element={<MovieFavorite />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/support" element={<Support />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
