// .vuepress/config.js
module.exports = {
  theme: "easy-book",
  // Fill in the webpage title in title
  title: "MyNote",
  head:[
    ['link', { rel: 'icon', href: 'https://gravatar.loli.net/avatar/b5ec443a5c6aa15be809bec3dde9e015?d=wavatar' }]
  ],
  markdown: {
    extractHeaders: ["h2", "h3", "h4", "h5"],
  },
  themeConfig: {
    title:"MyBlog",
    icon:"https://gravatar.loli.net/avatar/b5ec443a5c6aa15be809bec3dde9e015?d=wavatar",
    nav: [
      { text: "编程语言", link: "ProgramLanguage" },
      { text: "计算机组成原理", link: "CO" },
      { text: "数据库", link: "DBM" },
      { text: "数学", link: "Math" },
    ],
    group: {
      ProgramLanguage: [
        {
          text: "Java",
          sublink: [
            { text: "Chapter1", link: "ProgramLanguage/Java/Lec0" },
            { text: "Chapter2", link: "ProgramLanguage/Java/Lec1" },
            { text: "Chapter3", link: "ProgramLanguage/Java/Lec2" },
            { text: "Chapter4", link: "ProgramLanguage/Java/Lec3" },
            { text: "Chapter5", link: "ProgramLanguage/Java/Lec4" },
            { text: "Chapter5", link: "ProgramLanguage/Java/Lec5" },
            { text: "Chapter5", link: "ProgramLanguage/Java/Lec6" },
            { text: "Chapter5", link: "ProgramLanguage/Java/Lec7" },
          ],
        },
        { text: "Cpp", link: "" },
        { text: "Python", link: "" },
      ],
      DBM: [
        {
          text: "数据库设计",
          sublink: [
            { text: "Chapter1", link: "DBM/Lecture/Lec1" },
            { text: "Chapter2", link: "DBM/Lecture/Lec2" },
            { text: "Chapter3", link: "DBM/Lecture/Lec3" },
          ],
        },
        {
          text: "Mysql",
          sublink: [
            { text: "Chapter1", link: "DBM/Lecture/Lec1" },
            { text: "Chapter2", link: "DBM/Lecture/Lec2" },
            { text: "Chapter3", link: "DBM/Lecture/Lec3" },
          ],
        },
      ],
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
        {
          text: "Bits: Data Representation and Manipulation",
          link: "CO/Lecture/Lec2",
        },
        {
          text: "Boolean Algebra: From Bits to Logic",
          link: "CO/Lecture/Lec3",
        },
        { text: "From Transistors to Gates", link: "CO/Lecture/Lec4" },
      ],
    },
    editurl: "https://github.com/ALLENYGY/ALLENYGY.github.io/blob/master/NOTE",
    footer_html: `<div style="align-items: center;text-align: center;">
      <p>MIT Licensed | Copyright © 2023-present AllenYGY</p>
  </div><br/><br/>`,
  },
};
