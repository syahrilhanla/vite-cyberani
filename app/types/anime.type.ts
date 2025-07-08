export interface AnimeList {
  id: string;
  title: string;
  url: string;
  image: string;
  duration: string;
  watchList: string;
  japaneseTitle: string;
  type: string;
  nsfw: boolean;
  sub: number;
  dub: number;
  episodes: number;
}

export interface SuggestionAnime {
  imgURL: string;
  yearRelease: number;
  title: string;
  link: string;
  genre: string;
  season: string;
  type: string;
  description: string;
  totalEpisodes: number;
}