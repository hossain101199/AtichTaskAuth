import axios from "axios";
import { accessTokenHandler } from "./requestInterceptors";
import { baseURL } from "./baseURL";

const api = axios.create({
  baseURL: `${baseURL}/api/v1`,
  timeout: 10000,
});

api.interceptors.request.use(
  (config) => accessTokenHandler(config),
  (error) => Promise.reject(error)
);

export default api;
