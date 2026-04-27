import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "static",
  site: "https://sonyx9.github.io",
  base: "/proele",
  vite: {
    plugins: [tailwindcss()]
  }
});
