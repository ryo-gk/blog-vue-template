import { EnhanceAppContext, Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { createHead } from '@vueuse/head'
import Layout from './layout/Layout.vue'
import './styles/base.css'

const CustomTheme: Theme = {
  ...DefaultTheme,
  Layout,
  NotFound: () => '404 page',
  enhanceApp: ({ app }: EnhanceAppContext) => {
    const head = createHead()
    app.use(head)
  }
}

export default CustomTheme
