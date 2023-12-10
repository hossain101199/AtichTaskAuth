export const getBaseUrl = () => {
  return import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";
};

export const getImageBBKey = () => {
  return import.meta.env.VITE_IMAGEBB_KEY;
};

export const tokenKey = () => {
  return import.meta.env.VITE_TOKEN_KEY;
};

export const userKey = () => {
  return import.meta.env.VITE_USER_KEY;
};
