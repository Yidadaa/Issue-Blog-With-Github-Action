<h1 align="center">ISSUE BLOG</h1>

<div align="center">

[English](./README.md) / [中文](./README-zh.md)

易于使用、免服务器部署、响应式设计的博客主题。
</div>

<img align="center" src="./img/screenshot.jpg" alt="截图"/>

## 特性
- 响应式设计，适配多种设备尺寸；
- 支持 LaTex 公式；
- 为打印特别优化的样式；
- 支持 SEO 优化；
- 直接使用 Github 的 Issue 功能书写和发布你的博客；
- 使用 Github Actions 即时部署，无需额外的服务器；
- 游客可以使用 Github 账号登陆并评论你的博文；
- 附送一个精心设计的简历页面；
- 这一切，只需要花费你的**三分钟**时间来配置。

## 使用
无论你是编程新手还是老鸟，本项目都提供了多种配置方式供你使用，可以根据自身情况选择安装方式。

### 最简安装
本小节面向懒得点 `Fork` 按钮的新手以及懒得在命令行中使用 Git 的老鸟。
``` bash
.github
 |- workflow
    |- custom.js # 项目配置文件
    |- cv.md # 简历模板配置文件
    |- main.yml # github actions 配置文件
```
1. 按照如上结构在你的 Github.io 仓库目录中新建文件，这三个文件的模板均可以在 [`./temlate`](./template) 目录中找到；
2. 按照[配置说明](#配置说明)修改 `custom.js` 和 `cv.md`；
3. 修改 `main.yml` 中的 `<your-github-name>` 为你的 Github ID。

### 普通安装
本小节内容面向对 Github 不熟悉的新手，在阅读本节之前，请确保你已经注册有自己的 Github 账号并已登录，如果你已经拥有了一个 Github.io 仓库，请移步其他配置步骤。
1. 点击本项目右上角的 `Fork` 按钮，获取本项目的备份；
2. 在自己的 Github 仓库页，找到上一步 `Fork` 出来的仓库，在仓库的 `Settings` 页面，将项目名称重命名为符合 Github Pages 要求的名字格式，以作者为例，作者的 Github ID 是 `Yidadaa`，则仓库名字应该为 `Yidadaa.github.io`；
3. 注意到项目的默认 `Branch` 是 `source`，这是因为 Github 默认使用 `master` 分支作为 Github Pages 主页，所以本项目将源码托管在 `source` 分支，在项目中找到 `/src/.vuepress/custom.js` 文件进行编辑，即可开始配置，各配置项说明见[配置说明](#配置说明)。

### 自定义安装
本小节面向有 Github 使用经验，并且已经拥有自己的 Github Pages 的用户。

如果你想完全舍弃原来的 Github Pages 内容，只需要将原来的 Github.io 仓库删除，然后参照[最简安装](#最简安装)进行安装即可；如果你想保留原有的 Github Pages 内容，并与本项目构建出的文件共存，那么可以遵循以下步骤进行安装：
```bash
# 1. 将本项目 clone 到本地
git clone https://github.com/Yidadaa/Issue-Blog-With-Github-Action.git

# 2. 修改远程仓库地址为你的 Github.io 仓库
git remote set-url origin your-remote-github.io-repo.git

# 3. 推送代码到远程仓库的 source 分支
git push origin -u source
```

经过以上步骤后，去远程仓库的浏览器页面，找到 `Settings -> Branches`，修改 `Default branch` 为刚刚推送的 `source` 分支，然后找到 `/src/.vuepress/custom.js` 文件进行编辑，即可开始配置，各配置项说明见[配置说明](#配置说明)。

### 配置说明
本小节将对本项目用到的各个配置项进行说明，这些配置项对定制化你的页面至关重要。

#### `vssueConfig`
评论系统配置，本项目使用 [Vssue](https://vssue.js.org) 作为评论系统，`vssueConfig` 中的配置项与 [Vssue 文档](https://vssue.js.org/guide/github.html) 保持一致，请按照该文章进行配置，只需要注意 `repo` 一项填写你的 Github io 仓库名称即可；
```js
{
  repo: String, // your github io repo name
  owner: String, // your github id
  clientId: String,
  clientSecret: String
}
```

#### `repoConfig`
构建出的静态页面推送配置，其中 `repo` 和 `owner` 应与 `vssueConfig` 中保持一致，`pushBranch` 保留为 `master` 即可，`email` 填写为你的 Github 账号绑定的邮箱，用于填写 commit message。
```js
{
  repo: String, // same as vssueConfig.repo
  owner: String, // same as vssueConfig.owner
  pushBranch: String, // which branch to deploy static pages, default is 'master'
  email: String // your email of github account, just for commit message
}
```

#### `title`
网站标题。

#### `description`
网站描述。

#### `customDomain`
自定义域名，如果你有自己的域名，请将域名填写到此处。

#### `base`
自定义根路径，**注意：**本选项与你的网站 url 配置有关，如果你的博客地址是 `xxxxx.com/blog`，则此项应该填写为 `/blog/`；如果你的博客地址采用了子域名的方式，如 `blog.xxxxx.com`，则配置为 `/`。详情可查看 [vuepess 关于此项配置的说明](https://vuepress.vuejs.org/zh/config/#base)。

#### `slogan`
网站首页的文字，`main` 为第一行，`sub` 为第二行，不建议留空。
```js
{
  main: String, // top line
  sub: String // bottom line
}
```

#### `themeConfig`
主题的配置，其中各个配置项的作用为：
- `nav`：头部导航栏，数组类型，结构为 `[{ name: String, link: String }]`；
- `headTitle`：头部文字，可留空；
- `friendLinks`：底部友情链接，数组类型，结构与 `nav` 保持一致；
- `extraFooters`：底部额外信息项，数组类型，结构为 `[{ title: String, text: String }]`，可存放网站备案号等信息。
```js
{
  nav: [{
    name: String,
    link: String
  }], // navigation
  headTitle: [String], // Decorative texts in site header
  friendLinks: [{
    name: String,
    link: String
  }], // friend links in bottom footer
  extraFooters: [{
    title: String,
    text: String
  }] // extra texts in bottom footer
}
```

#### `head`
这里存放了一些元信息，详情可见 [vuepress 关于此项的说明](https://vuepress.vuejs.org/zh/config/#head)，可以在此处添加网站 icon。

### 简历模板的配置
本项目提供了一个样例简历，可以直接在该简历基础上进行修改，直接编辑 `/src/cv.md` 即可，该配置使用 `yaml` 语法。

### 开始书写博客
1. 在你的 Github io 仓库的 Issue 区新开一个 Issue，书写博客内容并保存，Github Actions 会自动触发并构建新增的博文；
2. 你可以使用 Issue 的 `milestone` 来归档博文，可以查看作者的[样例](https://github.com/Yidadaa/Yidadaa.github.io/milestones)；
3. 你可以在仓库的 Actions 选项卡中查看构建进度。

## 开发
在本地开发之前，请先在[此处](https://github.com/settings/tokens)新增一个用于调试的 token 备用，然后按照以下步骤进行开发：
```bash
# 1. 将 token 放置到 /tools/config.js 中
cp ./tools/config.template.js ./tools/config.js
# write your token to config.js

# 2. 安装必要的依赖项
yarn add
yarn add global vuepress

# 3. 拉取 issue 并保存在本地
yarn run local

# 4. 启动开发服务器
yarn run dev
```
其余开发说明，请参阅 [vuepress 官方文档](https://vuepress.vuejs.org/)。

## 鸣谢
本项目基于 [vuepress](https://vuepress.vuejs.org/) 开发.
