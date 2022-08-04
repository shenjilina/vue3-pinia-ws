import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  // 别名设置
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"), // 把 @ 指向到 src 目录去
    },
  },
  plugins: [vue()],
});
