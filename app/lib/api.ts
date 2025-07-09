import type { AnimeList, AnimeDetail } from "@/types/anime.type";

const BASE_URL = import.meta.env.VITE_API_URL;

// Helper for GET requests
const fetchJSON = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Fetch error: ${response.status}`);
  return response.json();
};

// Fetch anime list by category and page
export const fetchAnimeList = async (
  category: string,
  page = 1
): Promise<AnimeList[]> => {
  const { results } = await fetchJSON<{ results: AnimeList[] }>(
    `${BASE_URL}/${category}?page=${page}`
  );
  return results;
};

// Fetch anime list by search query
export const fetchAnimeBySearch = async (
  searchQuery: string
): Promise<AnimeList[]> => {
  const { results } = await fetchJSON<{ results: AnimeList[] }>(
    `${BASE_URL}/${searchQuery}`
  );
  return results;
};

// Fetch detailed anime info
export const fetchAnimeDetail = async (
  animeId: string
): Promise<AnimeDetail> => {
  return fetchJSON<AnimeDetail>(`${BASE_URL}/info?id=${animeId}`);
};