import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../../helper/axios/axiosBaseQuery";
import { getBaseUrl } from "../../helper/config/envConfig";

export const API = createApi({
  reducerPath: "api",

  baseQuery: axiosBaseQuery({
    baseUrl: `${getBaseUrl()}/api/v1`,
  }),

  endpoints: () => ({}),

  tagTypes: ["profileUpdated"],
});
