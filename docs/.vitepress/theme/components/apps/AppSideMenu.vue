<script setup lang="ts">
import { PropType } from 'vue'
import { useData } from 'vitepress'
import { usePostList } from 'vitepress-blog-util'
import BList from '../BList.vue'

const { theme } = useData()
const _menus = usePostList(theme).map(post => ({
  title: post.frontmatter.title,
  path: post.path.slice(1)
}))

const menus = [
  { title: 'Vue', link: 'https://vuejs.org/' },
  { title: 'Vite', link: 'https://vitejs.dev/' },
  { title: 'VitePress', link: 'https://vitepress.vuejs.org/' }
]
</script>

<template>
  <div class="AppSideMenu">
    <BList
      class="menu-links"
      :items="menus"
    >
      <template #title>
        <p class="menu-links-title">Links</p>
      </template>

      <template #default="{ item }">
        <a class="menu-links-item" :href="item.link" target="_blank" rel="noopener noreferrer">
          <p class="menu-links-item--text">{{ item.title }}</p>
        </a>
      </template>
    </BList>
  </div>
</template>

<style lang="postcss" scoped>
.AppSideMenu {
  min-height: calc(100vh - 56px);
  padding: 16px 16px;
  font-size: 16px;
}

.menu-links {
  border-radius: 4px;
  padding: 8px 16px;
  background-color: var(--c-white);
  box-shadow: 2px 2px 8px var(--c-border-subtle);
}

.menu-links-title {
  font-size: 16px;
  font-weight: 500;
}

.menu-links-item {
  display: block;
  padding: 6px 0;

  &:hover {
    cursor: pointer;
  }
}

.menu-links-item--text {
  height: 16px;
  line-height: 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--c-blue);

  &:hover {
    color: var(--c-blue-lighten-2);
  }

  &:before {
    content: '・'
  }
}
</style>
