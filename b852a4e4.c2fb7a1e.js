(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{81:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(2),a=t(6),o=(t(0),t(96)),i={id:"config",title:"resume -> config:",sidebar_label:"config"},c={unversionedId:"resume_schema/config",id:"resume_schema/config",isDocsHomePage:!1,title:"resume -> config:",description:"In addition to the fields that are available to render website, there is an additional meta scalar available as part of theme's collection to control the layout of the r&eacute;sum&eacute;",source:"@site/docs/resume_schema/config.md",slug:"/resume_schema/config",permalink:"/profileio/docs/resume_schema/config",editUrl:"https://github.com/acrlakshman/profileio/edit/master/docs/docs/resume_schema/config.md",version:"current",sidebar_label:"config",sidebar:"docs",previous:{title:"Schema for resume",permalink:"/profileio/docs/resume_schema/overview"},next:{title:"resume -> basics:",permalink:"/profileio/docs/resume_schema/basics"}},l=[],s={rightToc:l};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In addition to the fields that are available to render website, there is an additional ",Object(o.b)("inlineCode",{parentName:"p"},"meta")," scalar available as part of ",Object(o.b)("inlineCode",{parentName:"p"},"theme"),"'s collection to control the layout of the r","\xe9","sum","\xe9"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Available themes")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"basic")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"panther"))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'config:\n   # optional\n   homepage: "https://profileio.lakshmananumolu.com"\n\n   # required\n   theme:\n      value: panther\n      render: true\n      # optional\n      meta:\n         # Toggle page numbers in the resume\n         showPageNumbers: true\n         # Toggle lines under section headers. Not being used by all themes.\n         hideSectionLines: false\n         # Control the size of the name\n         pantherHeaderNameFontSize: 45\n         # Control the size of the width where name is displayed in panther\'s theme\n         pantherHeaderColumnOneWidth: 0.6\n         # Control the size of the width where email, url, phone number are displayed in panther\'s theme\n         pantherHeaderColumnTwoWidth: 0.4\n\n   # optional\n   analytics:\n      ga:\n      trackingId: ""\n      enable: true\n\n   # optional\n   meta:\n      showResumeLink: true\n')))}u.isMDXComponent=!0},96:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,b=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return t?a.a.createElement(b,c(c({ref:n},s),{},{components:t})):a.a.createElement(b,c({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);