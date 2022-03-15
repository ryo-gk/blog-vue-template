import MarkdownIt from 'markdown-it'

export function parse(text: string) {
  const md = new MarkdownIt({
    linkify: true
  })

  return md.render(text)
}

export function parseToText(text: string) {
  return parse(text).replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'')
}

export function replaceMdToHtml(name: string) {
  return name.replace(/.md$/, '.html')
}
