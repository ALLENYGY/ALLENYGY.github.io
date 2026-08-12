# AllenYGY Homepage

Source for [allenygy.github.io](https://allenygy.github.io/), built with VitePress and deployed by GitHub Actions.

## Update the homepage

The homepage content lives in [`docs/index.md`](docs/index.md). Most visible text, links, research areas, projects, updates, and contact buttons are stored in its YAML frontmatter.

1. Edit `docs/index.md`.
2. Commit and push to `main`.
3. The `Deploy homepage` GitHub Actions workflow builds the Markdown source and deploys the generated site to GitHub Pages.

Do not edit or commit generated HTML. VitePress writes build output to `docs/.vitepress/dist/`, which is ignored by Git.

## Local development

```bash
npm ci
npm run docs:dev
```

Production build:

```bash
npm run docs:build
```

Technical notes and blog posts are maintained separately at [blog.allenygy.vip](https://blog.allenygy.vip/).
