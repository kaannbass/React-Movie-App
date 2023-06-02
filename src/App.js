import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Auth from "./layout/Auth";
import Home from "./views/Home";
import Login from "./views/Login";
import About from "./views/About";
import Register from "./views/Register";
import NotFound from "./views/NotFound"

import "./assets/style.css";
import axios from "axios";

function App() {
  // const AccessTokenAuth =
  //   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDZmZTQ0ZTUwNmZhODVmMzc0ZmFlMTE3ZWQyNmU4MSIsInN1YiI6IjYzMzFmZjA4YjU0MDAyMDA4MjRhZDI5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XelLEhTIkZbD7r3kZWilO1Cc7iCjELWw6A2prWWsTgE";
  // const APIKeyAuth = "c46fe44e506fa85f374fae117ed26e81";
  // const url =
  //   "https://api.themoviedb.org/3/account/14980011/favorite/movies?language=en-US&page=1&sort_by=created_at.asc";
  // const options = {
  //   method: "GET",
  //   headers: {
  //     accept: "application/json",
  //     Authorization: AccessTokenAuth,
  //   },
  // };

  // fetch(url, options)
  //   .then((res) => res.json())
  //   .then((json) => console.log(json))
  //   .catch((err) => console.error("error:" + err));

  const URL = "https://jsonplaceholder.typicode.com/posts";
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(URL).then((res) => {
      setData(res.data);
      console.log(res);
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/about" element={<MainLayout />}>
            <Route index element={<About />} />
          </Route>
          <Route path="/login" element={<Auth />}>
            <Route index element={<Login />} />
          </Route>
          <Route path="/register" element={<Auth />}>
            <Route index element={<Register />} />
          </Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
