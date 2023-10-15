// .vuepress/config.js
module.exports = {
  theme: "easy-book",
  // Fill in the webpage title in title
  title: "MyNote",
  markdown: {
    extractHeaders: ["h2", "h3", "h4", "h5"],
  },
  themeConfig: {
    nav: [
      { text: "编程语言", link: "" },
      { text: "数学", link: "Math" },
      { text: "数据库", link: "" },
    ],
    group: {
      "Math": [
        {
          text: "线性代数",
          sublink: [
            { text: "Chapter1", link: "Math/Linear-Algebra/Chapter1" },
            { text: "Chapter3", link: "Math/Linear-Algebra/Chapter2" },
            { text: "Chapter3", link: "Math/Linear-Algebra/Chapter3" },
            { text: "Chapter4", link: "Math/Linear-Algebra/Chapter4" },
          ],
        },
        { text: "离散数学", link: "" },
        { text: "概率统计", link: "" },
      ],
    },
    editurl:
      "https://github.com/open17/vuepress-theme-easy-book/blob/master/example",
  },
};
