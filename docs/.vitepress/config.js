const { getPostList } = require('vitepress-blog-util/scripts')

function getConfig() {
  return {
    base: '/',
    title: 'Blog Vue template',
    description: 'Blog powered by Vue.js',
    themeConfig: {
      postList: getPostList('./docs/posts')
    },
    vite: {
      optimizeDeps: {
        include: [
          'markdown-it'
        ]
      }
    }
  }
}

module.exports = getConfig()
