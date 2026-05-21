import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
	// https://docs.astro.build/en/guides/integrations-guide/sitemap/
	site: "https://shellular.dev",
	integrations: [sitemap()],
});
