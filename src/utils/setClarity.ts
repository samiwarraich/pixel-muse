export const setClarity = (key: string, value: string) => {
  if (typeof window === "undefined") return;
  window.clarity("set", key, value);
};
