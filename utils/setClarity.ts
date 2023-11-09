export function setClarity(key: string, value: string | string[]) {
  if (typeof window === "undefined") return;
  try {
    window.clarity("set", key, value);
  } catch (error) {
    console.error("Failed to set Clarity:", error);
  }
}
