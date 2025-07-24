---
layout: doc
layoutClass: m-nav-layout
sidebar: false
prev: false
next: false
outline: [2, 3, 4]
---

<style src="/.vitepress/theme/style/nav.css"></style>

<script setup>
import { NAV_DATA } from '/.vitepress/theme/untils/data'
</script>

# Awesome Class Softwares

<ArticleMetadata />
<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

<div align="center">
本站总访问量 <span id="busuanzi_value_site_pv" /> 次 | 本站访客数 <span id="busuanzi_value_site_uv" /> 人次
</div>