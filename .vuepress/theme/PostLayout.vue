<template>
  <div class="page">
    <Header />

    <div class="title">
      <div class="post-title">Xavier 配置记录</div>
    </div>
    <Content />
  </div>
</template>

<style lang="stylus" scoped>
.title
  display flex
  justify-content center

.post-title
  margin-top 120px
  color #333
  font-weight bold
  font-size 50px
  position relative
  min-height 300px
  text-align center

.post-title:before
  content '{{'
  position absolute
  font-size 55px
  color #eee
  left -60px

.post-title:after
  content '}}'
  position absolute
  font-size 55px
  color #eee
  right -60px

a
  font-weight 500
  color $accentColor
  text-decoration none

p a code
  font-weight 400
  color $accentColor

kbd
  background #eee
  border solid 0.15rem #ddd
  border-bottom solid 0.25rem #ddd
  border-radius 0.15rem
  padding 0 0.15em

blockquote
  font-size 1rem
  color #999;
  border-left .2rem solid #dfe2e5
  margin 1rem 0
  padding .25rem 0 .25rem 1rem

  & > p
    margin 0

ul, ol
  padding-left 1.2em

strong
  font-weight 600

h1, h2, h3, h4, h5, h6
  font-weight 600
  line-height 1.25

  {$contentClass}:not(.custom) > &
    margin-top (0.5rem - $navbarHeight)
    padding-top ($navbarHeight + 1rem)
    margin-bottom 0

    &:first-child
      margin-top -1.5rem
      margin-bottom 1rem

      + p, + pre, + .custom-block
        margin-top 2rem

  &:hover .header-anchor
    opacity: 1

h1
  font-size 2.2rem

h2
  font-size 1.65rem
  padding-bottom .3rem
  border-bottom 1px solid $borderColor

h3
  font-size 1.35rem

a.header-anchor
  font-size 0.85em
  float left
  margin-left -0.87em
  padding-right 0.23em
  margin-top 0.125em
  opacity 0

  &:hover
    text-decoration none

code, kbd, .line-number
  font-family source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace

p, ul, ol
  line-height 1.7

hr
  border 0
  border-top 1px solid $borderColor

table
  border-collapse collapse
  margin 1rem 0
  display: block
  overflow-x: auto

tr
  border-top 1px solid #dfe2e5

  &:nth-child(2n)
    background-color #f6f8fa

th, td
  border 1px solid #dfe2e5
  padding .6em 1em

.theme-container
  &.sidebar-open
    .sidebar-mask
      display: block

  &.no-navbar
    {$contentClass}:not(.custom) > h1, h2, h3, h4, h5, h6
      margin-top 1.5rem
      padding-top 0

    .sidebar
      top 0
</style>