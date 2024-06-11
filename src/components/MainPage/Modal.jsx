import React from 'react';

const Modal = ({ showModal, closeModal, children }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-1/3">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;


