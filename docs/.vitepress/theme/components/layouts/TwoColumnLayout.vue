<template>
  <div class="TwoColumnLayout">
    <slot name="header" />
    <div class="body">
      <slot />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.body {
  display: flex;
}
</style>
