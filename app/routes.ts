import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/index.tsx"),

  route("anime", "routes/anime.tsx"),
  route("anime/:id", "routes/anime-detail.tsx"),
  route(":category", "routes/category.tsx"),
] satisfies RouteConfig;
