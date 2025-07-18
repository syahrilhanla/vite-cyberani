import type { APIEndpoint } from "@/enum/anime.enum";
import type { AnimeList, AnimeDetail, SuggestionAnime } from "@/types/anime.type";

const BASE_URL = import.meta.env.VITE_API_URL;

// Helper for GET requests
const fetchJSON = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Fetch error: ${response.status}`);
  return response.json();
};

// Fetch anime list by category and page
export const fetchAnimeList = async (
  category: APIEndpoint,
  page = 1
): Promise<{ results: AnimeList[]; totalPages: number }> => {
  const { results, totalPages } = await fetchJSON<{ results: AnimeList[]; totalPages: number }>(
    `${BASE_URL}/${category}?page=${page}`
  );
  return { results, totalPages };
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

// Fetch genres
export const fetchAnimeGenres = async (): Promise<string[]> => {
  const genres = await fetchJSON<string[]>(
    `${BASE_URL}/genre/list`
  );

  return genres;
}

// Fetch anime by genre
export const fetchAnimeByGenre = async (
  genre: string,
  page = 1
): Promise<{ results: AnimeList[]; totalPages: number }> => {
  const { results, totalPages } = await fetchJSON<{ results: AnimeList[], totalPages: number }>(
    `${BASE_URL}/genre/${genre}?page=${page}`
  );

  return { results, totalPages };
};

// Fetch spotlights 
export const fetchSpotlightAnime = async (): Promise<SuggestionAnime[]> => {
  const { results } = await fetchJSON<{ results: SuggestionAnime[] }>(
    `${BASE_URL}/spotlight`
  );

  return results;
};