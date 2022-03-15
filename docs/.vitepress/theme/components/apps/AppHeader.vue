<script setup lang="ts">
</script>

<template>
  <div class="AppHeader">
    <a class="title" href="/">
      Blog Vue Template
    </a>
  </div>
</template>

<style scoped lang="postcss">
.AppHeader {
  display: flex;
  height: 56px;
  line-height: 56px;
  padding: 0 32px;
  font-size: 24px;
  background-color: var(--c-white);
  box-shadow: 2px 2px 2px var(--c-border-subtle);
}

.title:hover {
  color: var(--c-text);
}
</style>