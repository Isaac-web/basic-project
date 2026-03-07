import axios from 'axios';

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

apiClient.interceptors.request.use((config) => {
  config.headers['x-api-key'] = import.meta.env.VITE_REQRES_API_KEY;
  return config;
});
