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
  id: string;
  title: string;
  japaneseTitle: string;
  banner: string;
  rank: number;
  url: string;
  type: string;
  duration: string;
  releaseDate: string;
  quality: string;
  sub: number;
  dub: number;
  episodes: number;
  description: string;
}

export interface AnimeEpisode {
  id: string;
  number: number;
  title: string;
  isFiller: boolean;
  isSubbed: boolean;
  isDubbed: boolean;
  url: string;
}

export interface AnimeRecommendation {
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

export interface AnimeRelated {
  id: string;
  title: string;
  url: string;
  image: string;
  japaneseTitle: string;
  type: string;
  sub: number;
  dub: number;
  episodes: number;
}

export interface AnimeDetail {
  id: string;
  title: string;
  malID: number;
  alID: number;
  japaneseTitle: string;
  image: string;
  description: string;
  type: string;
  url: string;
  recommendations: AnimeRecommendation[];
  relatedAnime: AnimeRelated[];
  subOrDub: string;
  hasSub: boolean;
  hasDub: boolean;
  genres: string[];
  status: string;
  season: string;
  totalEpisodes: number;
  episodes: AnimeEpisode[];
}