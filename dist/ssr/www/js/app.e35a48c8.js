(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);var r=n("967e"),a=n.n(r),o=(n("a481"),n("96cf"),n("fa84")),u=n.n(o),s=(n("7d6e"),n("e54f"),n("985d"),n("31cd"),n("2b0e")),c=n("b05d");s["a"].use(c["a"],{config:{}});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},p=[],l={name:"App"},f=l,d=n("2877"),h=Object(d["a"])(f,i,p,!1,null,null,null),b=h.exports,w=n("2f62");s["a"].use(w["a"]);var m=function(){var e=new w["a"].Store({modules:{},strict:!1});return e},x=n("8c4f"),v=n("bc3a"),k=n.n(v),_=n("47e3"),y=n.n(_);window.axios=k.a.create({baseURL:y.a.api.host});var g=sessionStorage.getItem("token");g&&(window.axios.defaults.headers.common["Authorization"]="".concat(y.a.api.token_prefix).concat(g));var I,S=function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"1f7d"))},A=function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"5561"))},T=function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"e51e"))},P=function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"bc13b"))},$=function(){return n.e(7).then(n.bind(null,"7dd8"))},C=[{path:"",component:A,children:[{name:"Home",path:"/home",components:{default:P}},{path:"/about",components:{default:$}},{path:"",redirect:"/home"}]}],E=[{path:"",component:S,children:[{path:"/home",components:{default:P}},{path:"/about",components:{default:$}},{path:"",redirect:"/home"}]}],J=[{path:"*",component:T}],L=sessionStorage.getItem("token"),N=JSON.parse(sessionStorage.getItem("user"));switch(!0){case L&&!N.isAdmin:I=[].concat(C,J);break;default:I=[].concat(E,J)}var V=I;s["a"].use(x["a"]);var j=function(){var e=new x["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:V,mode:"history",base:"/"});return e},q=function(e){return z.apply(this,arguments)};function z(){return z=u()(a.a.mark((function e(t){var n,r,o;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof m){e.next=6;break}return e.next=3,m({Vue:s["a"],ssrContext:t});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=m;case 7:if(n=e.t0,"function"!==typeof j){e.next=14;break}return e.next=11,j({Vue:s["a"],ssrContext:t,store:n});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=j;case 15:return r=e.t1,n.$router=r,o={router:r,store:n,render:function(e){return e(b)}},c["a"].ssrUpdate({app:o,ssr:t}),e.abrupt("return",{app:o,store:n,router:r});case 20:case"end":return e.stop()}}),e)}))),z.apply(this,arguments)}function O(){return R.apply(this,arguments)}function R(){return R=u()(a.a.mark((function e(){var t,n,r,o,u,c,i,p,l,f;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,q();case 2:t=e.sent,n=t.app,r=t.store,o=t.router,window.__INITIAL_STATE__&&r.replaceState(window.__INITIAL_STATE__),u=!0,c=function(e){u=!1,window.location.href=e},i=window.location.href.replace(window.location.origin,""),p=[void 0],l=0;case 12:if(!(!0===u&&l<p.length)){e.next=30;break}if("function"===typeof p[l]){e.next=15;break}return e.abrupt("continue",27);case 15:return e.prev=15,e.next=18,p[l]({app:n,router:o,store:r,Vue:s["a"],ssrContext:null,redirect:c,urlPath:i});case 18:e.next=27;break;case 20:if(e.prev=20,e.t0=e["catch"](15),!e.t0||!e.t0.url){e.next=25;break}return window.location.href=e.t0.url,e.abrupt("return");case 25:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 27:l++,e.next=12;break;case 30:if(!1!==u){e.next=32;break}return e.abrupt("return");case 32:f=new s["a"](n),o.onReady((function(){f.$mount("#q-app")}));case 34:case"end":return e.stop()}}),e,null,[[15,20]])}))),R.apply(this,arguments)}s["a"].prototype.$axios=k.a,O()},"31cd":function(e,t,n){},"47e3":function(e,t){e.exports={api:{host:"https://jeeback.azurewebsites.net"}}}},[[0,2,0]]]);