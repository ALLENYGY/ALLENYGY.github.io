import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "Junya Yang | Academic Homepage",
  description:
    "Junya Yang's academic homepage: bioinformatics, computational biology, AI agents, selected projects, and technical notes.",
  base: "/",
  cleanUrls: true,
  appearance: false,
  sitemap: {
    hostname: "https://allenygy.github.io",
  },
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
    [
      "link",
      {
        rel: "alternate",
        type: "application/rss+xml",
        title: "RSS Feed",
        href: "https://blog.allenygy.vip/feed.rss",
      },
    ],
    ["meta", { name: "author", content: "Junya Yang" }],
    ["meta", { property: "og:title", content: "Junya Yang | Academic Homepage" }],
    [
      "meta",
      {
        property: "og:description",
        content: "Bioinformatics, computational biology, AI agents, selected projects, and technical notes by Junya Yang.",
      },
    ],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: "https://allenygy.github.io/" }],
    ["meta", { property: "og:site_name", content: "Junya Yang Homepage" }],
    ["meta", { name: "twitter:card", content: "summary" }],
    [
      "script",
      { type: "application/ld+json" },
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Junya Yang",
        url: "https://allenygy.github.io/",
        affiliation: {
          "@type": "CollegeOrUniversity",
          name: "The Chinese University of Hong Kong",
        },
        sameAs: [
          "https://github.com/ALLENYGY",
          "https://blog.allenygy.vip/",
        ],
        knowsAbout: [
          "Computer Science",
          "Bioinformatics",
          "Computational Biology",
          "AI Agents",
        ],
      }),
    ],
  ],
});
