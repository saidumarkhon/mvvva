import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Skeleton } from '@mui/material';
import { Link } from 'react-router-dom';
import { ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';

const ProductCard = ({ product, loading }) => {
  return (
    <Card className="flex flex-col h-full rounded-lg shadow-lg">
      <div className="h-48 w-full overflow-hidden">
        {loading ? (
          <Skeleton animation="wave" variant="rectangular" height="100%" />
        ) : (
          <CardMedia
            component="img"
            alt={product.title}
            image={product.image}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <CardContent className="flex flex-col flex-grow p-4">
        {loading ? (
          <Skeleton animation="wave" height={20} width="80%" style={{ marginBottom: 6 }} />
        ) : (
          <Typography gutterBottom variant="h6" component="div" className="mb-2">
            {product.title}
          </Typography>
        )}
        <div className="mt-auto">
          {loading ? (
            <Skeleton animation="wave" height={20} width="40%" style={{ marginBottom: 6 }} />
          ) : (
            <Typography variant="body2" color="text.secondary" className="mb-2">
              ${product.price}
            </Typography>
          )}
          <Link to={`/product/${product.id}`}>
            <Button 
            variant="contained" 
            color="primary" 
            className="mt-2 " 
            startIcon={<ShoppingCartIcon />}>
              View
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
