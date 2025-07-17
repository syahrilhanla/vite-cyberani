import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
  index("routes/index.tsx"),

  layout("routes/layout.tsx", [
    ...prefix("anime", [
      route(":id", "routes/anime-detail.tsx"),
    ]),
    ...prefix("genre", [
      index("routes/genre.tsx"),
      route(":genre", "routes/genre-detail.tsx"),
    ]),
    route(":category", "routes/category.tsx"),
  ]),
] satisfies RouteConfig;
