import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  site: "https://andrey-d-araya.dev",
  // Remove base as we're using a custom domain
});
