// src/services/api.ts
import axios from 'axios';

const api = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:3000', // Update to your backend URL
});

export const uploadCSV = (formData: FormData) => api.post('/csv', formData);
export const getTopPLAccounts = () =>
  api.get(`/transactions/report`);
export const login = (username: string, password: string) =>
  api.post('/auth/login', { username, password });
export const getUserInfo = () => api.get('/auth/userinfo');
