import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/spotzer-network/",
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      provider: "istanbul",
    },
    setupFiles: ["./vitest.setup.js"],
  },
});
