---
layout: page
title: 归档
created: 2024-03-20
updated: 2024-03-22
permalink: /archive
jekyll-theme-ObJekyll:
  default:
    sidebar:
      open: false
    tags:
      vega_lite: # 显示一个统计图，需要引入 vega-lite
        enable: true
---

已写下 {{ site.notes.size }} 篇，长路漫漫！
```vega-lite
{
  "data": { "url": "{{ site.baseurl }}/assets/simple-jekyll-search/search.json" },
  "encoding": {
    "y": {"field": "date", "timeUnit": "month", "type": "ordinal"},
    "x": {"field": "date", "timeUnit": "year"},
    "color": {"field": "date", "aggregate": "count"}
  },
  "mark": "rect"
}
```

{% assign lmonth = "1000-01" | date: "%b %Y" %}
{% assign sorted_notes = site.notes | sort: 'created' | reverse %}

{% for post in  sorted_notes %}
{% unless post.title contains '.excalidraw' %}
{% assign month = post.created | date: "%b %Y" %}
{% if month != lmonth %}
## {{ month }}
{%assign lmonth = month %}
{% endif %}
{% if site.use_html_extension %}

- _{{ post.created | date:"%d %b" }}_ [{{ post.title }}]({{ post.url | relative_url | append: ".html" }})
{% else %}
- _{{ post.created | date:"%d %b" }}_ [{{ post.title }}]({{ post.url | relative_url }})
{% endif %}
{% endunless %}
{% endfor %}
