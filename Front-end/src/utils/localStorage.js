export const setStoredData = (key = "", data = {}) =>
  localStorage.setItem(`${key}`, JSON.stringify(data));

export const getStoredData = (key = "key") => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem(`${key}`));
  }
};

export const removeStorageData = (key = "key") =>
  localStorage.removeItem(`${key}`);
