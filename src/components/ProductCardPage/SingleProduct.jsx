import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, CircularProgress } from '@mui/material';

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  if (!product) {
    return <div className="flex justify-center mt-4"><CircularProgress /></div>;
  }

  return (
    <div className="container mx-auto mt-4">
      <Card className="rounded-lg shadow-md">
        <CardMedia
          component="img"
          height="300"
          image={product.image}
          alt={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            ${product.price}
          </Typography>
          <Typography variant="body1" component="p">
            {product.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default SingleProduct;
