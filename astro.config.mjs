import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://linyawun.github.io",
  base: "/Medium-page",
  integrations: [tailwind()],
});
