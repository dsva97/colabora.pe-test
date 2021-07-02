import axios, { AxiosRequestConfig } from "axios";

const insertToken = (request: AxiosRequestConfig) => {
  const stateJSON = localStorage.getItem("redux_localstorage_simple") || "";
  const state = JSON.parse(stateJSON);
  const token = state?.Session?.token || "";
  request.headers.Authorization = "Bearer " + token;
  return request;
};

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL_BASE as string,
  timeout: 10000,
});

export const axiosInterceptorToken = axios.create({
  baseURL: process.env.REACT_APP_API_URL_BASE as string,
  timeout: 10000,
});
axiosInterceptorToken.interceptors.request.use(insertToken);

export const getTokenInterceptor = (url: string) => {
  const _axiosInstance = axios.create(axiosInterceptorToken.defaults);
  _axiosInstance.interceptors.request.use(insertToken);
  url = axiosInterceptorToken.defaults.baseURL + url;
  _axiosInstance.defaults.baseURL = url;
  return _axiosInstance;
};

export const getInterceptor = (url: string) => {
  const _axiosInstance = axios.create(axiosInterceptorToken.defaults);
  url = axiosInterceptorToken.defaults.baseURL + url;
  _axiosInstance.defaults.baseURL = url;
  return _axiosInstance;
};
