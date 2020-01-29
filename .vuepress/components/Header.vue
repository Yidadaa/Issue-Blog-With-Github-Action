<template>
  <div class="header-wrap">
    <div class="header page">
      <div class="left">
        <div class="motto">
          <div class="line">暮春早夏的月亮</div>
          <div class="line">原是情人的月亮，不比秋冬是诗人的月亮</div>
        </div>
        <div class="nav">
          <a href="/" class="nav-item">首页</a>
          <a href="/" class="nav-item">分类</a>
          <a href="/" class="nav-item">项目</a>
        </div>
      </div>
      <div class="right search">
        <input type="text" class="search-bar" placeholder="搜索">
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
@import '../styles/fonts.styl'

.header-wrap
  background #eee

.header
  display flex
  justify-content space-between
  align-items center
  padding 20px

  .left
    .motto
      font-kai()
      font-size 16px
      color black

    .nav
      font-size 18px
      margin-top 10px
      color darken(red, 20)

      a.nav-item
        color darken(red, 20)

      a.nav-item:not(:last-child):after
        content '/'
        margin-left 10px
        margin-right 10px

      a.nav-item:hover
        color darken(red, 10)

  .search
    display flex
    align-content center
    position relative
    .search-bar
      border 1px solid #666
      padding 5px 20px
      font-kai()
      font-size 18px
      height 22px
      transition all ease .3s
      border-radius 100px

    .search-bar::placeholder
      color #aaa

    .search-bar:focus
      outline none
      box-shadow 0 0 5px rgba(0, 0, 0, 0.1)

@media print
  .search-bar, .nav
    display none

@media screen and (min-width 576px)
  .search-bar
    width 180px

  .search-bar:focus
    width 200px

@media screen and (max-width 576px)
  .header
    flex-wrap wrap

    .left
      text-align center
      margin-bottom 20px

  .left, .right
    width 100%

  .motto
    margin-bottom 20px

  .search-bar
    width 100%
    text-align center

</style>