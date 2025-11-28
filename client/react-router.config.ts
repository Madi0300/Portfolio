import type { Config } from "@react-router/dev/config";

const isProduction = process.env.NODE_ENV === "production";

export default {
  // Deploy under /Portfolio on GitHub Pages, otherwise use root
  basename: isProduction ? "/Portfolio" : "/",
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
} satisfies Config;
