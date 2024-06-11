import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '@components/ProductCardPage/ProductCard';
import Pagination from '@components/ProductCardPage/Pagination';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(3);
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      setTotalProducts(response.data.length);
      const start = (currentPage - 1) * productsPerPage;
      const paginatedProducts = response.data.slice(start, start + productsPerPage);
      setProducts(paginatedProducts);
    };
    fetchProducts();
  }, [currentPage, productsPerPage]);

  return (
    <div className="container mx-auto my-8">
      <div className="flex justify-end mb-4 ">
        <label className='text-white bg-slate-800 px-4 py-1 rounded'>
          Products per page:
          <select value={productsPerPage} onChange={(e) => setProductsPerPage(Number(e.target.value))} className="ml-2 bg-slate-800">
            <option value={3}>3</option>
            <option value={6}>6</option>
            <option value={9}>9</option>
            <option value={12}>12</option>
          </select>
        </label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(totalProducts / productsPerPage)}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ProductList;
