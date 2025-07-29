import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";
import Listening from "./features/listening/Listening";
import Home from "./components/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="listening">
          <Route path=":id" element={<Listening />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
