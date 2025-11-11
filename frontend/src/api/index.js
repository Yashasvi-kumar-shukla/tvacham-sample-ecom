import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL;

const apiClient = axios.create({
  baseURL: API_BASE_URL || '/api'
});


export const fetchProducts = () => apiClient.get('/products');
export const fetchProductById = (id) => apiClient.get(`/products/${id}`);
export const simulateOrder = (orderData) => apiClient.post('/orders', orderData);

