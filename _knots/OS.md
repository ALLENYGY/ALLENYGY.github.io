---
layout: page
title: 操作系统
permalink: /OS
jekyll-theme-ObJekyll:
  default:
    sidebar:
      open: false
  tags:
    vega_lite: # 显示一个统计图，需要引入 vega-lite
      enable: true
---

{% for tag in site.tags%}
{% if tag[0] == "OS" %}
{% assign sorted-posts = tag[1] | sort: 'created'|reverse %}
{% break %}
{% endif %}
{% endfor %}

{% assign lmonth = "1000-01" | date: "%b %Y" %}

{% for post in sorted-posts %}
{% assign month = post.created | date: "%b %Y" %}

{% if month != lmonth %}
## {{ month }}
{%assign lmonth = month %}
{% endif %}

{% if site.use_html_extension %}

- [{{ post.title }}]({{ post.url | relative_url | append: ".html"}}) *{{ post.created| date:"%d %b %Y" }}*
{% else %}
- [{{ post.title }}]({{ post.url | relative_url }}) *{{ post.created | date:"%d %b %Y" }}*
{% endif %}
{% endfor %}
