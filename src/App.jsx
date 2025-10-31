import React from "react";
import { Routes, Route } from "react-router-dom";
import Client from "./client/ClientMain";

const App = () => {
  return (
    <Routes>
     <Client/>
      <Route path="admin" />
    </Routes>
  );
};

export default App;
