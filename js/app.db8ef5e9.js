(function(e){function t(t){for(var r,o,i=t[0],c=t[1],l=t[2],u=0,d=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},s=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0c774d":"62b054a9","chunk-2d2137a1":"570ca3fc","chunk-2d21648f":"5590d8df","chunk-2d21de14":"52982221","chunk-5d1938bc":"0fe9de59","chunk-f7e4d84a":"237819cf"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-f7e4d84a":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0c774d":"31d6cfe0","chunk-2d2137a1":"31d6cfe0","chunk-2d21648f":"31d6cfe0","chunk-2d21de14":"31d6cfe0","chunk-5d1938bc":"31d6cfe0","chunk-f7e4d84a":"46421dd5"}[e]+".css",a=c.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===r||u===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete o[e],p.parentNode.removeChild(p),n(s)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"0bd6":function(e,t,n){},"469b":function(e,t,n){"use strict";var r=n("b4d0"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d"),n("a5d8"),n("f9e3"),n("2dd8");var r=n("2b0e"),o=n("2ef0"),a=n.n(o),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"fluid-container h-100",attrs:{id:"app"},on:{click:function(){}}},[n("b-modal",{attrs:{id:"modal","ok-only":"",title:e.modal.title,"no-close-on-backdrop":!0,"no-close-on-esc":!0,"hide-header-close":!0},on:{hide:e.clearModal},model:{value:e.modal.show,callback:function(t){e.$set(e.modal,"show",t)},expression:"modal.show"}},[n("div",{domProps:{innerHTML:e._s(e.modal.html)}})]),n("b-modal",{attrs:{id:"unlock","ok-only":"",title:e.brandUnlock.title,"no-close-on-backdrop":!0,"no-close-on-esc":!0,"hide-header-close":!1},scopedSlots:e._u([{key:"modal-footer",fn:function(t){t.ok;return[n("a",{staticClass:"btn btn-primary btn-sm",attrs:{href:e.brandUnlock.button.url}},[e._v("\n                "+e._s(e.brandUnlock.button.label)+"\n            ")])]}}])},[e.brandUnlock.video?n("div",["youtube"==e.brandUnlock.video.format?n("youtube",{attrs:{video:e.brandUnlock.video.location}}):e._e(),"file"==e.brandUnlock.video.format?n("videos",{attrs:{video:[e.brandUnlock.video.location]}}):e._e()],1):e._e(),e.brandUnlock.html?n("div",{domProps:{innerHTML:e._s(e.brandUnlock.html)}}):e._e()]),e.fileSystemUrl?n("b-modal",{attrs:{id:"FileSystem",title:"Downloadable Files",size:"lg","hide-footer":!0},on:{shown:e.reloadIframe}},[n("div",{staticClass:"embed-responsive embed-responsive-16by9"},[n("iframe",{key:"jotform-iframe-"+e.fileSystemUrl,attrs:{id:"FileSystemIFrame",src:e.fileSystemUrl}})])]):e._e(),n("div",{staticClass:"fixed-top navbar shadow",attrs:{id:"TopNav"}},[n("div",{staticClass:"left-side"},[n("b-button-group",{staticClass:"d-inline-block d-md-none"},[n("router-link",{staticClass:"btn btn-secondary",attrs:{tag:"button",to:{name:"home"}},on:{click:function(t){return e.dismissNav()}}},[n("i",{staticClass:"fas fa-home"})]),n("b-button",{on:{click:function(t){t.stopPropagation(),t.preventDefault(),e.navRequested=!e.navRequested}}},[n("i",{staticClass:"fas fa-bars"})])],1)],1),n("div",{staticClass:"align-content-center",attrs:{id:"Corp"}},[n("img",{attrs:{id:"Logo",src:"/logo.png"}}),n("span",{staticClass:"brand-color brand-font",attrs:{id:"Wordmark"}},[e._v(e._s(e.brandTitle))])]),e.showUserMenu?n("b-nav",{staticClass:"float-right"},[n("b-nav-item-dropdown",{attrs:{id:"UserMenu",text:e.user.first_name,right:""}},[n("router-link",{staticClass:"dropdown-item",attrs:{tag:"a",to:{name:"set-password"}}},[e._v("Change Password\n                ")]),n("b-dropdown-divider"),n("b-dropdown-item",{on:{click:function(t){return e.logOut()}}},[e._v("Logout")])],1)],1):n("b-nav",{staticClass:"float-right"},[n("b-nav-item-dropdown",{attrs:{id:"GuestMenu",text:"Guest",right:""}},[n("b-dropdown-item",[n("router-link",{staticClass:"dropdown-item",attrs:{tag:"a",to:{name:"login"}}},[e._v("Login")])],1)],1)],1)],1),n("div",{attrs:{id:"ScrollToPoint"}}),n("div",{class:{toggled:e.navRequested||["md","lg","xl"].includes(e.$mq)},attrs:{id:"wrapper"}},[n("div",{directives:[{name:"on-click-outside",rawName:"v-on-click-outside",value:e.dismissNav,expression:"dismissNav"}],attrs:{id:"SideBar"}},[n("b-form",[n("b-input-group",{staticStyle:{"min-width":"250px",top:"5px"}},[n("b-form-input",{model:{value:e.searchString,callback:function(t){e.searchString=t},expression:"searchString"}}),n("b-input-group-append",[n("progress-button",{staticClass:"btn btn-primary",attrs:{name:"bottom",type:"submit",height:5,position:"bottom","fill-color":"#ffffff"},on:{click:function(t){return e.searchCourseContent()}}},[n("i",{staticClass:"fas fa-search"})])],1)],1)],1),n("ul",{staticClass:"sidebar-nav"},[n("li",{staticClass:"sidebar-brand d-none d-md-block"},[n("router-link",{attrs:{to:{name:"home"}}},[n("i",{staticClass:"fas fa-home"}),e._v(" Home\n                    ")])],1),e._l(e.visableExternalNav,(function(t){return n("li",{key:t.url,attrs:{data:t}},[n("a",{attrs:{href:t.url,target:t.newWindow?"_blank":"_self"}},[e._v(e._s(t.label))])])}))],2),e._m(0)],1),n("div",{attrs:{id:"PageWrapper"}},[n("div",{staticClass:"container-fluid"},[n("router-view")],1),n("div",{staticClass:"clearfix",attrs:{id:"BottomBuffer"}})])]),n("div",{staticClass:"row fixed-bottom navbar",attrs:{id:"BottomNav"}},[e._.isEmpty(e.presentation)?e._e():n("div",{staticClass:"col text-center"},[e.presentation.previous?n("progress-button",{staticClass:"btn btn-lg btn-primary float-left",attrs:{height:5,position:"bottom","fill-color":"#ffffff"},on:{click:function(t){return t.preventDefault(),e.loadPresentation({topic:e.presentation.topic,presentation:e.presentation.previous.key})}}},[n("i",{staticClass:"fas fa-arrow-left"})]):e._e(),n("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.FileSystem",modifiers:{FileSystem:!0}}],staticClass:"btn btn-lg btn-primary",attrs:{id:"DownloadButton"}},[n("i",{staticClass:"far fa-folder-open"}),n("span",{staticClass:"d-none d-lg-inline"},[e._v(" Downloads")])]),e.presentation.next?n("progress-button",{staticClass:"btn btn-lg btn-primary float-right",attrs:{height:5,position:"bottom","fill-color":"#ffffff"},on:{click:function(t){return t.preventDefault(),e.loadPresentation({topic:e.presentation.topic,presentation:e.presentation.next.key})}}},[n("i",{staticClass:"fas fa-arrow-right"})]):e._e()],1)])],1)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"fixed-bottom"},[n("a",{staticStyle:{"text-decoration":"none",color:"#cccccc","font-size":"0.7em","padding-left":"50px"},attrs:{target:"_blank",href:"https://CourseController.com"}},[e._v("Powered by CourseController™")])])}],c=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),l=n("df32"),u=n.n(l),d=n("2f62"),p=n("bf61"),f=n("85f6");function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){Object(c["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=n("f13c"),v={name:"app",mixins:[p["mixin"]],data:function(){return{externalNav:[],navRequested:!1,searchString:""}},components:{Videos:f["default"],"progress-button":u.a},methods:b({},Object(d["b"])(["clearUser"]),{reloadIframe:function(){document.getElementById("FileSystemIFrame").contentWindow.postMessage({action:"reload"},"*")},dismissNav:function(){this.navRequested=!1},stamp:function(){return+new Date},clearModal:function(){this.$store.dispatch("clearModal")},logOut:function(){this.$store.dispatch("clearUser"),this.$router.push({name:"login"})},searchCourseContent:function(){var e=this.$router,t=this.$store,n=this.dismissNav;CourseController.searchCourseContent({searchString:this.searchString}).then((function(r){t.dispatch("setSearchResults",r.data),e.push({name:"search-results"}),n()}))},loadPresentation:function(e){CourseController.loadPresentation(e).then(function(){h.scrollTo("#ScrollToPoint",500,{duration:500,easing:"ease"})}.bind(h))},courseControllerUrl:function(e){var t="https://CourseController.com";return t+e}}),mounted:function(){this.externalNav=nav},computed:b({},Object(d["d"])({modal:function(e){return e.modal},user:function(e){return e.user},presentation:function(e){return e.presentation},showUserMenu:function(e){return!_.isEmpty(e.user)},fileSystemUrl:function(e){return!_.isEmpty(e.presentation)&&CourseController.serverUrl()+"/fuqu-course/files/"+e.presentation.topic+"/finder?token="+e.user.api_token},visableExternalNav:function(e){return this.externalNav.filter(function(t){switch(!0){case"undefined"==typeof t.audience:case _.isEmpty(e.user)&&"guest"==t.audience:case!_.isEmpty(e.user)&&"member"==t.audience:return!0;default:return!1}}.bind(e))},brandTitle:function(){return Brand.title},brandUnlock:function(){return Brand.unlock}}))},g=v,y=(n("034f"),n("2877")),w=Object(y["a"])(g,s,i,!1,null,null,null),k=w.exports,C=n("5637"),O=n.n(C),j=n("5f5b"),P=n("660e"),E=(n("a481"),n("8103")),S=n.n(E),x=n("bba4"),U=n.n(x),T=n("97a0");T.keys().forEach((function(e){var t=T(e),n=S()(U()(e.replace(/^\.\/_/,"").replace(/\.\w+$/,"")));r["default"].component(n,t.default||t)}));n("3b2b");var $={install:function(e,t){e.mixin({methods:{isUrl:function(e){if("string"!==typeof e)return!1;var t=new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i");return!!t.test(e)}}})}},A=$,M=n("bfa9");r["default"].set(r["default"].prototype,"_",a.a);var D=new M["a"]({key:"course-controller",storage:localStorage});r["default"].use(d["a"]);var q=new d["a"].Store({plugins:[D.plugin],getters:{},state:{enrollment:{},topics:[],presentation:{},user:{},modal:{title:"",html:"",show:!1},searchResults:[]},mutations:{applyPresentation:function(e,t){e.presentation=t},toggleCompleted:function(e,t){switch(t.type){case"topic":for(var n in e.topics){var r=e.topics[n];if(r.key==t.key){r.completed=!r.completed,CourseController.recordCompletion("topic",{key:r.key,completed:r.completed});break}}break;case"presentation":var o=e.presentation;o.completed=!o.completed,CourseController.recordCompletion("presentation",{key:o.key,topic:o.topic,completed:o.completed});break}},applyTopcis:function(e,t){e.topics=t},applyUser:function(e,t){e.user=t},applyModal:function(e,t){"The given data was invalid."==t.title&&(t.title="Error"),e.modal=t},applySearchResults:function(e,t){e.searchResults=t}},actions:{setSearchResults:function(e,t){var n=e.commit;e.state;n("applySearchResults",t)},setPresentation:function(e,t){var n=e.commit;e.state;n("applyPresentation",t)},setTopics:function(e,t){var n=e.commit;e.state;n("applyTopcis",t)},setEnrollment:function(e,t){var n=e.commit;e.state;n("applyEnrollment",t)},setUser:function(e,t){var n=e.commit;e.state;n("applyUser",t)},clearUser:function(e){var t=e.commit;e.state;t("applyUser",{})},setModal:function(e,t){var n=e.commit;e.state;t.show=!a.a.isEmpty(t.title),n("applyModal",t)},clearModal:function(e){var t=e.commit;e.state;t("applyModal",{title:"",html:""})},clearSearchResults:function(e){var t=e.commit;e.state;t("applySearchResults",[])}}}),N=n("bc3a"),V=n.n(N),L=n("a7fe"),R=n.n(L);r["default"].set(r["default"].prototype,"_",a.a),r["default"].use(R.a,V.a);var z="https://CourseController.com",F={serverUrl:function(){return z},loadEnrollment:function(){V.a.get(z+"/fuqu-course/enrollment").then((function(e){VueApp.$store.dispatch("setEnrollment",e.data)}))},loadPresentation:function(e){var t="/fuqu-course/topics/{topic}/presentations/{presentation}".replace("{topic}",e.topic).replace("{presentation}",e.presentation);return V.a.get(z+t).then((function(t){t.data.topic=e.topic,VueApp.$store.dispatch("setPresentation",t.data)}))},searchCourseContent:function(e){var t="/fuqu-course/search?search_string={search_string}".replace("{search_string}",e.searchString);return V.a.get(z+t).then()},recordCompletion:function(e,t){var n;switch(e){case"topic":return n="/fuqu-course/topics/{topic}/{action}".replace("{topic}",t.key).replace("{action}","update"),V.a.post(z+n,t);case"presentation":return n="/fuqu-course/topics/{topic}/presentations/{presentation}/{action}".replace("{topic}",t.topic).replace("{presentation}",t.key).replace("{action}","update"),V.a.post(z+n,t)}},loadTopics:function(){V.a.get(z+"/fuqu-course/topics").then((function(e){VueApp.$store.dispatch("setTopics",e.data)}))},login:function(e,t){return V.a.post(z+"/fuqu/enrollments/login",{email:e,password:t}).then((function(e){B(e.data)}))},forgotPassword:function(e){return V.a.post(z+"/fuqu/enrollments/forgot-password",{email:e})},useForgotPasswordHash:function(e){return V.a.post(z+"/fuqu/enrollments/forgot-password-user",{hash:e}).then((function(e){B(e.data)}))},setPassword:function(e){return V.a.post(z+"/fuqu/enrollments/set-password",{password:e})},useToken:function(e){V.a.defaults.headers.common["Authorization"]=e},useLoginAs:function(e){return"undefined"!=typeof V.a.defaults.headers.common["Authorization"]&&delete V.a.defaults.headers.common["Authorization"],V.a.post(z+"/fuqu/enrollments/login-as",{enrollment:e}).then((function(e){B(e.data)}))}};function B(e){CourseController.useToken(e.api_token),VueApp.$store.dispatch("setUser",e)}function H(e){if(a.a.isEmpty(e.data.errors))t="Error",n="<p>"+e.data.message+"</p>";else{var t=e.data.message,n="<ul>";for(var r in e.data.errors)n+=e.data.errors[r];n+="<ul>"}VueApp.$store.dispatch("setModal",{title:t,html:n})}V.a.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),V.a.interceptors.response.use((function(e){return e}),(function(e){return H(e.response),Promise.reject(e)}));var I=n("8c4f");r["default"].use(I["a"]);var W=new I["a"]({base:"/",routes:[{path:"/search-results",name:"search-results",component:function(){return n.e("chunk-f7e4d84a").then(n.bind(null,"c7a0"))}},{path:"/presentation",name:"presentation",component:function(){return n.e("chunk-5d1938bc").then(n.bind(null,"5ccf"))},beforeEnter:function(e,t,n){"undefined"==typeof VueApp||_.isEmpty(VueApp.$store.state.user)?n({name:"login"}):_.isEmpty(VueApp.$store.state.presentation)?n({name:"home"}):n()}},{path:"",name:"home",component:function(){return n.e("chunk-2d0c774d").then(n.bind(null,"5161"))},beforeEnter:function(e,t,n){"undefined"==typeof VueApp||_.isEmpty(VueApp.$store.state.user)?n({name:"login"}):(VueApp.$store.dispatch("setPresentation",{}),n())}},{path:"/login",name:"login",component:function(){return n.e("chunk-2d2137a1").then(n.bind(null,"ad9a"))}},{path:"/forgot-password",name:"forgot-password",component:function(){return n.e("chunk-2d21648f").then(n.bind(null,"c28b"))}},{path:"/set-password/:hash?",name:"set-password",component:function(){return n.e("chunk-2d21de14").then(n.bind(null,"d2d4"))},beforeEnter:function(e,t,n){_.isEmpty(e.params.hash)?"undefined"==typeof VueApp||_.isEmpty(VueApp.$store.state.user)?n({name:"login"}):n():CourseController.useForgotPasswordHash(e.params.hash).then(function(e){n({name:"set-password"})}.bind(n)).catch((function(e){n({name:"login"})}))}},{path:"/login-as/:enrollment",name:"login-as",beforeEnter:function(e,t,n){CourseController.useLoginAs(e.params.enrollment).then(function(e){n({name:"home"})}.bind(n))}}]});r["default"].set(r["default"].prototype,"_",a.a),CourseController=F,r["default"].use(A),r["default"].use(P["a"],{breakpoints:{xs:576,sm:768,md:993,lg:1200,xl:1/0}}),r["default"].use(j["a"],{parent:".nprogress-container"}),r["default"].use(O.a,{});var G=new O.a;r["default"].config.productionTip=!0,VueApp=new r["default"]({render:function(e){return e(k)},nprogress:G,router:W,store:q}).$mount("#app")},5761:function(e,t,n){},"64a9":function(e,t,n){},"78f1":function(e,t,n){"use strict";var r=n("ce9e"),o=n.n(r);o.a},"85f6":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"embed-responsive embed-responsive-16by9"},[n("video",{attrs:{controls:"",playsinline:""}},e._l(e.video,(function(t){return n("source",{key:t,attrs:{data:t,src:t.replace("https:","").replace("http:",""),type:e.mimeType(t)}})})),0)])},o=[],a=(n("8e6e"),n("ac6a"),n("456d"),n("28a5"),n("bd86")),s=n("2f62");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(a["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={name:"videos",props:["video"],methods:c({mimeType:function(e){var t=e.split("?")[0].split(".").pop();return{mp4:"video/mp4",webm:"video/webm"}[t]}},Object(s["b"])(["setModal"]))},u=l,d=(n("b976"),n("2877")),p=Object(d["a"])(u,r,o,!1,null,"2dfb625c",null);t["default"]=p.exports},"97a0":function(e,t,n){var r={"./Card.vue":"ae8d","./Check.vue":"e8f6","./Story.vue":"dbd5","./Videos.vue":"85f6","./Youtube.vue":"d758"};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="97a0"},"987d":function(e,t,n){},ae8d:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card"},[n("div",{staticClass:"card-img-top",style:{backgroundImage:"url("+e.image.replace("https:","").replace("http:","")+"?w=500)"},on:{click:function(t){return t.preventDefault(),e.action(t)}}}),n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[e._v(e._s(e.title))]),n("p",{staticClass:"card-text"},[e._v(e._s(e.description))])]),n("div",{staticClass:"card-footer"},[e._t("footer")],2)])},o=[],a={name:"card",props:["image","action","title","description","presentation"]},s=a,i=(n("78f1"),n("2877")),c=Object(i["a"])(s,r,o,!1,null,"2aa3533a",null);t["default"]=c.exports},b4d0:function(e,t,n){},b976:function(e,t,n){"use strict";var r=n("0bd6"),o=n.n(r);o.a},bdb7:function(e,t,n){"use strict";var r=n("987d"),o=n.n(r);o.a},ce9e:function(e,t,n){},d758:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"embed-responsive embed-responsive-16by9"},[n("iframe",{attrs:{src:e.videoSrc,frameborder:"0",allowfullscreen:""}}),n("a",{staticClass:"noshare",attrs:{href:"#"},on:{click:function(t){return e.$store.dispatch("setModal",{title:"Sorry...",html:"That action is not permitted."})}}})])])},o=[],a=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),s=n("2f62");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(a["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={name:"youtube",props:["video"],computed:{videoSrc:function(){return"//www.youtube-nocookie.com/embed/"+this.video+"?rel=0&controls=0&modestbranding=1&showinfo=0&"}},methods:c({},Object(s["b"])(["setModal"]))},u=l,d=(n("f0b6"),n("2877")),p=Object(d["a"])(u,r,o,!1,null,"4695e2f6",null);t["default"]=p.exports},dbd5:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h1",[e._v(e._s(e.title))]),n("h2",[e._v(e._s(e.subtitle))]),n("div",{staticClass:"row"},[n("div",{staticClass:"col",domProps:{innerHTML:e._s(e.main)}})])])},o=[],a={name:"story",props:["title","subtitle","main"]},s=a,i=(n("469b"),n("2877")),c=Object(i["a"])(s,r,o,!1,null,null,null);t["default"]=c.exports},e8f6:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{style:{color:e.color}},[n("i",{staticClass:"fas fa-check-circle"})])},o=[],a={name:"check",props:["tog"],computed:{color:function(){return this.tog?"#009900":"#dedede"}}},s=a,i=(n("bdb7"),n("2877")),c=Object(i["a"])(s,r,o,!1,null,"7bea3c2e",null);t["default"]=c.exports},f0b6:function(e,t,n){"use strict";var r=n("5761"),o=n.n(r);o.a}});
//# sourceMappingURL=app.db8ef5e9.js.map