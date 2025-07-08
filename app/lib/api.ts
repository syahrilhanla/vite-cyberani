const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchAnimeList = async (category: string, page = 1) => {
  const data = await fetch(
    `${BASE_URL}/${category}?page=${page}`
  );
  const results = await data.json();
  return results;
};
