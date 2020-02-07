<template>
<div>
  <Header />
  <div class="page">
    <div class="banner">
      <div class="slogan">
        <div>{{$frontmatter.slogan.main}}</div>
        <div>{{$frontmatter.slogan.sub}}</div>
      </div>
      <div class="colors">
        <div class="color"></div>
        <div class="color"></div>
        <div class="color"></div>
      </div>
    </div>
    <div class="content">
      <div class="posts">
        <LoadingCard />
        <!-- 这里使用`v-if="!posts.length"`会使 build 出的页面报错，不知道原因 -->
        <PostCard v-for="(post, index) in posts" v-bind:key="index"
          v-bind:title="post.title" v-bind:desc="post.desc"
          v-bind:tag="post.tag" v-bind:date="post.date"
          v-bind:number="post.number" v-bind:link="post.link"/>
      </div>
      <div class="side">
        <div class="side-category">
          <LoadingCategory />
          <Category v-for="(category, index) in categories" v-bind:key="index" 
            v-bind:name="category.name" v-bind:count="category.count"
            v-bind:desc="category.desc" v-bind:link="category.link"/>
        </div>
        <div class="side-bag"></div>
      </div>
    </div>
  </div>
  <Footer />
</div>
</template>

<script>
export default {
  data () {
    return {
      posts: [],
      categories: []
    }
  },

  beforeUpdate () {
    ['.loading-cards', '.loading-categories'].forEach(v => {
      const node = document.querySelector(v)
      if (!node) return
      node.style.display = 'none'
    })
  },

  mounted () {
    this.posts = this.$frontmatter.posts

    const count = this.posts.length
    this.categories = [{
      name: '总览',
      count,
      desc: `共发布了 ${count} 篇文章。`,
      link: `/`
    }].concat(this.$frontmatter.categories)
  }
}
</script>

<style lang="stylus">
@import "../styles/fonts.styl"

.banner
  font-hei()
  margin-top 120px
  color #aaa
  font-weight bold
  font-size 40px
  position relative

  .colors
    width 200px
    position absolute
    right 0
    top 40%

    .color
      position absolute
      height 50px
      width 100px
      filter blur(50px)

    colors = (#66f5b2 #e298dc #f03757)
    n = 3
    h_n = (n + n % 2) / 2
    for i in (1..n)
      .color:nth-child({i})
        background colors[i - 1]
        left (i - h_n) * 40px
        top (i - h_n) * 20px
        animation fly 5s + i * 3s ease infinite alternate-reverse

@keyframes fly
  0%
    transform translate(0px, 0px) rotateZ(0deg)
  50%
    transform translate(50px, -50px) rotateZ(360deg)
  100%
    transform translate(-50px, 50px) rotateZ(0deg)

.banner:before
  content '{{'
  position absolute
  font-size 80px
  color rgba(0, 0, 0, 0.1)
  left -100px
  top 8px

.content
  width 100%
  display flex
  align-content flex-start
  justify-content space-between
  margin-top 100px

  .posts
    box-sizing border-box
    width 100%
    min-height 400px

  .side
    box-sizing border-box
    min-width 240px
    padding-left 10px
    margin-left 10px

  .side-category
    padding 0 20px

  .side-bag
    box-shadow 0 -3px 2px rgba(0, 0, 0, 0.03)
    height 40px
    transform translateX(0)
    background white
    border-bottom-left-radius 10px
    border-bottom-right-radius 10px
    border-top 0

@media screen and (max-width 576px)
  .banner
    font-size 32px
    text-align center

  .content
    flex-wrap wrap
    flex-direction column-reverse

    .side
      width 100%
      padding 0
      margin 0

      .side-category
        padding 10px

</style>