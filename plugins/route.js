export default ({ app }) => {
  app.router.afterEach((to, from) => {
    // We need to fetch page view count after each route load
    const script = document.createElement("script");
    script.defer = true;
    script.src = "//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js";
    document.body.appendChild(script);
  })
}