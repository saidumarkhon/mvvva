import React, { useState } from 'react';
import ProductList from '@components/ProductCardPage/ProductList';
import ProductDetail from '@components/ProductCardPage/ProductDetail';

function Product() {
  const handleProductClick = (productId) => {
    setSelectedProductId(productId);
  };
  return (
    <div className="App">
        <ProductList onProductClick={handleProductClick} />
    </div>
  );
}

export default Product;
