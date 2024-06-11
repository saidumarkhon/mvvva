
import React from 'react';

const Card = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs mx-auto">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{product.title}</h3>
        <p className="text-gray-700 mb-2">${product.price}</p>
        <p className="text-gray-700">{product.description.slice(0, 100)}...</p>
      </div>
    </div>
  );
};

export default Card;
