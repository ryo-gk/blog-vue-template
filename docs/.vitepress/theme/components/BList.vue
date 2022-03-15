<script setup lang="ts">
import { PropType } from 'vue'

defineProps({
  items: { type: Array as PropType<any>, default: () => [] }
})
</script>

<template>
  <div class="BList">
    <slot name="title" />

    <ul v-if="items.length > 0">
      <li v-for="(item, i) in items" :key="i">
        <slot :item="item" />
      </li>
    </ul>

    <div v-else>
      <p>There is no item.</p>
    </div>
  </div>
</template>
