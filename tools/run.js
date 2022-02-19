const github = require('@actions/github')
const fs = require('fs')
const path = require('path')
let { repoConfig, slogan, base } = require('../config/global')

// render markdown
const hljs = require('highlight.js')
const md = require('markdown-it')({
  html: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
          hljs.highlight(lang, str, true).value +
          '</code></pre>';
      } catch (__) { }
    }
    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
  }
}).use(require('@iktakahiro/markdown-it-katex')).use(require('markdown-it-task-checkbox'))

const { owner, repo } = repoConfig
const issueFile = path.resolve(__dirname, './data/issues-raw.json')
const cateFile = path.resolve(__dirname, './data/cates-raw.json')

let token = null
if (process.env.NODE_ENV == 'local') {
  token = require('./config').token
  base = '/'
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

  const postPath = path.resolve(__dirname, './data')

  // process post file
  const postData = data.map((issue, i) => {
    log(`[processing ${i + 1} of ${data.length}] ${issue.number}.${issue.title}`)
    return {
      id: issue.number,
      date: fmtDate(issue.created_at),
      author: issue.user.login,
      title: issue.title,
      mdContent: issue.body,
      content: md.render(issue.body)
    }
  }).reduce((pre, cur) => ({
    ...pre,
    [cur.id]: cur
  }), {})
  fs.writeFile(path.resolve(postPath, `./posts.json`), JSON.stringify(postData), () => { })

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

  const mData = data.map(m => {
    return {
      id: m.number,
      name: m.title,
      count: m.open_issues,
      desc: m.description,
      link: `${base}categories/${m.number}`
    }
  })

  return mData
}

async function download() {
  const tools = new github.getOctokit(token)

  log('[download] requesting issues')
  try {
    let data = await tools.issues.listForRepo({
      owner, repo
    })

    // filter issues
    if (repoConfig.filterUsers && repoConfig.filterUsers.length > 0) {
      const filterUsers = repoConfig.filterUsers
      const count = data.data.length
      data.data = data.data.filter(v => filterUsers.includes(v.user.login))
      log(`[filter] filtered ${count - data.data.length} issues`)
    }

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
    // console.log(tools.issues)
    const cates = await tools.issues.listMilestones({
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
  const outputPath = path.resolve(__dirname, './data')
  const postsData = processPost(issues)
  const mData = processCategory(milestones)
  log('[writing] writing data to ReadMe')

  const readMeMeta = JSON.stringify({
    slogan,
    posts: postsData,
    categories: mData
  })
  fs.writeFile(path.resolve(outputPath, './home.json'), readMeMeta, () => { })

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
  log('[writing] writing categories')
  const catesData = milestones.map(m => {
    const issueData = processPost(m.issues)
    const mRawData = {
      id: m.number,
      slogan: {
        main: m.title,
        sub: m.description
      },
      posts: issueData,
      categories: mData
    }
    return mRawData
  }).reduce((pre, cur) => ({
    ...pre,
    [cur.id.toString()]: cur
  }), {})

  fs.writeFile(path.resolve(outputPath, './categories.json'), JSON.stringify(catesData), () => { })
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
