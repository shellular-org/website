import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
	// https://docs.astro.build/en/guides/integrations-guide/sitemap/
	site: "https://shellular.dev",
	integrations: [sitemap()],
});
