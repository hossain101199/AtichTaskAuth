import { setAccessToken } from "../../../utils/auth.service";
import { API } from "../../api/apiSlice";

const authAPIs = API.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => ({
        url: `/auth/signup`,
        method: "POST",
        data,
      }),
    }),

    signIn: builder.mutation({
      query: (data) => ({
        url: `/auth/signin`,
        method: "POST",
        data,
      }),

      transformResponse: (response) => {
        if (response?.statusCode == 200) {
          setAccessToken(response.data.accessToken);

          return response;
        }
      },
    }),

    changePassword: builder.mutation({
      query: (data) => ({
        url: `/auth/change-password`,
        method: "POST",
        data,
      }),
    }),
  }),
});

export const {
  useSignUpMutation,
  useSignInMutation,
  useChangePasswordMutation,
} = authAPIs;
