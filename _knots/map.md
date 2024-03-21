---
layout: page
title: 图谱
date: 2024-03-20 21:48:33 +0800,周四
lastmod: 2022-03-21 22:06:07 +0800,周四
permalink: /map
jekyll-theme-ObJekyll:
  default:
    sidebar:
      open: false
---

<style>
  .tagcloud {
    background-color: #f0f0f0; /* 浅灰色背景 */
    padding: 20px; /* 添加一些内边距 */
    border-radius: 8px; /* 圆角边框 */
  }
  .tag-color-1 { color: #e57373; }
  .tag-color-2 { color: #64b5f6; }
  .tag-color-3 { color: #81c784; }
  .tag-color-4 { color: #ffd54f; }
  .tag-color-5 { color: #ba68c8; }
/* 添加更多颜色以增加多样性 */

</style>

{% assign all_tags = site.tags|size %}
<div class="tagcloud">
  {% for tag in site.tags %}
    {% assign tag_name = tag|first %}
    {% assign tag_count = tag|last|size %}
    {% assign tag_avg = tag_count | div: all_tags %}
    {% assign color_class = "tag-color-" | append: forloop.index | modulo: 5 %}
    {% assign color_index = forloop.index | modulo: 5 %} <!-- 假设有5种颜色 -->
    {% assign color_class = "tag-color-" | append: color_index %}
    <span class="tag {{color_class}}" style="font-size: {{ tag_avg | times: 20 }}%;">{{ tag_name }}</span>{% if false %} ({{ tag_count }})
    {% endif %}
  {% endfor %}
</div>

{% include notes_graph.html %}
