<template>
  <Home :slogan="slogan" :posts="posts" :categories="categories"/>
</template>

<script>
import Home from "@components/Home";

// prefetch data
import homeData from "@tools/data/home.json";

export default {
  data() {
    return {
      slogan: {
        main: '',
        sub: ''
      },
      posts: [],
      categories: [],
      ...homeData,
    };
  },

  components: {
    Home
  },
};
</script>
