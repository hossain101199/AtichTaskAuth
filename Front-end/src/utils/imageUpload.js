import { getImageBBKey } from "@/config/envConfig";

const imageUpload = async (formData) => {
  const url = `https://api.imgbb.com/1/upload?key=${getImageBBKey()}`;
  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });
  const result = await response.json();
  return result.data.url;
};

export default imageUpload;
