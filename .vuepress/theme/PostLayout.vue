<template>
  <div class="page">
    <Header />

    <div class="title">
      <div class="post-title">{{$page.title}}</div>
    </div>

    <div class="info">
      <div class="author">张义飞</div>
      <div class="date">2019 年 9 月 20 日</div>
    </div>

    <div class="post-content">
      <Content />
    </div>

    <Vssue title="Vssue Demo" :issueId="id" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 17
    }
  }
}
</script>

<style lang="stylus">
@import "../styles/fonts.styl"

accentColor = red

.title
  display flex
  justify-content center

.post-title
  margin-top 120px
  color #333
  font-weight bold
  font-size 50px
  position relative
  text-align center
  max-width 80%

.post-title:before
  content '“'
  position absolute
  font-size 55px
  color #eee
  left -60px

.post-title:after
  content '”'
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

p
  font-song()

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
  padding 5px 10px
  background #eee

  & > p
    margin 0
    font-fang-song()

ul, ol
  padding-left 1.2em
  font-fang-song()

strong
  font-weight 600

h1, h2, h3, h4, h5, h6
  font-weight 600
  line-height 1.25
  font-hei()
  margin-top 50px

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
  display none

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
  color #ddd

  &:hover
    text-decoration none

code, kbd, .line-number
  font-family source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace

pre > code
  background transparent

code
  background #eee
  padding 2px 10px
  border-radius 4px

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

img
  max-width 720px
  width 100%
  margin auto
  display block
  border 1px solid rgba(0, 0, 0, 0.1)

@media screen 
  .info
    display flex
    justify-content center
    align-content center
    margin 60px
    font-fang-song()

    .author
      margin-right 10px

// comment
.vssue
  font-hei()
  margin-top 100px
  padding 0

  .vssue-pagination-per-page,
  .vssue-header-powered-by,
  .vssue-pagination-page
    display none

  .vssue-new-comment
    border 0

  .vssue-current-user
    line-height 2.5

  .vssue-button-submit-comment:not(:disabled):hover
    background-color #eee

  p
    font-hei()

@media print
  .title
    margin-top 30%
    font-kai()
    font-weight bold

  .post-title:before, .post-title:after
    content ''

  .info
    text-align center
    margin-top 40%
    page-break-after always
    font-kai()

    .author
      font-size 20px
      line-height 2

  code
    word-break break-all

</style>