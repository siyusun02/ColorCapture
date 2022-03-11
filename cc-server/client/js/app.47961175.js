(function(t){function e(e){for(var r,i,s=e[0],c=e[1],l=e[2],d=0,v=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&v.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(v.length)v.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,i=1;i<a.length;i++){var c=a[i];0!==o[c]&&(r=!1)}r&&(n.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},o={app:0},n=[];function i(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-2d22d746":"d0b1bb65"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=o[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,r){a=o[t]=[e,r]}));e.push(a[2]=r);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var l=new Error;n=function(e){c.onerror=c.onload=null,clearTimeout(d);var a=o[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",l.name="ChunkLoadError",l.type=r,l.request=n,a[1](l)}o[t]=void 0}};var d=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",["Camera"!==t.$route.name?r("v-app-bar",{attrs:{height:"90",flat:"",app:"",color:"white"}},[r("div",{staticClass:"text-h4 font-weight-bold mt-5 ps-2"},[t._v(t._s(t.$route.name))]),r("v-spacer"),r("div",{staticClass:"logo mt-5 rounded-circle"},[r("img",{attrs:{src:a("9b19"),alt:"Logo"}})])],1):t._e(),r("v-main",[t.offline?r("v-alert",{staticClass:"offline elevation-4",attrs:{type:"error",dense:"",border:"right","colored-border":""}},[t._v("No network connection...")]):t._e(),r("router-view",{attrs:{savColors:t.savColors,savPalettes:t.savPalettes},on:{getsc:t.getSavColors,getsp:t.getSavPalettes,delsav:t.delSaved,editsav:t.editSaved,addc:t.addColor,addp:t.addPalette}})],1),r("div",{staticClass:"nav-wrapper"},[r("v-sheet",{staticClass:"nav ma-3 rounded-pill",attrs:{elevation:"4"}},[r("v-btn",{attrs:{"x-large":"",plain:"",fab:"","active-class":"nav-active",to:"/about",exact:""}},[r("v-icon",[t._v("mdi-information")])],1),r("v-btn",{staticClass:"main-btn my-3 mx-5",attrs:{to:"/","x-large":"",color:"primary",dark:"",fab:"",exact:""}},[r("v-icon",[t._v("mdi-camera")])],1),r("v-btn",{attrs:{"x-large":"",plain:"",fab:"","active-class":"nav-active",exact:"",to:"/library"}},[r("v-icon",[t._v("mdi-palette")])],1)],1)],1),r("v-snackbar",{scopedSlots:t._u([{key:"action",fn:function(e){var a=e.attrs;return[r("v-btn",t._b({attrs:{color:"primary",text:""},on:{click:t.update}},"v-btn",a,!1),[t._v(" OK ")])]}}]),model:{value:t.swupdate,callback:function(e){t.swupdate=e},expression:"swupdate"}},[t._v(" New content is available!. Click OK to refresh... ")])],1)},n=[],i=a("b85c"),s=a("5530"),c=a("1da1"),l=(a("4de4"),a("d3b7"),a("d81d"),a("99af"),a("7db0"),a("96cf"),a("bc3a")),d=a.n(l),u=a("1d25"),v={name:"App",data:function(){return{serverAddress:"",value:"recent",swupdate:!1,offline:!navigator.onLine,savColors:[],savPalettes:[],db:void 0}},methods:{update:function(){this.swupdate=!1,location.reload()},addColor:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,d.a.post("".concat(e.serverAddress,"/colors"),t);case 2:e.$router.push({path:"/library"});case 3:case"end":return a.stop()}}),a)})))()},addPalette:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,d.a.post("".concat(e.serverAddress,"/palettes"),t);case 2:e.$router.push({path:"/library"});case 3:case"end":return a.stop()}}),a)})))()},getSavColors:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a,r,o,n,c,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.offline){e.next=7;break}return e.next=3,t.db.getAll("colors");case 3:a=e.sent,t.savColors=a.filter((function(t){return!t.isDeleted})),e.next=31;break;case 7:return e.next=9,d.a.get("".concat(t.serverAddress,"/colors"));case 9:return r=e.sent,o=r.data,t.savColors=o.map((function(t){return Object(s["a"])(Object(s["a"])({},t),{},{show:!1,isDeleted:!1})})),e.next=14,t.db.clear("colors");case 14:n=Object(i["a"])(t.savColors),e.prev=15,n.s();case 17:if((c=n.n()).done){e.next=23;break}return l=c.value,e.next=21,t.db.put("colors",l);case 21:e.next=17;break;case 23:e.next=28;break;case 25:e.prev=25,e.t0=e["catch"](15),n.e(e.t0);case 28:return e.prev=28,n.f(),e.finish(28);case 31:case"end":return e.stop()}}),e,null,[[15,25,28,31]])})))()},getSavPalettes:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("".concat(t.serverAddress,"/palettes"));case 2:a=e.sent,r=a.data,t.savPalettes=r.map((function(t){return Object(s["a"])(Object(s["a"])({},t),{},{show:!1})}));case 5:case"end":return e.stop()}}),e)})))()},editSaved:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!t.color){a.next=6;break}return a.next=3,d.a.patch("".concat(e.serverAddress,"/colors/").concat(t.id),t);case 3:e.getSavColors(),a.next=9;break;case 6:return a.next=8,d.a.patch("".concat(e.serverAddress,"/palettes/").concat(t.id),t);case 8:e.getSavPalettes();case 9:case"end":return a.stop()}}),a)})))()},delSaved:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!t.color){a.next=12;break}if(!e.offline){a.next=7;break}r=e.savColors.find((function(e){return t.id===e.id})),r.isDeleted=!0,e.db.put("colors",r),a.next=9;break;case 7:return a.next=9,d.a.delete("".concat(e.serverAddress,"/colors/").concat(t.id));case 9:e.getSavColors(),a.next=15;break;case 12:return a.next=14,d.a.delete("".concat(e.serverAddress,"/palettes/").concat(t.id));case 14:e.getSavPalettes();case 15:case"end":return a.stop()}}),a)})))()}},created:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["a"])("colorcapturedb",1,{upgrade:function(t){t.createObjectStore("colors",{keyPath:"id"})}});case 2:t.db=e.sent,document.addEventListener("swUpdated",(function(){return t.swupdate=!0}),{once:!0}),window.addEventListener("online",Object(c["a"])(regeneratorRuntime.mark((function e(){var a,r,o,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.offline=!1,e.next=3,t.db.getAll("colors");case 3:a=e.sent,r=Object(i["a"])(a),e.prev=5,r.s();case 7:if((o=r.n()).done){e.next=16;break}if(n=o.value,!n.isDeleted){e.next=14;break}return e.next=12,d.a.delete("".concat(t.serverAddress,"/colors/").concat(n.id));case 12:return e.next=14,t.db.delete("colors",n.id);case 14:e.next=7;break;case 16:e.next=21;break;case 18:e.prev=18,e.t0=e["catch"](5),r.e(e.t0);case 21:return e.prev=21,r.f(),e.finish(21);case 24:t.getSavColors();case 25:case"end":return e.stop()}}),e,null,[[5,18,21,24]])})))),window.addEventListener("offline",(function(){return t.offline=!0})),t.getSavColors();case 7:case"end":return e.stop()}}),e)})))()}},p=v,m=(a("034f"),a("2877")),f=a("6544"),h=a.n(f),b=a("0798"),g=a("7496"),x=a("40dc"),w=a("8336"),k=a("132d"),C=a("f6c4"),_=a("8dd9"),y=a("2db4"),j=a("2fa4"),O=Object(m["a"])(p,o,n,!1,null,null,null),S=O.exports;h()(O,{VAlert:b["a"],VApp:g["a"],VAppBar:x["a"],VBtn:w["a"],VIcon:k["a"],VMain:C["a"],VSheet:_["a"],VSnackbar:y["a"],VSpacer:j["a"]});var V=a("9483");Object(V["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(t){console.log("New content is available; please refresh."),document.dispatchEvent(new CustomEvent("swUpdated",{detail:t}))},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});a("3ca3"),a("ddb0");var P=a("8c4f"),D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"camera"},[a("video",{staticClass:"video",attrs:{playsinline:"",autoplay:""}},[t._v(" Video stream not available. ")]),a("div",{staticClass:"controls"},[a("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",loading:t.loading}},[a("v-icon",{attrs:{dark:""}},[t._v(" mdi-image-multiple ")]),a("input",{ref:"photoInp",staticClass:"v-btn--fab v-btn--round v-size--small",staticStyle:{opacity:"0",position:"absolute"},attrs:{type:"file",accept:"image/*"},on:{change:t.selectimage}})],1),a("v-btn",{staticClass:"mx-2",attrs:{disabled:!t.videoReady,loading:t.loading,fab:"",dark:""},on:{click:function(e){return e.stopPropagation(),t.takepicture.apply(null,arguments)}}},[a("v-icon",{attrs:{dark:""}},[t._v(" mdi-radiobox-marked ")])],1),a("v-btn",{staticClass:"mx-2",attrs:{loading:t.loading,disabled:!t.videoReady||t.isTurning,fab:"",dark:"",small:""},on:{click:t.turnCam}},[a("v-icon",{attrs:{dark:""}},[t._v(" mdi-camera-switch ")])],1)],1)]),a("v-dialog",{attrs:{eager:"",fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-toolbar",{staticClass:"edit-header"},[a("v-btn",{attrs:{icon:""},on:{click:function(e){t.dialog=!1}}},[a("v-icon",[t._v("mdi-close")])],1)],1),a("div",{staticClass:"wrapper"},[a("canvas",{staticClass:"canvas",on:{mousedown:t.pickcolor}})]),t.showPalette?a("v-card-text",{staticClass:"edit-main edit-palette text--primary rounded-t-xl"},[a("div",{staticClass:"mb-1 mt-3 font-weight-bold text-center"},[t._v(" Generated "),a("span",{staticClass:"primary--text"},[t._v("color scheme ")]),t._v(" to image. "),a("br"),t._v(" Select individual colors to "),a("span",{staticClass:"primary--text"},[t._v("change")]),t._v(" them. ")]),a("v-item-group",{attrs:{mandatory:""},model:{value:t.pix,callback:function(e){t.pix=e},expression:"pix"}},[a("v-row",{staticClass:"elevation-3 rounded-pill pa-3 my-2",attrs:{"no-gutters":""}},t._l(t.palette,(function(e,r){return a("v-col",{key:r},[a("v-item",{scopedSlots:t._u([{key:"default",fn:function(t){var r=t.active,o=t.toggle;return[a("v-chip",{staticClass:"color-field inset-shadow mx-2",class:{active:r},attrs:{color:e},on:{click:o}})]}}],null,!0)})],1)})),1)],1),a("div",{staticClass:"color-edit my-2"},[a("v-menu",{attrs:{top:"","offset-y":!0,"close-on-content-click":!1},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:"",fab:"",small:""}},"v-btn",o,!1),r),[a("v-icon",{attrs:{dark:""}},[t._v("mdi-pencil")])],1)]}}])},[a("v-color-picker",{model:{value:t.palette[t.pix],callback:function(e){t.$set(t.palette,t.pix,e)},expression:"palette[pix]"}})],1),a("ColorPill",{attrs:{color:t.palette[t.pix]}})],1)],1):a("v-card-text",{staticClass:"edit-main edit-color text--primary rounded-t-xl"},[a("div",{staticClass:"mb-1 mt-3 font-weight-bold text-center"},[t._v(" Click on the image to "),a("span",{staticClass:"primary--text"},[t._v("pick")]),t._v(" a color. "),a("br"),t._v(" Click on the color to copy it. ")]),a("div",{staticClass:"color-edit my-2"},[a("v-menu",{attrs:{top:"","offset-y":!0,"close-on-content-click":!1},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:"",fab:"",small:""}},"v-btn",o,!1),r),[a("v-icon",{attrs:{dark:""}},[t._v("mdi-pencil")])],1)]}}],null,!1,3775545874)},[a("v-color-picker",{model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1),a("ColorPill",{attrs:{color:t.color}})],1)]),a("v-divider"),a("v-card-actions",{staticClass:"ps-2 edit-footer"},[a("v-btn",{attrs:{color:"secondary",rounded:""},on:{click:function(e){t.showPalette=!t.showPalette}}},[a("v-icon",{staticClass:"mr-2"},[t._v("mdi-"+t._s(t.showPalette?"arrow-left":"palette"))]),t._v(" "+t._s(t.showPalette?"Back":"Palette")+" ")],1),a("SaveDialog",{attrs:{isPalette:t.showPalette,palette:t.palette,image:t.image,color:t.color},on:{add:t.save}})],1)],1)],1)],1)},R=[],T=a("2909"),A=(a("2b3d"),a("9861"),a("a15b"),a("25f0"),a("159b"),a("07a2")),M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[a("v-btn",t._g(t._b({attrs:{color:"primary",rounded:""}},"v-btn",o,!1),r),[a("v-icon",{staticClass:"mr-2"},[t._v("mdi-content-save")]),t._v(" Save ")],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-toolbar",{attrs:{dark:"",dense:""}},[a("v-btn",{attrs:{icon:""},on:{click:function(e){t.dialog=!1}}},[a("v-icon",[t._v("mdi-close")])],1),a("div",[t._v("Save "+t._s(t.isPalette?"palette":"color")+" to library")])],1),a("v-card-text",[a("v-form",{ref:"form",attrs:{"lazy-validation":""}},[a("v-text-field",{attrs:{label:"Title *",required:"",counter:20,rules:t.titleRules,hint:"A title for this creation."},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),a("v-text-field",{attrs:{label:"Creator",hint:"Name of the creator."},model:{value:t.creator,callback:function(e){t.creator=e},expression:"creator"}}),a("v-textarea",{attrs:{solo:"",label:"Comment",hint:"A small description or comment."},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}}),a("small",[t._v("* indicates required field")])],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{rounded:"",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Cancel ")]),a("v-btn",{attrs:{rounded:"",color:"primary",loading:t.loading},on:{click:t.save}},[t._v(" Save ")])],1)],1)],1)},$=[],U={data:function(){return{dialog:!1,title:"",titleRules:[function(t){return!!t||"Title is required"},function(t){return t&&t.length<=20||"Title must be less than 20 characters"}],creator:"",comment:"",loading:!1}},props:{image:String,color:String,palette:Array,isPalette:Boolean},methods:{save:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a,r,o,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.$refs.form.validate()){e.next=13;break}if(a="",!("geolocation"in navigator)){e.next=10;break}return e.next=5,new Promise((function(t,e){navigator.geolocation.getCurrentPosition(t,e,{enableHighAccuracy:!0})}));case 5:r=e.sent,o=r.coords,a="".concat(o.latitude,",").concat(o.longitude),e.next=11;break;case 10:console.log("Error, Geolocation");case 11:n=t.isPalette?{image:t.image,title:t.title,creator:t.creator,comment:t.comment,palette:t.palette,location:a}:{image:t.image,title:t.title,creator:t.creator,comment:t.comment,color:t.color,location:a},t.$emit("add",n);case 13:case"end":return e.stop()}}),e)})))()}},created:function(){navigator.geolocation.getCurrentPosition((function(){}))}},I=U,E=a("b0af"),L=a("99d9"),B=a("169a"),q=a("4bd4"),F=a("8654"),H=a("a844"),G=a("71d9"),z=Object(m["a"])(I,M,$,!1,null,null,null),N=z.exports;h()(z,{VBtn:w["a"],VCard:E["a"],VCardActions:L["a"],VCardText:L["c"],VDialog:B["a"],VForm:q["a"],VIcon:k["a"],VSpacer:j["a"],VTextField:F["a"],VTextarea:H["a"],VToolbar:G["a"]});var W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"color-pill"},[a("v-tooltip",{attrs:{"open-on-click":!0,"open-on-hover":!1,top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[a("v-chip",t._g(t._b({staticClass:"inset-shadow rounded-pill mx-1",class:t.fontColor,attrs:{color:t.color},on:{click:t.copy}},"v-chip",o,!1),r),[t._v(" "+t._s(t.colormode)+" ")])]}}]),model:{value:t.tooltip,callback:function(e){t.tooltip=e},expression:"tooltip"}},[a("span",[t._v("Copied "+t._s(t.colormode)+" to clipboard.")])]),a("v-btn",{attrs:{icon:"",fab:"",small:""},on:{click:t.swapMode}},[a("v-icon",[t._v("mdi-unfold-more-horizontal")])],1)],1)},J=[],K=(a("b680"),{data:function(){return{modes:["hex","rgb","hsl"],mode:0,tooltip:!1}},props:{color:String},computed:{colormode:function(){switch(this.modes[this.mode]){case"hex":return this.color;case"rgb":return this.hexToRgb(this.color);case"hsl":return this.hexToHsl(this.color);default:return"error"}},fontColor:function(){var t="0x"+this.color[1]+this.color[2],e="0x"+this.color[3]+this.color[4],a="0x"+this.color[5]+this.color[6],r=.299*+t+.587*+e+.114*+a;return r>120?"black--text":"white--text"}},methods:{swapMode:function(){this.mode++,this.mode>=this.modes.length&&(this.mode=0)},copy:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,navigator.clipboard.writeText(t.colormode);case 2:t.tooltip=!0,setTimeout((function(){return t.tooltip=!1}),1500);case 4:case"end":return e.stop()}}),e)})))()},hexToRgb:function(t){var e="0x"+t[1]+t[2],a="0x"+t[3]+t[4],r="0x"+t[5]+t[6];return"rgb(".concat(+e,", ").concat(+a,", ").concat(+r,")")},hexToHsl:function(t){var e="0x"+t[1]+t[2],a="0x"+t[3]+t[4],r="0x"+t[5]+t[6];e/=255,a/=255,r/=255;var o=Math.min(e,a,r),n=Math.max(e,a,r),i=n-o,s=0,c=0,l=0;return s=0==i?0:n==e?(a-r)/i%6:n==a?(r-e)/i+2:(e-a)/i+4,s=Math.round(60*s),s<0&&(s+=360),l=(n+o)/2,c=0==i?0:i/(1-Math.abs(2*l-1)),"hsl(".concat(s,", ").concat(c.toFixed(2),", ").concat(l.toFixed(2),")")}}}),X=K,Y=(a("f1c4"),a("cc20")),Q=a("3a2f"),Z=Object(m["a"])(X,W,J,!1,null,null,null),tt=Z.exports;h()(Z,{VBtn:w["a"],VChip:Y["a"],VIcon:k["a"],VTooltip:Q["a"]});var et,at=new A["a"],rt={name:"Home",data:function(){return{canvas:void 0,dialog:!1,image:"",width:320,height:0,color:"#ffffff",pix:0,palette:[],showPalette:!1,videoReady:!1,facingmode:"user",stream:void 0,isTurning:!1,loading:!1}},components:{SaveDialog:N,ColorPill:tt},methods:{getUserMedia:function(t){if(navigator.mediaDevices)return navigator.mediaDevices.getUserMedia(t);var e=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;return e?new Promise((function(a,r){e.bind(navigator)(t,a,r)})):void 0},selectimage:function(){var t=this;this.loading=!0;var e=this.$refs.photoInp.files[0];if(this.$refs.photoInp.value="",e){var a=new Image;console.log(a),a.src=URL.createObjectURL(e),a.onload=function(){t.drawImage(a)}}},takepicture:function(){this.loading=!0,this.drawImage(et)},drawImage:function(t){var e=this;this.canvas||(this.canvas=document.querySelector(".canvas"));var a=!1;t.width&&t.height?(this.canvas.width=t.width,this.canvas.height=t.height,a=!0):t.videoWidth&&t.videoHeight?(this.canvas.width=et.videoWidth,this.canvas.height=et.videoHeight):console.log("Error.");var r=this.canvas.getContext("2d");if(r.drawImage(t,0,0,this.canvas.width,this.canvas.height),this.image=this.canvas.toDataURL("image/png"),a)this.setColorScheme(t);else{var o=new Image;o.src=this.image,o.onload=function(){return e.setColorScheme(o)}}this.dialog=!0,this.loading=!1},pickcolor:function(t){var e=t.offsetX*this.canvas.width/this.canvas.clientWidth,a=t.offsetY*this.canvas.height/this.canvas.clientHeight,r=this.canvas.getContext("2d"),o=r.getImageData(e,a,1,1),n=this.rgbToHex.apply(this,Object(T["a"])(o.data));this.showPalette?this.$set(this.palette,this.pix,n):this.color=n,console.log(this.palette)},setColorScheme:function(t){var e=this;this.color=this.rgbToHex.apply(this,Object(T["a"])(at.getColor(t)));var a=at.getPalette(t,5);this.palette=a.map((function(t){return e.rgbToHex.apply(e,Object(T["a"])(t))})),this.pix=0},rgbToHex:function(t,e,a){return"#"+[t,e,a].map((function(t){var e=t.toString(16);return 1===e.length?"0"+e:e})).join("")},turnCam:function(){this.isTurning=!0,this.facingmode="user"==this.facingmode?"environment":"user";var t=this.stream.getTracks();t.forEach((function(t){return t.stop()})),this.setStream(this.facingmode)},setStream:function(t){var e=this;this.getUserMedia({video:{facingMode:t}}).then((function(t){e.stream=t,e.videoReady=!0,et=document.querySelector(".video"),"srcObject"in et?et.srcObject=t:navigator.mozGetUserMedia?et.mozSrcObject=t:et.src=(window.URL||window.webkitURL).createObjectURL(t),et.play(),e.isTurning=!1})).catch((function(t){console.log(t)}))},save:function(t){console.log(t),console.log(this.showPalette),this.showPalette?this.$emit("addp",t):this.$emit("addc",t)}},mounted:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(navigator.mediaDevices||navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia){e.next=3;break}return alert("User Media API not supported."),e.abrupt("return");case 3:t.setStream(t.facingmode);case 4:case"end":return e.stop()}}),e)})))()}},ot=rt,nt=(a("7288"),a("62ad")),it=a("03a4"),st=a("ce7e"),ct=a("d903"),lt=a("604c"),dt=a("e449"),ut=a("0fd9"),vt=Object(m["a"])(ot,D,R,!1,null,null,null),pt=vt.exports;h()(vt,{VBtn:w["a"],VCard:E["a"],VCardActions:L["a"],VCardText:L["c"],VChip:Y["a"],VCol:nt["a"],VColorPicker:it["a"],VDialog:B["a"],VDivider:st["a"],VIcon:k["a"],VItem:ct["a"],VItemGroup:lt["b"],VMenu:dt["a"],VRow:ut["a"],VToolbar:G["a"]});var mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pb-16"},[a("v-tabs",{staticClass:"px-4 white",staticStyle:{position:"fixed","z-index":"5"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-tab",[t._v("Colors")]),a("v-tab",[t._v("Palettes")])],1),a("v-tabs-items",{staticClass:"py-12",model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-tab-item",[a("v-data-iterator",{staticClass:"px-4",attrs:{"disable-pagination":"","hide-default-footer":"",items:t.savColors,search:t.search,"sort-by":t.sortBy.toLowerCase(),"sort-desc":t.sortDesc},scopedSlots:t._u([{key:"header",fn:function(){return[a("v-toolbar",{staticClass:"mt-7 elevation-0",staticStyle:{"border-top":"1px solid #ddd"}},[a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-magnify")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-microphone")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-filter")])],1)],1)]},proxy:!0},{key:"default",fn:function(e){return[a("v-container",[a("v-row",t._l(e.items,(function(e){return a("v-col",{key:e.id,attrs:{cols:"12",md:"6",lg:"4"}},[a("v-card",{staticClass:"mx-auto sc-card",attrs:{"max-width":"344",elevation:"4"}},[a("v-img",{attrs:{src:t.serverAddress+"/images/"+e.imgname,height:"200px"}}),a("v-card-title",[t._v(" "+t._s(e.title||"Untitled Work")+" ")]),a("v-card-subtitle",[t._v(" by "+t._s(e.creator||"Unknown Creator")+" ")]),a("v-card-text",[a("ColorPill",{attrs:{color:e.color}})],1),a("v-card-actions",{attrs:{icon:""},on:{click:function(t){e.show=!e.show}}},[a("v-btn",{attrs:{rounded:"",color:"primary",text:""}},[t._v("Details")]),a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v(" "+t._s(e.show?"mdi-chevron-up":"mdi-chevron-down")+" ")])],1)],1),a("v-expand-transition",[a("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"sc.show"}]},[a("v-divider"),a("v-card-text",[a("blockquote",{staticClass:"font-italic"},[t._v(" "+t._s(e.comment)+" ")]),a("v-chip",{staticClass:"my-5 me-2"},[a("v-icon",{attrs:{left:""}},[t._v(" mdi-calendar ")]),t._v(" "+t._s(new Date(e.createdate).toDateString())+" ")],1),a("v-chip",{on:{click:function(a){return t.openMap(e.location)}}},[a("v-icon",{attrs:{left:""}},[t._v(" mdi-map-marker ")]),t._v(" "+t._s(e.location||"--,--")+" ")],1)],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(a){t.delDialog=!0,t.currObj=Object.assign({},e)}}},[a("v-icon",[t._v("mdi-delete")])],1),a("v-btn",{attrs:{icon:""},on:{click:function(a){t.editDialog=!0,t.currObj=Object.assign({},e)}}},[a("v-icon",[t._v("mdi-pencil")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-share-variant")])],1)],1)],1)])],1)],1)})),1)],1)]}}])})],1),a("v-tab-item",[a("v-data-iterator",{attrs:{"disable-pagination":"","hide-default-footer":"",items:t.savPalettes,search:t.search,"sort-by":t.sortBy.toLowerCase(),"sort-desc":t.sortDesc},scopedSlots:t._u([{key:"header",fn:function(){return[a("v-toolbar",{staticClass:"my-3",attrs:{dark:""}},[a("v-text-field",{staticClass:"rounded-pill me-1",attrs:{dense:"",clearable:"","solo-inverted":"","hide-details":"","prepend-inner-icon":"mdi-magnify",label:"Search"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[a("v-btn",{attrs:{slot:"append",small:"",icon:""},slot:"append"},[a("v-icon",[t._v(" mdi-microphone ")])],1)],1),a("v-spacer"),a("v-select",{staticClass:"me-1",attrs:{solo:"",dense:"","hide-details":"",items:t.keys,"prepend-inner-icon":"mdi-sort",label:"Sort by"},model:{value:t.sortBy,callback:function(e){t.sortBy=e},expression:"sortBy"}}),a("v-btn",{attrs:{small:"",fab:"",text:""},on:{click:function(e){t.sortDesc=!t.sortDesc}}},[a("v-icon",[t._v("mdi-sort-alphabetical-variant")])],1)],1)]},proxy:!0},{key:"default",fn:function(e){return[a("v-container",[a("v-row",t._l(e.items,(function(e){return a("v-col",{key:e.id,attrs:{cols:"12",md:"6",lg:"4"}},[a("v-card",{staticClass:"mx-auto sc-card",attrs:{"max-width":"344"}},[a("v-img",{attrs:{src:t.serverAddress+"/images/"+e.imgname,height:"200px"}}),a("v-card-title",[t._v(" "+t._s(e.title||"Untitled Work")+" ")]),a("v-card-subtitle",[t._v(" by "+t._s(e.creator||"Unknown Creator")+" ")]),a("v-card-text",[a("v-row",{staticClass:"elevation-3 rounded-pill pa-3 my-2",attrs:{"no-gutters":""}},t._l(e.palette,(function(t,e){return a("v-col",{key:e,attrs:{align:"center"}},[a("v-chip",{staticClass:"color-field inset-shadow mx-2",attrs:{color:t}})],1)})),1)],1),a("v-card-actions",{attrs:{icon:""},on:{click:function(t){e.show=!e.show}}},[a("v-btn",{attrs:{rounded:"",color:"primary",text:""}},[t._v("Details")]),a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v(" "+t._s(e.show?"mdi-chevron-up":"mdi-chevron-down")+" ")])],1)],1),a("v-expand-transition",[a("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"sp.show"}]},[a("v-divider"),a("v-card-text",[a("v-list",t._l(e.palette,(function(e){return a("v-list-item",{key:e},[a("v-icon",{staticClass:"me-2"},[t._v("mdi-clipboard-arrow-down")]),a("ColorPill",{attrs:{color:e}})],1)})),1)],1),a("v-divider"),a("v-card-text",[a("blockquote",{staticClass:"font-italic"},[t._v(" "+t._s(e.comment)+" ")]),a("v-chip",{staticClass:"my-5"},[a("v-icon",{attrs:{left:""}},[t._v(" mdi-calendar ")]),t._v(" "+t._s(new Date(e.createdate).toDateString())+" ")],1)],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(a){t.delDialog=!0,t.currObj=Object.assign({},e)}}},[a("v-icon",[t._v("mdi-delete")])],1),a("v-btn",{attrs:{icon:""},on:{click:function(a){t.editDialog=!0,t.currObj=Object.assign({},e)}}},[a("v-icon",[t._v("mdi-pencil")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-share-variant")])],1)],1)],1)])],1)],1)})),1)],1)]}}])})],1)],1),a("v-dialog",{staticClass:"mx-auto",attrs:{"max-width":"290"},model:{value:t.delDialog,callback:function(e){t.delDialog=e},expression:"delDialog"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[t._v(" Delete Work ")]),a("v-card-text",[t._v(" Are you sure you want to delete this? ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:"",rounded:""},on:{click:function(e){t.delDialog=!1}}},[t._v(" cancel ")]),a("v-btn",{attrs:{color:"primary",rounded:""},on:{click:function(e){return t.delSaved(t.currObj)}}},[t._v(" Delete ")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"600px"},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[t._v("Edit Work")])]),a("v-card-text",[a("v-form",{ref:"form",attrs:{"lazy-validation":""}},[a("v-text-field",{attrs:{label:"Title *",required:"",counter:20,rules:t.titleRules,hint:"A title for this creation."},model:{value:t.currObj.title,callback:function(e){t.$set(t.currObj,"title",e)},expression:"currObj.title"}}),a("v-text-field",{attrs:{label:"Creator",hint:"Name of the creator."},model:{value:t.currObj.creator,callback:function(e){t.$set(t.currObj,"creator",e)},expression:"currObj.creator"}}),a("v-textarea",{attrs:{solo:"",label:"Comment",hint:"A small description or comment."},model:{value:t.currObj.comment,callback:function(e){t.$set(t.currObj,"comment",e)},expression:"currObj.comment"}}),a("small",[t._v("* indicates required field")])],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:"",rounded:""},on:{click:function(e){t.editDialog=!1}}},[t._v(" Cancel ")]),a("v-btn",{attrs:{color:"primary",rounded:""},on:{click:function(e){return t.editSaved(t.currObj)}}},[t._v(" Save Changes ")])],1)],1)],1)],1)},ft=[],ht=(a("ac1f"),a("1276"),{name:"Home",components:{ColorPill:tt},props:{savColors:Array,savPalettes:Array},data:function(){return{serverAddress:"",tab:null,search:"",filter:{},sortDesc:!1,sortBy:"title",keys:["title","createdate","creator"],delDialog:!1,editDialog:!1,currObj:{},titleRules:[function(t){return!!t||"Title is required"},function(t){return t&&t.length<=20||"Title must be less than 20 characters"}]}},methods:{getSavColors:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$emit("getsc");case 1:case"end":return e.stop()}}),e)})))()},getSavPalettes:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$emit("getsp");case 1:case"end":return e.stop()}}),e)})))()},delSaved:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.$emit("delsav",t),e.delDialog=!1;case 2:case"end":return a.stop()}}),a)})))()},editSaved:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.$refs.form.validate()&&(e.$emit("editsav",t),e.editDialog=!1);case 1:case"end":return a.stop()}}),a)})))()},openMap:function(t){var e,a,r;if(t){var o=t.split(","),n=(null===(e=navigator)||void 0===e||null===(a=e.userAgentData)||void 0===a?void 0:a.platform)||(null===(r=navigator)||void 0===r?void 0:r.platform)||"unknown";"iPhone"==n||"iPad"==n||"iPod"==n?window.open("maps://maps.google.com/maps/?q=".concat(o[0],",").concat(o[1])):window.open("https://maps.google.com/maps/?q=".concat(o[0],",").concat(o[1]))}}},created:function(){}}),bt=ht,gt=(a("baf9"),a("a523")),xt=a("c377"),wt=a("0789"),kt=a("adda"),Ct=a("8860"),_t=a("da13"),yt=a("b974"),jt=a("71a3"),Ot=a("c671"),St=a("fe57"),Vt=a("aac8"),Pt=Object(m["a"])(bt,mt,ft,!1,null,null,null),Dt=Pt.exports;h()(Pt,{VBtn:w["a"],VCard:E["a"],VCardActions:L["a"],VCardSubtitle:L["b"],VCardText:L["c"],VCardTitle:L["d"],VChip:Y["a"],VCol:nt["a"],VContainer:gt["a"],VDataIterator:xt["a"],VDialog:B["a"],VDivider:st["a"],VExpandTransition:wt["a"],VForm:q["a"],VIcon:k["a"],VImg:kt["a"],VList:Ct["a"],VListItem:_t["a"],VRow:ut["a"],VSelect:yt["a"],VSpacer:j["a"],VTab:jt["a"],VTabItem:Ot["a"],VTabs:St["a"],VTabsItems:Vt["a"],VTextField:F["a"],VTextarea:H["a"],VToolbar:G["a"]}),r["a"].use(P["a"]);var Rt=[{path:"/",name:"Camera",component:pt},{path:"/library",name:"Color Library",component:Dt},{path:"/about",name:"App Info",component:function(){return a.e("chunk-2d22d746").then(a.bind(null,"f820"))}}],Tt=new P["a"]({mode:"history",base:"/",routes:Rt}),At=Tt,Mt=a("f309");r["a"].use(Mt["a"]);var $t=new Mt["a"]({theme:{themes:{light:{primary:"#FD836E",secondary:"#4C3F44",accent:"#F4A698",success:"#4BA961",info:"#3EACDC",warning:"#FDE74C"}}}});r["a"].config.productionTip=!1,new r["a"]({router:At,vuetify:$t,render:function(t){return t(S)}}).$mount("#app")},"5e59":function(t,e,a){},"681d":function(t,e,a){},7288:function(t,e,a){"use strict";a("5e59")},"85ec":function(t,e,a){},"9b19":function(t,e,a){t.exports=a.p+"img/logo.72603e2b.svg"},baf9:function(t,e,a){"use strict";a("f83f")},f1c4:function(t,e,a){"use strict";a("681d")},f83f:function(t,e,a){}});