import { getTokenKey } from "@/config/envConfig";
import Cookies from "universal-cookie";

export const cookies = new Cookies();

export const setAccessToken = (token, opts = {}) =>
  cookies.set(getTokenKey(), token, opts);

export const getAccessToken = () => cookies.get(getTokenKey());

export const removeAccessToken = () =>
  cookies.remove(getTokenKey(), { path: "/" });

export default cookies;
