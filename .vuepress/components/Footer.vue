<template>
  <div class="footer">
    <div class="footer-content page">
      Copyright {{year}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
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
</style>