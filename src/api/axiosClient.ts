import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    return config;
  });

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data ?? response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;