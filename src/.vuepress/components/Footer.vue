<template>
  <div class="footer">
    <div class="footer-content page">
      <div class="left">
        <div class="footer-title">FRIEND LINKS</div>
        <div class="links footer-text">
          <a :href="link.link" class="link" v-for="link in friendLinks">{{ link.name }}</a>
        </div>
        <div class="footer-text" v-if="$themeConfig.pageCount">
          <span id="busuanzi_container_site_pv" class="footer-count">
              <span id="busuanzi_value_site_pv"></span>
              <span id="busuanzi_value_site_uv"></span>
          </span>

          <div class="counter">
            <div class="counter-title">PAGE VIEWS</div>
            <div class="counter-content">
              <span class="counter-number" v-for="char in pvNumber">{{ char }}</span>
            </div>
          </div>

          <div class="counter">
            <div class="counter-title">USER VIEWS</div>
            <div class="counter-content">
              <span class="counter-number" v-for="char in uvNumber">{{ char }}</span>
            </div>
          </div>
        </div>

        <div v-for="(f) in extraFooters">
          <div class="footer-title">{{ f.title }}</div>
          <div class="footer-text">{{ f.text }}</div>
        </div>
      </div>
      <div class="right">
        <div class="footer-title power">POWERED BY</div>
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
      extraFooters: [],
      pvNumber: '00000',
      uvNumber: '00000'
    }
  },

  mounted() {
    this.friendLinks = this.$themeConfig.friendLinks
    if (this.$themeConfig.extraFooters) {
      this.extraFooters = this.$themeConfig.extraFooters
    }

    const vueThis = this
    const pvDom = document.querySelector('#busuanzi_container_site_pv')
    const observer = new MutationObserver(function (changes) {
      const dom = changes[0].target
      const pv = dom.firstChild.textContent
      const uv = dom.lastChild.textContent
      dom.style.display = 'none'
      const total = Math.max(pv.length, uv.length, 4)
      vueThis.pvNumber = new Array(total - pv.length).fill('0').join('') + pv
      vueThis.uvNumber = new Array(total - uv.length).fill('0').join('') + uv
    })

    observer.observe(pvDom, {
      attributes: true
    })
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
      font-style normal

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
      color white
      font-size 12px
      margin-bottom 5px
      font-weight bolder
      transform scaley(0.8)
      text-shadow 1px 1px 1px rgba(0, 0, 0, 0.4)

    .footer-text
      font-size 12px
      margin-bottom 20px

    .footer-count
      font-size 12px
      opacity 0
      font-size 0px

    .links
      a.link
        margin-right 20px
        color rgba(255, 255, 255, 0.6)
        margin-right 10px
        text-decoration underline
        &:hover
          background-color #fff
          color #000


.counter
  margin-bottom 10px

  .counter-title
    color white
    font-size 12px
    margin-bottom 5px
    font-weight bolder
    transform scaley(0.8)
    text-shadow 1px 1px 1px rgba(0, 0, 0, 0.4)


  .counter-content
    border-radius 2px
    padding 5px 10px
    background white
    box-shadow inset 1px 2px 10px rgba(0, 0, 0, 0.6)
    border-top 5px solid #444
    border-bottom 5px solid #444
    border-right 5px solid #555
    border-left 5px solid rgba(0, 0, 0, 0.6)

    .counter-number
      display inline-block
      padding 3px 5px
      position relative
      background #333
      color white
      border-radius 5px
      min-width 10px
      text-align center
      margin-right 5px

      &:last-child
        margin: 0

    for value in (1..20)
      .counter-number:nth-last-child({value * 3})
        margin-left 10px

        &:before
          content ''
          width 2px
          height 4px
          background #333
          position absolute
          left -8px
          bottom 7px
          border-radius 4px

    .counter-number:first-child
      background-color darkred
      margin-left 0

      &:before
        display none
</style>
