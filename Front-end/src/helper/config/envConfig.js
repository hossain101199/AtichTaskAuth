export const getBaseUrl = () => {
  return process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";
};

export const getImageBBKey = () => {
  return process.env.NEXT_PUBLIC_IMAGEBB_KEY;
};

export const tokenKey = () => {
  return process.env.NEXT_PUBLIC_TOKEN_KEY;
};

export const userKey = () => {
  return process.env.NEXT_PUBLIC_USER_KEY;
};
