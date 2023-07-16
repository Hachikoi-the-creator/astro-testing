import { defineConfig, sharpImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), solidJs()],
  output: "server",
  adapter: vercel(),
  image: {
    service: sharpImageService()
  },
  experimental: {
    assets: true
  }
});