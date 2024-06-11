// src/components/Pagination.jsx
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  const maxPageNumbersToShow = 5;

  const startPage = Math.max(1, currentPage - Math.floor(maxPageNumbersToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPageNumbersToShow - 1);

  if (startPage > 1) {
    pageNumbers.push(1);
    if (startPage > 2) pageNumbers.push('...');
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) pageNumbers.push('...');
    pageNumbers.push(totalPages);
  }

  return (
    <div className="flex justify-center mt-4 space-x-1">
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400 disabled:bg-gray-200"
      >
        First
      </button>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400 disabled:bg-gray-200"
      >
        Previous
      </button>
      {pageNumbers.map((number, index) =>
        number === '...' ? (
          <span key={index} className="px-3 py-1 rounded">
            {number}
          </span>
        ) : (
          <button
            key={index}
            onClick={() => onPageChange(number)}
            className={`px-3 py-1 rounded ${
              number === currentPage ? 'bg-slate-800 text-white' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          >
            {number}
          </button>
        )
      )}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400 disabled:bg-gray-200"
      >
        Next
      </button>
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400 disabled:bg-gray-200"
      >
        Last
      </button>
    </div>
  );
};

export default Pagination;

