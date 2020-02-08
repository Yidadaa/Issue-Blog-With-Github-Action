<template>
  <div class="footer">
    <div class="footer-content page">
      <div class="left">
        <div class="footer-title">Friend Links</div>
        <div class="links footer-text">
          <a :href="link.link" class="link" v-for="link in friendLinks">{{ link.name }}</a>
        </div>
        <div class="footer-title" v-if="$themeConfig.pageCount">Visitor Report</div>
        <div class="footer-text" v-if="$themeConfig.pageCount">
          <span id="busuanzi_container_site_pv" class="footer-count">
            <div>
              <span class="count-title">Total PV</span>
              <span id="busuanzi_value_site_pv"></span>
            </div>
            <div>
              <span class="count-title">Total UV</span>
              <span id="busuanzi_value_site_uv"></span>
            </div>
          </span>
        </div>
        <div v-for="(f) in extraFooters">
          <div class="footer-title">{{ f.title }}</div>
          <div class="footer-text">{{ f.text }}</div>
        </div>
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
    display flex
    flex-wrap wrap
    justify-content space-between
    color rgba(255, 255, 255, 0.6)

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
      font-weight bold
      color rgba(255, 255, 255, 0.8)

    .footer-text
      font-size 12px
      margin-bottom 20px

    .footer-count
      font-size 12px
      margin-bottom 20px
      .count-title
        margin-right 5px

    .links
      a.link
        margin-right 20px
        color rgba(255, 255, 255, 0.6)
        margin-right 10px
        text-decoration underline
        &:hover
          background-color #fff
          color #000
</style>
