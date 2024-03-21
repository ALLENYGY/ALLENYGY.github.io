---
layout: page
title:  目录
permalink: /contents
jekyll-theme-ObJekyll:
  default:
    sidebar:
      open: true
---

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

## <i class="fa-solid fa-atom fa-fw"></i> 计算机组成原理

{% for tag in site.tags%}
{% if tag[0] == "CO" %}
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

## <i class="fa-solid fa-code fa-fw"></i> 编程语言

### <i class="fa-brands fa-java fa-fw"></i> Java

#### [Java Introduction](Program/Java/Lecture/Java-Introduction)

#### [Unified Modeling Language](Program/Java/Lecture/Unified-Modeling-Language)

#### [Java Programming Essentials](Program/Java/Lecture/Java-Programming-Essentials)

#### [Creating Java Classes](Program/Java/Lecture/Creating-Java-Classes)

#### [Inheritance](Program/Java/Lecture/Inheritance)

#### [Abstract Methods and Classes Interfaces](Program/Java/Lecture/Abstract-Methods-and-Classes-Interfaces)

#### [Exception Handling](Program/Java/Lecture/Exception-Handling)

#### [Array and Generics](Program/Java/Lecture/Array-and-Generics)

### <i class="fa-brands fa-python fa-fw"></i> Python

#### [Python Basic](Program/Python/PythonBasic)

### <i class="fa-brands fa-r-project fa-fw"></i> R

#### [R Basic](Program/R/Basic-R)

#### [R Data Structure](Program/R/R-Data-Structure)

### <i class="fa-brands fa-cuttlefish fa-fw"></i> C

#### [C Macro](Program/C/Macro)
