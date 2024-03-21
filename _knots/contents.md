---
layout: page
title:  <i class="fa-solid fa-book fa-fw"></i> 目录
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
