<script setup lang="ts">
import { PropType } from 'vue'

defineProps({
  items: { type: Array as PropType<any>, default: () => [] }
})
</script>

<template>
  <div class="BListGrid">
    <slot name="title" />

    <div 
      v-if="items.length > 0"
      class="container"
    >
      <div v-for="(item, i) in items" :key="i" class="item">
        <slot :item="item" />
      </div>
    </div>

    <div v-else>
      <p>There is no item.</p>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.container {
  display: flex;
}

.item {
  flex: 1;
}
</style>
