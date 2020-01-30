const github = require('@actions/github')
const { token } = require('./config')
const fs = require('fs')
const path = require('path')

const owner = 'Yidadaa'
const repo = 'Yidadaa.github.io'

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
  const { data } = rawData
  log(`[Summary] ${data.length} issues`)

  const postPath = path.resolve(__dirname, '../src/posts')
  const dataPath = path.resolve(__dirname, '../src/.vuepress/data')

  // process post file
  data.forEach((issue, i) => {
    log(`[Proessing ${i} of ${data.length}] ${issue.number}.${issue.title}`)
    const fm = [`layout: PostLayout`,
      `id: ${issue.number}`,
      `date: ${fmtDate(issue.created_at)}`,
      `author: ${issue.user.login}`
    ].join('\n')
    const markdownText = `---\n${fm}\n---\n# ${issue.title}\n\n${issue.body}`
    fs.writeFile(path.resolve(postPath, `./${issue.number}.md`), markdownText, () => {})
  })

  // process post summary
  const postsData = data.map(issue => {
    return {
      title: issue.title,
      desc: issue.body.slice(0, 200),
      tag: issue.milestone.title,
      date: fmtDate(issue.created_at),
      number: issue.number
    }
  })
  postRawData = `export default { data: ${JSON.stringify(postsData)} }`
  log('[Writing Summary Data]')
  fs.writeFile(path.resolve(dataPath, './posts.js'), postRawData, () => {})
}

/**
 * Write category data to file.
 * @param {Object} rawData raw request data of milestones
 */
function processCategory(rawData) {
  const { data } = rawData

  const dataPath = path.resolve(__dirname, '../src/.vuepress/data')

  const mData = data.map(m => {
    return {
      name: m.title,
      count: m.open_issues,
      desc: m.description
    }
  })

  const mRawData = `export default { data: ${JSON.stringify(mData)} }`
  log('[Writing Category Data]')
  fs.writeFile(path.resolve(dataPath, './categories.js'), mRawData, () => {})
}

async function run() {
  const tools = new github.GitHub(token)

  log('Requesting Issues')
  try {
    const data = await tools.issues.listForRepo({
      owner, repo
    })

    log('Writing Issues Data')
    const rawData = JSON.stringify(data)
    fs.writeFileSync('./issues.json', rawData)
    log('Done')
  } catch (error) {
    log(error)
    return
  }

  log('Requesting Milestones')
  try {
    const cates = await tools.issues.listMilestonesForRepo({
      owner, repo
    })

    log('Writing Milestones Data')
    const mData = JSON.stringify(cates)
    fs.writeFileSync('./cates.json', mData)
    log('Done')
  } catch (error) {
    log(error)
    return
  }
}

// run()
// fs.readFile('./issues.json', (err, data) => formatDocument(JSON.parse(data)))
fs.readFile('./cates.json', (err, data) => processCategory(JSON.parse(data)))