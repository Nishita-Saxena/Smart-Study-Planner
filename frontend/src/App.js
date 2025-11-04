import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import CalendarPage from "./pages/CalendarPage";
import AddSubject from "./pages/AddSubject";
import AddTask from "./pages/AddTask";
import FocusTimer from "./pages/FocusTimer";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/add-subject" element={<AddSubject />} />
        <Route path="/add-task" element={<AddTask />} />
        <Route path="/focus-timer" element={<FocusTimer />} />
      </Routes>
    </Router>
  );
}

export default App;

