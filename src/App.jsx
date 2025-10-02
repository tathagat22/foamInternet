import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Solutions from './components/solution';
import Connect from './components/connect';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/contact" element={<Connect />} />
          {/* Add other routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;