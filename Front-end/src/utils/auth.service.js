import { tokenKey, userKey } from "@/helper/config/envConfig";
import {
  getStoredData,
  removeStorageData,
  setStoredData,
} from "./localStorage";

export const storeUserInfo = (data) => {
  setStoredData(userKey(), data);
};
export const setAccessToken = (data) => {
  setStoredData(tokenKey(), data);
};

export const getUserInfo = () => {
  return getStoredData(userKey());
};

export const getAccessToken = () => {
  return getStoredData(tokenKey());
};

export const removeUserInfo = () => {
  removeStorageData(userKey());
};

export const removeAccessToken = () => {
  removeStorageData(tokenKey());
};

export const isLoggedIn = () => {
  if (getUserInfo() && getAccessToken()) {
    return true;
  } else {
    return false;
  }
};
