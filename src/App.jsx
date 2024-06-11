import React, { useState, useEffect } from 'react';
import Login from '@components/Login';
import Register from '@components/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from '@components/Sidebar';
import ProductCard from './pages/ProductCardPage';
import ProductDetail from '@components/ProductCardPage/ProductDetail';
import ExamAddTask from './pages/ExamAddTask';
import Analytic from './pages/AnalyticsPage';

function App() {
  const [isRegister, setIsRegister] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowModal(true);
  };

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {isLoggedIn ? (
        <>
          <Router>
            <div className="flex bg-slate-600 w-full">
              <Sidebar />
              <div className="flex-1 p-4">
                <Routes>
                  <Route path="/" element={<Analytic />} />
                  <Route path="/exam-add-task" element={<ExamAddTask />} />
                  <Route path="/products" element={<ProductCard />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                </Routes>
              </div>
            </div>
          </Router>
        </>
      ) : (
        isRegister ? 
          <Register toggleForm={toggleForm} /> : 
          <Login toggleForm={toggleForm} onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;

