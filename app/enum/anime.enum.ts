export enum AnimeCategory {
  POPULAR = "popular", // most popular anime
  LATEST = "latest", // recent-episodes
  TRENDING = "trending", // top-airing
  MOVIES = "movies",
  GENRES = "genres",
}

export enum APIEndpoint {
  QUERY = ":query",
  RECENT_EPISODES = "recent-episodes",
  TOP_AIRING = "top-airing",
  MOST_POPULAR = "most-popular",
  MOST_FAVORITE = "most-favorite",
  LATEST_COMPLETED = "latest-completed",
  RECENT_ADDED = "recent-added",
  SUGGESTIONS = "suggestions",
  INFO = "info", // use with ?id=
  WATCH = "watch", // use with /:episodeId
  GENRE_LIST = "genre/list",
  GENRE = "genre", // use with /:genre
  MOVIES = "movies",
  ONA = "ona",
  OVA = "ova",
  SPECIALS = "specials",
  TV = "tv"
}