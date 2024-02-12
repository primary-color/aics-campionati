import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      injectRegister: "auto",
      includeAssets: ["futbol-regular-2.ico", "pwa-assets/ios/180.png"],
      manifest: {
        name: "Aics Lucca - campionati",
        short_name: "AicsL",
        description: "Aics Lucca - campionati",
        theme_color: "#ffffff",
        icons: [
          {
            src: "pwa-assets/android/android-launchericon-192-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-assets/android/android-launchericon-512-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
