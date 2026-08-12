<script setup lang="ts">
import { computed } from "vue";
import { useData } from "vitepress";

const { frontmatter } = useData();
const page = computed(() => frontmatter.value);
const currentYear = new Date().getFullYear();
</script>

<template>
  <div class="academic-home">
    <a class="skip-link" href="#main">Skip to content</a>

    <header class="site-header">
      <nav class="nav" aria-label="Primary navigation">
        <a class="brand" href="/" aria-label="AllenYGY homepage">
          <img src="/logo.svg" alt="" width="28" height="28" />
          <span>{{ page.brand }}</span>
        </a>
        <div class="nav-links">
          <a v-for="item in page.navigation" :key="item.link" :href="item.link">
            {{ item.text }}
          </a>
        </div>
      </nav>
    </header>

    <main id="main">
      <section class="hero section-shell" aria-labelledby="page-title">
        <div class="hero-copy">
          <p class="eyebrow">{{ page.hero.eyebrow }}</p>
          <h1 id="page-title">{{ page.hero.title }}</h1>
          <p class="subtitle">{{ page.hero.intro }}</p>
          <div class="hero-actions" aria-label="Main actions">
            <a
              v-for="action in page.hero.actions"
              :key="action.link"
              class="button"
              :class="{ 'button-primary': action.primary }"
              :href="action.link"
            >
              {{ action.text }}
            </a>
          </div>
        </div>

        <aside class="profile-card" aria-label="Profile summary">
          <div class="avatar" aria-hidden="true">{{ page.profile.monogram }}</div>
          <h2>{{ page.profile.name }}</h2>
          <p class="muted">{{ page.profile.role }}</p>
          <ul class="profile-list">
            <li v-for="item in page.profile.details" :key="item.label">
              <span>{{ item.label }}</span>
              <strong>{{ item.value }}</strong>
            </li>
          </ul>
        </aside>
      </section>

      <section id="research" class="section-shell split-section">
        <div>
          <p class="eyebrow">{{ page.research.eyebrow }}</p>
          <h2>{{ page.research.title }}</h2>
          <p class="section-intro">{{ page.research.intro }}</p>
        </div>
        <div class="card-grid two-col">
          <article
            v-for="item in page.research.items"
            :key="item.title"
            class="card"
            :class="`accent-${item.accent}`"
          >
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <a :href="item.link">{{ item.linkText }} →</a>
          </article>
        </div>
      </section>

      <section id="publications" class="section-shell">
        <div class="section-heading">
          <div>
            <p class="eyebrow">{{ page.publications.eyebrow }}</p>
            <h2>{{ page.publications.title }}</h2>
          </div>
          <a class="text-link" :href="page.publications.archiveLink">Blog archive</a>
        </div>
        <div class="publication-list">
          <article
            v-for="item in page.publications.items"
            :key="item.title"
            class="publication"
          >
            <p class="pub-status">{{ item.status }}</p>
            <h3><a :href="item.link">{{ item.title }}</a></h3>
            <p>{{ item.description }}</p>
            <div class="pub-tags">
              <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
            </div>
          </article>
        </div>
      </section>

      <section id="projects" class="section-shell split-section">
        <div>
          <p class="eyebrow">{{ page.projects.eyebrow }}</p>
          <h2>{{ page.projects.title }}</h2>
        </div>
        <div class="link-grid">
          <a
            v-for="item in page.projects.items"
            :key="item.title"
            class="link-card"
            :href="item.link"
          >
            <strong>{{ item.title }}</strong>
            <span>{{ item.description }}</span>
          </a>
        </div>
      </section>

      <section class="section-shell news-section">
        <div class="section-heading">
          <div>
            <p class="eyebrow">{{ page.news.eyebrow }}</p>
            <h2>{{ page.news.title }}</h2>
          </div>
        </div>
        <ol class="timeline">
          <li v-for="item in page.news.items" :key="item.date">
            <time :datetime="item.datetime">{{ item.date }}</time>
            <span>{{ item.text }}</span>
          </li>
        </ol>
      </section>

      <section id="notes" class="section-shell">
        <div class="section-heading">
          <div>
            <p class="eyebrow">{{ page.notes.eyebrow }}</p>
            <h2>{{ page.notes.title }}</h2>
          </div>
          <a class="text-link" :href="page.notes.archiveLink">Full archive</a>
        </div>
        <div class="topic-grid">
          <a v-for="item in page.notes.items" :key="item.text" :href="item.link">
            {{ item.text }}
          </a>
        </div>
      </section>

      <section id="contact" class="section-shell contact-section">
        <div>
          <p class="eyebrow">{{ page.contact.eyebrow }}</p>
          <h2>{{ page.contact.title }}</h2>
          <p class="section-intro">{{ page.contact.intro }}</p>
        </div>
        <div class="contact-actions">
          <a
            v-for="action in page.contact.actions"
            :key="action.link"
            class="button"
            :class="{ 'button-primary': action.primary }"
            :href="action.link"
          >
            {{ action.text }}
          </a>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <p>© {{ currentYear }} {{ page.footer }}</p>
    </footer>
  </div>
</template>
