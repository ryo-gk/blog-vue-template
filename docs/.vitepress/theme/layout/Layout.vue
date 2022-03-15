<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import LayoutPlane from './LayoutPlane.vue'
import LayoutHome from './LayoutHome.vue'
import LayoutPost from './LayoutPost.vue'

type LayoutType = 'Plane' | 'Home' | 'Post'

const { frontmatter } = useData()
const type: Ref<LayoutType> = computed(() => frontmatter.value.type)

const component = computed(() => {
  switch (type.value) {
    case 'Plane':
      return LayoutPlane
    case 'Home':
      return LayoutHome
    case 'Post':
      return LayoutPost
    default:
      return LayoutPlane
  }
})
</script>

<template>
  <div>
    <component :is="component" :data="frontmatter" />
  </div>  
</template>
