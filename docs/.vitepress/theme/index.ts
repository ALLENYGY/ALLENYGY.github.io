import type { Theme } from "vitepress";
import Layout from "./Layout.vue";
import AcademicHome from "./AcademicHome.vue";
import "./style.css";

export default {
  Layout,
  enhanceApp({ app }) {
    app.component("AcademicHome", AcademicHome);
  },
} satisfies Theme;
