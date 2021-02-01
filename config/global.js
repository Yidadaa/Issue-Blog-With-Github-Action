const custom = require('./custom');

const i18n = {
  zh: {
    cateSummaryTitle: '总览',
    cateSummaryDesc: (count) => `共发布了 ${count} 篇文章`,
  },
  en: {
    cateSummaryTitle: 'Summary',
    cateSummaryDesc: (count) => `${count} articles`,
  }
}

const lang = !!custom.lang && i18n[custom.lang] ? custom.lang : 'en';

module.exports = {
  text: i18n[lang],
  ...custom
}