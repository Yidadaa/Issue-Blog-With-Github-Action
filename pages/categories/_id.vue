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
    };
  },

  components: {
    Home,
  },

  mounted() {
    const id = this.$route.params.id.split(".")[0];
    Object.entries(cateData[id]).forEach(([k, v]) => (this[k] = v));
  },
};
</script>
