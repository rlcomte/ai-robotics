import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/ai-robotics/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        ziekenhuis: resolve(__dirname, "thema-ziekenhuis.html"),
        verpleeghuis: resolve(__dirname, "thema-verpleeghuis.html"),
        thuiszorg: resolve(__dirname, "thema-thuiszorg.html"),
        therapie: resolve(__dirname, "thema-therapie.html"),
        learningCommunity: resolve(__dirname, "learning-community.html"),
        deelnemers: resolve(__dirname, "deelnemers.html")
      }
    }
  }
});
