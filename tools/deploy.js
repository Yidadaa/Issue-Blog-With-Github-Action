const Git = require('simple-git')
const path = require('path')
const { repoConfig } = require('../src/.vuepress/config')

const { owner, repo, email, pushBranch } = repoConfig

let token = null
let actor = null
if (process.env.NODE_ENV == 'local') {
  token = require('./config').token
  actor = owner
} else if (process.env.NODE_ENV == 'action') {
  token = process.env.GITHUB_TOKEN
  actor = process.env.GITHUB_ACTOR
} else {
  throw error("Wrong Enviorment Params!")
}

async function main() {
  const distPath = path.resolve(__dirname, '../dist')
  const git = Git(distPath)
  const nowStr = new Date().toLocaleString()

  const remote = `https://${actor}:${token}@github.com/Yidadaa/${repo}.git`

  git.init()
    .addConfig('user.name', owner)
    .addConfig('user.email', email)
    .add('./*')
    .commit(`deploy(blog): version ${nowStr}`)
    .push(['-f', remote, `master:${pushBranch}`], () => console.log('[Push] Deloy Done'))
}

main()