import AutoImport from 'unplugin-auto-import/vite';
import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vitest'],
      dirs: [
        'composables',
        './components/**/**/*.composable.{ts,js,mjs,mts}'
      ]
    })
  ],
  test: {
    globals: true,
    environment: "happy-dom",
  },
  resolve: {
    alias: {
      "@": "./",
      "@mockdata": "./test/mockdata/",
      "@atom": "./components/atom",
      "@utils": "./utils/",
      "@cookies": "./cookies/",
      "@composable": "./composables/",
      "#imports": "./.nuxt/imports.d.ts",
      "@mocks": "./test-mocks/",
    },
  },
});
