<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
</script>

<template>
  <DefaultTheme.Layout>
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
