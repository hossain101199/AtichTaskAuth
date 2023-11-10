const { API } = require("@/redux/api/apiSlice");

const profileAPI = API.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => ({
        url: `/profile`,
      }),
    }),
  }),
});

export const { useGetProfileQuery } = profileAPI;
