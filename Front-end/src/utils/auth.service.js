import { tokenKey } from "../helper/config/envConfig";
import {
  getStoredData,
  removeStorageData,
  setStoredData,
} from "./localStorage";

export const setAccessToken = (data) => {
  setStoredData(tokenKey(), data);
};

export const getAccessToken = () => {
  return getStoredData(tokenKey());
};

export const removeAccessToken = () => {
  removeStorageData(tokenKey());
};
