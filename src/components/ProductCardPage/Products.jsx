import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';

export const fetchProducts = async (page, limit) => {
  const response = await axios.get(`${API_URL}?limit=${limit}&offset=${(page - 1) * limit}`);
  return response.data;
};

export const fetchProductById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
