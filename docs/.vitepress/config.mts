import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "AllenYGY | Homepage",
  description:
    "AllenYGY's homepage: research interests, selected projects, publications, notes, and contact links.",
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
    ["meta", { name: "author", content: "AllenYGY" }],
    ["meta", { property: "og:title", content: "AllenYGY | Homepage" }],
    [
      "meta",
      {
        property: "og:description",
        content: "Research, projects, publications, and technical notes by AllenYGY.",
      },
    ],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: "https://allenygy.github.io/" }],
    ["meta", { property: "og:site_name", content: "AllenYGY Homepage" }],
    ["meta", { name: "twitter:card", content: "summary" }],
    [
      "script",
      { type: "application/ld+json" },
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "AllenYGY",
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
