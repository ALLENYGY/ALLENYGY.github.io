// .vuepress/config.js
module.exports = {
  theme: "easy-book",
  // Fill in the webpage title in title
  title: "MyNote",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "NOTE/Logo/Logo.png",
        // href: "https://gravatar.loli.net/avatar/b5ec443a5c6aa15be809bec3dde9e015?d=wavatar",
      },
    ],
    [
      "script",
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?92a7e3e263e28dfdb6b2003a7f97b194";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`,
    ],
  ],

  markdown: {
    extractHeaders: ["h2", "h3", "h4", "h5"],
  },
  themeConfig: {
    hero_title: "Welcome to my Blog!",
    hero_button: { name: "Start", link: "ProgramLanguage" },
    hero_link: {
      name: "My Adventure",
      link: "https://www.harkerbest.cn/p/781/",
    },
    hero_description_html: `      <span>
      The <span style="color: rgb(14 165 233)">AllenYGY'Blog</span> 
      lets you efficiently Learn personal knowledge computer science
       <span style="color: rgb(14 165 233)">with</span> zero basis, 
       which enables you to concentrate on the <span style="color: rgb(14 165 233)">notes</span> 
       and <span style="color: rgb(14 165 233)">knowledge</span> itself.
    </span>`,
    title: "MyBlog",
    icon:'https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/Logo.jpg',
    // icon: "https://gravatar.loli.net/avatar/b5ec443a5c6aa15be809bec3dde9e015?d=wavatar",

    nav: [
      { text: "计算机组成原理", link: "CO" },
      { text: "编程语言", link: "ProgramLanguage" },
      { text: "数学", link: "Math" },
      { text: "数据库", link: "DBM" },
      { text: "其他", link: "Others" },
      // { text: "MRJ多看看!!!", link: "MRJGYP" },
    ],
    group: {
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
        {
          text: "From Gates to Circuits I: Combinational Circuits",
          link: "CO/Lecture/Lec5",
        },
        {
          text: "From Gates to Circuits II: Sequential Circuits",
          link: "CO/Lecture/Lec6",
        },
        {
          text: "Finite State Machine",
          link: "CO/Lecture/Lec7",
        },
      ],
      ProgramLanguage: [
        {
          text: "Java",
          sublink: [
            { text: "Java Introduction", link: "ProgramLanguage/Java/Lec0" },
            {
              text: "Unified Modeling Language",
              link: "ProgramLanguage/Java/Lec1",
            },
            {
              text: "Java Programming Essentials",
              link: "ProgramLanguage/Java/Lec2",
            },
            {
              text: "Creating Java Classes",
              link: "ProgramLanguage/Java/Lec3",
            },
            { text: "Inheritance", link: "ProgramLanguage/Java/Lec4" },
            {
              text: "Abstract Methods and Classes Interfaces",
              link: "ProgramLanguage/Java/Lec5",
            },
            { text: "Exception Handeling", link: "ProgramLanguage/Java/Lec6" },
            { text: "Array and Generics", link: "ProgramLanguage/Java/Lec7" },
          ],
        },
        { text: "Cpp", link: "" },
        { text: "Python", link: "" },
      ],
      DBM: [
        {
          text: "数据库设计",
          sublink: [
            {
              text: "Entity-Relationship Model Modeling",
              link: "DBM/Lecture/Lec1",
            },
            {
              text: "Entity-Relationship Model Constraints",
              link: "DBM/Lecture/Lec2",
            },
            {
              text: "Entity-Relationship Model Extended Features",
              link: "DBM/Lecture/Lec3",
            },
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
            { text: "Vector Spaces", link: "Math/Linear-Algebra/Chapter1" },
            {
              text: "Linear Transformations",
              link: "Math/Linear-Algebra/Chapter2",
            },
            { text: "Orthogonality", link: "Math/Linear-Algebra/Chapter3" },
            {
              text: "Eigenvalues and Eigenvectors",
              link: "Math/Linear-Algebra/Chapter4",
            },
          ],
        },
        { text: "离散数学", link: "" },
        { text: "概率统计", link: "" },
      ],
      Others: [
        {
          text: "Git",
          sublink: [
            { text: "Git Introduction", link: "Others/Git/Git-Introduction" },
            {
              text: "Git Basic",
              link: "Others/Git/Git",
            },
          ],
        },
        {
          text: "Conda",
          sublink: [
            { text: "Basic Conda", link: "Others/Conda/Conda" },
            
          ],
        },
      ],
    },
    editurl: "https://github.com/ALLENYGY/ALLENYGY.github.io/blob/master/NOTE",
    footer_html: `<div style="align-items: center;text-align: center;">
      <p>MIT Licensed | Copyright © 2023-present AllenYGY</p>
  </div><br/><br/>`,
    card_group: [
      {
        img_url:
          "https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/icon/computer.png",
        title: "Computer Organization",
        description: "v1.2.x",
        link: "CO",
      },
      {
        img_url:
          "https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/java-icon.png",
        title: "Program Language",
        description: "v1.2.x",
        link: "ProgramLanguage",
      },
      {
        img_url:
          "https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/icon/mathematica.png",
        title: "Mathematica",
        description: "v1.2.x",
        link: "Math",
      },
      {
        img_url:
          "https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/icon/data-check.png",
        title: "DataBase Management",
        description: "v1.2.x",
        link: "DBM",
      },
      {
        img_url:
          "https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/icon/-book-.png",
        title: "Adventure",
        description: "v1.2.x",
        link: "https://www.harkerbest.cn/p/781/",
      },
      {
        img_url:
          "https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/icon/logo.png",
        title: "GYP",
        description: "v1.2.x",
        link: "https://open17.github.io/vuepress-theme-easy-book/",
      },
    ],
    lock_password: "040301",
  },
};
