// This is what makes links, JS, CSS, and markdown fetches work on GitHub Pages

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  base: "/projecthilbert/",
  build: {
    outDir: "docs",
    emptyOutDir: true
  }
})
