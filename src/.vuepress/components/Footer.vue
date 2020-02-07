<template>
  <div class="footer">
    <div class="footer-content page">
      <div class="left">
        <div class="footer-title">Friend Links</div>
        <div class="links footer-text">
          <a :href="link.link" class="link" v-for="link in friendLinks">{{ link.name }}</a>
        </div>
        <div v-for="(f) in extraFooters">
          <div class="footer-title">{{ f.title }}</div>
          <div class="footer-text">{{ f.text }}</div>
        </div>
        <script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js" v-if="$themeConfig.busuanziCount">
        </script>
        <span id="busuanzi_container_site_pv" class="footer-count" v-if="$themeConfig.busuanziCount">
          Total views:
          <span id="busuanzi_value_site_pv"></span>
          |
          Total visitors:
          <span id="busuanzi_value_site_uv"></span>
        </span>
      </div>
      <div class="right">
        <div class="footer-title power">Powered by</div>
        <a class="logo" href="https://github.com/Yidadaa/Issue-Blog-With-Github-Action">ISSUE BLOG</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
      friendLinks: [],
      extraFooters: []
    }
  },

  mounted() {
    this.friendLinks = this.$themeConfig.friendLinks
    if (this.$themeConfig.extraFooters) {
      this.extraFooters = this.$themeConfig.extraFooters
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
    display flex
    flex-wrap wrap
    justify-content space-between

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

    .footer-text
      font-size 12px

    .footer-count
      font-size 12px
      margin-bottom 20px

    .links
      a.link
        margin-right 20px
        color #ffffff
        border 1px solid #fff
        padding 2px 10px
        border-radius 20px
        &:hover
          background-color #fff
          color #000
</style>
