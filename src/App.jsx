import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLogin from "./admin/components/Login.jsx";
import Login from "./client/components/Login";
import Signup from "./client/components/Signup.jsx";

const App = () => {
  const location = useLocation();
  return (
    <Routes>
      <Route path="/admin" element={<AdminLogin />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
    </Routes>
  );
};

export default App;
