import React from 'react';
import { Typography } from '@mui/material';

const Header = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
      <Typography variant="h4" component="h1" className="text-white font-bold tracking-wide">
        Саидумархон Хомидов
      </Typography>
      <Typography variant="subtitle2" className="text-gray-400 mt-2">
        created for 'Najot Ta'lim' lc exam
      </Typography>
    </div>
  );
};

export default Header;
