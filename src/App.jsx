import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepage";
import LoginPage from "./components/Loginpage";
import SignupPage from "./components/Signuppage";
import Dashboard from "./components/Dashboard";
import SmartParkingPage from "./components/SmartParkingBooking"; // Import the new page
import PaymentForm from "./components/Payment"; 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/smart-parking" element={<SmartParkingPage />} />
        <Route path="/payment" element={<PaymentForm />} /> {/* Add this route */}
      </Routes>
    </Router>
  );
}

export default App;
