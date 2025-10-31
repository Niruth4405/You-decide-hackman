import React from "react";
import { Routes, Route } from "react-router-dom";
import Client from "./client/ClientMain";
import Login from "./client/components/Login";
import Signup from "./client/components/Signup";
import AddSingleLogEntry from "./client/components/AddSingleLogEntry";
import CreateNlogs from "./client/components/CreateNlogs";
import LandingPage from "./client/components/landingPage";
import Navbar from "./client/components/navbar";
import { useLocation } from "react-router-dom";
import ParticlesComponent from "./client/components/bg";
import Features from "./client/components/features";
const App = () => {
  const location = useLocation();
  return (
    <>

    {location.pathname !== '/' && <Navbar />}
   <Routes>

    <Route path="/" element={<LandingPage />} />
    <Route path="/dashboard" element={<AddSingleLogEntry />} />
      <Route path='/log' element={<CreateNlogs/>} />
      <Route path='/login' element={<Login/>} />
       <Route path='/features' element={<Features/>} />
      <Route path='/signup' element={<Signup/>} />
    </Routes>
</>
  );
};

export default App;
