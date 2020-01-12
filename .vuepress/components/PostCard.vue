<template>
  <div class="card">
    <a href="/posts/2018.html">
      <div class="card-header">
        <div class="card-date">{{ date }}</div>
        <div class="dot"></div>
        <div class="card-tag">{{ tag }}</div>
      </div>
      <div class="card-title">{{ title }}</div>
      <div class="card-content">{{ desc }}...</div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'PostCard',

  props: {
    title: String,
    desc: String,
    tag: String,
    date: String
  }
}
</script>

<style lang="stylus" scoped>
@import "../styles/fonts.styl"

primary-color = #EA350B

.card
  margin-bottom 40px
  line-height 1.6

  a
    color black

  .card-header
    opacity .5
    display flex
    align-content center
    font-size 14px
    font-weight bold

    .card-tag
      color primary-color

  .card-title
    font-size 20px
    font-weight bold
    line-height 2
    color #363134
    font-hei()

  .card-content
    font-size 16zpx
    font-hei()

.card:hover
  cursor pointer
  color primary-color
  .dot
    background primary-color

.dot
  width 4px
  height 4px
  border-radius 20px
  background black
  margin 8px 10px
</style>