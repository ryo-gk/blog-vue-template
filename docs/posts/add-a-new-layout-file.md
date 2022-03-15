---
type: Post
title: Add a new layout file
---

## What you do when you want to add a new layout file
When you need an additional layout, you can place the layout file on `./docs/.vitepress/theme/layout/`.

And difine the routing in the `./docs/.vitepress/theme/layout/Layout.vue` like this.

```js
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
```
