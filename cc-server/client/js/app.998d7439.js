(function(t){function e(e){for(var o,i,s=e[0],c=e[1],l=e[2],d=0,u=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);v&&v(e);while(u.length)u.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],o=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(o=!1)}o&&(n.splice(e--,1),t=s(s.s=a[0]))}return t}var o={},r={app:0},n=[];function i(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-2d22d746":"ea6b328b"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,o){a=r[t]=[e,o]}));e.push(a[2]=o);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var l=new Error;n=function(e){c.onerror=c.onload=null,clearTimeout(d);var a=r[t];if(0!==a){if(a){var o=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",l.name="ChunkLoadError",l.type=o,l.request=n,a[1](l)}r[t]=void 0}};var d=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(a,o,function(e){return t[e]}.bind(null,o));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var v=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",["Camera"!==t.$route.name?o("v-app-bar",{attrs:{flat:"",height:"100",app:"",color:"white"}},[o("div",{staticClass:"text-h3 mt-5"},[t._v(t._s(t.$route.name))]),o("v-spacer"),o("div",{staticClass:"logo mt-5 elevation-4 rounded-circle"},[o("img",{attrs:{src:a("cf05"),alt:"Logo"}})])],1):t._e(),o("v-main",[o("router-view")],1),o("div",{staticClass:"nav-wrapper"},[o("v-sheet",{staticClass:"nav ma-3 rounded-pill",attrs:{elevation:"4"}},[o("v-btn",{attrs:{"x-large":"",plain:"",fab:"","active-class":"nav-active",to:"/about",exact:""}},[o("v-icon",[t._v("mdi-information")])],1),o("v-btn",{staticClass:"main-btn my-3 mx-5",attrs:{to:"/","x-large":"",color:"primary",dark:"",fab:""}},[o("v-icon",[t._v("mdi-camera")])],1),o("v-btn",{attrs:{"x-large":"",plain:"",fab:"","active-class":"nav-active",to:"/library/0"}},[o("v-icon",[t._v("mdi-palette")])],1)],1)],1),o("v-snackbar",{scopedSlots:t._u([{key:"action",fn:function(e){var a=e.attrs;return[o("v-btn",t._b({attrs:{color:"primary",text:""},on:{click:function(e){t.swupdate=!1,t.window.location.reload()}}},"v-btn",a,!1),[t._v(" OK ")])]}}]),model:{value:t.swupdate,callback:function(e){t.swupdate=e},expression:"swupdate"}},[t._v(" New content is available!. Click OK to refresh... ")])],1)},n=[],i={name:"App",data:function(){return{value:"recent",swupdate:!1}},methods:{},created:function(){var t=this;document.addEventListener("swUpdated",(function(){return t.swupdate=!0}),{once:!0})}},s=i,c=(a("034f"),a("2877")),l=a("6544"),d=a.n(l),v=a("7496"),u=a("40dc"),m=a("8336"),p=a("132d"),f=a("f6c4"),h=a("8dd9"),b=a("2db4"),g=a("2fa4"),x=Object(c["a"])(s,r,n,!1,null,null,null),w=x.exports;d()(x,{VApp:v["a"],VAppBar:u["a"],VBtn:m["a"],VIcon:p["a"],VMain:f["a"],VSheet:h["a"],VSnackbar:b["a"],VSpacer:g["a"]});var k=a("9483");Object(k["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(t){console.log("New content is available; please refresh."),document.dispatchEvent(new CustomEvent("swUpdated",{detail:t}))},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});a("d3b7"),a("3ca3"),a("ddb0");var _=a("8c4f"),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"camera"},[a("video",{staticClass:"video",attrs:{playsinline:"",autoplay:""}},[t._v(" Video stream not available. ")]),a("div",{staticClass:"controls"},[a("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",small:""}},[a("v-icon",{attrs:{dark:""}},[t._v(" mdi-image-multiple ")]),a("input",{ref:"photoInp",staticClass:"v-btn--fab v-btn--round v-size--small",staticStyle:{opacity:"0",position:"absolute"},attrs:{type:"file",accept:"image/*"},on:{change:t.selectimage}})],1),a("v-btn",{staticClass:"mx-2",attrs:{disabled:!t.videoReady,fab:"",dark:""},on:{click:function(e){return e.stopPropagation(),t.takepicture.apply(null,arguments)}}},[a("v-icon",{attrs:{dark:""}},[t._v(" mdi-radiobox-marked ")])],1),a("v-btn",{staticClass:"mx-2",attrs:{disabled:!t.videoReady||t.isTurning,fab:"",dark:"",small:""},on:{click:t.turnCam}},[a("v-icon",{attrs:{dark:""}},[t._v(" mdi-camera-switch ")])],1)],1)]),a("v-dialog",{attrs:{eager:"",fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-toolbar",{staticClass:"edit-header"},[a("v-btn",{attrs:{icon:""},on:{click:function(e){t.dialog=!1}}},[a("v-icon",[t._v("mdi-close")])],1)],1),a("div",{staticClass:"wrapper"},[a("canvas",{staticClass:"canvas",on:{mousedown:t.pickcolor}})]),t.showPalette?a("v-card-text",{staticClass:"edit-main edit-palette text--primary rounded-t-xl"},[a("div",{staticClass:"mb-1 mt-3 font-weight-bold text-center"},[t._v(" Generated "),a("span",{staticClass:"primary--text"},[t._v("color scheme ")]),t._v(" to image. "),a("br"),t._v(" Select individual colors to "),a("span",{staticClass:"primary--text"},[t._v("change")]),t._v(" them. ")]),a("v-item-group",{attrs:{mandatory:""},model:{value:t.pix,callback:function(e){t.pix=e},expression:"pix"}},[a("v-row",{staticClass:"elevation-3 rounded-pill pa-3 my-2",attrs:{"no-gutters":""}},t._l(t.palette,(function(e,o){return a("v-col",{key:o},[a("v-item",{scopedSlots:t._u([{key:"default",fn:function(t){var o=t.active,r=t.toggle;return[a("v-chip",{staticClass:"color-field inset-shadow mx-2",class:{active:o},attrs:{color:e},on:{click:r}})]}}],null,!0)})],1)})),1)],1),a("div",{staticClass:"color-edit my-2"},[a("v-menu",{attrs:{top:"","offset-y":!0,"close-on-content-click":!1},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:"",fab:"",small:""}},"v-btn",r,!1),o),[a("v-icon",{attrs:{dark:""}},[t._v("mdi-pencil")])],1)]}}])},[a("v-color-picker",{model:{value:t.palette[t.pix],callback:function(e){t.$set(t.palette,t.pix,e)},expression:"palette[pix]"}})],1),a("ColorPill",{attrs:{color:t.palette[t.pix]}})],1)],1):a("v-card-text",{staticClass:"edit-main edit-color text--primary rounded-t-xl"},[a("div",{staticClass:"mb-1 mt-3 font-weight-bold text-center"},[t._v(" Click on the image to "),a("span",{staticClass:"primary--text"},[t._v("pick")]),t._v(" a color. "),a("br"),t._v(" Click on the color to copy it. ")]),a("div",{staticClass:"color-edit my-2"},[a("v-menu",{attrs:{top:"","offset-y":!0,"close-on-content-click":!1},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:"",fab:"",small:""}},"v-btn",r,!1),o),[a("v-icon",{attrs:{dark:""}},[t._v("mdi-pencil")])],1)]}}],null,!1,3775545874)},[a("v-color-picker",{model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1),a("ColorPill",{attrs:{color:t.color}})],1)]),a("v-divider"),a("v-card-actions",{staticClass:"ps-2 edit-footer"},[a("v-btn",{attrs:{color:"secondary",rounded:""},on:{click:function(e){t.showPalette=!t.showPalette}}},[a("v-icon",{staticClass:"mr-2"},[t._v("mdi-"+t._s(t.showPalette?"arrow-left":"palette"))]),t._v(" "+t._s(t.showPalette?"Back":"Palette")+" ")],1),a("SaveDialog",{attrs:{isPalette:t.showPalette,palette:t.palette,image:t.image,color:t.color}})],1)],1)],1)],1)},C=[],V=a("1da1"),S=a("2909"),j=(a("96cf"),a("2b3d"),a("9861"),a("d81d"),a("a15b"),a("25f0"),a("159b"),a("07a2")),O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({attrs:{color:"primary",rounded:""}},"v-btn",r,!1),o),[a("v-icon",{staticClass:"mr-2"},[t._v("mdi-content-save")]),t._v(" Save ")],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-toolbar",{attrs:{dark:"",dense:""}},[a("v-btn",{attrs:{icon:""},on:{click:function(e){t.dialog=!1}}},[a("v-icon",[t._v("mdi-close")])],1),a("div",[t._v("Save "+t._s(t.isPalette?"palette":"color")+" to library")])],1),a("v-card-text",[a("v-form",{ref:"form",attrs:{"lazy-validation":""}},[a("v-text-field",{attrs:{label:"Title *",required:"",counter:20,rules:t.titleRules,hint:"A title for this creation."},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),a("v-text-field",{attrs:{label:"Creator",hint:"Name of the creator."},model:{value:t.creator,callback:function(e){t.creator=e},expression:"creator"}}),a("v-textarea",{attrs:{solo:"",label:"Comment",hint:"A small description or comment."},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}}),a("small",[t._v("* indicates required field")])],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{rounded:"",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Cancel ")]),a("v-btn",{attrs:{rounded:"",color:"primary",loading:t.loading},on:{click:t.save}},[t._v(" Save ")])],1)],1)],1)},D=[],P=(a("99af"),a("bc3a")),T=a.n(P),A={data:function(){return{serveraddress:"",dialog:!1,title:"",titleRules:[function(t){return!!t||"Title is required"},function(t){return t&&t.length<=20||"Title must be less than 20 characters"}],creator:"",comment:"",loading:!1}},props:{image:String,color:String,palette:Array,isPalette:Boolean},methods:{save:function(){var t=this;return Object(V["a"])(regeneratorRuntime.mark((function e(){var a,o,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.$refs.form.validate()){e.next=23;break}if(t.loading=!0,a="",!("geolocation"in navigator)){e.next=11;break}return e.next=6,new Promise((function(t,e){navigator.geolocation.getCurrentPosition(t,e,{enableHighAccuracy:!0})}));case 6:o=e.sent,r=o.coords,a="".concat(r.latitude,",").concat(r.longitude),e.next=12;break;case 11:console.log("Error, Geolocation");case 12:if(!t.isPalette){e.next=18;break}return e.next=15,T.a.post("".concat(t.serveraddress,"/palettes"),{image:t.image,title:t.title,creator:t.creator,comment:t.comment,palette:t.palette,location:a});case 15:n=e.sent.data.id,e.next=21;break;case 18:return e.next=20,T.a.post("".concat(t.serveraddress,"/colors"),{image:t.image,title:t.title,creator:t.creator,comment:t.comment,color:t.color,location:a});case 20:n=e.sent.data.id;case 21:t.$router.push({path:"/library/".concat(n)}),t.loading=!1;case 23:case"end":return e.stop()}}),e)})))()}},created:function(){navigator.geolocation.getCurrentPosition((function(){}))}},R=A,M=a("b0af"),U=a("99d9"),I=a("169a"),E=a("4bd4"),$=a("8654"),B=a("a844"),L=a("71d9"),q=Object(c["a"])(R,O,D,!1,null,null,null),F=q.exports;d()(q,{VBtn:m["a"],VCard:M["a"],VCardActions:U["a"],VCardText:U["c"],VDialog:I["a"],VForm:E["a"],VIcon:p["a"],VSpacer:g["a"],VTextField:$["a"],VTextarea:B["a"],VToolbar:L["a"]});var H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"color-pill"},[a("v-tooltip",{attrs:{"open-on-click":!0,"open-on-hover":!1,top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[a("v-chip",t._g(t._b({staticClass:"inset-shadow rounded-pill mx-1",class:t.fontColor,attrs:{color:t.color},on:{click:t.copy}},"v-chip",r,!1),o),[t._v(" "+t._s(t.colormode)+" ")])]}}]),model:{value:t.tooltip,callback:function(e){t.tooltip=e},expression:"tooltip"}},[a("span",[t._v("Copied "+t._s(t.colormode)+" to clipboard.")])]),a("v-btn",{attrs:{icon:"",fab:"",small:""},on:{click:t.swapMode}},[a("v-icon",[t._v("mdi-unfold-more-horizontal")])],1)],1)},G=[],z=(a("b680"),{data:function(){return{modes:["hex","rgb","hsl"],mode:0,tooltip:!1}},props:{color:String},computed:{colormode:function(){switch(this.modes[this.mode]){case"hex":return this.color;case"rgb":return this.hexToRgb(this.color);case"hsl":return this.hexToHsl(this.color);default:return"error"}},fontColor:function(){var t="0x"+this.color[1]+this.color[2],e="0x"+this.color[3]+this.color[4],a="0x"+this.color[5]+this.color[6],o=.299*+t+.587*+e+.114*+a;return o>120?"black--text":"white--text"}},methods:{swapMode:function(){this.mode++,this.mode>=this.modes.length&&(this.mode=0)},copy:function(){var t=this;return Object(V["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,navigator.clipboard.writeText(t.colormode);case 2:t.tooltip=!0,setTimeout((function(){return t.tooltip=!1}),1500);case 4:case"end":return e.stop()}}),e)})))()},hexToRgb:function(t){var e="0x"+t[1]+t[2],a="0x"+t[3]+t[4],o="0x"+t[5]+t[6];return"rgb(".concat(+e,", ").concat(+a,", ").concat(+o,")")},hexToHsl:function(t){var e="0x"+t[1]+t[2],a="0x"+t[3]+t[4],o="0x"+t[5]+t[6];e/=255,a/=255,o/=255;var r=Math.min(e,a,o),n=Math.max(e,a,o),i=n-r,s=0,c=0,l=0;return s=0==i?0:n==e?(a-o)/i%6:n==a?(o-e)/i+2:(e-a)/i+4,s=Math.round(60*s),s<0&&(s+=360),l=(n+r)/2,c=0==i?0:i/(1-Math.abs(2*l-1)),"hsl(".concat(s,", ").concat(c.toFixed(2),", ").concat(l.toFixed(2),")")}}}),N=z,W=(a("f1c4"),a("cc20")),J=a("3a2f"),K=Object(c["a"])(N,H,G,!1,null,null,null),X=K.exports;d()(K,{VBtn:m["a"],VChip:W["a"],VIcon:p["a"],VTooltip:J["a"]});var Y,Q=new j["a"],Z={name:"Home",data:function(){return{canvas:void 0,dialog:!1,image:"",width:320,height:0,color:"#ffffff",pix:0,palette:[],showPalette:!1,videoReady:!1,facingmode:"user",stream:void 0,isTurning:!1}},components:{SaveDialog:F,ColorPill:X},methods:{getUserMedia:function(t){if(navigator.mediaDevices)return navigator.mediaDevices.getUserMedia(t);var e=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;return e?new Promise((function(a,o){e.bind(navigator)(t,a,o)})):void 0},selectimage:function(){var t=this,e=this.$refs.photoInp.files[0];if(this.$refs.photoInp.value="",e){var a=new Image;console.log(a),a.src=URL.createObjectURL(e),a.onload=function(){t.drawImage(a)}}},takepicture:function(){this.drawImage(Y)},drawImage:function(t){var e=this;this.canvas||(this.canvas=document.querySelector(".canvas"));var a=!1;t.width&&t.height?(this.canvas.width=t.width,this.canvas.height=t.height,a=!0):t.videoWidth&&t.videoHeight?(this.canvas.width=Y.videoWidth,this.canvas.height=Y.videoHeight):console.log("Error."),this.dialog=!0;var o=this.canvas.getContext("2d");if(o.drawImage(t,0,0,this.canvas.width,this.canvas.height),this.image=this.canvas.toDataURL("image/png"),a)this.setColorScheme(t);else{var r=new Image;r.src=this.image,r.onload=function(){return e.setColorScheme(r)}}},pickcolor:function(t){var e=t.offsetX*this.canvas.width/this.canvas.clientWidth,a=t.offsetY*this.canvas.height/this.canvas.clientHeight,o=this.canvas.getContext("2d"),r=o.getImageData(e,a,1,1),n=this.rgbToHex.apply(this,Object(S["a"])(r.data));this.showPalette?this.$set(this.palette,this.pix,n):this.color=n,console.log(this.palette)},setColorScheme:function(t){var e=this;this.color=this.rgbToHex.apply(this,Object(S["a"])(Q.getColor(t)));var a=Q.getPalette(t,5);this.palette=a.map((function(t){return e.rgbToHex.apply(e,Object(S["a"])(t))})),this.pix=0,console.log(this.palette)},rgbToHex:function(t,e,a){return"#"+[t,e,a].map((function(t){var e=t.toString(16);return 1===e.length?"0"+e:e})).join("")},turnCam:function(){this.isTurning=!0,this.facingmode="user"==this.facingmode?"environment":"user";var t=this.stream.getTracks();t.forEach((function(t){return t.stop()})),this.setStream(this.facingmode)},setStream:function(t){var e=this;this.getUserMedia({video:{facingMode:t}}).then((function(t){e.stream=t,e.videoReady=!0,Y=document.querySelector(".video"),"srcObject"in Y?Y.srcObject=t:navigator.mozGetUserMedia?Y.mozSrcObject=t:Y.src=(window.URL||window.webkitURL).createObjectURL(t),Y.play(),e.isTurning=!1})).catch((function(t){console.log(t)}))}},mounted:function(){var t=this;return Object(V["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(navigator.mediaDevices||navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia){e.next=3;break}return alert("User Media API not supported."),e.abrupt("return");case 3:t.setStream(t.facingmode);case 4:case"end":return e.stop()}}),e)})))()}},tt=Z,et=(a("7288"),a("62ad")),at=a("03a4"),ot=a("ce7e"),rt=a("d903"),nt=a("604c"),it=a("e449"),st=a("0fd9"),ct=Object(c["a"])(tt,y,C,!1,null,null,null),lt=ct.exports;d()(ct,{VBtn:m["a"],VCard:M["a"],VCardActions:U["a"],VCardText:U["c"],VChip:W["a"],VCol:et["a"],VColorPicker:at["a"],VDialog:I["a"],VDivider:ot["a"],VIcon:p["a"],VItem:rt["a"],VItemGroup:nt["b"],VMenu:it["a"],VRow:st["a"],VToolbar:L["a"]});var dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pb-16"},[a("v-tabs",{staticStyle:{position:"fixed","z-index":"5"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-tab",[t._v("Colors")]),a("v-tab",[t._v("Palettes")])],1),a("v-tabs-items",{staticClass:"py-12",model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-tab-item",[a("v-data-iterator",{attrs:{"disable-pagination":"","hide-default-footer":"",items:t.savColors,search:t.search,"sort-by":t.sortBy.toLowerCase(),"sort-desc":t.sortDesc},scopedSlots:t._u([{key:"header",fn:function(){return[a("v-toolbar",{staticClass:"my-3",attrs:{dark:""}},[a("v-text-field",{staticClass:"rounded-pill me-1",attrs:{dense:"",clearable:"","solo-inverted":"","hide-details":"","prepend-inner-icon":"mdi-magnify",label:"Search"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[a("v-btn",{attrs:{slot:"append",small:"",icon:""},slot:"append"},[a("v-icon",[t._v(" mdi-microphone ")])],1)],1),a("v-spacer"),a("v-select",{staticClass:"me-1",attrs:{solo:"",dense:"","hide-details":"",items:t.keys,"prepend-inner-icon":"mdi-sort",label:"Sort by"},model:{value:t.sortBy,callback:function(e){t.sortBy=e},expression:"sortBy"}}),a("v-btn",{attrs:{small:"",fab:"",text:""},on:{click:function(e){t.sortDesc=!t.sortDesc}}},[a("v-icon",[t._v("mdi-sort-alphabetical-variant")])],1)],1)]},proxy:!0},{key:"default",fn:function(e){return[a("v-container",[a("v-row",t._l(e.items,(function(e){return a("v-col",{key:e.id,attrs:{cols:"12",md:"6",lg:"4"}},[a("v-card",{staticClass:"mx-auto sc-card",attrs:{"max-width":"344"}},[a("v-img",{attrs:{src:t.serverAddress+"/images/"+e.imgname,height:"200px"}}),a("v-card-title",[t._v(" "+t._s(e.title||"Untitled Work")+" ")]),a("v-card-subtitle",[t._v(" by "+t._s(e.creator||"Unknown Creator")+" ")]),a("v-card-text",[a("ColorPill",{attrs:{color:e.color}})],1),a("v-card-actions",{attrs:{icon:""},on:{click:function(t){e.show=!e.show}}},[a("v-btn",{attrs:{rounded:"",color:"primary",text:""}},[t._v("Details")]),a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v(" "+t._s(e.show?"mdi-chevron-up":"mdi-chevron-down")+" ")])],1)],1),a("v-expand-transition",[a("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"sc.show"}]},[a("v-divider"),a("v-card-text",[a("blockquote",{staticClass:"font-italic"},[t._v(" "+t._s(e.comment)+" ")]),a("v-chip",{staticClass:"my-5 me-2"},[a("v-icon",{attrs:{left:""}},[t._v(" mdi-calendar ")]),t._v(" "+t._s(new Date(e.createdate).toDateString())+" ")],1),a("v-chip",{on:{click:function(a){return t.openMap(e.location)}}},[a("v-icon",{attrs:{left:""}},[t._v(" mdi-map-marker ")]),t._v(" "+t._s(e.location||"--,--")+" ")],1)],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(a){t.delDialog=!0,t.currObj=Object.assign({},e)}}},[a("v-icon",[t._v("mdi-delete")])],1),a("v-btn",{attrs:{icon:""},on:{click:function(a){t.editDialog=!0,t.currObj=Object.assign({},e)}}},[a("v-icon",[t._v("mdi-pencil")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-share-variant")])],1)],1)],1)])],1)],1)})),1)],1)]}}])})],1),a("v-tab-item",[a("v-data-iterator",{attrs:{"disable-pagination":"","hide-default-footer":"",items:t.savPalettes,search:t.search,"sort-by":t.sortBy.toLowerCase(),"sort-desc":t.sortDesc},scopedSlots:t._u([{key:"header",fn:function(){return[a("v-toolbar",{staticClass:"my-3",attrs:{dark:""}},[a("v-text-field",{staticClass:"rounded-pill me-1",attrs:{dense:"",clearable:"","solo-inverted":"","hide-details":"","prepend-inner-icon":"mdi-magnify",label:"Search"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[a("v-btn",{attrs:{slot:"append",small:"",icon:""},slot:"append"},[a("v-icon",[t._v(" mdi-microphone ")])],1)],1),a("v-spacer"),a("v-select",{staticClass:"me-1",attrs:{solo:"",dense:"","hide-details":"",items:t.keys,"prepend-inner-icon":"mdi-sort",label:"Sort by"},model:{value:t.sortBy,callback:function(e){t.sortBy=e},expression:"sortBy"}}),a("v-btn",{attrs:{small:"",fab:"",text:""},on:{click:function(e){t.sortDesc=!t.sortDesc}}},[a("v-icon",[t._v("mdi-sort-alphabetical-variant")])],1)],1)]},proxy:!0},{key:"default",fn:function(e){return[a("v-container",[a("v-row",t._l(e.items,(function(e){return a("v-col",{key:e.id,attrs:{cols:"12",md:"6",lg:"4"}},[a("v-card",{staticClass:"mx-auto sc-card",attrs:{"max-width":"344"}},[a("v-img",{attrs:{src:t.serverAddress+"/images/"+e.imgname,height:"200px"}}),a("v-card-title",[t._v(" "+t._s(e.title||"Untitled Work")+" ")]),a("v-card-subtitle",[t._v(" by "+t._s(e.creator||"Unknown Creator")+" ")]),a("v-card-text",[a("v-row",{staticClass:"elevation-3 rounded-pill pa-3 my-2",attrs:{"no-gutters":""}},t._l(e.palette,(function(t,e){return a("v-col",{key:e,attrs:{align:"center"}},[a("v-chip",{staticClass:"color-field inset-shadow mx-2",attrs:{color:t}})],1)})),1)],1),a("v-card-actions",{attrs:{icon:""},on:{click:function(t){e.show=!e.show}}},[a("v-btn",{attrs:{rounded:"",color:"primary",text:""}},[t._v("Details")]),a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v(" "+t._s(e.show?"mdi-chevron-up":"mdi-chevron-down")+" ")])],1)],1),a("v-expand-transition",[a("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"sp.show"}]},[a("v-divider"),a("v-card-text",[a("v-list",t._l(e.palette,(function(e){return a("v-list-item",{key:e},[a("v-icon",{staticClass:"me-2"},[t._v("mdi-clipboard-arrow-down")]),a("ColorPill",{attrs:{color:e}})],1)})),1)],1),a("v-divider"),a("v-card-text",[a("blockquote",{staticClass:"font-italic"},[t._v(" "+t._s(e.comment)+" ")]),a("v-chip",{staticClass:"my-5"},[a("v-icon",{attrs:{left:""}},[t._v(" mdi-calendar ")]),t._v(" "+t._s(new Date(e.createdate).toDateString())+" ")],1)],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(a){t.delDialog=!0,t.currObj=Object.assign({},e)}}},[a("v-icon",[t._v("mdi-delete")])],1),a("v-btn",{attrs:{icon:""},on:{click:function(a){t.editDialog=!0,t.currObj=Object.assign({},e)}}},[a("v-icon",[t._v("mdi-pencil")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-share-variant")])],1)],1)],1)])],1)],1)})),1)],1)]}}])})],1)],1),a("v-dialog",{staticClass:"mx-auto",attrs:{"max-width":"290"},model:{value:t.delDialog,callback:function(e){t.delDialog=e},expression:"delDialog"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[t._v(" Delete Work ")]),a("v-card-text",[t._v(" Are you sure you want to delete this? ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:"",rounded:""},on:{click:function(e){t.delDialog=!1}}},[t._v(" cancel ")]),a("v-btn",{attrs:{color:"primary",rounded:""},on:{click:function(e){return t.delSaved(t.currObj)}}},[t._v(" Delete ")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"600px"},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[t._v("Edit Work")])]),a("v-card-text",[a("v-form",{ref:"form",attrs:{"lazy-validation":""}},[a("v-text-field",{attrs:{label:"Title *",required:"",counter:20,rules:t.titleRules,hint:"A title for this creation."},model:{value:t.currObj.title,callback:function(e){t.$set(t.currObj,"title",e)},expression:"currObj.title"}}),a("v-text-field",{attrs:{label:"Creator",hint:"Name of the creator."},model:{value:t.currObj.creator,callback:function(e){t.$set(t.currObj,"creator",e)},expression:"currObj.creator"}}),a("v-textarea",{attrs:{solo:"",label:"Comment",hint:"A small description or comment."},model:{value:t.currObj.comment,callback:function(e){t.$set(t.currObj,"comment",e)},expression:"currObj.comment"}}),a("small",[t._v("* indicates required field")])],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:"",rounded:""},on:{click:function(e){t.editDialog=!1}}},[t._v(" Cancel ")]),a("v-btn",{attrs:{color:"primary",rounded:""},on:{click:function(e){return t.editSaved(t.currObj)}}},[t._v(" Save Changes ")])],1)],1)],1)],1)},vt=[],ut=a("5530"),mt=(a("ac1f"),a("1276"),{name:"Home",components:{ColorPill:X},data:function(){return{serverAddress:"",tab:null,search:"",filter:{},sortDesc:!1,sortBy:"title",keys:["title","createdate","creator"],savColors:[],savPalettes:[],delDialog:!1,editDialog:!1,currObj:{},titleRules:[function(t){return!!t||"Title is required"},function(t){return t&&t.length<=20||"Title must be less than 20 characters"}]}},methods:{getSavColors:function(){var t=this;return Object(V["a"])(regeneratorRuntime.mark((function e(){var a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("".concat(t.serverAddress,"/colors"));case 2:a=e.sent,o=a.data,t.savColors=o.map((function(t){return Object(ut["a"])(Object(ut["a"])({},t),{},{show:!1})}));case 5:case"end":return e.stop()}}),e)})))()},getSavPalettes:function(){var t=this;return Object(V["a"])(regeneratorRuntime.mark((function e(){var a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("".concat(t.serverAddress,"/palettes"));case 2:a=e.sent,o=a.data,t.savPalettes=o.map((function(t){return Object(ut["a"])(Object(ut["a"])({},t),{},{show:!1})}));case 5:case"end":return e.stop()}}),e)})))()},delSaved:function(t){var e=this;return Object(V["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!t.color){a.next=7;break}return a.next=3,T.a.delete("".concat(e.serverAddress,"/colors/").concat(t.id));case 3:e.getSavColors(),e.delDialog=!1,a.next=11;break;case 7:return a.next=9,T.a.delete("".concat(e.serverAddress,"/palettes/").concat(t.id));case 9:e.getSavPalettes(),e.delDialog=!1;case 11:case"end":return a.stop()}}),a)})))()},editSaved:function(t){var e=this;return Object(V["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!e.$refs.form.validate()){a.next=12;break}if(!t.color){a.next=8;break}return a.next=4,T.a.patch("".concat(e.serverAddress,"/colors/").concat(t.id),t);case 4:e.getSavColors(),e.editDialog=!1,a.next=12;break;case 8:return a.next=10,T.a.patch("".concat(e.serverAddress,"/palettes/").concat(t.id),t);case 10:e.getSavPalettes(),e.editDialog=!1;case 12:case"end":return a.stop()}}),a)})))()},openMap:function(t){var e,a,o;if(t){var r=t.split(","),n=(null===(e=navigator)||void 0===e||null===(a=e.userAgentData)||void 0===a?void 0:a.platform)||(null===(o=navigator)||void 0===o?void 0:o.platform)||"unknown";"iPhone"==n||"iPad"==n||"iPod"==n?window.open("maps://maps.google.com/maps/?q=".concat(r[0],",").concat(r[1])):window.open("https://maps.google.com/maps/?q=".concat(r[0],",").concat(r[1]))}}},created:function(){var t=this;this.getSavColors(),this.getSavPalettes(),this.$watch((function(){return t.$route.params}),(function(){t.getSavColors(),t.getSavPalettes()}))}}),pt=mt,ft=(a("baf9"),a("a523")),ht=a("c377"),bt=a("0789"),gt=a("adda"),xt=a("8860"),wt=a("da13"),kt=a("b974"),_t=a("71a3"),yt=a("c671"),Ct=a("fe57"),Vt=a("aac8"),St=Object(c["a"])(pt,dt,vt,!1,null,null,null),jt=St.exports;d()(St,{VBtn:m["a"],VCard:M["a"],VCardActions:U["a"],VCardSubtitle:U["b"],VCardText:U["c"],VCardTitle:U["d"],VChip:W["a"],VCol:et["a"],VContainer:ft["a"],VDataIterator:ht["a"],VDialog:I["a"],VDivider:ot["a"],VExpandTransition:bt["a"],VForm:E["a"],VIcon:p["a"],VImg:gt["a"],VList:xt["a"],VListItem:wt["a"],VRow:st["a"],VSelect:kt["a"],VSpacer:g["a"],VTab:_t["a"],VTabItem:yt["a"],VTabs:Ct["a"],VTabsItems:Vt["a"],VTextField:$["a"],VTextarea:B["a"],VToolbar:L["a"]}),o["a"].use(_["a"]);var Ot=[{path:"/",name:"Camera",component:lt},{path:"/library/:id",name:"Color Library",props:!0,component:jt},{path:"/about",name:"App Info",component:function(){return a.e("chunk-2d22d746").then(a.bind(null,"f820"))}}],Dt=new _["a"]({mode:"history",base:"/",routes:Ot}),Pt=Dt,Tt=a("f309");o["a"].use(Tt["a"]);var At=new Tt["a"]({theme:{themes:{light:{primary:"#FD836E",secondary:"#4C3F44",accent:"#F4A698",success:"#4BA961",info:"#3EACDC",warning:"#FDE74C"}}}});o["a"].config.productionTip=!1,new o["a"]({router:Pt,vuetify:At,render:function(t){return t(w)}}).$mount("#app")},"5e59":function(t,e,a){},"681d":function(t,e,a){},7288:function(t,e,a){"use strict";a("5e59")},"85ec":function(t,e,a){},baf9:function(t,e,a){"use strict";a("f83f")},cf05:function(t,e,a){t.exports=a.p+"img/logo.7d6fc5a4.png"},f1c4:function(t,e,a){"use strict";a("681d")},f83f:function(t,e,a){}});