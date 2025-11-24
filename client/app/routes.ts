import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home/home.tsx"),
  route("projects/learn-english", "routes/projects/learn-english.tsx"),
  route("projects/ggpromarket", "routes/projects/ggpromarket.tsx"),
  route("projects/landing-collection", "routes/projects/landing-collection.tsx"),
] satisfies RouteConfig;
