import { getAccessToken } from "../../utils/cookies";

export const accessTokenHandler = (config) => {
  const token = getAccessToken();

  if (token) {
    config.headers = {
      Authorization: token,
      Accept: "application/json",
      ...config.headers,
    };
  }

  return config;
};
