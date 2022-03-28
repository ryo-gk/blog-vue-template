---
type: Post
title: How I use this template?
description: How to use this template.
image: /image/default.png
---

## What is this?
This is a template which helps to create blogs using markdown file.

Since this repo based on [Vitepress](https://vitepress.vuejs.org/), its official docs help you to understand this repo.

## Directory structure
Basically directory structure follows [Vitepress](https://vitepress.vuejs.org/).

I define some vue files which take responsible for page layout under `docs/.vitepress/theme/layout/`.
In the layout file, it uses component files which is under the `docs/.vitepress/theme/components/`.

## Post files
The blog posts need to be under the `docs/posts/` dir which is defined in the `docs/.vitepress/config.js` 

```js
const { getPostList } = require('vitepress-blog-util/scripts')

function getConfig() {
  return {
    ...
    themeConfig: {
      postList: getPostList('./docs/posts')
    },
    ...
  }
}

module.exports = getConfig()
```


