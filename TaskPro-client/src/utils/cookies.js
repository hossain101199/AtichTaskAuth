import Cookies from "universal-cookie";

export const cookies = new Cookies();

export const setAccessToken = (token, opts = {}) =>
  cookies.set("access-token", token, opts);

export const getAccessToken = () => cookies.get("access-token");

export const removeAccessToken = () =>
  cookies.remove("access-token", { path: "/" });

export default cookies;
