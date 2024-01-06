/**
 * @file: custom config
 */

let mainConfig = {
  vssueConfig: {
    owner: "LianHua",
    repo: "lianhua.github.io",
    clientId: "4b03b15c993ac0c75319",
    clientSecret: "b20044180530d2b17d01729ff2aeb55e0df903c5"
  },

  repoConfig: {
    owner: "LianHua",
    repo: "lianhua.github.io",
    pushBranch: "master",
    email: "hwaltz@qq.com",
    filterUsers: ['LianHua']
  },

  title: "Zhang's Blog",
  description: "在这里,我的一切，热爱永不停歇。",
  customDomain: "",
  base: "/",

  slogan: {
    main: "有逻辑的灵魂，",
    sub: "造就有温度的编码。"
  },

  themeConfig: {
    nav: [
      {
        name: "首页",
        link: "/lianhua.github.io"
      },
      {
        name: "Github",
        link: "https://github.com/LianHua"
      },
      {
        name: "CV",
        link: "/cv.html"
      }
    ],
    headTitle: ["暮春早夏的月亮", "原是情人的月亮，不比秋冬是诗人的月亮"],
    friendLinks: [
      {
        name: "watercow",
        link: "https://github.com/watercow/watercow.github.io/issues"
      },
      {
        name: "ycjgg",
        link: "https://ycjgg.github.io"
      }
    ],
    extraFooters: [
      {
        title: "ABOUT",
        text: "@ 蜀 ICP 备 19000509 号 - 1",
        link: "https://beian.miit.gov.cn/"
      }
    ],
    pageCount: true
  },

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "https://avatars2.githubusercontent.com/u/16968934?s=460&v=4"
      }
    ]
  ]
}

module.exports = mainConfig