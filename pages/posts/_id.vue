<template>
  <div>
    <Header />
    <div class="page post-page">
      <div class="title">
        <div class="post-title">{{ title }}</div>
      </div>

      <div class="info">
        <div class="author">{{ author }}</div>
        <div class="date">{{ date }}</div>
        <div class="count" v-if="pageCount">
          <span id="busuanzi_value_page_pv"></span>
          <span>views</span>
        </div>
      </div>

      <div class="post-content" v-html="content"></div>

      <ClientOnly>
        <Vssue title="Vssue Demo" :issueId="id"/>
      </ClientOnly>
    </div>
    <Footer />
  </div>
</template>

<script>
import mediumZoom from "medium-zoom";
import config from "@config/global";
import github from "@vssue/api-github-v4";

import Header from "@components/Header";
import Footer from "@components/Footer";

// load post data
import postData from "@tools/data/posts.json";

export default {
  components: {
    Header,
    Footer,
  },

  data() {
    return {
      zoom: null,
      pageCount: config.themeConfig.pageCount,
      title: "",
      author: "",
      date: "",
      content: "",
      should404: false,
      id: "",
    };
  },

  fetch() {
    // check if post exists
    if (!this.$route.params.id) return (this.should404 = true);
    const id = this.$route.params.id.split(".")[0];
    if (!postData[id]) return (this.should404 = true);

    // update post data
    Object.entries(postData[id]).forEach(([k, v]) => (this[k] = v));
  },

  mounted() {
    if (this.should404) location.href = "/404";

    // use mediumZoom to improve image viewer experience
    this.zoom = mediumZoom("p img");
  },

  head() {
    const styles = [
      "//cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",
      "//cdn.jsdelivr.net/npm/highlight.js@10.5.0/styles/github.css",
    ].map((v) => ({
      rel: "stylesheet",
      href: v,
    }));

    const scripts = [
      {
        charset: "utf-8",
        src: "//cdn.jsdelivr.net/npm/busuanzi@2.3.0/bsz.pure.mini.min.js",
        defer: true,
      },
    ];

    console.log(scripts);

    return {
      title: this.title,
      link: styles,
      script: scripts,
    };
  },
};
</script>

<style lang="stylus">
@import '@styles/common.styl';

.post-page {
  margin-bottom: 50px;
}

.title {
  display: flex;
  justify-content: center;
}

.post-title {
  margin-top: 120px;
  color: #333;
  font-weight: bold;
  font-size: 30px;
  position: relative;
  text-align: center;
  max-width: 80%;
}

.post-title:before {
  content: '“';
  position: absolute;
  font-size: 55px;
  color: #eee;
  left: -60px;
}

.post-title:after {
  content: '”';
  position: absolute;
  font-size: 55px;
  color: #eee;
  right: -60px;
}

.post-content {
  word-break: break-word;

  .katex {
    font-size: 16px;
  }
}

a {
  font-weight: 500;
  color: $mainColor;
  text-decoration: none;
}

p a code {
  font-weight: 400;
  color: $mainColor;
}

p {
  font-song();
}

kbd {
  background: #eee;
  border: solid 0.15rem #ddd;
  border-bottom: solid 0.25rem #ddd;
  border-radius: 0.15rem;
  padding: 0 0.15em;
}

blockquote {
  font-size: 1rem;
  color: #999;
  border-left: 0.2rem solid #dfe2e5;
  margin: 1rem 0;
  padding: 5px 10px;
  background: #eee;

  & > p {
    margin: 0;
    font-fang-song();
  }
}

.post-content {
  ul, ol {
    padding-left: 1.2em;
    font-fang-song();
  }
}

strong {
  font-weight: 600;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
  line-height: 1.25;
  font-hei();
  margin-top: 50px;

  {$contentClass}:not(.custom) > & {
    margin-top: 0.5rem - $navbarHeight;
    padding-top: ($navbarHeight + 1rem);
    margin-bottom: 0;

    &:first-child {
      margin-top: -1.5rem;
      margin-bottom: 1rem;

      + p, + pre, + .custom-block {
        margin-top: 2rem;
      }
    }
  }

  &:hover .header-anchor {
    opacity: 1;
  }
}

h1 {
  font-size: 2rem;
  display: none;
}

h2 {
  font-size: 1.45rem;
  padding-bottom: 0.3rem;
}

h3 {
  font-size: 1.35rem;
}

a.header-anchor {
  font-size: 0.85em;
  float: left;
  margin-left: -0.87em;
  padding-right: 0.23em;
  margin-top: 0.125em;
  opacity: 0;
  color: #ddd;

  &:hover {
    text-decoration: none;
  }
}

code, kbd, .line-number {
  font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
}

pre {
  border: 1px solid #aaa;
  border-radius: 5px;
}

pre > code {
  background: transparent;
  padding: 0;
  margin: 0;
}

pre, code {
  font-size: 14px;
}

code {
  background: #eee;
  padding: 2px 4px;
  margin: 0 2px;
  border-radius: 4px;
}

p, ul, ol {
  line-height: 1.7;
}

li.task-list-item {
  list-style: none;
  display: flex;

  input[type^=checkbox] {
    margin: 7px 9px 0 -18px;
  }
}

hr {
  border: 0;
  border-top: 1px solid $borderColor;
}

table {
  border-collapse: collapse;
  margin: 1rem 0;
  display: block;
  overflow-x: auto;
}

tr {
  border-top: 1px solid #dfe2e5;

  &:nth-child(2n) {
    background-color: #f6f8fa;
  }
}

th, td {
  border: 1px solid #dfe2e5;
  padding: 0.6em 1em;
}

img {
  max-width: 720px;
  width: 100%;
  margin: auto;
  display: block;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

@media screen {
  .info {
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 30px 0 60px 0;
    font-fang-song();

    .author {
      margin: 0 7px;
    }

    .date {
      margin: 0 7px;
    }

    .count {
      margin: 0 7px;
    }
  }
}

// comment
.vssue {
  font-hei();
  margin-top: 100px;
  padding: 0;

  .vssue-pagination-per-page, .vssue-header-powered-by, .vssue-pagination-page {
    display: none;
  }

  .vssue-new-comment {
    border: 0;
  }

  .vssue-current-user {
    line-height: 2.5;
  }

  .vssue-button-submit-comment:not(:disabled):hover {
    background-color: #eee;
  }

  p {
    font-hei();
  }

  .vssue-button-login {
    border-color: transparent !important;
  }
}

@media screen and (max-width: 576px) {
  p {
    font-hei(); // use font-hei on mobile devices
  }

  .post-title {
    max-width: 100%;
    overflow: hidden;
    font-size: 26px;
  }

  .katex-display {
    overflow-x: scroll;
    overflow-y: hidden;
  }

  .info {
    font-hei();
    font-size: 14px;
  }
}

@media print {
  .page {
    width: 100%;
  }

  .title {
    margin-top: 30%;
    font-kai();
    font-weight: bold;
  }

  .post-title:before, .post-title:after {
    content: '';
  }

  .info {
    text-align: center;
    margin-top: 40%;
    page-break-after: always;
    font-kai();

    .author {
      font-size: 20px;
      line-height: 2;
    }
  }

  .count {
    display: none;
  }

  code {
    word-break: break-all;
  }

  pre {
    page-break-inside: avoid;
  }

  .footer, .vssue {
    display: none;
  }
}
</style>
