const mk = require("markdown-it-katex");

module.exports = {
  title: "YiFei Zhang 的个人网站",
  description: "在这里了解我的一切，Have Fun!",
  host: "127.0.0.1",
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
  plugins: {
    "@vuepress/medium-zoom": {
      selector: ".post-content img"
    }
  },
  markdown: {
    extendMarkdown: md => {
      md.use(mk);
    }
  }
};
