const mk = require("markdown-it-katex");
const ck = require("markdown-it-task-checkbox")

const vssueConfig = {
  owner: 'Yidadaa',
  repo: 'Yidadaa.github.io',
  clientId: "2783a4b752f56c0ed912",
  clientSecret: "c8d9116fcade901567ff34aa1fb09216731683a3"
}

module.exports = {
  repoConfig: {
    repo: vssueConfig.repo,
    owner: vssueConfig.owner,
    pushBranch: 'master',
    email: 'yidadaa@qq.com'
  },
  title: "YiFei Zhang 的个人网站",
  description: "在这里了解我的一切，Have Fun!",
  customDomain: 'blog.simplenaive.cn',
  host: "0.0.0.0",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.bootcss.com/prism/9000.0.1/themes/prism.min.css"
      }
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.bootcss.com/KaTeX/0.5.1/katex.min.css"
      }
    ]
  ],
  plugins: [
    [
      "@vssue/vuepress-plugin-vssue",
      {
        platform: "github-v4",
        ...vssueConfig
      }
    ]
  ],
  markdown: {
    extendMarkdown: md => {
      md.use(mk);
      md.use(ck);
    }
  }
};
