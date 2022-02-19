const Git = require('simple-git')
const path = require('path')
const shell = require('shelljs')
const fs = require('fs')
const { repoConfig, customDomain } = require('../config/global')

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
  if (customDomain && customDomain.length > 0) {
    fs.writeFile(path.resolve(distPath, 'CNAME'), customDomain, () => console.log('[host] on ' + customDomain))
  }

  const remote = `https://${actor}:${token}@github.com/Yidadaa/${repo}.git`

  console.log(`[remote] ${remote}`)

  // git clone old files
  const tmpPath = path.resolve(rootPath, 'tmp')
  if (fs.existsSync(tmpPath)) {
    shell.rm('-rf', tmpPath)
    console.log(`[rm] ${tmpPath} is removed`)
  }
  fs.mkdirSync(tmpPath)
  console.log(`[mkdir] ${tmpPath} is created`)

  console.log('[git] cloning')
  Git(tmpPath).clone(remote, ['-b', pushBranch], () => {
    console.log('[git] clone done')
    const repoPath = path.resolve(tmpPath, repo)
    // remove all old files
    shell.ls(repoPath).forEach(v => {
      if (!v.endsWith('.github') && !v.endsWith('.git')) {
        console.log('[rm] removing ', v)
        shell.rm('-rf', path.resolve(repoPath, v))
      } else {
        console.log('[rm] skipped ', v)
      }
    })

    shell.ls(distPath).forEach(v => {
      shell.cp('-r', path.resolve(distPath, v), repoPath)
      console.log(`[cp] ${v}`)
    })

    console.log('[git] deploying...')
    Git(repoPath).addConfig('user.name', owner)
      .addConfig('user.email', email)
      .add('.')
      .commit(`deploy(blog): version ${nowStr}`)
      .push(() => console.log('[git] delploy done'))
  })
}

main()