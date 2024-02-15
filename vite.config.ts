import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import { VitePWA } from "vite-plugin-pwa";

console.log("process.env.NODE_ENV", process.env.NODE_ENV);

const name = process.env.NODE_ENV === "development" ? "Aics Lucca - campionati (beta)" : "Aics Lucca - campionati ";
const short_name = process.env.NODE_ENV === "development" ? "AicsL (beta)" : "AicsL";
const theme_color = process.env.NODE_ENV === "development" ? "#ff0000" : "#ffffff";

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
        name: name,
        short_name: short_name,
        description: "",
        theme_color: theme_color,
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
