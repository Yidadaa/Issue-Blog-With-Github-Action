<template>
  <div class="footer">
    <div class="footer-content page">
      <div class="footer-title power">本博客驱动自</div>
      <a class="logo" href="https://github.com/Yidadaa/Issue-Blog-With-Github-Action">ISSUE BLOG</a>
      <div class="footer-title">友情链接</div>
      <div class="links">
        <a :href="link.link" class="link" v-for="link in friendLinks">{{ link.name }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
      friendLinks: new Array(4).fill({
        name: 'xxxxx',
        link: 'sssssss'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.footer
  background #333
  color #fff
  .footer-content
    padding 20px 0
    color #fff

    .power
      font-style italic

    .logo
      font-size 16px
      padding 5px 10px
      border 1px dashed #fff
      display inline-block
      margin-bottom 20px
      color #fff
      &:hover
        background-color #ffffff
        color #000

    .footer-title
      font-size 14px
      margin-bottom 10px

    .links
      font-size 12px
      a.link
        margin-right 20px
        color #fff
</style>