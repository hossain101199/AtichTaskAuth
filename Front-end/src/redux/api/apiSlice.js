import { getBaseUrl } from "@/config/envConfig";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const API = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/v1`,
  }),

  tagTypes: [],
  endpoints: () => ({}),
});
