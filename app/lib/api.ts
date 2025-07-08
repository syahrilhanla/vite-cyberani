import type { AnimeList } from "@/types/anime.type";

const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchAnimeList = async (category: string, page = 1) => {
  const response = await fetch(
    `${BASE_URL}/${category}?page=${page}`
  );
  const { results } = await response.json();
  return results as AnimeList[];
};
