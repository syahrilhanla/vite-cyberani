import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/index.tsx"),

  route("anime", "routes/anime/anime.tsx"),
  route("anime/:id", "routes/anime/animeDetail.tsx"),
] satisfies RouteConfig;
