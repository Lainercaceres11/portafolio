// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Inter",
      cssVariable: "--inter",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/inter-cyrillic-100-normal.woff2"],
            weight: "normal",
            style: "normal",
          },
        ],
      },
    },
  ],
});
