export default {
  data: ['日记', '编程', '小记', '算法', '其他'].map(v => {
    let count = parseInt(Math.random() * 10 + 5)
    return {
      name: v,
      count,
      desc: `这里存放了 ${count} 篇 ${v}`
    }
  })
}