export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname !== "/" && url.pathname !== "") {
      return new Response("Not found", { status: 404 });
    }

    const cache = caches.default;
    const cacheKey = new Request(url.origin, { method: "GET" });

    const cached = await cache.match(cacheKey);
    if (cached) {
      console.log(JSON.stringify({ message: "cache hit" }));
      return cached;
    }

    try {
      const upstream = await fetch(
        "https://daily.bandcamp.com/album-of-the-day",
        {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (compatible; TRMNL/1.0; +https://usetrmnl.com)",
          },
          cf: { cacheTtl: 3600 },
        },
      );

      if (!upstream.ok) {
        console.error(
          JSON.stringify({
            message: "upstream fetch failed",
            status: upstream.status,
          }),
        );
        return Response.json(
          { error: "Upstream fetch failed" },
          { status: 502 },
        );
      }

      const html = await upstream.text();
      const article = parseFirstArticle(html);

      if (!article) {
        console.error(
          JSON.stringify({ message: "failed to parse album from HTML" }),
        );
        return Response.json(
          { error: "Could not parse album of the day" },
          { status: 502 },
        );
      }

      console.log(
        JSON.stringify({
          message: "parsed album",
          artist: article.artist,
          title: article.title,
        }),
      );

      const response = Response.json(article, {
        headers: {
          "Cache-Control": "public, max-age=3600",
        },
      });

      ctx.waitUntil(cache.put(cacheKey, response.clone()));

      return response;
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error);
      console.error(JSON.stringify({ message: "unhandled error", error: msg }));
      return Response.json({ error: "Internal server error" }, { status: 500 });
    }
  },
};

function parseFirstArticle(html) {
  // Find the first list-article aotd block
  const articleStart = html.indexOf('<div class="list-article  aotd">');
  if (articleStart === -1) return null;

  // Extract a chunk around the first article (they're ~500 chars each)
  const chunk = html.substring(articleStart, articleStart + 1000);

  // Image URL: <img src="https://f4.bcbits.com/img/0043031976_2.jpg">
  const imgMatch = chunk.match(/<img\s+src="(https:\/\/f4\.bcbits\.com\/img\/[^"]+)"/);
  if (!imgMatch) return null;
  // Upgrade to higher-res version
  const image_url = imgMatch[1].replace(/_\d+\.jpg$/, "_16.jpg");

  // Article URL: <a class="title" href="/album-of-the-day/...">
  const urlMatch = chunk.match(/<a\s+class="title"\s+href="([^"]+)"/);
  const articleUrl = urlMatch
    ? "https://daily.bandcamp.com" + urlMatch[1]
    : null;

  // Title text: <a class="title" href="...">Artist, "Album Title"</a>
  const titleMatch = chunk.match(
    /<a\s+class="title"\s+href="[^"]*">([^<]+)<\/a>/,
  );
  if (!titleMatch) return null;

  const fullTitle = titleMatch[1].trim();
  let artist = fullTitle;
  let title = fullTitle;

  // Split "Artist, "Album Title"" into parts
  const commaQuote = fullTitle.indexOf(', \u201C');
  if (commaQuote !== -1) {
    artist = fullTitle.substring(0, commaQuote);
    title = fullTitle
      .substring(commaQuote + 3)
      .replace(/[\u201C\u201D"]/g, "");
  } else {
    const commaRegular = fullTitle.indexOf(', "');
    if (commaRegular !== -1) {
      artist = fullTitle.substring(0, commaRegular);
      title = fullTitle.substring(commaRegular + 3).replace(/"/g, "");
    }
  }

  // Date: text after middot span in article-info-text
  const dateMatch = chunk.match(
    /class="middot">[^<]*<\/span>\s*\n?\s*([A-Z][a-z]+ \d{1,2}, \d{4})/,
  );
  const date = dateMatch ? dateMatch[1].trim() : null;

  return { title, artist, date, image_url, url: articleUrl };
}
