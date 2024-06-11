import React from 'react';
import { Pagination as MUIPagination } from '@mui/material';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleChange = (event, value) => {
    onPageChange(value);
  };

  return (
    <div className="flex justify-center my-4 ">
      <MUIPagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
        color='primary'
        variant="outlined"
        shape="rounded"
      />
    </div>
  );
};

export default Pagination;
