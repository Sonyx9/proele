import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "static",
  site: "https://example.github.io",
  base: "/proele-web",
  vite: {
    plugins: [tailwindcss()]
  }
});
