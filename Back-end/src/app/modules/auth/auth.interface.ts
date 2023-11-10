export type ILoginUser = {
  email: string;
  password: string;
};

export type ILoginUserResponse = {
  name: string;
  role: string;
  profileImg: string;
  accessToken: string;
  refreshToken?: string;
};

export type IRefreshTokenResponse = {
  accessToken: string;
};

export type IChangePassword = {
  oldPassword: string;
  newPassword: string;
};
