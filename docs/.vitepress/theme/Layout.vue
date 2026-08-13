<script setup lang="ts">
import { useData } from "vitepress";
import AcademicHome from "./AcademicHome.vue";

const { frontmatter, page } = useData();
</script>

<template>
  <AcademicHome v-if="frontmatter.layout === 'academic-home'" />
  <main v-else class="fallback-page">
    <template v-if="page.isNotFound">
      <p class="eyebrow">Page not found</p>
      <h1>404</h1>
      <p class="section-intro">The requested page does not exist.</p>
      <a class="button button-primary" href="/">Return home</a>
    </template>
    <Content v-else />
  </main>
</template>
