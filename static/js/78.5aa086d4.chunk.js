(window.webpackJsonp=window.webpackJsonp||[]).push([[78,130,131,132,133],{1140:function(t,e){t.exports={isFunction:function(t){return"function"===typeof t},isArray:function(t){return"[object Array]"===Object.prototype.toString.apply(t)},each:function(t,e){for(var n=0,r=t.length;n<r&&!1!==e(t[n],n);n++);}}},1141:function(t,e,n){"use strict";var r=n(362),a=n.n(r)()({});e.a=a},1142:function(t,e,n){"use strict";var r={rowStyle:{width:"100%",display:"flex",flexFlow:"row wrap"},colStyle:{marginBottom:"16px"},gutter:16};e.a=r},1143:function(t,e,n){var r=n(1145);t.exports=new r},1145:function(t,e,n){var r=n(1146),a=n(1140),i=a.each,o=a.isFunction,l=a.isArray;function c(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}c.prototype={constructor:c,register:function(t,e,n){var a=this.queries,c=n&&this.browserIsIncapable;return a[t]||(a[t]=new r(t,c)),o(e)&&(e={match:e}),l(e)||(e=[e]),i(e,function(e){o(e)&&(e={match:e}),a[t].addHandler(e)}),this},unregister:function(t,e){var n=this.queries[t];return n&&(e?n.removeHandler(e):(n.clear(),delete this.queries[t])),this}},t.exports=c},1146:function(t,e,n){var r=n(1147),a=n(1140).each;function i(t,e){this.query=t,this.isUnconditional=e,this.handlers=[],this.mql=window.matchMedia(t);var n=this;this.listener=function(t){n.mql=t.currentTarget||t,n.assess()},this.mql.addListener(this.listener)}i.prototype={constuctor:i,addHandler:function(t){var e=new r(t);this.handlers.push(e),this.matches()&&e.on()},removeHandler:function(t){var e=this.handlers;a(e,function(n,r){if(n.equals(t))return n.destroy(),!e.splice(r,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){a(this.handlers,function(t){t.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var t=this.matches()?"on":"off";a(this.handlers,function(e){e[t]()})}},t.exports=i},1147:function(t,e){function n(t){this.options=t,!t.deferSetup&&this.setup()}n.prototype={constructor:n,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},t.exports=n},1163:function(t,e,n){"use strict";var r=n(3),a=n.n(r),i=n(41),o=n(15),l=n(16),c=n(1151),s=n(22),u=n(1152),p=n(0),d=n.n(p),f=n(380),h=n.n(f),m=(n(591),function(t){function e(){var t,n;Object(o.a)(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(c.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(a)))).state={Component:void 0},n}return Object(u.a)(e,t),Object(l.a)(e,[{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"componentDidMount",value:function(){var t=Object(i.a)(a.a.mark(function t(){var e,n,r,i,o,l;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.mounted=!0,e=this.props.componentArguement,t.t0=e,t.next="googleChart"===t.t0?5:11;break;case 5:return t.next=7,this.props.load;case 7:return r=t.sent,i=r.Chart,n=i,t.abrupt("break",16);case 11:return t.next=13,this.props.load;case 13:o=t.sent,l=o.default,n=l;case 16:this.mounted&&this.setState({Component:d.a.createElement(n,this.props.componentProps)});case 17:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.Component||d.a.createElement("div",null);try{if(this.mounted)return d.a.createElement(h.a,{type:"text",rows:7,ready:void 0!==t},t)}catch(e){}return d.a.createElement("div",null)}}]),e}(p.Component));e.a=m},1208:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),i=n(27),o=n(24),l=n(4);function c(){var t=Object(i.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"]);return c=function(){return t},t}function s(){var t=Object(i.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"]);return s=function(){return t},t}var u=o.c.h3(s(),Object(l.palette)("text",0)),p=o.c.p(c(),Object(l.palette)("text",3)),d=function(t){return a.a.createElement("div",null,t.title?a.a.createElement(u,{className:"isoBoxTitle"}," ",t.title," "):"",t.subtitle?a.a.createElement(p,{className:"isoBoxSubTitle"}," ",t.subtitle," "):"")};function f(){var t=Object(i.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"]);return f=function(){return t},t}var h=o.c.div(f(),Object(l.palette)("border",0),"");e.default=function(t){return a.a.createElement(h,{className:"".concat(t.className," isoBoxWrapper"),style:t.style},a.a.createElement(d,{title:t.title,subtitle:t.subtitle}),t.children)}},1232:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),i=n(27);function o(){var t=Object(i.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"]);return o=function(){return t},t}var l=n(24).c.div(o());e.default=function(t){return a.a.createElement(l,Object.assign({className:null!=t.className?"".concat(t.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},t),t.children)}},1233:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),i=n(27),o=n(24),l=n(4),c=n(37);function s(){var t=Object(i.a)(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"]);return s=function(){return t},t}var u=o.c.h1(s(),Object(l.palette)("secondary",2),Object(l.palette)("secondary",3),function(t){return"rtl"===t["data-rtl"]?"0 0 0 15px":"0 15px 0 0"},Object(l.palette)("secondary",3),function(t){return"rtl"===t["data-rtl"]?"0 15px 0 0":"0 0 0 15px"}),p=Object(c.a)(u);e.default=function(t){return a.a.createElement(p,{className:"isoComponentTitle"},t.children)}},1234:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),i=n(27),o=n(24),l=n(4),c=n(37);function s(){var t=Object(i.a)(["\n  margin-top: 30px;\n  -webkit-overflow-scrolling: touch;\n\n  .demoBtn {\n    margin-right: ",";\n    margin-left: ",";\n  }\n\n  .demoBtnsWrapper {\n    &:nth-child(1) {\n      margin-left: ",";\n      margin-right: ",";\n      white-space: nowrap;\n    }\n\n    &:nth-child(2) {\n      width: 70px;\n      float: ",";\n    }\n\n    &:nth-child(3) {\n      width: 70px;\n      margin-left: ",";\n      margin-right: ",";\n    }\n\n    &:nth-child(4) {\n      margin-left: ",";\n      margin-right: ",";\n      clear: both;\n      white-space: nowrap;\n    }\n\n    @media only screen and (max-width: 480px) {\n      margin-left: ",";\n      white-space: nowrap;\n      margin-right: ",";\n      float: none !important;\n    }\n\n    .demoPosBtn {\n      width: 70px;\n      margin-right: ",";\n      margin-left: ",";\n      margin-bottom: 8px;\n      padding: 0;\n\n      @media only screen and (max-width: 480px) {\n        width: 65px;\n      }\n    }\n  }\n\n  .ant-btn {\n    &:not(.demoPosBtn) {\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  }\n\n  .tooltipBtn {\n    display: inline-block;\n    line-height: 32px;\n    height: 32px;\n    width: 70px;\n    font-size: 14px;\n    text-align: center;\n    background: ",";\n    margin-right: ",";\n    margin-left: ",";\n    margin-bottom: 6px;\n    border-radius: 6px;\n  }\n\n  .ant-progress {\n    &.ant-progress-circle {\n      margin-right: ",";\n      margin-left: ",";\n\n      &:last-child {\n        margin-right: ",";\n        margin-left: ",";\n      }\n    }\n  }\n\n  strong {\n    font-weight: 700;\n    font-size: 14px;\n  }\n"]);return s=function(){return t},t}var u=o.c.div(s(),function(t){return"rtl"===t["data-rtl"]?"0":"10px"},function(t){return"rtl"===t["data-rtl"]?"10px":"0"},function(t){return"rtl"===t["data-rtl"]?"0":"70px"},function(t){return"rtl"===t["data-rtl"]?"70px":"0"},function(t){return"rtl"===t["data-rtl"]?"right":"left"},function(t){return"rtl"===t["data-rtl"]?"0":"295px"},function(t){return"rtl"===t["data-rtl"]?"295px":"0"},function(t){return"rtl"===t["data-rtl"]?"0":"70px"},function(t){return"rtl"===t["data-rtl"]?"70px":"0"},function(t){return"rtl"===t["data-rtl"]?"8px":"0 !important"},function(t){return"rtl"===t["data-rtl"]?"0 !important":"8px"},function(t){return"rtl"===t["data-rtl"]?"0":"8px"},function(t){return"rtl"===t["data-rtl"]?"8px":"0"},Object(l.palette)("secondary",1),function(t){return"rtl"===t["data-rtl"]?"auto":"6px"},function(t){return"rtl"===t["data-rtl"]?"6px":"0"},function(t){return"rtl"===t["data-rtl"]?"0":"15px"},function(t){return"rtl"===t["data-rtl"]?"15px":"0"},function(t){return t["data-rtl"],"0"},function(t){return t["data-rtl"],"0"}),p=Object(c.a)(u);e.default=function(t){return a.a.createElement(p,{className:"isoExampleWrapper",style:t.style},t.children)}},1238:function(t,e,n){"use strict";n.d(e,"a",function(){return E});var r=n(0),a=n(21),i=n.n(a),o=n(1),l=n(1141),c=n(113);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function p(t){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return!e||"object"!==p(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var y,x=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&(n[r[a]]=t[r[a]])}return n};if("undefined"!==typeof window){window.matchMedia=window.matchMedia||function(t){return{media:t,matches:!1,addListener:function(){},removeListener:function(){}}},y=n(1143)}var g=Object(c.a)("top","middle","bottom"),b=Object(c.a)("start","end","center","space-around","space-between"),w=["xxl","xl","lg","md","sm","xs"],v={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},E=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=f(this,h(e).apply(this,arguments))).state={screens:{}},t}var n,a,o;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(e,r["Component"]),n=e,(a=[{key:"componentDidMount",value:function(){var t=this;Object.keys(v).map(function(e){return y.register(v[e],{match:function(){"object"===p(t.props.gutter)&&t.setState(function(t){return{screens:u({},t.screens,s({},e,!0))}})},unmatch:function(){"object"===p(t.props.gutter)&&t.setState(function(t){return{screens:u({},t.screens,s({},e,!1))}})},destroy:function(){}})})}},{key:"componentWillUnmount",value:function(){Object.keys(v).map(function(t){return y.unregister(v[t])})}},{key:"getGutter",value:function(){var t=this.props.gutter;if("object"===p(t))for(var e=0;e<w.length;e++){var n=w[e];if(this.state.screens[n]&&void 0!==t[n])return t[n]}return t}},{key:"render",value:function(){var t,e=this.props,n=e.type,a=e.justify,o=e.align,c=e.className,p=e.style,d=e.children,f=e.prefixCls,h=void 0===f?"ant-row":f,m=x(e,["type","justify","align","className","style","children","prefixCls"]),y=this.getGutter(),g=i()((s(t={},h,!n),s(t,"".concat(h,"-").concat(n),n),s(t,"".concat(h,"-").concat(n,"-").concat(a),n&&a),s(t,"".concat(h,"-").concat(n,"-").concat(o),n&&o),t),c),b=y>0?u({marginLeft:y/-2,marginRight:y/-2},p):p,w=u({},m);return delete w.gutter,r.createElement(l.a.Provider,{value:{gutter:y}},r.createElement("div",u({},w,{className:g,style:b}),d))}}])&&d(n.prototype,a),o&&d(n,o),e}();E.defaultProps={gutter:0},E.propTypes={type:o.oneOf(["flex"]),align:o.oneOf(g),justify:o.oneOf(b),className:o.string,children:o.node,gutter:o.oneOfType([o.object,o.number]),prefixCls:o.string}},1239:function(t,e,n){"use strict";n.d(e,"a",function(){return x});var r=n(0),a=n(1),i=n(21),o=n.n(i),l=n(1141);function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function u(t){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t,e){return!e||"object"!==u(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var m=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&(n[r[a]]=t[r[a]])}return n},y=a.oneOfType([a.object,a.number]),x=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),d(this,f(e).apply(this,arguments))}var n,a,i;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(e,r["Component"]),n=e,(a=[{key:"render",value:function(){var t,e=this.props,n=e.span,a=e.order,i=e.offset,p=e.push,d=e.pull,f=e.className,h=e.children,y=e.prefixCls,x=void 0===y?"ant-col":y,g=m(e,["span","order","offset","push","pull","className","children","prefixCls"]),b={};["xs","sm","md","lg","xl","xxl"].forEach(function(t){var n,r={};"number"===typeof e[t]?r.span=e[t]:"object"===u(e[t])&&(r=e[t]||{}),delete g[t],b=s({},b,(c(n={},"".concat(x,"-").concat(t,"-").concat(r.span),void 0!==r.span),c(n,"".concat(x,"-").concat(t,"-order-").concat(r.order),r.order||0===r.order),c(n,"".concat(x,"-").concat(t,"-offset-").concat(r.offset),r.offset||0===r.offset),c(n,"".concat(x,"-").concat(t,"-push-").concat(r.push),r.push||0===r.push),c(n,"".concat(x,"-").concat(t,"-pull-").concat(r.pull),r.pull||0===r.pull),n))});var w=o()((c(t={},"".concat(x,"-").concat(n),void 0!==n),c(t,"".concat(x,"-order-").concat(a),a),c(t,"".concat(x,"-offset-").concat(i),i),c(t,"".concat(x,"-push-").concat(p),p),c(t,"".concat(x,"-pull-").concat(d),d),t),f,b);return r.createElement(l.a.Consumer,null,function(t){var e=t.gutter,n=g.style;return e>0&&(n=s({paddingLeft:e/2,paddingRight:e/2},n)),r.createElement("div",s({},g,{style:n,className:w}),h)})}}])&&p(n.prototype,a),i&&p(n,i),e}();x.propTypes={span:a.number,order:a.number,offset:a.number,push:a.number,pull:a.number,className:a.string,children:a.node,xs:y,sm:y,md:y,lg:y,xl:y,xxl:y}},1240:function(t,e,n){"use strict";var r=n(1238);e.a=r.a},1241:function(t,e,n){"use strict";var r=n(1239);e.a=r.a},1248:function(t,e,n){"use strict";var r=n(27),a=n(24),i=n(4),o=n(37);function l(){var t=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  .isoChartControl {\n    display: flex;\n    align-items: center;\n    margin-left: ",";\n    margin-right: ",";\n    margin-bottom: 20px;\n\n    span {\n      font-size: 13px;\n      color: ",";\n      font-weight: 400;\n      margin-right: ",";\n      margin-left: ",";\n    }\n\n    button {\n      border: 1px solid ",";\n      padding: 0 10px;\n      border-radius: 0;\n      position: relative;\n\n      span {\n        margin: 0;\n      }\n\n      &:last-child {\n        margin-left: ",";\n        margin-right: ",";\n      }\n\n      &:hover {\n        color: ",";\n        border-color: ",";\n        z-index: 1;\n\n        span {\n          color: ",";\n        }\n      }\n    }\n  }\n"]);return l=function(){return t},t}var c=a.c.div(l(),function(t){return"rtl"===t["data-rtl"]?"inherit":"auto"},function(t){return"rtl"===t["data-rtl"]?"auto":"inherit"},Object(i.palette)("text",1),function(t){return"rtl"===t["data-rtl"]?"inherit":"15px"},function(t){return"rtl"===t["data-rtl"]?"15px":"inherit"},Object(i.palette)("border",0),function(t){return"rtl"===t["data-rtl"]?"inherit":"-1px"},function(t){return"rtl"===t["data-rtl"]?"-1px":"inherit"},Object(i.palette)("primary",0),Object(i.palette)("primary",0),Object(i.palette)("primary",0));e.a=Object(o.a)(c)},2730:function(t,e,n){"use strict";n.r(e);var r=n(15),a=n(16),i=n(1151),o=n(22),l=n(1152),c=n(0),s=n.n(c),u=n(1163),p=n(1240),d=n(1241),f=n(1233),h=n(1208),m=n(1232),y=n(1234),x=n(1142),g="100%",b="400px",w={title:"BarChart",key:"BarChart",chartType:"BarChart",width:g,height:b,data:[["Year","Trafic",{role:"style"}],["2010",1e4,"fill-color: #48A6F2; fill-opacity: 0.4"],["2012",21500,"fill-color: #f64744; fill-opacity: 0.4"],["2014",56598,"fill-color: #ffbf00; fill-opacity: 0.4"],["2016",85256,"fill-color: #511E78; fill-opacity: 0.4"]],options:{title:"Visitor statistics from 2010 to 2016",titleTextStyle:{color:"#788195"},bar:{groupWidth:"95%"},legend:{position:"none"},animation:{duration:1e3,easing:"in",startup:!0},hAxis:{textStyle:{color:"#788195"}},vAxis:{textStyle:{color:"#788195"}},tooltip:{textStyle:{color:"#788195"}}},chartEvents:[{eventName:"onmouseover"}]},v={title:"Line Chart",chartType:"LineChart",key:"LineChart",width:g,height:b,columns:[{label:"time",type:"number"},{label:"Air Passengers",type:"number"}],rows:[[1949,11],[1949.08333333333,11],[1949.16666666667,13],[1949.25,12],[1949.33333333333,12],[1949.41666666667,13],[1949.5,14],[1949.58333333333,14],[1949.66666666667,136],[1949.75,119],[1949.83333333333,104],[1949.91666666667,118],[1950,115],[1950.08333333333,126],[1950.16666666667,141],[1950.25,135],[1950.33333333333,125],[1950.41666666667,149],[1950.5,170],[1950.58333333333,170],[1950.66666666667,158],[1950.75,133],[1950.83333333333,114],[1950.91666666667,140],[1951,145],[1951.08333333333,150],[1951.16666666667,178],[1951.25,163],[1951.33333333333,172],[1951.41666666667,178],[1951.5,199],[1951.58333333333,199],[1951.66666666667,184],[1951.75,162],[1951.83333333333,146],[1951.91666666667,166],[1952,171],[1952.08333333333,180],[1952.16666666667,193],[1952.25,181],[1952.33333333333,183],[1952.41666666667,218],[1952.5,230],[1952.58333333333,242],[1952.66666666667,209],[1952.75,191],[1952.83333333333,172],[1952.91666666667,194],[1953,196],[1953.08333333333,196],[1953.16666666667,236],[1953.25,235],[1953.33333333333,229],[1953.41666666667,243],[1953.5,264],[1953.58333333333,272],[1953.66666666667,237],[1953.75,211],[1953.83333333333,180],[1953.91666666667,201],[1954,204],[1954.08333333333,188],[1954.16666666667,235],[1954.25,227],[1954.33333333333,234],[1954.41666666667,264],[1954.5,302],[1954.58333333333,293],[1954.66666666667,259],[1954.75,229],[1954.83333333333,203],[1954.91666666667,229],[1955,242],[1955.08333333334,233],[1955.16666666667,267],[1955.25,269],[1955.33333333334,270],[1955.41666666667,315],[1955.5,364],[1955.58333333334,347],[1955.66666666667,312],[1955.75,274],[1955.83333333334,237],[1955.91666666667,278],[1956,284],[1956.08333333334,277],[1956.16666666667,317],[1956.25,313],[1956.33333333334,318],[1956.41666666667,374],[1956.5,413],[1956.58333333334,405],[1956.66666666667,355],[1956.75,306],[1956.83333333334,271],[1956.91666666667,306],[1957,315],[1957.08333333334,301],[1957.16666666667,356],[1957.25,348],[1957.33333333334,355],[1957.41666666667,422],[1957.5,465],[1957.58333333334,467],[1957.66666666667,404],[1957.75,347],[1957.83333333334,305],[1957.91666666667,336],[1958,340],[1958.08333333334,318],[1958.16666666667,362],[1958.25,348],[1958.33333333334,363],[1958.41666666667,435],[1958.5,491],[1958.58333333334,505],[1958.66666666667,404],[1958.75,359],[1958.83333333334,310],[1958.91666666667,337],[1959,360],[1959.08333333334,342],[1959.16666666667,406],[1959.25,396],[1959.33333333334,420],[1959.41666666667,472],[1959.5,548],[1959.58333333334,559],[1959.66666666667,463],[1959.75,407],[1959.83333333334,362],[1959.91666666667,405],[1960,417],[1960.08333333334,391],[1960.16666666667,419],[1960.25,461],[1960.33333333334,472],[1960.41666666667,535],[1960.5,622],[1960.58333333334,606],[1960.66666666667,508],[1960.75,461],[1960.83333333334,390],[1960.91666666667,432]],options:{legend:{textStyle:{color:"#788195"}},hAxis:{textStyle:{color:"#788195"},title:"Time",titleTextStyle:{color:"#788195"}},vAxis:{textStyle:{color:"#788195"},title:"Air Passengers",titleTextStyle:{color:"#788195"}},colors:["#48A6F2"],dataOpacity:1,animation:{duration:1e3,easing:"in",startup:!0},tooltip:{textStyle:{color:"#788195"}}}},E={title:"Bubble Chart",key:"BubbleChart",chartType:"BubbleChart",width:g,height:b,data:[["ID","Life Expectancy","Fertility Rate","Region","Population"],["CAN",80.66,1.67,"North America",33739900],["DEU",79.84,1.36,"Europe",81902307],["DNK",78.6,1.84,"Europe",5523095],["EGY",72.73,2.78,"Middle East",79716203],["GBR",80.05,2,"Europe",61801570],["IRN",72.49,1.7,"Middle East",73137148],["IRQ",68.09,4.77,"Middle East",31090763],["ISR",81.55,2.96,"Middle East",7485600],["RUS",68.6,1.54,"Europe",14185e4],["USA",78.09,2.05,"North America",307007e3]],options:{title:"Correlation between life expectancy, fertility rate and population of some world countries (2010)",titleTextStyle:{color:"#788195"},legend:{textStyle:{color:"#788195"}},hAxis:{textStyle:{color:"#788195"},title:"Life Expectancy",titleTextStyle:{color:"#788195"}},vAxis:{textStyle:{color:"#788195"},title:"Fertility Rate",titleTextStyle:{color:"#788195"}},bubble:{opacity:.6,stroke:"#ffffff",textStyle:{fontSize:11,color:"#788195"}},tooltip:{textStyle:{color:"#788195"}},colors:["#48A6F2","#F55F82","#ffbf00"],animation:{duration:1e3,easing:"in",startup:!0}}},S={title:"Histogram",key:"Histogram",chartType:"Histogram",width:g,height:b,data:[["Dinosaur","Length"],["Acrocanthosaurus (top-spined lizard)",12.2],["Albertosaurus (Alberta lizard)",9.1],["Allosaurus (other lizard)",12.2],["Apatosaurus (deceptive lizard)",22.9],["Archaeopteryx (ancient wing)",.9],["Argentinosaurus (Argentina lizard)",36.6],["Baryonyx (heavy claws)",9.1],["Brachiosaurus (arm lizard)",30.5],["Ceratosaurus (horned lizard)",6.1],["Coelophysis (hollow form)",2.7],["Compsognathus (elegant jaw)",.9],["Deinonychus (terrible claw)",2.7],["Diplodocus (double beam)",27.1],["Dromicelomimus (emu mimic)",3.4],["Gallimimus (fowl mimic)",5.5],["Mamenchisaurus (Mamenchi lizard)",21],["Megalosaurus (big lizard)",7.9],["Microvenator (small hunter)",1.2],["Ornithomimus (bird mimic)",4.6],["Oviraptor (egg robber)",1.5],["Plateosaurus (flat lizard)",7.9],["Sauronithoides (narrow-clawed lizard)",2],["Seismosaurus (tremor lizard)",45.7],["Spinosaurus (spiny lizard)",12.2],["Supersaurus (super lizard)",30.5],["Tyrannosaurus (tyrant lizard)",15.2],["Ultrasaurus (ultra lizard)",30.5],["Velociraptor (swift robber)",1.8]],options:{title:"Lengths of dinosaurs, in meters",titleTextStyle:{color:"#788195"},legend:{textStyle:{color:"#788195"}},colors:["#511E78"],dataOpacity:.6,animation:{duration:1e3,easing:"in",startup:!0},hAxis:{textStyle:{color:"#788195"}},vAxis:{textStyle:{color:"#788195"}},tooltip:{textStyle:{color:"#788195"}}}},O={title:"Scatter Chart",key:"ScatterChart",chartType:"ScatterChart",width:g,height:b,data:[["Age","Weight"],[8,12],[4,10.5],[11,14],[4,5],[3,3.5],[6.5,7],[8,11],[12,8],[9.5,14],[6.5,12]],options:{title:"Age vs. Weight Comparison",titleTextStyle:{color:"#788195"},hAxis:{title:"Age",titleTextStyle:{color:"#788195"},minValue:0,maxValue:15,textStyle:{color:"#788195"}},vAxis:{title:"Weight",titleTextStyle:{color:"#788195"},minValue:0,maxValue:15,textStyle:{color:"#788195"}},legend:"none",colors:["#42A5F5"],dataOpacity:.8,tooltip:{textStyle:{color:"#788195"}}}},A={title:"Area Chart",key:"AreaChart",chartType:"AreaChart",width:g,height:b,data:[["Year","Sales","Expenses"],["2013",1e3,400],["2014",1170,460],["2015",660,1120],["2016",1030,540]],options:{legend:{textStyle:{color:"#788195"}},animation:{duration:1e3,easing:"in",startup:!0},hAxis:{textStyle:{color:"#788195"}},vAxis:{textStyle:{color:"#788195"}},colors:["#48A6F2","#511E78"],dataOpacity:.6,tooltip:{textStyle:{color:"#788195"}}}},C={title:"Candlestick Chart",key:"CandlestickChart",chartType:"CandlestickChart",width:g,height:b,data:[["DAY","val1","val2","val3","val4"],["Mon",20,28,38,45],["Tue",31,38,55,66],["Wed",50,55,77,80],["Thu",77,77,66,50],["Fri",68,66,22,15]],options:{title:"Visitors Per Day",titleTextStyle:{color:"#788195"},legend:"none",hAxis:{textStyle:{color:"#788195"}},vAxis:{textStyle:{color:"#788195"}},animation:{duration:1e3,easing:"in",startup:!0},colors:["#48A6F2"],tooltip:{textStyle:{color:"#788195"}}}},T={title:"Combo Chart",key:"ComboChart",chartType:"ComboChart",width:g,height:b,data:[["Month","Bolivia","Ecuador","Madagascar","Papua New Guinea","Rwanda","Average"],["2004/05",165,938,522,998,450,614.6],["2005/06",135,1120,599,1268,288,682],["2006/07",157,1167,587,807,397,623],["2007/08",139,1110,615,968,215,609.4],["2008/09",136,691,629,1026,366,569.6]],options:{title:"Monthly Coffee Production by Country",titleTextStyle:{color:"#788195"},legend:{textStyle:{color:"#788195"}},hAxis:{textStyle:{color:"#788195"},title:"Cups",titleTextStyle:{color:"#788195"}},vAxis:{textStyle:{color:"#788195"},title:"Month",titleTextStyle:{color:"#788195"}},seriesType:"bars",series:{5:{type:"line"}},animation:{duration:1e3,easing:"in",startup:!0},colors:["#00b16a","#ff6384","#511E78","#01C0C8","#ffbf00","#48A6F2"],dataOpacity:.6,tooltip:{textStyle:{color:"#788195"}}}},j={title:"Donut Chart",key:"DonutChart",chartType:"PieChart",width:g,height:b,data:[["Task","Hours per Day"],["Work",11],["Eat",2],["Commute",2],["Watch TV",2],["Sleep",7]],options:{title:"My Daily Activities",titleTextStyle:{color:"#788195"},legend:{textStyle:{color:"#788195"}},pieHole:.4,pieSliceTextStyle:{color:"#ffffff"},is3D:!0,colors:["#9678AE","#F99FB4","#C8E4FB","#01C0C8","#ffbf00"],tooltip:{textStyle:{color:"#788195"}}}},k={title:"Stepped Area Chart",key:"SteppedAreaChart",chartType:"SteppedAreaChart",width:g,height:b,data:[["Director (Year)","Rotten Tomatoes","IMDB"],["Alfred Hitchcock (1935)",8.4,7.9],["Ralph Thomas (1959)",6.9,6.5],["Don Sharp (1978)",6.5,6.4],["James Hawes (2008)",4.4,6.2]],options:{title:"The decline of The 39 Steps",titleTextStyle:{color:"#788195"},legend:{textStyle:{color:"#788195"}},animation:{duration:1e3,easing:"in",startup:!0},colors:["#511E78","#F55F82"],hAxis:{textStyle:{color:"#788195"}},vAxis:{textStyle:{color:"#788195"},title:"Accumulated Rating",titleTextStyle:{color:"#788195"}},isStacked:!0,tooltip:{textStyle:{color:"#788195"}}}},P={title:"Timeline",key:"Timeline",chartType:"Timeline",chartPackage:"timeline",width:g,height:b,columns:[{id:"Term",type:"string"},{id:"President",type:"string"},{id:"Start",type:"date"},{id:"End",type:"date"}],rows:[["1","Washington",new Date("1789-04-29T18:00:00.000Z"),new Date("1797-03-03T18:00:00.000Z")],["2","Adams",new Date("1797-03-03T18:00:00.000Z"),new Date("1801-03-03T18:00:00.000Z")],["3","Jefferson",new Date("1801-03-03T18:00:00.000Z"),new Date("1809-03-03T18:00:00.000Z")]],options:{colors:["#ffbf00","#F55F82","#48A6F2"],tooltip:{textStyle:{color:"#788195"}}}},D={title:"TreeMap",key:"TreeMap",chartType:"TreeMap",chartPackages:["treemap"],width:g,height:b,data:[["Location","Parent","Market trade volume (size)","Market increase/decrease (color)"],["Global",null,0,0],["America","Global",0,0],["Europe","Global",0,0],["Asia","Global",0,0],["Australia","Global",0,0],["Africa","Global",0,0],["Brazil","America",11,10],["USA","America",52,31],["Mexico","America",24,12],["Canada","America",16,-23],["France","Europe",42,-11],["Germany","Europe",31,-2],["Sweden","Europe",22,-13],["Italy","Europe",17,4],["UK","Europe",21,-5],["China","Asia",36,4],["Japan","Asia",20,-12],["India","Asia",40,63],["Laos","Asia",4,34],["Mongolia","Asia",1,-5],["Israel","Asia",12,24],["Iran","Asia",18,13],["Pakistan","Asia",11,-52],["Egypt","Africa",21,0],["S. Africa","Africa",30,43],["Sudan","Africa",12,2],["Congo","Africa",10,12],["Zaire","Africa",8,10]],options:{minColor:"#511E78",midColor:"#C8E4FB",maxColor:"#48A6F2"}},F={title:"TrendLines",key:"TrendLines",chartType:"ScatterChart",width:g,height:b,data:[["Diameter","Age"],[8,37],[4,19.5],[11,52],[4,22],[3,16.5],[6.5,32.8],[14,72]],options:{title:"Age of sugar maples vs. trunk diameter, in inches",titleTextStyle:{color:"#788195"},hAxis:{textStyle:{color:"#788195"},title:"Diameter",titleTextStyle:{color:"#788195"}},vAxis:{textStyle:{color:"#788195"},title:"Age",titleTextStyle:{color:"#788195"}},legend:"none",trendlines:{0:{type:"exponential",colors:"#48A6F2"}},tooltip:{textStyle:{color:"#788195"}}}},M={title:"Waterfall",key:"Waterfall",chartType:"CandlestickChart",width:g,height:b,data:[["DAY","val1","val2","val3","val4"],["Mon",20,28,38,45],["Tue",31,38,55,66],["Wed",50,55,77,80],["Thu",77,77,66,50],["Fri",68,66,22,15]],options:{legend:"none",bar:{groupWidth:"100%"},hAxis:{textStyle:{color:"#788195"}},vAxis:{textStyle:{color:"#788195"}},animation:{duration:1e3,easing:"in",startup:!0},tooltip:{textStyle:{color:"#788195"}},candlestick:{fallingColor:{strokeWidth:0,fill:"#F55F82"},risingColor:{strokeWidth:0,fill:"#48A6F2"}}}},N={title:"Gantt",key:"Gantt",chartType:"Gantt",chartPackages:["gantt"],width:g,height:b,columns:[{id:"Task ID",type:"string"},{id:"Task Name",type:"string"},{id:"Start Date",type:"date"},{id:"End Date",type:"date"},{id:"Duration",type:"number"},{id:"Percent Complete",type:"number"},{id:"Dependencies",type:"string"}],rows:[["Research","Find sources",new Date("2014-12-31T18:00:00.000Z"),new Date("2015-01-04T18:00:00.000Z"),null,100,null],["Write","Write paper",null,new Date("2015-01-08T18:00:00.000Z"),2592e5,25,"Research,Outline"],["Cite","Create bibliography",null,new Date("2015-01-06T18:00:00.000Z"),864e5,20,"Research"],["Complete","Hand in paper",null,new Date("2015-01-09T18:00:00.000Z"),864e5,0,"Cite,Write"],["Outline","Outline paper",null,new Date("2015-01-05T18:00:00.000Z"),864e5,100,"Research"]],options:{tooltip:{textStyle:{color:"#788195"}},gantt:{criticalPathEnabled:!1,arrow:{angle:100,width:2,color:"#9678AE",radius:0}}}},W={title:"WordTree",key:"WordTree",chartType:"WordTree",chartPackages:["wordtree"],width:g,height:b,data:[["Phrases"],["cats are better than dogs"],["cats eat kibble"],["cats are better than hamsters"],["cats are awesome"],["cats are people too"],["cats eat mice"],["cats meowing"],["cats in the cradle"],["cats eat mice"],["cats in the cradle lyrics"],["cats eat kibble"],["cats for adoption"],["cats are family"],["cats eat mice"],["cats are better than kittens"],["cats are evil"],["cats are weird"],["cats eat mice"]],options:{tooltip:{textStyle:{color:"#788195"}},wordtree:{format:"implicit",word:"cats"}}},z=n(1248);n.d(e,"default",function(){return R}),n.d(e,"GoogleChart",function(){return B});var B=function(t){return s.a.createElement(z.a,null,s.a.createElement(u.a,{load:n.e(164).then(n.bind(null,2653)),componentProps:t,componentArguement:"googleChart"}))},R=function(t){function e(){return Object(r.a)(this,e),Object(i.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(a.a)(e,[{key:"render",value:function(){var t=x.a.rowStyle,e=x.a.colStyle,n=x.a.gutter;return s.a.createElement(m.default,{className:"isoMapPage"},s.a.createElement(f.default,null,"Google Charts"),s.a.createElement(p.a,{style:t,gutter:n,justify:"start"},s.a.createElement(d.a,{md:12,xs:24,style:e},s.a.createElement(h.default,{title:w.title},s.a.createElement(y.default,null,s.a.createElement(B,Object.assign({},w,{chartEvents:[{eventName:"select",callback:function(t){}}]}))))),s.a.createElement(d.a,{md:12,xs:24,style:e},s.a.createElement(h.default,{title:v.title},s.a.createElement(y.default,null,s.a.createElement(B,v))))),s.a.createElement(p.a,{style:t,gutter:n,justify:"start"},s.a.createElement(d.a,{md:12,xs:24,style:e},s.a.createElement(h.default,{title:E.title},s.a.createElement(y.default,null,s.a.createElement(B,E)))),s.a.createElement(d.a,{md:12,xs:24,style:e},s.a.createElement(h.default,{title:S.title},s.a.createElement(y.default,null,s.a.createElement(B,S))))),s.a.createElement(p.a,{style:t,gutter:n,justify:"start"},s.a.createElement(d.a,{md:12,xs:24,style:e},s.a.createElement(h.default,{title:O.title},s.a.createElement(y.default,null,s.a.createElement(B,O)))),s.a.createElement(d.a,{md:12,xs:24,style:e},s.a.createElement(h.default,{title:A.title},s.a.createElement(y.default,null,s.a.createElement(B,A))))),s.a.createElement(p.a,{style:t,gutter:n,justify:"start"},s.a.createElement(d.a,{md:12,xs:24,style:e},s.a.createElement(h.default,{title:C.title},s.a.createElement(y.default,null,s.a.createElement(B,C)))),s.a.createElement(d.a,{md:12,xs:24,style:e},s.a.createElement(h.default,{title:T.title},s.a.createElement(y.default,null,s.a.createElement(B,T))))),s.a.createElement(p.a,{style:t,gutter:n,justify:"start"},s.a.createElement(d.a,{md:12,xs:24,style:e},s.a.createElement(h.default,{title:j.title},s.a.createElement(y.default,null,s.a.createElement(B,j)))),s.a.createElement(d.a,{md:12,xs:24,style:e},s.a.createElement(h.default,{title:k.title},s.a.createElement(y.default,null,s.a.createElement(B,k))))),s.a.createElement(p.a,{style:t,gutter:n,justify:"start"},s.a.createElement(d.a,{md:12,xs:24,style:e},s.a.createElement(h.default,{title:P.title},s.a.createElement(y.default,null,s.a.createElement(B,P)))),s.a.createElement(d.a,{md:12,xs:24,style:e},s.a.createElement(h.default,{title:D.title},s.a.createElement(y.default,null,s.a.createElement(B,D))))),s.a.createElement(p.a,{style:t,gutter:n,justify:"start"},s.a.createElement(d.a,{md:12,xs:24,style:e},s.a.createElement(h.default,{title:F.title},s.a.createElement(y.default,null,s.a.createElement(B,F)))),s.a.createElement(d.a,{md:12,xs:24,style:e},s.a.createElement(h.default,{title:M.title},s.a.createElement(y.default,null,s.a.createElement(B,M))))),s.a.createElement(p.a,{style:t,gutter:n,justify:"start"},s.a.createElement(d.a,{md:12,xs:24,style:e},s.a.createElement(h.default,{title:N.title},s.a.createElement(y.default,null,s.a.createElement(B,N)))),s.a.createElement(d.a,{md:12,xs:24,style:e},s.a.createElement(h.default,{title:W.title},s.a.createElement(y.default,null,s.a.createElement(B,W))))))}}]),e}(c.Component)}}]);
//# sourceMappingURL=78.5aa086d4.chunk.js.map