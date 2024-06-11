// src/components/Toaster.js
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toaster = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={900}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};

export const showToast = (type, message) => {
  return new Promise((resolve) => {
    if (type === "success") {
      toast.success(message, { position: 'top-right', onClose: resolve });
    } else if (type === "error") {
      toast.error(message, { position: 'top-center', onClose: resolve });
    } else {
      toast.info(message, { position: 'top-center', onClose: resolve });
    }
  });
};

export default Toaster;
