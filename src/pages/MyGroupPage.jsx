// src/App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './../components/MyGroupPage/Card';
import Pagination from './../components/MyGroupPage/Pagination';

const ITEMS_PER_PAGE = 4;

const Group = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentItems = products.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Product Cards</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {currentItems.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default Group;
