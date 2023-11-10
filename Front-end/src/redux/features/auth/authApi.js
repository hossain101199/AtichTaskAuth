import { setAccessToken } from "@/utils/cookies";
import { setStoredData } from "@/utils/localStorage";
const { API } = require("@/redux/api/apiSlice");

const authAPIs = API.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => ({
        url: `/auth/signup`,
        method: "POST",
        body: data,
      }),
    }),

    signIn: builder.mutation({
      query: (data) => ({
        url: `/auth/signin`,
        method: "POST",
        body: data,
      }),
      transformResponse: (response) => {
        if (response?.statusCode == 200) {
          setAccessToken(response.data.accessToken, { path: "/" });
          setStoredData("user", {
            name: response.data.name,
            role: response.data.role,
            profileImg: response.data.profileImg,
          });
          return response;
        }
      },
    }),

    changePassword: builder.mutation({
      query: (data) => ({
        url: `/auth/change-password`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useSignUpMutation,
  useSignInMutation,
  useChangePasswordMutation,
} = authAPIs;
