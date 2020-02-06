const mk = require("markdown-it-katex");
const ck = require("markdown-it-task-checkbox")

const vssueConfig = {
  owner: 'Yidadaa',
  repo: 'Issue-Blog-With-Github-Action',
  clientId: "2783a4b752f56c0ed912",
  clientSecret: "c8d9116fcade901567ff34aa1fb09216731683a3"
}

module.exports = {
  repoConfig: {
    owner: 'Yidadaa',
    repo: 'Issue-Blog-With-Github-Action',
    pushBranch: 'master',
    email: 'yidadaa@qq.com'
  },
  title: "YiFei Zhang's Blog",
  description: "在这里了解我的一切，对编程的热爱永不停歇。",
  customDomain: '',
  slogan: {
    main: '有逻辑的灵魂，',
    sub: '造就有温度的编码。'
  },
  base: '/Issue-Blog-With-Github-Action/',
  themeConfig: {
    nav: [{
      name: '首页',
      link: '/'
    }, {
      name: 'Github',
      link: 'https://github.com/Yidadaa'
    }, {
      name: 'CV',
      link: '/cv.html'
    }],
    headTitle: [
      '暮春早夏的月亮',
      '原是情人的月亮，不比秋冬是诗人的月亮'
    ],
    friendLinks: [{
      name: 'watercow',
      link: 'https://github.com/watercow/watercow.github.io/issues'
    }, {
      name: 'ycjgg',
      link: 'https://ycjgg.github.io'
    }],
    extraFooters: [{
      title: '',
      text: '@ 蜀 ICP 备 19000509 号 - 1'
    }]
  },
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
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "https://avatars2.githubusercontent.com/u/16968934?s=460&v=4"
      }
    ]
  ],

  // dev config
  host: "0.0.0.0",
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
