export default ({ app }) => {
  app.router.afterEach((to, from) => {
    // We need to fetch page view count after each route load
    const script = document.createElement("script");
    script.defer = true;
    script.src = "//cdn.jsdelivr.net/npm/busuanzi@2.3.0/bsz.pure.mini.min.js";
    document.body.appendChild(script);
  })
}