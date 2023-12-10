import axios from "axios";
import { getAccessToken } from "../../utils/auth.service";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const token = getAccessToken();

    if (token) {
      config.headers = {
        Authorization: `${token}`,
        Accept: "application/json",
        ...config.headers,
      };
    }

    return config;
  },
  (error) => {
    // eslint-disable-next-line no-undef
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // eslint-disable-next-line no-undef
    return Promise.reject(error);
  }
);

export default axiosInstance;
