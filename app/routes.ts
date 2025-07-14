import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [
  index("routes/index.tsx"),

  route("anime", "routes/anime.tsx"),
  route("anime/:id", "routes/anime-detail.tsx"),

  ...prefix("genre", [
    index("routes/genre.tsx"),
    route(":genre", "routes/genre-detail.tsx"),
  ]),
  route(":category", "routes/category.tsx"),
] satisfies RouteConfig;
