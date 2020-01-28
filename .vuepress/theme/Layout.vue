<template>
  <div class="page">
    <Header />
    <div class="banner">
      <div class="slogan">有逻辑的灵魂，<br>才能写出有温度的代码。</div>
    </div>
    <div class="content">
      <div class="posts">
        <PostCard v-for="(post, index) in posts" v-bind:key="index"
          v-bind:title="post.title" v-bind:desc="post.desc"
          v-bind:tag="post.tag" v-bind:date="post.date"/>
      </div>
      <div class="side">
        <div class="side-category">
          <Category v-for="(category, index) in categories" v-bind:key="index" 
            v-bind:name="category.name" v-bind:count="category.count"
            v-bind:desc="category.desc"/>
        </div>
        <div class="side-bag"></div>
      </div>
    </div>
  </div>
</template>

<script>
import posts from '../data/posts'
import categories from '../data/categories'

export default {
  data () {
    console.log(posts, categories)
    return {
      posts: posts.data,
      categories: categories.data
    }
  },

  mounted () {
    console.log('hello')
    window.onmousemove = e => {
      const content = document.querySelector('.content')
      const pos = content.getBoundingClientRect()
      const { pageX, pageY } = e
      console.log(pageX, pageY)
    }
  }
}
</script>

<style lang="stylus">

.banner
  margin-top 120px
  color #333
  font-weight bold
  font-size 50px
  position relative

.banner:before
  content '{{'
  position absolute
  font-size 100px
  color #eee
  left -100px

.content
  width 100%
  display flex
  align-content flex-start
  justify-content space-between
  margin-top 100px

  .posts
    box-sizing border-box

  .side
    box-sizing border-box
    min-width 240px
    padding 0 10px
    margin-left 10px;

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

</style>