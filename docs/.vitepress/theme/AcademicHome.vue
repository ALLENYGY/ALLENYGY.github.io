<script setup lang="ts">
import { computed } from "vue";
import { useData } from "vitepress";

const { frontmatter } = useData();
const page = computed(() => frontmatter.value as any);
const currentYear = new Date().getFullYear();

const iconMap: Record<string, string> = {
  network:
    '<svg viewBox="0 0 48 48" fill="none"><path d="M16 8c12 7 4 25 16 32M32 8c-12 7-4 25-16 32M14 14h20M12 24h24M14 34h20"/></svg>',
  cell:
    '<svg viewBox="0 0 48 48" fill="none"><circle cx="14" cy="15" r="5"/><circle cx="34" cy="13" r="4"/><circle cx="31" cy="34" r="6"/><circle cx="12" cy="34" r="3"/><path d="M18 16l12-2M16 19l12 11M15 32l10 1M34 17l-2 11"/></svg>',
  agent:
    '<svg viewBox="0 0 48 48" fill="none"><rect x="9" y="11" width="30" height="27" rx="6"/><path d="M18 24h12M24 6v5M17 30h14"/><circle cx="17" cy="20" r="2"/><circle cx="31" cy="20" r="2"/></svg>',
};

const linkIconMap: Record<string, string> = {
  github:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .08 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 7.01a9.4 9.4 0 0 1 2.5.34c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.57c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" /></svg>',
  blog:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg>',
  location:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
};

const isExternal = (url: string) =>
  typeof url === "string" && /^https?:\/\//.test(url);

const externalAttrs = (url: string) =>
  isExternal(url) ? { target: "_blank", rel: "noreferrer" } : {};

const areaIcon = (area: any) => iconMap[area?.icon] || "";
const linkIcon = (type: string) => linkIconMap[type] || "";

const formatDate = (value: string) => {
  if (!value) return "Undated";
  const raw = String(value);
  const match = raw.match(/\d{4}-\d{2}-\d{2}/);
  return match ? match[0] : raw;
};
</script>

<template>
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="site-header">
    <nav class="nav" aria-label="Primary navigation">
      <a class="brand" href="/" :aria-label="`${page.brand} homepage`">
        <img class="brand__logo" src="/logo.svg" alt="" width="28" height="28" />
        <span>{{ page.brand }}</span>
      </a>
      <div class="nav-links">
        <a
          v-for="item in page.navigation"
          :key="item.text"
          :href="item.link"
          class="nav-link"
          v-bind="externalAttrs(item.link)"
        >
          {{ item.text }}
        </a>
      </div>
    </nav>
  </header>

  <main id="main" class="academic-home">
    <section class="academic-hero" aria-labelledby="academic-home-title">
      <div class="academic-hero__grid">
        <div class="academic-hero__copy">
          <div class="academic-hero__kicker">
            <span class="academic-hero__status" aria-hidden="true"></span>
            {{ page.hero?.kicker }}
          </div>
          <h1 id="academic-home-title" class="academic-hero__title">{{ page.hero?.title }}</h1>
          <p class="academic-hero__role">{{ page.hero?.role }}</p>
          <p class="academic-hero__intro">{{ page.hero?.intro }}</p>
          <div class="academic-hero__actions" aria-label="Primary links">
            <a
              v-for="action in page.hero?.actions"
              :key="action.text"
              :href="action.link"
              class="academic-button"
              :class="{
                'academic-button--primary': action.primary,
                'academic-button--quiet': action.quiet,
              }"
              v-bind="externalAttrs(action.link)"
            >
              {{ action.text }}
              <span>{{ isExternal(action.link) ? "↗" : "→" }}</span>
            </a>
          </div>
          <div class="academic-hero__links" aria-label="Profile links">
            <a
              v-for="link in page.hero?.links"
              :key="link.text"
              :href="link.url"
              v-bind="externalAttrs(link.url)"
            >
              <span v-html="linkIcon(link.type)"></span>
              {{ link.text }}
            </a>
          </div>
        </div>

        <aside class="academic-profile" aria-label="Profile summary">
          <div class="academic-profile__portrait-wrap">
            <div class="academic-profile__ring" aria-hidden="true"></div>
            <img
              class="academic-profile__portrait"
              :src="page.profile?.portrait"
              :alt="`Portrait of ${page.hero?.title}`"
            />
            <span class="academic-profile__badge">{{ page.profile?.badge }}</span>
          </div>
          <div class="academic-profile__body">
            <p class="academic-profile__label">Currently exploring</p>
            <div class="academic-profile__focus">
              <span v-for="tag in page.profile?.focus" :key="tag">{{ tag }}</span>
            </div>
            <div class="academic-profile__metrics">
              <div v-for="m in page.profile?.metrics" :key="m.label">
                <strong>{{ m.value }}</strong>
                <span>{{ m.label }}</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <a class="academic-hero__scroll" href="#about">
        <span>Explore</span>
        <span aria-hidden="true">↓</span>
      </a>
    </section>

    <section id="about" class="academic-section academic-about">
      <div class="academic-section__heading">
        <p class="academic-section__eyebrow">{{ page.about?.eyebrow }}</p>
        <h2>{{ page.about?.title }}</h2>
      </div>
      <div class="academic-about__body">
        <p class="academic-about__lead">{{ page.about?.lead }}</p>
        <p>{{ page.about?.body }}</p>
        <div class="academic-about__principles">
          <div v-for="p in page.about?.principles" :key="p.number">
            <span>{{ p.number }}</span>
            <strong>{{ p.title }}</strong>
            <small>{{ p.detail }}</small>
          </div>
        </div>
      </div>
    </section>

    <section id="research" class="academic-section">
      <div class="academic-section__heading academic-section__heading--row">
        <div>
          <p class="academic-section__eyebrow">{{ page.research?.eyebrow }}</p>
          <h2>{{ page.research?.title }}</h2>
        </div>
        <p class="academic-section__aside">{{ page.research?.aside }}</p>
      </div>
      <div class="research-grid">
        <article
          v-for="area in page.research?.areas"
          :key="area.title"
          class="research-card"
          :class="`research-card--${area.tone}`"
        >
          <div class="research-card__number">{{ area.number }}</div>
          <div class="research-card__icon" v-html="areaIcon(area)"></div>
          <h3>{{ area.title }}</h3>
          <p>{{ area.description }}</p>
          <div class="research-card__tags">
            <span v-for="tag in area.tags" :key="tag">{{ tag }}</span>
          </div>
          <a
            v-if="area.link"
            :href="area.link"
            v-bind="externalAttrs(area.link)"
          >
            Explore related work
            <span>{{ area.external || isExternal(area.link) ? "↗" : "→" }}</span>
          </a>
        </article>
      </div>
    </section>

    <section id="projects" class="academic-section academic-projects">
      <div class="academic-section__heading academic-section__heading--row">
        <div>
          <p class="academic-section__eyebrow">{{ page.projects?.eyebrow }}</p>
          <h2>{{ page.projects?.title }}</h2>
        </div>
        <a
          class="academic-text-link"
          :href="page.projects?.archiveLink"
          v-bind="externalAttrs(page.projects?.archiveLink)"
        >
          All repositories
          <span>{{ isExternal(page.projects?.archiveLink) ? "↗" : "→" }}</span>
        </a>
      </div>
      <div class="project-list">
        <article v-for="project in page.projects?.items" :key="project.name" class="project-card">
          <div class="project-card__meta">
            <span>{{ project.type }}</span>
            <span>{{ project.year }}</span>
          </div>
          <div class="project-card__main">
            <div>
              <h3>{{ project.name }}</h3>
              <p>{{ project.description }}</p>
            </div>
            <a
              :href="project.url"
              target="_blank"
              rel="noreferrer"
              :aria-label="`Open ${project.name} on GitHub`"
            >↗</a>
          </div>
          <div class="project-card__stack">
            <span v-for="item in project.stack" :key="item">{{ item }}</span>
          </div>
        </article>
      </div>
    </section>

    <section id="notes" class="academic-section">
      <div class="academic-section__heading academic-section__heading--row">
        <div>
          <p class="academic-section__eyebrow">{{ page.knowledge?.eyebrow }}</p>
          <h2>{{ page.knowledge?.title }}</h2>
        </div>
        <a
          class="academic-text-link"
          :href="page.knowledge?.archiveLink"
          v-bind="externalAttrs(page.knowledge?.archiveLink)"
        >
          Browse the archive
          <span>{{ isExternal(page.knowledge?.archiveLink) ? "↗" : "→" }}</span>
        </a>
      </div>
      <div class="knowledge-grid">
        <a
          v-for="topic in page.knowledge?.topics"
          :key="topic.name"
          class="knowledge-card"
          :href="topic.link"
          v-bind="externalAttrs(topic.link)"
        >
          <span class="knowledge-card__index">{{ topic.number }}</span>
          <h3>{{ topic.name }}</h3>
          <p>{{ topic.description }}</p>
          <span class="knowledge-card__arrow">→</span>
        </a>
      </div>
    </section>

    <section class="academic-section academic-writing">
      <div class="academic-section__heading academic-section__heading--row">
        <div>
          <p class="academic-section__eyebrow">{{ page.writing?.eyebrow }}</p>
          <h2>{{ page.writing?.title }}</h2>
        </div>
        <a
          class="academic-text-link"
          :href="page.writing?.archiveLink"
          v-bind="externalAttrs(page.writing?.archiveLink)"
        >
          View all posts
          <span>{{ isExternal(page.writing?.archiveLink) ? "↗" : "→" }}</span>
        </a>
      </div>
      <div class="writing-layout">
        <div class="writing-list">
          <a
            v-for="(post, index) in page.writing?.items"
            :key="post.title"
            class="writing-item"
            :href="post.link"
            v-bind="externalAttrs(post.link)"
          >
            <span class="writing-item__index">{{ String(index + 1).padStart(2, "0") }}</span>
            <div class="writing-item__body">
              <time>{{ formatDate(post.date) }}</time>
              <h3>{{ post.title }}</h3>
              <div class="writing-item__tags">
                <span v-for="tag in post.tags || []" :key="tag">{{ tag }}</span>
              </div>
            </div>
            <span class="writing-item__arrow">{{ isExternal(post.link) ? "↗" : "→" }}</span>
          </a>
        </div>
        <aside class="academic-activity">
          <div class="academic-activity__heading">
            <div>
              <span>{{ page.writing?.activity?.label }}</span>
              <strong>{{ page.writing?.activity?.value }}</strong>
            </div>
            <span>{{ page.writing?.activity?.year }}</span>
          </div>
        </aside>
      </div>
    </section>

    <section id="contact" class="academic-contact">
      <div class="academic-contact__copy">
        <p class="academic-section__eyebrow">{{ page.contact?.eyebrow }}</p>
        <h2>Interested in ideas,<br />research, or building?</h2>
        <p>{{ page.contact?.body }}</p>
        <div class="academic-contact__actions">
          <a
            v-for="action in page.contact?.actions"
            :key="action.text"
            :href="action.link"
            class="academic-button"
            :class="{
              'academic-button--light': action.light,
              'academic-button--outline': action.outline,
            }"
            v-bind="externalAttrs(action.link)"
          >
            {{ action.text }}
            <span>{{ isExternal(action.link) ? "↗" : "→" }}</span>
          </a>
        </div>
      </div>
      <div class="academic-contact__footer">
        <span>{{ page.footer?.name }}</span>
        <span>{{ page.footer?.location }}</span>
      </div>
    </section>
  </main>
</template>
