<template>
  <Home :slogan="slogan" :posts="posts" :categories="categories" />
</template>

<script>
import Home from "@components/Home";

// prefetch data
import cateData from "@tools/data/categories.json";

export default {
  data() {
    return {
      slogan: {
        main: "",
        sub: "",
      },
      posts: [],
      categories: [],
      should404: false,
    };
  },

  components: {
    Home,
  },

  fetch() {
    // check if category exists
    if (!this.$route.params.id) return (this.should404 = true);
    const id = this.$route.params.id.split(".")[0];
    const cate = cateData[id];
    if (!cate) return (this.should404 = true);

    Object.entries(cate).forEach(([k, v]) => (this[k] = v));
  },

  mounted() {
    if (this.should404) location.href = '/404';
  }
};
</script>
