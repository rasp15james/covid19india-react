/*! For license information please see 18.5354ea1f.chunk.js.LICENSE.txt */
(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[18],{106:function(e,t,n){"use strict";var r=n(2),i=n(83),a=i.a?r.useLayoutEffect:r.useEffect,c={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};t.a=i.a&&"undefined"!==typeof window.ResizeObserver?function(){var e=Object(r.useState)(null),t=e[0],n=e[1],i=Object(r.useState)(c),s=i[0],o=i[1],u=Object(r.useMemo)((function(){return new window.ResizeObserver((function(e){if(e[0]){var t=e[0].contentRect,n=t.x,r=t.y,i=t.width,a=t.height,c=t.top,s=t.left,u=t.bottom,l=t.right;o({x:n,y:r,width:i,height:a,top:c,left:s,bottom:u,right:l})}}))}),[]);return a((function(){if(t)return u.observe(t),function(){u.disconnect()}}),[t]),[n,s]}:function(){return[i.b,c]}},111:function(e,t,n){"use strict";var r=n(82),i=n(2),a={root:null,rootMargin:"0px 0px 0px 0px",threshold:0};t.a=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),c=n[0],s=n[1];return Object(i.useEffect)((function(){e.current&&new IntersectionObserver((function(t,n){t.forEach((function(t){t.isIntersecting&&(s(!0),n.unobserve(e.current))}))}),a).observe(e.current)}),[e]),c}},141:function(e,t,n){"use strict";var r=n(2);t.a=function(e,t){var n=function(){var e=Object(r.useRef)(!0);return e.current?(e.current=!1,!0):e.current}();Object(r.useEffect)((function(){if(!n)return e()}),t)}},156:function(e,t,n){"use strict";var r=n(105),i=n(82),a=n(101),c=n(106),s=n(18);t.a=function(){var e=Object(c.a)(),t=Object(i.a)(e,2),n=t[0],o=t[1].width,u=window.innerWidth;o=o||(u>=769?528:u),u<769&&(o-=30);return Object(s.jsx)("div",{ref:n,className:"TableLoader",children:Object(s.jsx)(a.a,{viewBox:"0 0 ".concat(o," ").concat(900),height:900,width:o,speed:2,animate:!1,children:Object(r.a)(Array(20).keys()).map((function(e){return Object(s.jsx)("rect",{x:"0",y:45*e,rx:"3",ry:"3",width:o,height:40},e)}))})})}},196:function(e,t,n){"use strict";var r=n(2),i=n(83);t.a=function(e,t,n){if(!i.a)return[t,i.b,i.b];if(!e)throw new Error("useLocalStorage key may not be falsy");var a=n?n.raw?function(e){return e}:n.deserializer:JSON.parse,c=Object(r.useRef)((function(e){try{var r=n?n.raw?String:n.serializer:JSON.stringify,i=localStorage.getItem(e);return null!==i?a(i):(t&&localStorage.setItem(e,r(t)),t)}catch(s){return t}})),s=Object(r.useState)((function(){return c.current(e)})),o=s[0],u=s[1];Object(r.useLayoutEffect)((function(){return u(c.current(e))}),[e]);var l=Object(r.useCallback)((function(t){try{var r="function"===typeof t?t(o):t;if("undefined"===typeof r)return;var i=void 0;i=n?n.raw?"string"===typeof r?r:JSON.stringify(r):n.serializer?n.serializer(r):JSON.stringify(r):JSON.stringify(r),localStorage.setItem(e,i),u(a(i))}catch(s){}}),[e,u]),b=Object(r.useCallback)((function(){try{localStorage.removeItem(e),u(void 0)}catch(s){}}),[e,u]);return[o,l,b]}},197:function(e,t,n){"use strict";var r=n(2),i=n(83);t.a=function(e,t,n){if(!i.a)return[t,function(){}];var a=Object(r.useState)((function(){try{var r=sessionStorage.getItem(e);return"string"!==typeof r?(sessionStorage.setItem(e,n?String(t):JSON.stringify(t)),t):n?r:JSON.parse(r||"null")}catch(a){return t}})),c=a[0],s=a[1];return Object(r.useEffect)((function(){try{var t=n?String(c):JSON.stringify(c);sessionStorage.setItem(e,t)}catch(a){}})),[c,s]}},198:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(1),i=n(0);function a(e){var t,n;if(Object(i.a)(1,arguments),e&&"function"===typeof e.forEach)t=e;else{if("object"!==typeof e||null===e)return new Date(NaN);t=Array.prototype.slice.call(e)}return t.forEach((function(e){var t=Object(r.a)(e);(void 0===n||n<t||isNaN(Number(t)))&&(n=t)})),n||new Date(NaN)}},285:function(e,t,n){"use strict";n.r(t);var r=n(82),i=n(156),a=n(7),c=n(111),s=n(97);function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=n(94),l=n(2),b=n(141),j=n(104),d=["data","isValidating","error"];var f=function(e,t,n){for(var i=Object(l.useState)(n),a=Object(r.a)(i,2),c=a[0],f=a[1],O=arguments.length,h=new Array(O>3?O-3:0),v=3;v<O;v++)h[v-3]=arguments[v];var p=j.a.apply(void 0,[e,t,c].concat(h)),g=p.data,x=p.isValidating,y=p.error,m=o(p,d);return Object(b.a)((function(){f(Object(u.a)(c,(function(e){e.initialData=g})))}),[g]),Object(s.a)(Object(s.a)({},m),{},{isValidating:x,error:y,data:g})},O=n(22),h=n(85),v=n.n(h),p=n(62),g=n(198),x=n(130),y=n(5),m=n(196),S=n(197),T=n(286),w=n(18),N=Object(l.lazy)((function(){return Object(O.l)((function(){return Promise.all([n.e(0),n.e(37),n.e(38)]).then(n.bind(null,295))}))})),k=Object(l.lazy)((function(){return Object(O.l)((function(){return n.e(10).then(n.bind(null,175))}))})),z=Object(l.lazy)((function(){return Object(O.l)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,251))}))})),I=Object(l.lazy)((function(){return Object(O.l)((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,252))}))})),E=Object(l.lazy)((function(){return Object(O.l)((function(){return Promise.all([n.e(0),n.e(28)]).then(n.bind(null,229))}))})),C=Object(l.lazy)((function(){return Object(O.l)((function(){return n.e(40).then(n.bind(null,199))}))})),D=Object(l.lazy)((function(){return Object(O.l)((function(){return Promise.all([n.e(1),n.e(2),n.e(34)]).then(n.bind(null,200))}))})),H=Object(l.lazy)((function(){return Object(O.l)((function(){return n.e(35).then(n.bind(null,283))}))})),J=Object(l.lazy)((function(){return Object(O.l)((function(){return n.e(7).then(n.bind(null,296))}))})),P=Object(l.lazy)((function(){return Object(O.l)((function(){return Promise.all([n.e(0),n.e(5),n.e(16)]).then(n.bind(null,297))}))})),R=Object(l.lazy)((function(){return Object(O.l)((function(){return Promise.all([n.e(0),n.e(31)]).then(n.bind(null,230))}))}));t.default=function(){var e,t,n=Object(l.useState)({stateCode:"TT",districtName:null}),s=Object(r.a)(n,2),o=s[0],u=s[1],b=Object(m.a)("anchor",null),j=Object(r.a)(b,2),d=j[0],h=j[1],M=Object(m.a)("expandTable",!1),A=Object(r.a)(M,2),L=A[0],V=A[1],F=Object(S.a)("mapStatistic","active"),U=Object(r.a)(F,2),_=U[0],B=U[1],W=Object(l.useState)(""),q=Object(r.a)(W,2),G=q[0],K=q[1],Q=Object(y.h)(),X=f("".concat(a.d,"/timeseries.min.json"),O.b,{revalidateOnMount:!0,refreshInterval:1e5}).data,Y=f("".concat(a.d,"/data").concat(G?"-".concat(G):"",".min.json"),O.b,{revalidateOnMount:!0,refreshInterval:1e5}).data,Z=Object(l.useRef)(),$=Object(c.a)(Z),ee=Object(T.a)().width,te=""!==G&&G<a.f,ne=0===Object(O.h)(null===Y||void 0===Y?void 0:Y.TT,"total","vaccinated"),re=Object(l.useMemo)((function(){var e,t,n,r,i;if(!Y)return null;var a=[(null===(e=Y.TT)||void 0===e||null===(t=e.meta)||void 0===t?void 0:t.last_updated)||G,null===(n=Y.TT)||void 0===n||null===(r=n.meta)||void 0===r||null===(i=r.tested)||void 0===i?void 0:i.last_updated];return Object(p.a)(Object(g.a)(a.filter((function(e){return e})).map((function(e){return Object(O.k)(e)}))),{representation:"date"})}),[Y,G]);return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(x.a,{children:[Object(w.jsx)("title",{children:"Coronavirus Outbreak in India - covid19india.org"}),Object(w.jsx)("meta",{name:"title",content:"Coronavirus Outbreak in India: Latest Map and Case Count"})]}),Object(w.jsxs)("div",{className:"Home",children:[Object(w.jsxs)("div",{className:v()("home-left",{expanded:L}),children:[Object(w.jsxs)("div",{className:"header",children:[Object(w.jsx)(l.Suspense,{fallback:Object(w.jsx)("div",{}),children:Object(w.jsx)(H,{})}),!Y&&!X&&Object(w.jsx)("div",{style:{height:"60rem"}}),Object(w.jsxs)(w.Fragment,{children:[!X&&Object(w.jsx)("div",{style:{minHeight:"61px"}}),X&&Object(w.jsx)(l.Suspense,{fallback:Object(w.jsx)("div",{style:{minHeight:"61px"}}),children:Object(w.jsx)(N,{date:G,setDate:K,dates:Object.keys(null===(e=X.TT)||void 0===e?void 0:e.dates)})})]})]}),Object(w.jsxs)("div",{style:{position:"relative",marginTop:"1rem"},children:[Y&&Object(w.jsxs)(l.Suspense,{fallback:Object(w.jsx)("div",{style:{height:"50rem"}}),children:[ee>=769&&!L&&Object(w.jsx)(C,{mapStatistic:_,setMapStatistic:B}),Object(w.jsx)(z,{data:Y.TT})]}),Object(w.jsxs)(w.Fragment,{children:[!X&&Object(w.jsx)("div",{style:{height:"107px"}}),X&&Object(w.jsx)(l.Suspense,{fallback:Object(w.jsx)("div",{style:{height:"107px"}}),children:Object(w.jsx)(D,{timeseries:null===(t=X.TT)||void 0===t?void 0:t.dates,date:G})})]})]}),!ne&&Object(w.jsx)(I,{data:Y.TT}),Y&&Object(w.jsx)(l.Suspense,{fallback:Object(w.jsx)(i.a,{}),children:Object(w.jsx)(P,{data:Y,regionHighlighted:o,setRegionHighlighted:u,expandTable:L,setExpandTable:V,hideDistrictData:te,hideVaccinated:ne,lastUpdatedDate:re})})]}),Object(w.jsx)("div",{className:v()("home-right",{expanded:L}),ref:Z,style:{minHeight:"2rem"},children:($||Q.hash)&&Object(w.jsxs)(w.Fragment,{children:[Y&&Object(w.jsx)("div",{className:v()("map-container",{expanded:L,stickied:"mapexplorer"===d||L&&ee>=769}),children:Object(w.jsxs)(l.Suspense,{fallback:Object(w.jsx)("div",{style:{height:"50rem"}}),children:[Object(w.jsx)(J,{data:Y.TT,stateCode:"TT"}),Object(w.jsx)(E,{stateCode:"TT",data:Y,mapStatistic:_,setMapStatistic:B,regionHighlighted:o,setRegionHighlighted:u,anchor:d,setAnchor:h,expandTable:L,hideDistrictData:te,lastUpdatedDate:re})]})}),X&&Object(w.jsx)(l.Suspense,{fallback:Object(w.jsx)("div",{style:{height:"50rem"}}),children:Object(w.jsx)(R,{stateCode:"TT",timeseries:X,date:G,regionHighlighted:o,setRegionHighlighted:u,anchor:d,setAnchor:h,expandTable:L,hideVaccinated:ne})})]})})]}),$&&Object(w.jsx)(l.Suspense,{fallback:Object(w.jsx)("div",{}),children:Object(w.jsx)(k,{})})]})}},85:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var c=i.apply(null,r);c&&e.push(c)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var s in r)n.call(r,s)&&r[s]&&e.push(s);else e.push(r.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()}}]);
//# sourceMappingURL=18.5354ea1f.chunk.js.map