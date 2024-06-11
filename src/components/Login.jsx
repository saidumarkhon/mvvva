// src/components/Login.js
import React, { useState } from 'react';
import { showToast } from '@components/Toaster';

const Login = ({ toggleForm, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validate = () => {
    let valid = true;
    let errors = {};

    if (!email) {
      errors.email = 'Email is required';
      valid = false;
    }
    if (!password) {
      errors.password = 'Password is required';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (validate()) {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user && user.email === email && user.password === password) {
        await showToast("success", "You logged in successfully");
        onLoginSuccess();
      } else {
        await showToast("error", "Invalid login credentials!");
      }
    }
  };

  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-md">
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <form onSubmit={handleLogin} className="space-y-6">
        <div className="space-y-1 text-sm">
          <label className="block text-gray-600">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-4 py-2 rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
        </div>
        <div className="space-y-1 text-sm">
          <label className="block text-gray-600">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full px-4 py-2 rounded-md border ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
        </div>
        <button type="submit" className="block w-full p-3 text-center rounded-sm text-white bg-blue-500 hover:bg-blue-600">Login</button>
      </form>
      <p className="text-xs text-center text-gray-400">
        Don't have an account? <button className="text-blue-500 hover:underline" onClick={toggleForm}>Register</button>
      </p>
    </div>
  );
};

export default Login;
