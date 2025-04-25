/// <reference types="vitest/config" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
    react(),
  ],
  test: {
    environment: "jsdom",
    include: ["**/*.{test,spec}.?(c|m)[jt]s?(x)"],
    setupFiles: ["vitest.setup.ts"],
    coverage: {
      exclude: [
        "./src/test/mocks/browser.ts", // Added these to be excluded from coverage
        "./src/test/mocks/handlers.ts",
        "./src/test/mws-test.ts",
      ],
      thresholds: {},
    },
  },
});
