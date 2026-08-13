<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
import AcademicHome from "./AcademicHome.vue";

const { frontmatter, page } = useData();
const isHome = frontmatter.value?.pageClass === "home-page";
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-before>
      <AcademicHome v-if="isHome" />
    </template>
    <template #not-found>
      <main class="fallback-page">
        <p class="eyebrow">Page not found</p>
        <h1>404</h1>
        <p class="section-intro">The requested page does not exist.</p>
        <a class="button button-primary" href="/">Return home</a>
      </main>
    </template>
  </DefaultTheme.Layout>
</template>
