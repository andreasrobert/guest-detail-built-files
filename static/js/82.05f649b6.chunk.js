(window.webpackJsonp=window.webpackJsonp||[]).push([[82,133],{1234:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),l=n(27),i=n(24),o=n(4),c=n(37);function u(){var t=Object(l.a)(["\n  margin-top: 30px;\n  -webkit-overflow-scrolling: touch;\n\n  .demoBtn {\n    margin-right: ",";\n    margin-left: ",";\n  }\n\n  .demoBtnsWrapper {\n    &:nth-child(1) {\n      margin-left: ",";\n      margin-right: ",";\n      white-space: nowrap;\n    }\n\n    &:nth-child(2) {\n      width: 70px;\n      float: ",";\n    }\n\n    &:nth-child(3) {\n      width: 70px;\n      margin-left: ",";\n      margin-right: ",";\n    }\n\n    &:nth-child(4) {\n      margin-left: ",";\n      margin-right: ",";\n      clear: both;\n      white-space: nowrap;\n    }\n\n    @media only screen and (max-width: 480px) {\n      margin-left: ",";\n      white-space: nowrap;\n      margin-right: ",";\n      float: none !important;\n    }\n\n    .demoPosBtn {\n      width: 70px;\n      margin-right: ",";\n      margin-left: ",";\n      margin-bottom: 8px;\n      padding: 0;\n\n      @media only screen and (max-width: 480px) {\n        width: 65px;\n      }\n    }\n  }\n\n  .ant-btn {\n    &:not(.demoPosBtn) {\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  }\n\n  .tooltipBtn {\n    display: inline-block;\n    line-height: 32px;\n    height: 32px;\n    width: 70px;\n    font-size: 14px;\n    text-align: center;\n    background: ",";\n    margin-right: ",";\n    margin-left: ",";\n    margin-bottom: 6px;\n    border-radius: 6px;\n  }\n\n  .ant-progress {\n    &.ant-progress-circle {\n      margin-right: ",";\n      margin-left: ",";\n\n      &:last-child {\n        margin-right: ",";\n        margin-left: ",";\n      }\n    }\n  }\n\n  strong {\n    font-weight: 700;\n    font-size: 14px;\n  }\n"]);return u=function(){return t},t}var m=i.c.div(u(),function(t){return"rtl"===t["data-rtl"]?"0":"10px"},function(t){return"rtl"===t["data-rtl"]?"10px":"0"},function(t){return"rtl"===t["data-rtl"]?"0":"70px"},function(t){return"rtl"===t["data-rtl"]?"70px":"0"},function(t){return"rtl"===t["data-rtl"]?"right":"left"},function(t){return"rtl"===t["data-rtl"]?"0":"295px"},function(t){return"rtl"===t["data-rtl"]?"295px":"0"},function(t){return"rtl"===t["data-rtl"]?"0":"70px"},function(t){return"rtl"===t["data-rtl"]?"70px":"0"},function(t){return"rtl"===t["data-rtl"]?"8px":"0 !important"},function(t){return"rtl"===t["data-rtl"]?"0 !important":"8px"},function(t){return"rtl"===t["data-rtl"]?"0":"8px"},function(t){return"rtl"===t["data-rtl"]?"8px":"0"},Object(o.palette)("secondary",1),function(t){return"rtl"===t["data-rtl"]?"auto":"6px"},function(t){return"rtl"===t["data-rtl"]?"6px":"0"},function(t){return"rtl"===t["data-rtl"]?"0":"15px"},function(t){return"rtl"===t["data-rtl"]?"15px":"0"},function(t){return t["data-rtl"],"0"},function(t){return t["data-rtl"],"0"}),s=Object(c.a)(m);e.default=function(t){return r.a.createElement(s,{className:"isoExampleWrapper",style:t.style},t.children)}},2651:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return w});var a=n(15),r=n(16),l=n(1151),i=n(22),o=n(1152),c=n(0),u=n.n(c),m=n(1240),s=n(1241),d=n(1917),f=n(1233),p=n(1208),g=n(1232),h=n(1234),E=n(1142),x=n(32),w=function(t){function e(){var t,n;Object(a.a)(this,e);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(n=Object(l.a)(this,(t=Object(i.a)(e)).call.apply(t,[this].concat(o)))).state={current:3},n.onShowSizeChange=function(t,e){},n.onChange=function(t){},n.showTotal=function(t){return"Total ".concat(t," items")},n.onChangeControlled=function(t){n.setState({current:t})},n}return Object(o.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=E.a.rowStyle,e=E.a.colStyle,n=E.a.gutter;return u.a.createElement(g.default,null,u.a.createElement(f.default,null,u.a.createElement(x.a,{id:"uiElements.pagination.pagination"})),u.a.createElement(m.a,{style:t,gutter:n,justify:"start"},u.a.createElement(s.a,{md:12,sm:12,xs:24,style:e},u.a.createElement(p.default,{title:u.a.createElement(x.a,{id:"uiElements.pagination.basic"})},u.a.createElement(h.default,null,u.a.createElement(d.a,{defaultCurrent:1,total:50})))),u.a.createElement(s.a,{md:12,sm:12,xs:24,style:e},u.a.createElement(p.default,{title:u.a.createElement(x.a,{id:"uiElements.pagination.more"})},u.a.createElement(h.default,null,u.a.createElement(d.a,{defaultCurrent:6,total:500}))))),u.a.createElement(m.a,{style:t,gutter:n,justify:"start"},u.a.createElement(s.a,{md:12,sm:12,xs:24,style:e},u.a.createElement(p.default,{title:u.a.createElement(x.a,{id:"uiElements.pagination.changer"})},u.a.createElement(h.default,null,u.a.createElement(d.a,{showSizeChanger:!0,onShowSizeChange:this.onShowSizeChange,defaultCurrent:3,total:500})))),u.a.createElement(s.a,{md:12,sm:12,xs:24,style:e},u.a.createElement(p.default,{title:u.a.createElement(x.a,{id:"uiElements.pagination.jumper"})},u.a.createElement(h.default,null,u.a.createElement(d.a,{showQuickJumper:!0,defaultCurrent:2,total:500,onChange:this.onChange}))))),u.a.createElement(m.a,{style:t,gutter:n,justify:"start"},u.a.createElement(s.a,{md:12,sm:12,xs:24,style:e},u.a.createElement(p.default,{title:u.a.createElement(x.a,{id:"uiElements.pagination.miniSize"})},u.a.createElement(h.default,null,u.a.createElement(d.a,{size:"small",total:50}),u.a.createElement("br",null),u.a.createElement(d.a,{size:"small",total:50,showSizeChanger:!0,showQuickJumper:!0}),u.a.createElement("br",null),u.a.createElement(d.a,{size:"small",total:50,showTotal:this.showTotal})))),u.a.createElement(s.a,{md:12,sm:12,xs:24,style:e},u.a.createElement(p.default,{title:u.a.createElement(x.a,{id:"uiElements.pagination.simpleMode"})},u.a.createElement(h.default,null,u.a.createElement(d.a,{simple:!0,defaultCurrent:2,total:50}))))),u.a.createElement(m.a,{style:t,gutter:n,justify:"start"},u.a.createElement(s.a,{md:12,sm:12,xs:24,style:e},u.a.createElement(p.default,{title:u.a.createElement(x.a,{id:"uiElements.pagination.controlled"})},u.a.createElement(h.default,null,u.a.createElement(d.a,{current:this.state.current,onChange:this.onChangeControlled,total:50})))),u.a.createElement(s.a,{md:12,sm:12,xs:24,style:e},u.a.createElement(p.default,{title:u.a.createElement(x.a,{id:"uiElements.pagination.totalNumber"})},u.a.createElement(h.default,null,u.a.createElement(d.a,{total:85,showTotal:function(t){return"Total ".concat(t," items")},pageSize:20,defaultCurrent:1}),u.a.createElement("br",null),u.a.createElement(d.a,{total:85,showTotal:function(t,e){return"".concat(e[0],"-").concat(e[1]," of ").concat(t," items")},pageSize:20,defaultCurrent:1}))))))}}]),e}(c.Component)}}]);
//# sourceMappingURL=82.05f649b6.chunk.js.map