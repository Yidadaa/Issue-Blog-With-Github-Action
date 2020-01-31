<template>
<div class="loading-cards">
  <div class="loading-card loading-light" v-for="i in new Array(10)">
    <div class="loading-header"></div>
    <div class="loading-title"></div>
    <div class="loading-content"></div>
  </div>
</div>
</template>

<style lang="stylus" scoped>
$light = #eee

.loading-card
  margin-bottom 20px
  overflow hidden
  .loading-header
    height 20px
    width 40%
    background $light

  .loading-title
    height 36px
    width 30%
    background $light
    margin 10px 0

  .loading-content
    height 80px
    background $light

</style>