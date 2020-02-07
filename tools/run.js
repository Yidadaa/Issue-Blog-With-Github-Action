const github = require('@actions/github')
const fs = require('fs')
const path = require('path')
const { repoConfig, slogan, base } = require('../src/.vuepress/config')

const { owner, repo } = repoConfig
const issueFile = path.resolve(__dirname, './issues.json')
const cateFile = path.resolve(__dirname, './cates.json')

let token = null
if (process.env.NODE_ENV == 'local') {
  token = require('./config').token
} else if (process.env.NODE_ENV == 'action') {
  token = process.env.GITHUB_TOKEN
} else {
  throw error("Wrong Enviorment Params!")
}

/**
 * Make a log.
 * @param {String} str log string
 */
function log(str) {
  console.log(str)
}

/**
 * Format date string to YYYY/MM/DD
 * @param {String} date a date string
 */
function fmtDate(date) {
  const theDate = new Date(date)
  const year = theDate.getFullYear()
  const month = (theDate.getMonth() + 1).toString().padStart(2, '0')
  const day = theDate.getDate().toString().padStart(2, '0')
  return [year, month, day].join('/')
}

/**
 * Write issues to markdown file.
 * @param {Object} rawData raw request data object.
 */
function formatDocument(rawData) {
  const data = rawData
  log(`[summary] ${data.length} issues`)

  const postPath = path.resolve(__dirname, '../src/posts')

  // process post file
  data.forEach((issue, i) => {
    log(`[processing ${i + 1} of ${data.length}] ${issue.number}.${issue.title}`)
    const fm = [`layout: PostLayout`,
      `id: ${issue.number}`,
      `date: ${fmtDate(issue.created_at)}`,
      `author: ${issue.user.login}`
    ].join('\n')
    const markdownText = `---\n${fm}\n---\n# ${issue.title}\n\n${issue.body}`
    fs.writeFile(path.resolve(postPath, `./${issue.number}.md`), markdownText, () => {})
  })

  log('[post] issues have been written to md files.')
}

/**
 * Process post data.
 * @param {Array} data 
 */
function processPost(data) {
  // process post summary
  const postsData = data.map(issue => {
    return {
      title: issue.title,
      desc: issue.body.slice(0, 200),
      tag: issue.milestone ? issue.milestone.title : '',
      date: fmtDate(issue.created_at),
      number: issue.number,
      link: `${base}posts/${issue.number}`
    }
  })

  return postsData
}

/**
 * Process category data.
 * @param {Array} rawData raw request data of milestones
 */
function processCategory(rawData) {
  const data = rawData

  const dataPath = path.resolve(__dirname, '../src/.vuepress/data')

  const mData = data.map(m => {
    return {
      name: m.title,
      count: m.open_issues,
      desc: m.description,
      link: `${base}categories/${m.title}`
    }
  })

  return mData
}

async function download() {
  const tools = new github.GitHub(token)

  log('[download] requesting issues')
  try {
    const data = await tools.issues.listForRepo({
      owner, repo
    })

    log('[download] writing Issues Data')
    const rawData = JSON.stringify(data)
    fs.writeFileSync(issueFile, rawData)
    log('[download] done')
  } catch (error) {
    log(error)
    return
  }

  log('[download] requesting milestones')
  try {
    const cates = await tools.issues.listMilestonesForRepo({
      owner, repo
    })

    log('[download] writing milestones data')
    const mData = JSON.stringify(cates)
    fs.writeFileSync(cateFile, mData)
    log('[download] done')
  } catch (error) {
    log(error)
    return
  }
}

/**
 * Write data to home page read me.
 * @param {Array} issues issue list
 * @param {Array} milestones milestone list
 */
function writeHomePageReadMe(issues, milestones) {
  const postsData = processPost(issues)
  const mData = processCategory(milestones)
  log('[writing] writing data to ReadMe')

  const readMeMeta = JSON.stringify({
    slogan,
    posts: postsData,
    categories: mData
  })
  const readMeText = `---\n${readMeMeta}\n---`
  const readmePath = path.resolve(__dirname, '../src')
  fs.writeFile(path.resolve(readmePath, './README.md'), readMeText, () => {})

  // group issues by milestone
  let issuesGounpByMs = {}
  issues.forEach(issue => {
    if (!issue.milestone) return
    const { number } = issue.milestone
    if (!issuesGounpByMs[number]) issuesGounpByMs[number] = []
    issuesGounpByMs[number].push(issue)
  })

  // merge issues to milestones
  milestones = milestones.map(m => {
    return {
      ...m,
      issues: issuesGounpByMs[m.number] || []
    }
  })

  // write milestones
  const mPath = path.resolve(__dirname, '../src/categories')
  const files = fs.readdirSync(mPath)
  // delete old files
  files.forEach(filename => {
    if (filename.endsWith('md')) {
      fs.unlinkSync(path.resolve(mPath, filename), () => {})
    }
  })

  log('[writing] writing categories')
  // write new files
  milestones.forEach(m => {
    const issueData = processPost(m.issues)
    const mRawData = {
      slogan: {
        main: m.title,
        sub: m.description
      },
      posts: issueData,
      categories: mData
    }
    const mText = ['---', JSON.stringify(mRawData), '---'].join('\n')
    fs.writeFile(path.resolve(mPath, `${m.title}.md`), mText, () => {})
  })
}

async function saveToFile() {
  const pData = JSON.parse(fs.readFileSync(issueFile))
  const mData = JSON.parse(fs.readFileSync(cateFile))
  formatDocument(pData.data)
  writeHomePageReadMe(pData.data, mData.data)
}

async function main() {
  await download()
  await saveToFile()
}

main()