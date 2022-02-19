import { resolve } from 'path'
import { readdirSync, lstatSync, link } from 'fs'
import postData from './tools/data/posts.json'
import cateData from './tools/data/categories.json'
import config from './config/global'

// set folders in root dir alias
const ignoreFolders = new Set(['.nuxt', 'node_modules'])
const rootFolderAlias = readdirSync(resolve(__dirname)) // read files
  .filter(v => !ignoreFolders.has(v)) // ignore folders
  .map(v => [`@${v}`, resolve(__dirname, v)]) // get full path
  .filter(([alias, path]) => lstatSync(path).isDirectory()) // filter folders
  .reduce((pre, [alias, path]) => ({ ...pre, [alias]: path }), {}) // make alias

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
          "//cdn.jsdelivr.net/npm/busuanzi@2.3.0/bsz.pure.mini.min.js", // page count service
        async: true,
      },
    ],
    meta: [{
      name: 'referrer',
      content: 'no-referrer-when-downgrade'
    }],
    link: links,
  },
  router: {
    base: config.base || '/'
  },
  generate: [...routes],
  plugins: [
    { src: '~/plugins/vssue', mode: 'client' }
  ],

  // Vssue provides ES6 module, so we need to add it to the transpile build option
  build: {
    transpile: [
      'vssue',
    ],
  },
  target: 'static',
}