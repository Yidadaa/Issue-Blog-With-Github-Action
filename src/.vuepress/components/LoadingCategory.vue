<template>
<div class="loading-categories">
  <div class="category loading-light" v-for="i in new Array(5)">
    <div class="category-header">
      <div class="category-name"></div>
      <div class="category-count"></div>
    </div>
    <div class="category-desc"></div>
  </div>
</div>
</template>

<style lang="stylus" scoped>
@import "../styles/fonts.styl"

.category
  background white
  font-size 14px
  padding 20px 20px
  padding-bottom 50px;
  margin-bottom -30px
  box-shadow 0 0 5px rgba(0, 0, 0, 0.1)
  line-height 1
  border-top-right-radius 10px
  border-top-left-radius 10px
  transform translateY(0px)
  transition all ease .15s
  font-weight bold
  overflow hidden
  color #000

  .category-header
    display flex
    align-content center
    justify-content space-between
    position relative
    .category-name, .category-count
      height 20px

    .category-name
      width 50%
      background #eee

  .category-count
    position absolute
    right -20px
    top -30px
    background #eee
    text-align center
    width 40px
    border-bottom-left-radius 10px
    padding 20px 0 10px 0

  .category-desc
    margin-top 10px
    font-size 12px
    color #666
    opacity 0.3
    height 30px
    background #eee

.category:hover
  transform translateY(-10px)
  .category-desc
    opacity 1

</style>