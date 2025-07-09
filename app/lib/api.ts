import type { AnimeList } from "@/types/anime.type";

const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchAnimeList = async (category: string, page = 1) => {
  const response = await fetch(
    `${BASE_URL}/${category}?page=${page}`
  );
  const { results } = await response.json();
  return results as AnimeList[];
};


export const fetchAnimeBySearch = async (searchQuery: string) => {
  const response = await fetch(
    `${BASE_URL}/${searchQuery}`
  );
  const { results } = await response.json();
  return results as AnimeList[];
};

export const fetchAnimeDetail = async (animeId: string) => {
  const response = await fetch(
    `${BASE_URL}/info?id=${animeId}`
  );
  const animeDetail = await response.json();
  return animeDetail;
};