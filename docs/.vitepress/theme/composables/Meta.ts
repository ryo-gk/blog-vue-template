import { useData, withBase } from 'vitepress'
import { HeadObject } from '@vueuse/head'
import { Ref } from 'vue'

export type OGPType = 'website' | 'blog' | 'article'

export interface OGPOptions {
  title: string
  description?: string
  url: string
  image?: string
  type: OGPType
}

export function useMetaOGP(options: OGPOptions): HeadObject {
  const { title } = useData()
  const head = {
    meta: [
      { property: 'og:title', content: options.title },
      options.description && { property: 'og:description', content: options.description },
      { property: 'og:url', content: options.url },
      options.image && { property: 'og:image', content: options.image },
      { property: 'og:type', content: options.type },
      { property: 'og:site_name', content: extractSiteTitle(title) },
      { name: 'twitter:card', content: 'summary' }
    ],
    htmlAttrs: {
      prefix: `og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# ${options.type}: http://ogp.me/ns/${options.type}#`
    }
  }
  return head
}

export function createAbsoletePath(relativePath: string) {
  return withBase(relativePath)
}

export function extractSiteTitle(title: Ref<string>) {
  return title.value.split('|').slice(-1)[0]
}
