const mk = require("markdown-it-katex");

module.exports = {
  title: "YiFei Zhang 的个人网站",
  description: "在这里了解我的一切，Have Fun!",
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

        // 其他的 Vssue 配置
        owner: "Yidadaa",
        repo: "Yidadaa.github.io",
        clientId: "2783a4b752f56c0ed912",
        clientSecret: "c8d9116fcade901567ff34aa1fb09216731683a3"
      }
    ]
  ],
  markdown: {
    extendMarkdown: md => {
      md.use(mk);
    }
  }
};
