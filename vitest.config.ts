import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: "happy-dom",
  },
  resolve: {
    alias: {
      "@atom": "./components/atom",
      "@utils": "./utils/",
      "@cookies": "./cookies/",
      "@composable": "./composables/",
      "#imports": "./.nuxt/imports.d.ts",
      "@mocks": "./test-mocks/",
    },
  },
});
