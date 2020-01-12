<template>
  <div class="header">
    <div class="left motto">
      <a href="/">
        <div class="line">暮春早夏的月亮</div>
        <div class="line">原是情人的月亮，不比秋冬是诗人的月亮</div>
      </a>
    </div>
    <div class="right search">
      <input type="text" class="search-bar" placeholder="搜索">
    </div>
  </div>
</template>

<style lang="stylus" scoped>
@import '../styles/fonts.styl'

.header
  display flex
  justify-content space-between
  align-items center

  .motto
    font-kai()
    font-size 16px

  a
    color black

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
      width 100px
      transition all ease .3s
      border-radius 10px

    .search-bar::placeholder
      color #aaa
    
    .search-bar:focus
      width 200px
      outline none
      border-radius 100px

@media print
  .search-bar
    display none
      
</style>