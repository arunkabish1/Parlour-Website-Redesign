import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      devOptions: {
        enabled: true,
      },
      registerType: "autoUpdate",
      manifest: {
        name: "Rainbow Beauty Parlour",
        short_name: "Rainbow Tvr",
        icons: [
          {
            src: "/image.png",
            sizes: "64x64 32x32 24x24 16x16",
            type: "image/x-icon",
          },
          {
            src: "/image.png ",
            type: "image/png",
            sizes: "16x16",
          },
          {
            src: "/image.png",
            type: "image/png",
            sizes: "32x32",
          },
          {
            src: "/image.png",
            type: "image/png",
            sizes: "192x192",
          },
          {
            src: "/image.png",
            type: "image/png",
            sizes: "512x512",
            purpose: "any maskable", // Icon format that ensures that your PWA icon looks great on all Android devices
          },
        ],
        theme_color: "#AAF",
      },
    }),
  ],
});
