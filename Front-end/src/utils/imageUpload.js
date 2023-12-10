import toast from "react-hot-toast";
import { getImageBBKey } from "../helper/config/envConfig";

const imageUpload = async (formData) => {
  try {
    const url = `https://api.imgbb.com/1/upload?key=${getImageBBKey()}`;
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    const result = await response.json();

    return result;
  } catch (error) {
    toast.error("Oops! Something went wrong. Please try again.");
    throw new Error("An unexpected error occurred:", error);
  }
};

export default imageUpload;
