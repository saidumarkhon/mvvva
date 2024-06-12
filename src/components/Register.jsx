import React, { useState } from 'react';
import { showToast } from './toaster';

const Register = ({ toggleForm }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    const user = { name, email, password };
    localStorage.setItem('user', JSON.stringify(user));
    await showToast("success", "Successfully registered! Please, Log in");
    toggleForm();
  };

  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-md">
      <h1 className="text-2xl font-bold text-center">Register</h1>
      <form onSubmit={handleRegister} className="space-y-6">
        <div className="space-y-1 text-sm">
          <label className="block text-gray-600">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label className="block text-gray-600">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label className="block text-gray-600">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button type="submit" className="block w-full p-3 text-center rounded-sm text-white bg-blue-500 hover:bg-blue-600">Register</button>
      </form>
      <p className="text-xs text-center text-gray-400">
        Already have an account? <button className="text-blue-500 hover:underline" onClick={toggleForm}>Login</button>
      </p>
    </div>
  );
};

export default Register;
