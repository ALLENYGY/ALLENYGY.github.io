import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "Junya Yang | Academic Homepage",
  description:
    "Junya Yang's academic homepage: bioinformatics, computational biology, AI agents, selected projects, and technical notes.",
  base: "/",
  cleanUrls: true,
  appearance: true,
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
  themeConfig: {
    logo: {
      light: "/logo.svg",
      dark: "/logo-dark.svg",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Research", link: "#research" },
      { text: "Projects", link: "#projects" },
      { text: "Blog", link: "https://blog.allenygy.vip/" },
      { text: "Tags", link: "https://blog.allenygy.vip/page/tags" },
      { text: "Archive", link: "https://blog.allenygy.vip/page/archive" },
      { text: "Friends", link: "https://blog.allenygy.vip/page/friend" },
      {
        text: "Note",
        items: [
          { text: "Compiler Construction", link: "https://blog.allenygy.vip/posts/Compiler Construction/Lecture/01-Compiler Introduction/" },
          { text: "Computer Graphics", link: "https://blog.allenygy.vip/posts/Computer Graphics/Lecture/01-CG-Shading/" },
          { text: "Computer Organization", link: "https://blog.allenygy.vip/posts/Computer Organization/Lecture/01-What is a Computer/" },
          { text: "Computer Network", link: "https://blog.allenygy.vip/posts/Computer Network/Lecture/01-Basic Concepts/" },
          { text: "Database Management System", link: "https://blog.allenygy.vip/posts/Database Management System/RDBMS/01-Entity-Relationship-Model-Modeling/" },
          { text: "Functional Programming", link: "https://blog.allenygy.vip/posts/Functional Programming/Lecture/01-FP-Basics/" },
          { text: "Operating System", link: "https://blog.allenygy.vip/posts/Operating System/Lecture/01-Operating System Introduction/" },
          { text: "Theory Of Computation", link: "https://blog.allenygy.vip/posts/Theory Of Computation/Lecture/01-TOC-Intro/" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/ALLENYGY" },
    ],
    search: {
      provider: "local",
    },
    footer: {
      message: "Built with VitePress and GitHub Pages.",
      copyright: "© Junya Yang",
    },
  },
});
