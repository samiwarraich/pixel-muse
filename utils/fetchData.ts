interface FetchDataProps {
  url: string;
  options?: RequestInit;
}

export const fetchData = async ({ url, options }: FetchDataProps) => {
  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error.message || "Something went wrong! 🙁");
    }
    return res;
  } catch (error) {
    return { error: (error as Error).message };
  }
};
