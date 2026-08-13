---
layout: home
pageClass: home-page
lastUpdated: false
title: Junya Yang | Homepage
description: Junya Yang's homepage covering bioinformatics, computational biology, AI agents, selected projects, and technical notes.
head:
  - - meta
    - name: author
      content: Junya Yang
  - - meta
    - property: og:title
      content: Junya Yang | Homepage
  - - meta
    - property: og:description
      content: Bioinformatics, computational biology, AI agents, selected projects, and technical notes by Junya Yang.
brand: Junya Yang
navigation:
  - text: Research
    link: "#research"
  - text: Projects
    link: "#projects"
  - text: Notes
    link: "#notes"
  - text: Contact
    link: "#contact"
  - text: Blog
    link: https://blog.allenygy.vip/
    external: true
hero:
  kicker: MSc Student · Researcher · Builder
  title: Junya Yang
  role: MSc student in Computer Science at The Chinese University of Hong Kong
  intro: >
    My research focuses on bioinformatics, computational biology, and AI agents.
    This site brings together my research work, software projects, and a growing
    public collection of technical notes.
  actions:
    - text: Research interests
      link: "#research"
      primary: true
    - text: Selected projects
      link: "#projects"
    - text: Read the blog
      link: https://blog.allenygy.vip/
      external: true
      quiet: true
  links:
    - type: github
      text: GitHub
      url: https://github.com/ALLENYGY
      external: true
    - type: blog
      text: blog.allenygy.vip
      url: https://blog.allenygy.vip
      external: true
    - type: location
      text: Hong Kong
profile:
  portrait: https://avatars.githubusercontent.com/u/121916671?v=4
  badge: AY
  focus:
    - Bioinformatics
    - Computational biology
    - AI agents
  metrics:
    - value: "50+"
      label: public notes
    - value: "12"
      label: topics
    - value: "2026"
      label: latest update
about:
  eyebrow: About
  title: About me.
  lead: >
    I am a master’s student in Computer Science at The Chinese University of Hong Kong.
    My current research interests center on bioinformatics, computational biology, and AI agents,
    with an emphasis on turning methods into useful and reproducible systems.
  body: >
    I learn in public. Alongside research prototypes, this website contains a growing archive
    of course notes, paper readings, derivations, experiments, and engineering projects. The
    goal is not merely to collect information, but to connect it into reusable understanding.
  principles:
    - number: "01"
      title: Understand deeply
      detail: Derive ideas instead of memorizing them.
    - number: "02"
      title: Build openly
      detail: Turn concepts into reproducible code and notes.
    - number: "03"
      title: Connect fields
      detail: Look for shared structure across disciplines.
research:
  eyebrow: Research interests
  title: Questions I keep returning to.
  aside: >
    An evolving set of directions reflected in my notes and repositories.
  areas:
    - number: "01"
      tone: blue
      title: Bioinformatics & single-cell analysis
      icon: network
      description: >
        Cell-specific networks, conditional cell-specific networks, network reconstruction,
        cfDNA data, and literature synthesis for computational biology.
      tags:
        - Biological data
        - Network inference
        - Machine learning
      link: https://blog.allenygy.vip/page/blog
      external: true
    - number: "02"
      tone: green
      title: Computational Biology
      icon: cell
      description: >
        Studying biological systems through models, algorithms, and cell-specific relationships
        that connect data with mechanism.
      tags:
        - Systems biology
        - Single-cell data
        - Computational modeling
      link: https://blog.allenygy.vip/page/blog
      external: true
    - number: "03"
      tone: violet
      title: AI Agents
      icon: agent
      description: >
        Building agentic systems that can plan, use tools, coordinate workflows, and support
        scientific and technical work.
      tags:
        - Agentic AI
        - Tool use
        - Workflow automation
      link: https://github.com/ALLENYGY/GAgent
      external: true
projects:
  eyebrow: Selected work
  title: Projects built to test ideas.
  items:
    - name: CSCN Demo
      type: Research prototype
      year: "2026"
      description: >
        A Python implementation and demonstration environment for exploring cell-specific
        causal network reconstruction.
      stack:
        - Python
        - Causal networks
        - Bioinformatics
      url: https://github.com/ALLENYGY/CSCN-Demo
      external: true
    - name: GAgent
      type: AI engineering
      year: "2025–2026"
      description: >
        Experiments in building an extensible agent system, with an emphasis on planning,
        tools, and practical workflows.
      stack:
        - Python
        - AI agents
        - Tool use
      url: https://github.com/ALLENYGY/GAgent
      external: true
    - name: Overshelf
      type: macOS application
      year: "2026"
      description: >
        A native macOS top-edge drawer that keeps frequently used items immediately within reach.
      stack:
        - macOS
        - Productivity
        - Native app
      url: https://github.com/ALLENYGY/overshelf
      external: true
    - name: Compiler Project
      type: Systems project
      year: "2024"
      description: >
        A course compiler implementation that turns language theory into a working
        parsing and translation pipeline.
      stack:
        - Python
        - Compiler design
        - Parsing
      url: https://github.com/ALLENYGY/COMP3173-Compiler-Project
      external: true
knowledge:
  eyebrow: Knowledge garden
  title: Notes that compound over time.
  archiveLink: https://blog.allenygy.vip/page/archive
  topics:
    - number: "01"
      name: Causality
      description: Causal structure, emergence, information, and graphical models.
      link: https://blog.allenygy.vip/page/blog
    - number: "02"
      name: Machine Learning
      description: Statistical learning, Bayesian methods, models, and evaluation.
      link: https://blog.allenygy.vip/page/blog
    - number: "03"
      name: Computer Vision
      description: Image formation, filtering, neural networks, and detection.
      link: https://blog.allenygy.vip/page/blog
    - number: "04"
      name: Systems
      description: Operating systems, networks, compilers, and computer architecture.
      link: https://blog.allenygy.vip/page/blog
    - number: "05"
      name: Algorithms
      description: Data structures, graph methods, strings, and problem solving.
      link: https://blog.allenygy.vip/page/blog
    - number: "06"
      name: Developer Tools
      description: Git, containers, shells, environments, and practical workflows.
      link: https://blog.allenygy.vip/page/blog
writing:
  eyebrow: Latest writing
  title: Recent notes and explorations.
  archiveLink: https://blog.allenygy.vip/page/blog
  items:
    - date: "2026-07-15"
      title: Chain-of-thought reasoning reading list
      tags:
        - LLM
        - Reasoning
        - Survey notes
      link: https://blog.allenygy.vip/page/blog
      external: true
    - date: "2026-06-20"
      title: CSCN network reconstruction
      tags:
        - Network reconstruction
        - Computational biology
      link: https://blog.allenygy.vip/page/blog
      external: true
    - date: "2026-05-10"
      title: Construction of cell-specific networks from scRNA-seq data
      tags:
        - Bioinformatics
        - scRNA-seq
        - Networks
      link: https://blog.allenygy.vip/page/blog
      external: true
    - date: "2025-12-01"
      title: Machine Learning Overview
      tags:
        - Machine Learning
      link: https://blog.allenygy.vip/page/blog
      external: true
    - date: "2025-10-15"
      title: Computer Vision Overview
      tags:
        - Computer Vision
      link: https://blog.allenygy.vip/page/blog
      external: true
  activity:
    label: Writing activity
    value: "50+ notes published"
    year: 2026
contact:
  eyebrow: Let's connect
  title: Interested in ideas, research, or building?
  body: >
    I am always happy to exchange notes, discuss a project, or meet people working
    on thoughtful technology.
  actions:
    - text: Connect on GitHub
      link: https://github.com/ALLENYGY
      external: true
      light: true
    - text: Read my notes
      link: https://blog.allenygy.vip/
      external: true
      outline: true
footer:
  name: Junya Yang
  location: Hong Kong · UTC+8
---

<AcademicHome />

<!--
This Markdown file is the homepage content source.
Edit the frontmatter above, commit, and push to main.
GitHub Actions will build and deploy the updated homepage automatically.
-->
