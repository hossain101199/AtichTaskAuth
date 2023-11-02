import { setAccessToken } from "@/utils/cookies";
import { default as api } from "./config/axiosInstance";

const profileAPI = {
  async getProfile() {
    const response = await api.get("/profile");
    return response.data;
  },
};

export const { getProfile } = profileAPI;
export default profileAPI;
