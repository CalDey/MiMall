(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-983dd1da"],{2320:function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"product"},[i("product-param",{attrs:{title:t.product.name},scopedSlots:t._u([{key:"buy",fn:function(){return[i("button",{staticClass:"btn",on:{click:t.buy}},[t._v("立即购买")])]},proxy:!0}])}),i("div",{staticClass:"content"},[i("div",{staticClass:"item-bg"},[i("h2",[t._v(t._s(t.product.name))]),i("h3",[t._v(t._s(t.product.subtitle))]),t._m(0),i("div",{staticClass:"price"},[i("span",[t._v("￥"),i("em",[t._v(t._s(t.product.price))])])])]),i("div",{staticClass:"item-bg-2"}),i("div",{staticClass:"item-bg-3"}),i("div",{staticClass:"item-swiper"},[i("swiper",{attrs:{options:t.swiperOption}},[i("swiper-slide",[i("img",{attrs:{src:"/imgs/product/gallery-2.png"}})]),i("swiper-slide",[i("img",{attrs:{src:"/imgs/product/gallery-3.png"}})]),i("swiper-slide",[i("img",{attrs:{src:"/imgs/product/gallery-4.png"}})]),i("swiper-slide",[i("img",{attrs:{src:"/imgs/product/gallery-5.jpg"}})]),i("swiper-slide",[i("img",{attrs:{src:"/imgs/product/gallery-6.jpg"}})]),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1),i("p",{staticClass:"desc"},[t._v("小米8 AI变焦双摄拍摄")])],1),i("div",{staticClass:"item-video"},[t._m(1),t._m(2),i("div",{staticClass:"video-bg",on:{click:function(s){t.showSlide="slideDown"}}}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showSlide,expression:"showSlide"}],staticClass:"video-box"},[i("div",{staticClass:"overlay"}),i("div",{staticClass:"video",class:t.showSlide},[i("span",{staticClass:"icon-close",on:{click:t.closeVideo}}),i("video",{attrs:{src:"/imgs/product/video.mp4",muted:"",autoplay:"",controls:"controls"},domProps:{muted:!0}})])])])])],1)},a=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("p",[i("a",{attrs:{href:"javascript:;",id:""}},[t._v("全球首款双频 GP")]),i("span",[t._v("|")]),i("a",{attrs:{href:"javascript:;",id:""}},[t._v("骁龙845")]),i("span",[t._v("|")]),i("a",{attrs:{href:"javascript:;",id:""}},[t._v("AI 变焦双摄")]),i("span",[t._v("|")]),i("a",{attrs:{href:"javascript:;",id:""}},[t._v("红外人脸识别")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("h2",[t._v("60帧超慢动作摄影"),i("br"),t._v("慢慢回味每一瞬间的精彩")])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("p",[t._v("后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！"),i("br"),t._v("更能AI 精准分析视频内容，15个场景智能匹配背景音效。")])}],r=i("7212"),n=(i("dfa4"),i("9f26")),o={name:"product",components:{swiper:r["swiper"],swiperSlide:r["swiperSlide"],ProductParam:n["a"]},data:function(){return{id:this.$route.params.id,showSlide:"",product:{},swiperOption:{autoplay:!0,slidesPerView:3,spaceBetween:30,freeMode:!0,pagination:{el:".swiper-pagination",clickable:!0}}}},mounted:function(){this.getProductInfo()},methods:{getProductInfo:function(){var t=this;this.axios.get("/products/".concat(this.id)).then((function(s){t.product=s}))},buy:function(){this.$router.push("/detail/".concat(this.id))},closeVideo:function(){var t=this,s=document.getElementsByTagName("video")[0];this.showSlide="slideUp",setTimeout((function(){t.showSlide="",s.pause()}),600)}}},c=o,d=(i("53d6"),i("2877")),l=Object(d["a"])(c,e,a,!1,null,"03b38632",null);s["default"]=l.exports},"53d6":function(t,s,i){"use strict";i("686c")},"686c":function(t,s,i){},"77df":function(t,s,i){},9406:function(t,s,i){"use strict";i("77df")},"9f26":function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"nav-bar",class:{is_fixed:t.isFixed}},[i("div",{staticClass:"container"},[i("div",{staticClass:"pro-title"},[t._v(" "+t._s(t.title)+" ")]),i("div",{staticClass:"pro-param"},[i("a",{attrs:{href:"javascript:;"}},[t._v("概述")]),i("span",[t._v("|")]),i("a",{attrs:{href:"javascript:;"}},[t._v("参数")]),i("span",[t._v("|")]),i("a",{attrs:{href:"javascript:;"}},[t._v("用户评价")]),t._t("buy")],2)])])},a=[],r={name:"nav-bar",props:{title:String},data:function(){return{isFixed:!1}},mounted:function(){window.addEventListener("scroll",this.initHeight,!1)},methods:{initHeight:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.isFixed=t>152}},destroyed:function(){window.removeEventListener("scroll",this.initHeight,!1)}},n=r,o=(i("9406"),i("2877")),c=Object(o["a"])(n,e,a,!1,null,"eceaf662",null);s["a"]=c.exports}}]);