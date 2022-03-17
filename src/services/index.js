import axios from 'axios';

// const url = 'https://7e96-2804-431-e7cf-e6b0-6599-3364-7f7-5b28.ngrok.io/'; //process.env.VUE_APP_API_BASE_URL
const url = process.env.VUE_APP_API_BASE_URL;
// const url = 'http://localhost:3000/'

const axiosInstance = axios.create({
  baseURL: url //colocar o api novamente
});

axiosInstance.interceptors.request.use(
  function (config) {
    const token = window.localStorage.token;
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
  post(endpoint, body) {
    return axiosInstance.post(endpoint, body);
  },
  put(endpoint, body) {
    return axiosInstance.put(endpoint, body);
  },
  delete(endpoint) {
    return axiosInstance.delete(endpoint);
  },
};