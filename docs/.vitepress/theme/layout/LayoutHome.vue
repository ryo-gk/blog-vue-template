<script setup lang="ts">
import { useData } from 'vitepress'
import { useHead } from '@vueuse/head'
import { replaceMdToHtml } from '../utils/markdown'
import { createAbsoletePath, useMetaOGP } from '../composables/Meta'
import TwoColumnLayout from '../components/layouts/TwoColumnLayout.vue'
import TwoColumnLayoutContainer from '../components/layouts/TwoColumnLayoutContainer.vue'
import AppSideMenu from '../components/apps/AppSideMenu.vue'
import AppPostList from '../components/apps/AppPostList.vue'
import AppHeader from '../components/apps/AppHeader.vue'

const data = useData()
const fm = data.frontmatter.value
const title = data.title.value.split(' | ')[0] 

const ogp = useMetaOGP({
  title: data.title.value,
  description: data.description.value,
  url: createAbsoletePath(replaceMdToHtml(data.page.value.relativePath)),
  image: createAbsoletePath('image/default.png'),
  type: 'blog'
})

const head = useHead({
  ...ogp
})

</script>

<template>
  <TwoColumnLayout>
    <template #header>
      <AppHeader />
    </template>

    <TwoColumnLayoutContainer class="main">
      <AppPostList />
    </TwoColumnLayoutContainer>

    <TwoColumnLayoutContainer class="side">
      <AppSideMenu />
    </TwoColumnLayoutContainer>
  </TwoColumnLayout>
</template>

<style lang="postcss" scoped>
.main {
  @media (min-width: 728px) {
    width: 100%;
    padding: 16px 32px;
  }
}

.side {
  @media (min-width: 728px) {
    width: 260px;
    border-left: 1px solid var(--c-border-subtle);
  }
}
</style>