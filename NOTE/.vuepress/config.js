// .vuepress/config.js
module.exports = {
  theme: "easy-book",
  // Fill in the webpage title in title
  title: "AllenYGY's Blog",
  head: [
    [
      "link",
      {
        rel: "icon",
        // href: "https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/Logo.jpg",
        // "https://gravatar.loli.net/avatar/b5ec443a5c6aa15be809bec3dde9e015?d=wavatar",
        // href:"https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/icon/allenygy-favicon-color.png",
        // href:"https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/icon/Logo.jpg",
        // href:"https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/icon/Logo-3.jpg",
        // href: "https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/icon/Logo-4.png",
        href: "https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/icon/mylogo.png",
        // href: "https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/icon/BLOG.png",

        // href:"https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/icon/allenygy-favicon-black.png",
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
    cta_title: "Welcome to my Blog!",
    cta_button: { name: "Start", link: "ProgramLanguage" },
    cta_link: {
      name: "My Adventure",
      link: "https://www.harkerbest.cn/p/781/",
    },
    cta_description_html: `      <span>
      The <span style="color: rgb(14 165 233)">AllenYGY'Blog</span> 
      lets you efficiently Learn personal knowledge computer science
       <span style="color: rgb(14 165 233)">with</span> zero basis, 
       which enables you to concentrate on the <span style="color: rgb(14 165 233)">notes</span> 
       and <span style="color: rgb(14 165 233)">knowledge</span> itself.
    </span>`,
    title: "MyBlog",
    // icon: "https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/Logo.jpg",
    // icon:"https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/icon/allenygy-favicon-color.png",
    // icon:"https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/icon/Logo.jpg",
    // icon:"https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/icon/Logo-3.jpg",
    // icon: "https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/icon/Logo-4.png",
    // icon: "https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/icon/BLOG.png",
    icon: "https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/icon/mylogo.png",

    // icon:"https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/icon/allenygy-favicon-black.png",
    // icon: "https://gravatar.loli.net/avatar/b5ec443a5c6aa15be809bec3dde9e015?d=wavatar",

    // nav: [
    nav: {
      计算机组成原理: {
        Computer: "CO/Lecture/Lec1",
        "Bits: Data Representation and Manipulation": "CO/Lecture/Lec2",
        "Boolean Algebra: From Bits to Logic": "CO/Lecture/Lec3",
        "From Transistors to Gates": "CO/Lecture/Lec4",
        "From Gates to Circuits I: Combinational Circuits": "CO/Lecture/Lec5",
        "From Gates to Circuits II: Sequential Circuits": "CO/Lecture/Lec6",
        "Finite State Machine": "CO/Lecture/Lec7",
        "Circuit Design": "CO/Lecture/CircuitDesign",
        Microarchitecture: "CO/Lecture/Lec8",
        "The LC-3 ISA": "CO/Lecture/Lec9",
      },
      编程语言: {
        Java: {
          "Java Introduction": "ProgramLanguage/Java/Lec0",
          "Unified Modeling Language": "ProgramLanguage/Java/Lec1",
          "Java Programming Essentials": "ProgramLanguage/Java/Lec2",
          "Creating Java Classes": "ProgramLanguage/Java/Lec3",
          Inheritance: "ProgramLanguage/Java/Lec4",
          "Abstract Methods and Classes Interfaces":
            "ProgramLanguage/Java/Lec5",
          "Exception Handeling": "ProgramLanguage/Java/Lec6",
          "Array and Generics": "ProgramLanguage/Java/Lec7",
        },
        R: {
          "R Basic": "ProgramLanguage/R/Lec1",
          "R Data Structure": "ProgramLanguage/R/Lec2",
        },
      },
      数学: "Math",
      数据库: {
        数据库设计: {
          "Entity-Relationship Model Modeling": "DBM/Lecture/Lec1",
          "Entity-Relationship Model Constraints": "DBM/Lecture/Lec2",
          "Entity-Relationship Model Extended Features": "DBM/Lecture/Lec3",
          "Design issue": "DBM/Lecture/Lec4",
          // "Design issue":"DBM/Lecture/Lec4",
          "Logical Design": "DBM/Lecture/Lec5",
          "KEY Concept": "DBM/Lecture/Key-concept",
        },
        MySQL: {
          "Basic MySQL": "DBM/MySQL/Lab1",
          "Cross table query": "DBM/MySQL/Lab2",
          Join: "DBM/MySQL/Lab3",
          Aggregation: "DBM/MySQL/Lab4",
          "Data Definition": "DBM/MySQL/Lab5",
          "Data Modification": "DBM/MySQL/Lab6",
          "NULL & Subquery": "DBM/MySQL/Lab7",
        },
      },
      // "DBM",
      数据分析: "DataAnalysis",
      其他: {
        Git: {
          "Git Introduction": "Others/Git/Git-Introduction",
          "Git Basic": "Others/Git/Git",
        },
        Conda: {
          "Basic Conda": "Others/Conda/Conda",
        },
      },
    },
    // { text: "计算机组成原理", link: "CO" },
    // { text: "编程语言", link: "ProgramLanguage" },
    // { text: "数学", link: "Math" },
    // { text: "数据库", link: "DBM" },
    // { text: "数据分析", link: "DataAnalysis" },
    // { text: "其他", link: "Others" },
    // { text: "MRJ多看看!!!", link: "MRJGYP" },
    // ],
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
        {
          text: "Circuit Design",
          link: "CO/Lecture/CircuitDesign",
        },
        {
          text: "Microarchitecture",
          link: "CO/Lecture/Lec8",
        },
        {
          text: "The LC-3 ISA",
          link: "CO/Lecture/Lec9",
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
        {
          text: "R",
          sublink: [
            { text: "R Basic", link: "ProgramLanguage/R/Lec1" },
            {
              text: "R Data Structure",
              link: "ProgramLanguage/R/Lec2",
            },
          ],
        },
        { text: "Python", link: "" },
      ],
      DBM: [
        {
          text: "DataBase Design",
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
            {
              text: "Design issue",
              link: "DBM/Lecture/Lec4",
            },
            {
              text: "Logical Design",
              link: "DBM/Lecture/Lec5",
            },
            {
              text: "KEY Concept",
              link: "DBM/Lecture/Key-concept",
            },
          ],
        },
        {
          text: "MySQL",
          sublink: [
            { text: "Basic MySQL", link: "DBM/MySQL/Lab1" },
            { text: "Cross table query", link: "DBM/MySQL/Lab2" },
            { text: "Join", link: "DBM/MySQL/Lab3" },
            { text: "Aggregation", link: "DBM/MySQL/Lab4" },
            { text: "Data Definition", link: "DBM/MySQL/Lab5" },
            { text: "Data Modification", link: "DBM/MySQL/Lab6" },
            { text: "NULL & Subquery", link: "DBM/MySQL/Lab7" },
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
      DataAnalysis: [
        { text: "Hands on Data For Every one", link: "DataAnalysis/HOD/HOD" },
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
          sublink: [{ text: "Basic Conda", link: "Others/Conda/Conda" }],
        },
      ],
    },
    editurl: "https://github.com/ALLENYGY/ALLENYGY.github.io/blob/master/NOTE",
    footer: "MIT Licensed | Copyright © 2023-present AllenYGY",
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
        img_url: "https://easy-book.open17.vip/logo2.png",
        title: "GYP",
        description: "v1.2.x",
        link: "https://vuepress-theme-easy-book.vercel.app/",
      },
    ],
    lock_password: "040301",
  },
};
