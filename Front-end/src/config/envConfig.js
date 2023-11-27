export const getBaseUrl = () => {
  return process.env.NEXT_PUBLIC_API_BASE_URL || process.env.API_BASE_URL;
  // return "http://localhost:8000";
};

export const getImageBBKey = () => {
  return process.env.IMAGEBB_KEY || process.env.NEXT_PUBLIC_IMAGEBB_KEY;
};

export const getTokenKey = () => {
  return process.env.TOKEN_KEY || process.env.NEXT_PUBLIC_TOKEN_KEY;
};
