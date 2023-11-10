import { getBaseUrl } from "@/config/envConfig";
import { getAccessToken } from "@/utils/cookies";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const API = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/v1`,
    headers: { Authorization: `${getAccessToken()}` },
  }),

  tagTypes: [],
  endpoints: () => ({}),
});
