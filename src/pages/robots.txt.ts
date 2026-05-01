export function GET({ site }: { site?: URL }) {
  if (!site) {
    return new Response("Missing site URL", { status: 500 });
  }

  const body = `User-agent: *
Allow: /

Sitemap: ${new URL("/sitemap.xml", site).href}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
