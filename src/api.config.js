import axios from 'axios';

export const authInstance = axios.create({
  baseURL: 'https://camp-courses.api.kreosoft.space',
});

export const instance = axios.create({
  baseURL: 'https://camp-courses.api.kreosoft.space',
});
instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;

  return config;
});
