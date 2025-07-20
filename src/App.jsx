import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Listening1 from "./features/listening/Listening1";

const App = () => {
  const [answers, setAnswers] = useState({});
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/listening">
          <Route index element={<Listening1 />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
