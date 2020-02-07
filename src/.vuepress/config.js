const mk = require("markdown-it-katex");
const ck = require("markdown-it-task-checkbox")
const customConfig = require("./custom")

module.exports = {
  ...customConfig,
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
    ],
    ...customConfig.head
  ],

  themeConfig: {
    ...customConfig.themeConfig,
    base: customConfig.base
  },

  // dev config
  host: "0.0.0.0",
  plugins: [
    [
      "@vssue/vuepress-plugin-vssue",
      {
        platform: "github-v4",
        ...customConfig.vssueConfig
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
