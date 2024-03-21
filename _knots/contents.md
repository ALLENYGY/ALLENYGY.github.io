---
layout: home
title:  目录
permalink: /contents
jekyll-theme-ObJekyll:
  default:
    sidebar:
      open: true
---

## <i class="fa-solid fa-book fa-fw"></i> 目录

- <i class="fa-solid fa-laptop fa-fw"></i> 操作系统
- <i class="fa-solid fa-network-wired"></i> 计算机网络
- <i class="fa-solid fa-atom fa-fw"></i> 计算机组成原理
- <i class="fa-solid fa-code fa-fw"></i> 编程语言

<!-- .slide -->

## <i class="fa-solid fa-laptop fa-fw"></i> 操作系统

{% for tag in site.tags%}
{% if tag[0] == "OS" %}
{% assign sorted-posts = tag[1] | sort: 'created'|reverse %}
{% break %}
{% endif %}
{% endfor %}

{% for post in sorted-posts %}

{% if site.use_html_extension %}

- [{{ post.title }}]({{ post.url | relative_url | append: ".html"}})
{% else %}
- [{{ post.title }}]({{ post.url | relative_url }})
{% endif %}
{% endfor %}

<!-- .slide -->

## <i class="fa-solid fa-network-wired"></i> 计算机网络

{% for tag in site.tags%}
{% if tag[0] == "Network" %}
{% assign sorted-posts = tag[1] | sort: 'created'|reverse %}
{% break %}
{% endif %}
{% endfor %}

{% for post in sorted-posts %}

{% if site.use_html_extension %}

- [{{ post.title }}]({{ post.url | relative_url | append: ".html"}})
{% else %}
- [{{ post.title }}]({{ post.url | relative_url }})
{% endif %}
{% endfor %}

<!-- .slide -->

## <i class="fa-solid fa-atom fa-fw"></i> 计算机组成原理

##### [What-is-a-Computer](CO/Lecture/Bits-Data-Representation-and-Manipulation)

##### [Bits: Data Representation and Manipulation](CO/Lecture/Bits-Data-Representation-and-Manipulation)

##### [Boolean Algebra: From Bits to Logic](CO/Lecture/Boolean-Algebra-From-Bits-to-Logic)

##### [From Transistors to Gates](CO/Lecture/From-Transistors-to-Gates)

<!-- .slide vertical=true -->

## <i class="fa-solid fa-atom fa-fw"></i>  计算机组成原理

##### [From Gates to Circuits I: Combinational Circuits](CO/Lecture/From-Gates-to-Circuits-I-Combinational-Circuits)

##### [From Gates to Circuits II: Sequential Circuits](CO/Lecture/From-Gates-to-Circuits-II-Sequential-Circuits)

##### [Finite State Machine](CO/Lecture/Finite-State-Machine)

##### [Circuit Design](CO/Lecture/Lecture/CircuitDesign)

##### [Microarchitecture](CO/Lecture/Microarchitecture)

##### [The LC-3 ISA](CO/Lecture/ISA)

<!-- .slide -->

## <i class="fa-solid fa-code fa-fw"></i> 编程语言

- <i class="fa-brands fa-java fa-fw"></i> Java
- <i class="fa-brands fa-python fa-fw"></i> Python
- <i class="fa-brands fa-r-project fa-fw"></i> R
- <i class="fa-brands fa-cuttlefish fa-fw"></i> C

<!-- .slide -->

### <i class="fa-brands fa-java fa-fw"></i> Java

#### [Java Introduction](Program/Java/Lecture/Java-Introduction)

#### [Unified Modeling Language](Program/Java/Lecture/Unified-Modeling-Language)

#### [Java Programming Essentials](Program/Java/Lecture/Java-Programming-Essentials)

#### [Creating Java Classes](Program/Java/Lecture/Creating-Java-Classes)

#### [Inheritance](Program/Java/Lecture/Inheritance)

#### [Abstract Methods and Classes Interfaces](Program/Java/Lecture/Abstract-Methods-and-Classes-Interfaces)

#### [Exception Handling](Program/Java/Lecture/Exception-Handling)

#### [Array and Generics](Program/Java/Lecture/Array-and-Generics)

<!-- .slide vertical=true -->

### <i class="fa-brands fa-python fa-fw"></i> Python

#### [Python Basic](Program/Python/PythonBasic)

<!-- .slide vertical=true -->

### <i class="fa-brands fa-r-project fa-fw"></i> R

#### [R Basic](Program/R/Basic-R)

#### [R Data Structure](Program/R/R-Data-Structure)

<!-- .slide vertical=true -->

### <i class="fa-brands fa-cuttlefish fa-fw"></i> C

#### [C Macro](Program/C/Macro)
