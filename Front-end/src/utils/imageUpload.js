const imageUpload = async (formData) => {
  const url = `https://api.imgbb.com/1/upload?key=4fc398737b73ab4a5927cdcc90d58258`;
  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });
  const result = await response.json();
  return result.data.url;
};

export default imageUpload;
