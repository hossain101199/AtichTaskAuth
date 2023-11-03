import { setAccessToken } from "@/utils/cookies";
import { default as api } from "./config/axiosInstance";
import { getProfile } from "./profileAPIs";
import { setStoredData } from "@/utils/localStorage";

const authAPI = {
  async signUp(data) {
    const response = await api.post("/auth/signup", data);

    return response.data;
  },

  async signIn(data) {
    const response = await api.post("/auth/signin", data);

    if ([200, 201].includes(response.status)) {
      setAccessToken(response.data.data.accessToken, { path: "/" });
      const data = await getProfile();
      const { id, name, role, profileImg } = data.data;
      setStoredData("profile", { id, name, role, profileImg });
      return data.data;
    }
  },

  async changePassword(data) {
    const response = await api.post("/auth/change-password", data);
    return response.data;
  },
};

export const { signUp, signIn, changePassword } = authAPI;
export default authAPI;
