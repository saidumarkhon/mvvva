
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaCreditCard, FaUsers, FaChartBar, FaCog, FaFileAlt } from 'react-icons/fa';
import { MdBarChart } from 'react-icons/md';
import Toaster from './Toaster';

const Sidebar = () => {

  const location = useLocation();

  const links = [
    { name: "Add Task EXAM",            path: '/exam-add-task',  icon: <FaFileAlt className='inline-block size-5' /> },
    { name: 'Product Cards',            path: '/products',           icon: <FaHome className='inline-block size-5' /> }
  ];
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col sticky left-0 top-0">
      <h2 className="text-2xl font-bold p-4">Najot Ta'lim</h2>
      <nav className="flex flex-col px-1 gap-1">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={` rounded-lg px-5 py-3 flex justify-start items-center gap-2 ${
              location.pathname === link.path ? 'bg-slate-600' : 'bg-gray-800 hover:bg-slate-600'
            }`}
          >
            {link.icon}
            {link.name}
          </Link>
        ))}
        <Toaster />
      </nav>
    </div>
  );
};

export default Sidebar;
