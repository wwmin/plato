webpackJsonp([13],{195:function(e,t,n){var o,r;n(397),o=n(375),r=n(408),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},214:function(e,t,n){var o,r,i,s=n(41),c=n(222),a=n(71),l=n(43),u=n(5),f=u.process,p=u.setImmediate,d=u.clearImmediate,m=u.MessageChannel,h=0,x={},v="onreadystatechange",A=function(){var e=+this;if(x.hasOwnProperty(e)){var t=x[e];delete x[e],t()}},g=function(e){A.call(e.data)};p&&d||(p=function(e){for(var t=[],n=1;arguments.length>n;)t.push(arguments[n++]);return x[++h]=function(){c("function"==typeof e?e:Function(e),t)},o(h),h},d=function(e){delete x[e]},"process"==n(26)(f)?o=function(e){f.nextTick(s(A,e,1))}:m?(r=new m,i=r.port2,r.port1.onmessage=g,o=s(i.postMessage,i,1)):u.addEventListener&&"function"==typeof postMessage&&!u.importScripts?(o=function(e){u.postMessage(e+"","*")},u.addEventListener("message",g,!1)):o=v in l("script")?function(e){a.appendChild(l("script"))[v]=function(){a.removeChild(this),A.call(e)}}:function(e){setTimeout(s(A,e,1),0)}),e.exports={set:p,clear:d}},216:function(e,t,n){e.exports={"default":n(219),__esModule:!0}},219:function(e,t,n){n(76),n(42),n(65),n(228),e.exports=n(2).Promise},220:function(e,t){e.exports=function(e,t,n,o){if(!(e instanceof t)||void 0!==o&&o in e)throw TypeError(n+": incorrect invocation!");return e}},221:function(e,t,n){var o=n(41),r=n(73),i=n(72),s=n(16),c=n(44),a=n(68),l={},u={},t=e.exports=function(e,t,n,f,p){var d,m,h,x,v=p?function(){return e}:a(e),A=o(n,f,t?2:1),g=0;if("function"!=typeof v)throw TypeError(e+" is not iterable!");if(i(v)){for(d=c(e.length);d>g;g++)if(x=t?A(s(m=e[g])[0],m[1]):A(e[g]),x===l||x===u)return x}else for(h=v.call(e);!(m=h.next()).done;)if(x=r(h,A,m.value,t),x===l||x===u)return x};t.BREAK=l,t.RETURN=u},222:function(e,t){e.exports=function(e,t,n){var o=void 0===n;switch(t.length){case 0:return o?e():e.call(n);case 1:return o?e(t[0]):e.call(n,t[0]);case 2:return o?e(t[0],t[1]):e.call(n,t[0],t[1]);case 3:return o?e(t[0],t[1],t[2]):e.call(n,t[0],t[1],t[2]);case 4:return o?e(t[0],t[1],t[2],t[3]):e.call(n,t[0],t[1],t[2],t[3])}return e.apply(n,t)}},223:function(e,t,n){var o=n(5),r=n(214).set,i=o.MutationObserver||o.WebKitMutationObserver,s=o.process,c=o.Promise,a="process"==n(26)(s);e.exports=function(){var e,t,n,l=function(){var o,r;for(a&&(o=s.domain)&&o.exit();e;){r=e.fn,e=e.next;try{r()}catch(i){throw e?n():t=void 0,i}}t=void 0,o&&o.enter()};if(a)n=function(){s.nextTick(l)};else if(i){var u=!0,f=document.createTextNode("");new i(l).observe(f,{characterData:!0}),n=function(){f.data=u=!u}}else if(c&&c.resolve){var p=c.resolve();n=function(){p.then(l)}}else n=function(){r.call(o,l)};return function(o){var r={fn:o,next:void 0};t&&(t.next=r),e||(e=r,n()),t=r}}},224:function(e,t,n){var o=n(13);e.exports=function(e,t,n){for(var r in t)n&&e[r]?e[r]=t[r]:o(e,r,t[r]);return e}},225:function(e,t,n){var o=n(19),r=n(16),i=function(e,t){if(r(e),!o(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,o){try{o=n(41)(Function.call,n(75).f(Object.prototype,"__proto__").set,2),o(e,[]),t=!(e instanceof Array)}catch(r){t=!0}return function(e,n){return i(e,n),t?e.__proto__=n:o(e,n),e}}({},!1):void 0),check:i}},226:function(e,t,n){"use strict";var o=n(5),r=n(2),i=n(6),s=n(9),c=n(3)("species");e.exports=function(e){var t="function"==typeof r[e]?r[e]:o[e];s&&t&&!t[c]&&i.f(t,c,{configurable:!0,get:function(){return this}})}},227:function(e,t,n){var o=n(16),r=n(66),i=n(3)("species");e.exports=function(e,t){var n,s=o(e).constructor;return void 0===s||void 0==(n=o(s)[i])?t:r(n)}},228:function(e,t,n){"use strict";var o,r,i,s=n(27),c=n(5),a=n(41),l=n(67),u=n(12),f=n(19),p=(n(16),n(66)),d=n(220),m=n(221),h=(n(225).set,n(227)),x=n(214).set,v=n(223)(),A="Promise",g=c.TypeError,_=c.process,y=c[A],_=c.process,C="process"==l(_),b=function(){},w=!!function(){try{var e=y.resolve(1),t=(e.constructor={})[n(3)("species")]=function(e){e(b,b)};return(C||"function"==typeof PromiseRejectionEvent)&&e.then(b)instanceof t}catch(o){}}(),B=function(e,t){return e===t||e===y&&t===i},k=function(e){var t;return f(e)&&"function"==typeof(t=e.then)?t:!1},E=function(e){return B(y,e)?new j(e):new r(e)},j=r=function(e){var t,n;this.promise=new e(function(e,o){if(void 0!==t||void 0!==n)throw g("Bad Promise constructor");t=e,n=o}),this.resolve=p(t),this.reject=p(n)},M=function(e){try{e()}catch(t){return{error:t}}},S=function(e,t){if(!e._n){e._n=!0;var n=e._c;v(function(){for(var o=e._v,r=1==e._s,i=0,s=function(t){var n,i,s=r?t.ok:t.fail,c=t.resolve,a=t.reject,l=t.domain;try{s?(r||(2==e._h&&R(e),e._h=1),s===!0?n=o:(l&&l.enter(),n=s(o),l&&l.exit()),n===t.promise?a(g("Promise-chain cycle")):(i=k(n))?i.call(n,c,a):c(n)):a(o)}catch(u){a(u)}};n.length>i;)s(n[i++]);e._c=[],e._n=!1,t&&!e._h&&P(e)})}},P=function(e){x.call(c,function(){var t,n,o,r=e._v;if(O(e)&&(t=M(function(){C?_.emit("unhandledRejection",r,e):(n=c.onunhandledrejection)?n({promise:e,reason:r}):(o=c.console)&&o.error&&o.error("Unhandled promise rejection",r)}),e._h=C||O(e)?2:1),e._a=void 0,t)throw t.error})},O=function(e){if(1==e._h)return!1;for(var t,n=e._a||e._c,o=0;n.length>o;)if(t=n[o++],t.fail||!O(t.promise))return!1;return!0},R=function(e){x.call(c,function(){var t;C?_.emit("rejectionHandled",e):(t=c.onrejectionhandled)&&t({promise:e,reason:e._v})})},I=function(e){var t=this;t._d||(t._d=!0,t=t._w||t,t._v=e,t._s=2,t._a||(t._a=t._c.slice()),S(t,!0))},T=function(e){var t,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===e)throw g("Promise can't be resolved itself");(t=k(e))?v(function(){var o={_w:n,_d:!1};try{t.call(e,a(T,o,1),a(I,o,1))}catch(r){I.call(o,r)}}):(n._v=e,n._s=1,S(n,!1))}catch(o){I.call({_w:n,_d:!1},o)}}};w||(y=function(e){d(this,y,A,"_h"),p(e),o.call(this);try{e(a(T,this,1),a(I,this,1))}catch(t){I.call(this,t)}},o=function(e){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},o.prototype=n(224)(y.prototype,{then:function(e,t){var n=E(h(this,y));return n.ok="function"==typeof e?e:!0,n.fail="function"==typeof t&&t,n.domain=C?_.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&S(this,!1),n.promise},"catch":function(e){return this.then(void 0,e)}}),j=function(){var e=new o;this.promise=e,this.resolve=a(T,e,1),this.reject=a(I,e,1)}),u(u.G+u.W+u.F*!w,{Promise:y}),n(28)(y,A),n(226)(A),i=n(2)[A],u(u.S+u.F*!w,A,{reject:function(e){var t=E(this),n=t.reject;return n(e),t.promise}}),u(u.S+u.F*(s||!w),A,{resolve:function(e){if(e instanceof y&&B(e.constructor,this))return e;var t=E(this),n=t.resolve;return n(e),t.promise}}),u(u.S+u.F*!(w&&n(74)(function(e){y.all(e)["catch"](b)})),A,{all:function(e){var t=this,n=E(t),o=n.resolve,r=n.reject,i=M(function(){var n=[],i=0,s=1;m(e,!1,function(e){var c=i++,a=!1;n.push(void 0),s++,t.resolve(e).then(function(e){a||(a=!0,n[c]=e,--s||o(n))},r)}),--s||o(n)});return i&&r(i.error),n.promise},race:function(e){var t=this,n=E(t),o=n.reject,r=M(function(){m(e,!1,function(e){t.resolve(e).then(n.resolve,o)})});return r&&o(r.error),n.promise}})},249:function(e,t,n){var o,r;n(258),o=n(250),r=n(259),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},250:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{"class":{type:String,"default":""},dir:{type:String,"default":""}}}},257:function(e,t,n){t=e.exports=n(189)(),t.push([e.id,".c-pane{margin:1rem}.c-pane.vertical{margin:1rem 0}.c-pane.horizontal{margin:0 1rem}","",{version:3,sources:["/./src/themes/default/components/pane.css"],names:[],mappings:"AAAA,QACE,WAAY,CACb,AACD,iBACE,aAAc,CACf,AACD,mBACE,aAAc,CACf",file:"pane.css",sourcesContent:[".c-pane {\n  margin: 1rem\n}\n.c-pane.vertical {\n  margin: 1rem 0\n}\n.c-pane.horizontal {\n  margin: 0 1rem\n}\n"],sourceRoot:"webpack://"}])},258:function(e,t,n){var o=n(257);"string"==typeof o&&(o=[[e.id,o,""]]);n(190)(o,{});o.locals&&(e.exports=o.locals)},259:function(e,t){e.exports="<div :class=\"['c-pane', class, dir]\"> <slot></slot> </div>"},316:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{"class":{type:String,"default":""},direction:{type:String,"default":"row"}}}},317:117,322:function(e,t,n){t=e.exports=n(189)(),t.push([e.id,".c-flex-box{margin:.5rem -.5rem;display:flex}.c-flex-box.row{flex-direction:row}.c-flex-box.column{flex-direction:column}","",{version:3,sources:["/./src/themes/default/components/flex-box.css"],names:[],mappings:"AAAA,YACE,oBAAuB,AACvB,YAAa,CACd,AACD,gBACE,kBAAmB,CACpB,AACD,mBACE,qBAAsB,CACvB",file:"flex-box.css",sourcesContent:[".c-flex-box {\n  margin: 0.5rem -0.5rem;\n  display: flex\n}\n.c-flex-box.row {\n  flex-direction: row\n}\n.c-flex-box.column {\n  flex-direction: column\n}\n"],sourceRoot:"webpack://"}])},323:function(e,t,n){t=e.exports=n(189)(),t.push([e.id,".c-flex-item{margin:.5rem;flex:auto}","",{version:3,sources:["/./src/themes/default/components/flex-item.css"],names:[],mappings:"AAAA,aACE,aAAe,AACf,SAAW,CACZ",file:"flex-item.css",sourcesContent:[".c-flex-item {\n  margin: 0.5rem;\n  flex: auto;\n}\n"],sourceRoot:"webpack://"}])},328:function(e,t,n){var o=n(322);"string"==typeof o&&(o=[[e.id,o,""]]);n(190)(o,{});o.locals&&(e.exports=o.locals)},329:function(e,t,n){var o=n(323);"string"==typeof o&&(o=[[e.id,o,""]]);n(190)(o,{});o.locals&&(e.exports=o.locals)},334:function(e,t){e.exports="<div :class=\"['c-flex-box', class, direction]\"> <slot></slot> </div>"},335:function(e,t){e.exports="<div :class=\"['c-flex-item', class]\"> <slot></slot> </div>"},340:function(e,t,n){var o,r;n(328),o=n(316),r=n(334),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},341:function(e,t,n){var o,r;n(329),o=n(317),r=n(335),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},348:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e){return new s["default"](function(t,n){var o=new Image;o.onload=function(){t({width:o.width,height:o.height})},o.onerror=function(){n(null)},o.src=e})}Object.defineProperty(t,"__esModule",{value:!0});var i=n(216),s=o(i);t["default"]={props:{"class":{type:String,"default":""},src:{type:String,"default":"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="},alt:{type:String,"default":""},title:{type:String,"default":""},width:{type:[String,Number],"default":""},height:{type:[String,Number],"default":""},keepRatio:{type:Boolean,"default":!0}},methods:{_load:function(e){this.keepRatio&&!function(){var t=e.path[0];r(t.src).then(function(e){var n=e.width,o=e.height,r=n/o;r!==t.width/t.height&&(t.height=t.width/r)})}()}}}},352:function(e,t,n){t=e.exports=n(189)(),t.push([e.id,".c-image{display:flex;align-items:center;text-align:center;justify-content:center}","",{version:3,sources:["/./src/themes/default/components/image.css"],names:[],mappings:"AAAA,SACE,aAAc,AACd,mBAAoB,AACpB,kBAAmB,AACnB,sBAAwB,CAOzB",file:"image.css",sourcesContent:['.c-image {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n  /*&:after {\n    content: "\\20";\n    height: 100%;\n    display: inline-block;\n    vertical-align: middle;\n  }*/\n}\n\n.c-image-img {\n  /*display: inline-block;*/\n  /*vertical-align: middle;*/\n}\n'],sourceRoot:"webpack://"}])},358:function(e,t,n){var o=n(352);"string"==typeof o&&(o=[[e.id,o,""]]);n(190)(o,{});o.locals&&(e.exports=o.locals)},364:function(e,t){e.exports="<div :class=\"['c-image', class]\"> <img class=c-image-img :src=src :width=width :height=height :alt=alt :title=title @load=_load> </div>"},367:function(e,t,n){var o,r;n(358),o=n(348),r=n(364),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},375:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(367),i=o(r),s=n(249),c=o(s),a=n(340),l=o(a),u=n(341),f=o(u);t["default"]={components:{CImage:i["default"],Pane:c["default"],FlexBox:l["default"],FlexItem:f["default"]}}},390:function(e,t,n){t=e.exports=n(189)(),t.push([e.id,".demo-misc .c-image{margin:1rem;background-color:#ccc}.demo-misc .c-flex-box,.demo-misc .c-pane{background-color:#e6e6e6}.demo-misc .c-flex-item{background-color:#ccc}","",{version:3,sources:["/./src/themes/default/views/demo-misc.css"],names:[],mappings:"AAEA,oBACI,YAAa,AACb,qBAAoC,CACvC,AAID,0CACI,wBAAoC,CACvC,AACD,wBACI,qBAAoC,CACvC",file:"demo-misc.css",sourcesContent:[".demo-misc {\n}\n.demo-misc .c-image {\n    margin: 1rem;\n    background-color: rgb(204, 204, 204)\n}\n.demo-misc .c-pane {\n    background-color: rgb(230, 230, 230)\n}\n.demo-misc .c-flex-box {\n    background-color: rgb(230, 230, 230)\n}\n.demo-misc .c-flex-item {\n    background-color: rgb(204, 204, 204)\n}\n"],sourceRoot:"webpack://"}])},397:function(e,t,n){var o=n(390);"string"==typeof o&&(o=[[e.id,o,""]]);n(190)(o,{});o.locals&&(e.exports=o.locals)},408:function(e,t){e.exports="<div class=demo-misc> <c-image class=img1 src=images/logo.png></c-image> <c-image class=img2 src=images/logo.png width=500 height=500></c-image> <pane>pane</pane> <flex-box> <flex-item>flex-item-1</flex-item> <flex-item>flex-item-2</flex-item> <flex-item>flex-item-3</flex-item> </flex-box> </div>"}});
//# sourceMappingURL=13.66ea995e021ffd7b9989.js.map