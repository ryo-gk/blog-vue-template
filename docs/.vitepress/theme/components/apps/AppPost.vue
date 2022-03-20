<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { useHead } from '@vueuse/head'
import { replaceMdToHtml } from '../../utils/markdown'
import { createAbsoletePath, useMetaOGP } from '../../composables/Meta'

const data = useData()
const fm = data.frontmatter.value
const title = data.title.value.split(' | ')[0] 

const ogp = useMetaOGP({
  title: data.title.value,
  description: fm.description,
  url: createAbsoletePath(replaceMdToHtml(data.page.value.relativePath)),
  image: createAbsoletePath(fm?.image ?? ''),
  type: 'article'
})

const head = useHead({
  ...ogp
})
</script>

<template>
  <div class="AppPost">
    <div class="title">
      {{ title }}
    </div>

    <Content />
  </div>
</template>

<style>
.AppPost {
  width: 80%;
  margin: 32px auto;
  border-radius: 4px;
  padding: 48px 32px;
  box-shadow: 2px 2px 12px var(--c-border-subtle);
  background-color: var(--c-white);

  .title {
    margin: 8px 0 32px;
    font-size: 32px;
    font-weight: 500;
  }

  h1 {
    margin: 16px 0 8px;
    font-size: 24px;
    font-weight: 500;
  }

  h2 { 
    margin: 16px 0 8px; 
    font-size: 19px;
  }

  h3 {
    margin: 12px 0 4px;
    font-size: 17px;
    font-weight: 500;
  }

  p > code {
    padding: 1px 6px; 
    font-size: 14px;
    color: var(--c-blue-lighten-1);
    background-color: #f1f1f1;
    word-break: break-all;
  }

  a {
    color: var(--c-blue-darken-3);
    text-decoration: underline;

    &:hover {
      color: var(--c-blue-lighten-1);
      text-decoration: underline;
    }
  }
}
</style>