import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  name: null,
  role: null,
  profileImg: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.role = action.payload.role;
      state.profileImg = action.payload.profileImg;
    },
    logOut: (state) => {
      state.id = null;
      state.name = null;
      state.role = null;
      state.profileImg = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice;
