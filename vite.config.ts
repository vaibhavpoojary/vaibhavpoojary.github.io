import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/vaibhavpoojary.github.io/",
  build: {
    rollupOptions: {
      // Ensure proper module resolution
      preserveEntrySignatures: "strict",
    },
  },
});
