<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vitepress'
import { parseToText } from '../../../theme/utils/markdown'

interface Post {
  title: string
  path: string
  content: string
}

const props = defineProps({
  post: { type: Object as PropType<Post>, default: null }
})

const router = useRouter()
const content = computed(() => parseToText(props.post.content))

function handleClick() {
  router.go(props.post.path)
}
</script>

<template>
  <div class="AppPostCard" @click="handleClick()">
    <div class="title">
      <a :href="post.path">
        {{ post.title }}
      </a>
    </div>
    <div class="content">{{ content }}</div>
  </div>
</template>

<style scoped lang="postcss">
.AppPostCard {
  border-radius: 4px;
  padding: 8px 16px;
  background-color: var(--c-white);
  box-shadow: 2px 2px 8px var(--c-border-subtle);

  &:hover {
    cursor: pointer;
    box-shadow: 2px 4px 16px var(--c-border-subtle);
  }
}

.title {
  font-size: 16px;
  font-weight: 500;
  color: var(--c-blue);
}

.content {
  display: -webkit-box;
  overflow: hidden;
  line-height: 20px;
  font-size: 14px;
  color: var(--c-text-light-1);

  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
