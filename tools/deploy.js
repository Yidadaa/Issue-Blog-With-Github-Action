const Git = require('simple-git')
const path = require('path')
const shell = require('shelljs')
const fs = require('fs')
const { repoConfig, customDomain } = require('../src/.vuepress/config')

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
  const rootPath = path.resolve(__dirname, '../')
  const distPath = path.resolve(__dirname, '../dist')
  const nowStr = new Date().toLocaleString()

  // write CNAME
  fs.writeFile(path.resolve(distPath, 'CNAME'), customDomain, () => console.log('[host] on ' + customDomain))

  const remote = `https://${actor}:${token}@github.com/Yidadaa/${repo}.git`

  console.log(`[remote] ${remote}`)

  // git clone old files
  const tmpPath = path.resolve(rootPath, 'tmp')
  if (fs.existsSync(tmpPath)) {
    shell.rm('-rf', tmpPath)
    console.log(`[rm] ${tmpPath} removed`)
  }
  fs.mkdirSync(tmpPath)
  console.log(`[mkdir] ${tmpPath} is created`)
  const git = Git(tmpPath)

  console.log('[git] adding remote')
  git.pull(remote, pushBranch, () => {
    console.log('[git] pull done')
    // delete old files
    shell.ls(distPath).forEach(v => {
      let gitFile = path.resolve(tmpPath, v)
      if (fs.existsSync(gitFile)) shell.rm('-rf', gitFile)
      shell.cp('-r', path.resolve(distPath, v), tmpPath)
      console.log(`[cp] ${gitFile}`)
    })

    console.log('[git] deploying...')
    git.addConfig('user.name', owner)
      .addConfig('user.email', email)
      .add('.')
      .commit(`deploy(blog): version ${nowStr}`)
      .push(() => console.log('[git] delploy done'))
  })
}

main()