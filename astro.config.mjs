import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  site: "https://andreydAraya.github.io",
  base: "/my_porfolio", // Add base path for GitHub Pages
});
