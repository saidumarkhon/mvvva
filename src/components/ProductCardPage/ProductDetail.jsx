import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '@components/ProductCardPage/Products';
import { Card, CardContent, CardMedia, Typography, Button, Skeleton } from '@mui/material';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchProductById(id).then((data) => {
      setProduct(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto my-8">
        <Card className="rounded-lg shadow-lg">
          <Skeleton animation="wave" variant="rectangular" height={400} />
          <CardContent>
            <Skeleton animation="wave" height={40} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={20} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={20} width="80%" />
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-8 max-w-screen-md flex">
      <div className="flex-1">
        <CardMedia
          component="img"
          alt={product.title}
          height="400"
          image={product.image}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1 pl-4">
        <Card className="rounded-lg shadow-lg h-full">
          <CardContent className="h-full">
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
            <Typography variant="h6" color="text.primary">
              ${product.price}
            </Typography>
            <Button variant="contained" color="primary" className="mt-4" onClick={() => window.history.back()}>
              Go Back
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetail;
