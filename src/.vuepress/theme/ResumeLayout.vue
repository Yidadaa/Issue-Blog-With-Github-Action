<template>
  <div class="cv">
    <Header />
    <div class="page cv-content">
      <div class="cv-header cv-two-column cv-section">
        <div class="cv-info">
          <div class="cv-author">{{ header.author }}</div>
          <div class="cv-contact" v-for="(item, index) in header.contact">{{ item }}</div>
        </div>
        <div class="cv-sub-info cv-right-column">
          <div class="cv-research-interest">{{ header.interest }}</div>
          <div class="cv-dob">DOB: {{ header.dob }}</div>
          <div class="cv-city">{{ header.city }}</div>
        </div>
      </div>

      <div class="cv-two-column">
        <div class="cv-section education cv-left-column">
          <div class="cv-section-title">{{ education.name }}</div>
          <div v-for="(edu, eindex) in education.content">
            <div class="cv-two-column">
              <div class="cv-left-column cv-school">{{ edu.degree }}, {{ edu.school }}</div>
              <div class="cv-right-column cv-time-range">{{ edu.time }}</div>
            </div>
            <div class="cv-major">{{ edu.major }}</div>
          </div>
        </div>

        <div class="cv-section honor cv-right-column">
          <div class="cv-section-title">{{ honor.name }}</div>
          <div class="cv-two-column" v-for="(h, hindex) in honor.content">
            <div class="cv-left-column cv-honor">{{ h.name }}</div>
            <div class="cv-right-column cv-time-range">{{ h.time }}</div>
          </div>
        </div>
      </div>

      <div class="cv-section experience">
        <div class="cv-section-title">{{ experience.name }}</div>
        <ul class="cv-experience-list">
          <li class="cv-experience-item" v-for="(exp, eindex) in experience.content">
            <div class="cv-two-column cv-experience-header">
              <div class="cv-left-column cv-experience-title">{{ exp.name }}</div>
              <div class="cv-right-column cv-time-range">{{ exp.time }}</div>
            </div>
            <ul class="cv-experience-sub-item">
              <li class="cv-li" v-for="expc in exp.content">{{ expc }}</li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="cv-section coding">
        <div class="cv-section-title">{{ coding.name }}</div>
        <div class="cv-coding-item" v-for="(cod, cindex) in coding.content">
          <div class="cv-two-column">
            <div class="cv-left-column cv-coding-title">
              <a class="cv-coding-link" :href="cod.link">{{ cod.name }}</a>
              <span class="cv-coding-language">{{ cod.info }}</span>
            </div>
            <div class="cv-right-column cv-time-range">{{ cod.time }}</div>
          </div>
          <div class="cv-coding-desc">{{ cod.desc }}</div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: {
        author: '',
        contact: [],
        interest: '',
        dob: '',
        city: ''
      },
      education: {
        name: '',
        content: []
      },
      honor: {
        name: '',
        content: []
      },
      experience: {
        name: '',
        content: []
      },
      coding: {
        name: '',
        content: []
      }
    }
  },

  mounted () {
    Object.keys(this.$frontmatter.content).map(v => {
      this[v] = this.$frontmatter.content[v]
    })
  }
}
</script>

<style lang="stylus" scoped>
@import "../styles/fonts.styl"

.cv-content
  border 1px solid $borderColor
  padding 50px
  min-height 200px
  margin-top 5vh
  margin-bottom 5vh
  font-size 15px
  font-song()

  .cv-two-column
    display flex
    justify-content space-between
    .cv-right-column
      margin-left 20px

  .cv-section
    width 100%
    margin-bottom 3em
    .cv-section-title
      font-size 1.4em
      margin-bottom 1em
      font-weight bolder
      margin-left -1px

  .cv-info
    .cv-author
      font-hei()
      color $accentColor
      font-size 2em
      font-weight bold
      margin-bottom 1.2em

  .cv-sub-info
    text-align right
    .cv-research-interest
      font-size 1.6em
      margin-top .4em
      margin-bottom 2.4em
      font-weight bolder
    .cv-dob
      margin-bottom 5px

  .education
    .cv-school
      font-weight bold
    .cv-major
      margin-bottom 10px

  .experience
    .cv-experience-item:not(:last-child)
      margin-bottom 15px
    .cv-experience-header
      margin-bottom 10px
      .cv-experience-title
        font-weight bolder
    ul
      padding-left 20px

  .coding
    .cv-coding-item
      margin-bottom 5px
      .cv-coding-title
        font-weight bold
      .cv-coding-link
        color #000
        text-decoration underline
        margin-right 5px

@media screen and (max-width $MQMobileNarrow)
  .cv-content
    padding 0
    border 0
    font-hei()

    .cv-two-column
      flex-wrap wrap
      align-items flex-end
      .cv-right-column
        margin-left 0

    .cv-section
      margin-bottom 20px
      .cv-section-title
        margin-bottom 5px

    .cv-sub-info
      text-align left
      .cv-research-interest
        margin-top 20px
        margin-bottom 20px

    .coding
      .cv-coding-item
        margin-bottom 20px
        .cv-coding-title
          margin-bottom 5px

@media print
  .header-wrap, .footer
    display none

  .cv-content
    border 0
    padding 0
    font-size 16px
</style>