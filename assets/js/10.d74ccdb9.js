(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{399:function(t,s,a){},410:function(t,s,a){"use strict";a(399)},428:function(t,s,a){"use strict";a.r(s);a(116),a(10),a(209);var e={data:function(){return{posts:[],categories:[]}},beforeUpdate:function(){[".loading-cards",".loading-categories"].forEach((function(t){var s=document.querySelector(t);s&&(s.style.display="none")}))},mounted:function(){this.posts=this.$frontmatter.posts;var t=this.posts.length;this.categories=[{name:"总览",count:t,desc:"共发布了 ".concat(t," 篇文章。"),link:"/"}].concat(this.$frontmatter.categories)}},i=(a(410),a(56)),n=Object(i.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("Header"),t._v(" "),a("div",{staticClass:"page"},[a("div",{staticClass:"banner"},[a("div",{staticClass:"slogan"},[a("div",[t._v(t._s(t.$frontmatter.slogan.main))]),t._v(" "),a("div",[t._v(t._s(t.$frontmatter.slogan.sub))])]),t._v(" "),t._m(0)]),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"posts"},[a("LoadingCard"),t._v(" "),t._l(t.posts,(function(t,s){return a("PostCard",{key:s,attrs:{title:t.title,desc:t.desc,tag:t.tag,date:t.date,number:t.number,link:t.link}})}))],2),t._v(" "),a("div",{staticClass:"side"},[a("div",{staticClass:"side-category"},[a("LoadingCategory"),t._v(" "),t._l(t.categories,(function(t,s){return a("Category",{key:s,attrs:{name:t.name,count:t.count,desc:t.desc,link:t.link}})}))],2),t._v(" "),a("div",{staticClass:"side-bag"})])])]),t._v(" "),a("Footer")],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"colors"},[s("div",{staticClass:"color"}),this._v(" "),s("div",{staticClass:"color"}),this._v(" "),s("div",{staticClass:"color"})])}],!1,null,null,null);s.default=n.exports}}]);