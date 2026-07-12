import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  // https://docs.astro.build/en/guides/integrations-guide/sitemap/
  site: "https://shellular.dev",
  redirects: {
    "/vps": "/blog/how-to-set-up-shellular-on-a-vps",
  },
  integrations: [sitemap()],
  compressHTML: false,
});
