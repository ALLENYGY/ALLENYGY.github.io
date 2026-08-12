<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
import AcademicHome from "./AcademicHome.vue";

const { frontmatter } = useData();
const { Layout: DefaultLayout } = DefaultTheme;
</script>

<template>
  <AcademicHome v-if="frontmatter.layout === 'academic-home'" />
  <DefaultLayout v-else />
</template>
