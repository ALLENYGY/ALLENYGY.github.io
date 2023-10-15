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
      { text: "计算机组成原理", link: "CO" },
    ],
    group: {
      Math: [
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
      CO: [
        { text: "Computer", link: "CO/Lecture/Lec1" },
        { text: "Bits: Data Representation and Manipulation", link: "CO/Lecture/Lec2" },
        { text: "Boolean Algebra: From Bits to Logic", link: "CO/Lecture/Lec3" },
        { text: "From Transistors to Gates", link: "CO/Lecture/Lec4" },
      ],
    },
    editurl:
      "https://github.com/open17/vuepress-theme-easy-book/blob/master/example",
  },
};
