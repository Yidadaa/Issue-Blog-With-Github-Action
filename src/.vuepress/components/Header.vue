<template>
  <div class="header-wrap">
    <div class="header page">
      <div class="left">
        <div class="motto">
          <div class="line" v-for="(line, index) in headTitle" v-bind:key="index">{{line}}</div>
        </div>
        <div class="nav">
          <a :href="link.link" class="nav-item" v-for="(link, index) in nav">{{link.name}}</a>
        </div>
      </div>
      <div class="right search">
        <input type="text" class="search-bar" placeholder="搜索">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      nav: [],
      headTitle: []
    }
  },

  mounted() {
    console.log(this.$themeConfig)
    this.nav = this.$themeConfig.nav
    this.headTitle = this.$themeConfig.headTitle
  }
}
</script>

<style lang="stylus" scoped>
@import '../styles/fonts.styl'

.header-wrap
  border-bottom 1px solid rgba(0, 0, 0, 0.05)

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
      font-size 16px
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
      font-size 16px
      height 18px
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
    width 140px

  .search-bar:focus
    width 160px

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

@media print
  .header-wrap
    border 0

</style>