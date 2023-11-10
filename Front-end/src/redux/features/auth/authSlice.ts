import { removeAccessToken } from "@/utils/cookies";
import { removeStorageData } from "@/utils/localStorage";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  role: null,
  profileImg: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.name = action.payload.name;
      state.role = action.payload.role;
      state.profileImg = action.payload.profileImg;
    },
    logOut: (state) => {
      state.name = null;
      state.role = null;
      state.profileImg = null;

      removeStorageData("user");
      removeAccessToken();
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice;
