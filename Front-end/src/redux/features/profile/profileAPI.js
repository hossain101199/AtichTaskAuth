import { getAccessToken } from "@/utils/auth.service";

const { API } = require("@/redux/api/apiSlice");

const profileAPI = API.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => ({
        url: `/profile`,
        headers: { Authorization: `${getAccessToken()}` },
      }),
      providesTags: ["profileUpdated"],
    }),
    updateProfile: builder.mutation({
      query: (data) => ({
        url: `/profile`,
        method: "PATCH",
        headers: { Authorization: `${getAccessToken()}` },
        body: data,
      }),
      invalidatesTags: ["profileUpdated"],
    }),
  }),
});

export const { useGetProfileQuery, useUpdateProfileMutation } = profileAPI;
