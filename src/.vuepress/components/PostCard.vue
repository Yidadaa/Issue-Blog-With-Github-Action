<template>
  <div class="card">
    <a v-bind:href="link">
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
    date: String,
    number: Number,
    link: String
  }
}
</script>

<style lang="stylus" scoped>
@import "../styles/fonts.styl"

primary-color = darken(red, 20)

.card
  margin-bottom 40px
  line-height 1.6

  a
    color black

  .card-header
    display flex
    align-content center
    font-size 12px
    font-weight bold

    .card-tag
      color primary-color

  .card-title
    font-size 18px
    font-weight bold
    line-height 2
    color #363134
    font-hei()

  .card-content
    font-size 14px
    font-hei()

.card:hover
  cursor pointer

.dot
  width 4px
  height 4px
  border-radius 20px
  background black
  margin 7px 10px
</style>