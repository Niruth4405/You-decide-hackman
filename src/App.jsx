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
import AllLogs from "./admin/components/AllLogs";
import BlockedIps from "./admin/components/BlockedIPS";
import LogAnalysis from "./admin/components/LogAnalysis";
import AdminNavbar from "./admin/components/AdminNavbar";

const App = () => {
  const location = useLocation();
  
  // Define admin routes for easier maintenance
  const adminRoutes = ['/admin/allLogs', '/admin/blockedips', '/admin/log-analysis'];
  const isAdminRoute = adminRoutes.includes(location.pathname);
  
  // Define public routes where no navbar should show
  const publicRoutes = ['/', '/login', '/signup', '/features'];
  const isPublicRoute = publicRoutes.includes(location.pathname);
  
  return (
    <>
      {/* Show AdminNavbar for all admin routes */}
      {isAdminRoute && <AdminNavbar />}
      
      {/* Show regular Navbar for client routes (not admin, not public) */}
      {!isAdminRoute && !isPublicRoute && location.pathname !== '/dashboard' && location.pathname !== '/log' && <Navbar />}
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<AddSingleLogEntry />} />
        <Route path='/log' element={<CreateNlogs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/features' element={<Features />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/admin/allLogs" element={<AllLogs />} />
        <Route path="/admin/blockedips" element={<BlockedIps />} />
        <Route path="/admin/log-analysis" element={<LogAnalysis />} />
      </Routes>
    </>
  );
};

export default App;