<script setup lang="ts">
import { PropType } from 'vue'
import { useData } from 'vitepress'
import { usePostList } from 'vitepress-blog-util'
import BList from '../BList.vue'
import AppPostCard from './AppPostCard.vue'

const { theme } = useData()
const posts = usePostList(theme).map(post => {
  return {
    title: post.frontmatter.title,
    path: post.path.slice(1),
    content: post.content
  }
})
</script>

<template>
  <BList
    :items="posts"
  >
    <template #default="{ item }">
      <AppPostCard class="card" :post="item" />
    </template>
  </BList>
</template>

<style scoped lang="postcss">
.card {
  margin: 8px 16px;
}
</style>
