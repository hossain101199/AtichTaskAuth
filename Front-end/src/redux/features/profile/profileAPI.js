import { getAccessToken } from "@/utils/cookies";

const { API } = require("@/redux/api/apiSlice");

const profileAPI = API.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => ({
        url: `/profile`,
        headers: { Authorization: `${getAccessToken()}` },
      }),
    }),
  }),
});

export const { useGetProfileQuery } = profileAPI;
