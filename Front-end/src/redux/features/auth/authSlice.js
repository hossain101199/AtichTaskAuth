import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
  name: null,
  role: null,
  profileImg: null,
};

export const authSlice = createSlice({
  name: "loggedInUser",
  initialState,
  reducers: {
    setLoggedInUserInfo: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoggedInUserInfo } = authSlice.actions;

export default authSlice;
