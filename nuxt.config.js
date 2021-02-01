import { resolve } from 'path'
import { readdirSync, lstatSync, link } from 'fs'
import postData from './tools/data/posts.json'
import cateData from './tools/data/categories.json'
import config from './config/custom'

// set folders in root dir alias
const ignoreFolders = new Set(['.nuxt', 'node_modules'])
const rootFolderAlias = readdirSync(resolve(__dirname))
  .filter(v => !ignoreFolders.has(v))
  .map(v => [`@${v}`, resolve(__dirname, v)])
  .filter(([alias, path]) => lstatSync(path).isDirectory())
  .reduce((pre, [alias, path]) => ({ ...pre, [alias]: path }), {})

// config static pages
const rawData = {
  'categories': cateData,
  'posts': postData
}
const routes = Object.entries(rawData).map(([routeName, routeData]) => {
  return Object.keys(routeData).map(v => `/${routeName}/${v}`)
}).reduce((pre, cur) => pre.concat(cur), [])

// config head links
const links = config.head.filter((v) => v[0] === "link").map((v) => v[1]);

export default {
  alias: {
    ...rootFolderAlias
  },
  head: {
    script: [
      {
        charset: "utf-8",
        src:
          "//cdn.jsdelivr.net/npm/busuanzi@2.3.0/bsz.pure.mini.min.js",
        async: true,
      },
    ],
    link: links
  },
  generate: [...routes],
  plugins: [
    '@plugins/vssue.js'
  ],
  build: {
    transpile: ['vssue'],
  },
}