"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[641],{7984:function(n,e,t){t.d(e,{Z:function(){return i}});var r=t(184),i=function(){return(0,r.jsx)("div",{className:"error__text",children:"Ooops. Something went wrong;("})}},2343:function(n,e,t){t.d(e,{Z:function(){return i}});var r=t(184),i=function(n){return(0,r.jsx)("section",{className:"section",children:(0,r.jsx)("div",{className:"container",children:n.children})})}},6641:function(n,e,t){t.r(e),t.d(e,{default:function(){return x}});var r=t(9439),i=t(7737),a=t(2791),c=t(1087),s=t(7689),u=t(9128),o=t(2822),l=t(7984),f=t(2343),p=t(184),d="idle",h="pending",v="resolved",m="rejected",x=function(){var n=(0,a.useState)(""),e=(0,r.Z)(n,2),t=e[0],x=e[1],j=(0,a.useState)(d),_=(0,r.Z)(j,2),g=_[0],w=_[1],k=(0,s.UO)().movieId,b=(0,s.TH)(),Z=(0,s.s0)();(0,a.useEffect)((function(){w(h),i.Bg(k).then((function(n){x(n),w(v)})).catch((function(n){console.log(n),w(m)}))}),[k]);var y=function(n){n.preventDefault(),Z(null!==-1?-1:"/")},N=t.overview,C=t.poster_path,O=t.release_date,S=t.title,A=t.genres,L=A&&A.map((function(n){return n.name})).join(", "),T=O&&O.slice(0,4);return g===h?(0,p.jsx)(o.Z,{}):g===m?(0,p.jsxs)(f.Z,{children:[(0,p.jsx)("button",{className:"movie-details__btn",onClick:y,children:(0,p.jsx)(u.jTe,{})}),(0,p.jsx)(l.Z,{})]}):g===v?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(f.Z,{children:[(0,p.jsx)("button",{type:"button",className:"movie-details__btn",onClick:y,children:(0,p.jsx)(u.jTe,{})}),(0,p.jsx)("div",{className:"movie-details__poster",children:(0,p.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500/").concat(C),alt:S})}),(0,p.jsxs)("div",{className:"movie-details__content",children:[(0,p.jsx)("h2",{children:"".concat(S," (").concat(T,")")}),(0,p.jsx)("h3",{children:"Overview: "}),(0,p.jsx)("p",{children:N}),(0,p.jsx)("h3",{children:"Genres: "}),(0,p.jsx)("p",{children:L})]})]}),(0,p.jsxs)(f.Z,{children:[(0,p.jsx)("h2",{className:"aditional__title",children:"Aditional information"}),(0,p.jsxs)("ul",{className:"navigation__list",children:[(0,p.jsx)("li",{className:"navigation__item",children:(0,p.jsx)(c.OL,{to:"/movies/".concat(k,"/reviews"),className:function(n){return n.isActive?"navigation__link--active":"navigation__link"},state:{from:b},children:"Reviews"})}),(0,p.jsx)("li",{className:"navigation__item",children:(0,p.jsx)(c.OL,{to:"/movies/".concat(k,"/cast"),className:function(n){return n.isActive?"navigation__link--active":"navigation__link"},state:{from:b},children:"Cast"})})]}),(0,p.jsx)("hr",{}),(0,p.jsx)(a.Suspense,{fallback:(0,p.jsx)(o.Z,{}),children:(0,p.jsx)(s.j3,{})})]})]}):void 0}},7737:function(n,e,t){t.d(e,{Bg:function(){return f},Hx:function(){return v},qF:function(){return o},wr:function(){return s},xc:function(){return d}});var r=t(5861),i=t(7757),a=t.n(i),c=t(3263).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"e38902030017580fbfa1d8a473a3610b",language:"en-US"}});function s(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("trending/all/day").then((function(n){return n.data}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function o(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/search/movie?query=".concat(e,"&page=1")).then((function(n){return n.data}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function n(e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("movie/".concat(e,"?")).then((function(n){return n.data}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function n(e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("movie/".concat(e,"/credits?")).then((function(n){return n.data.cast}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function n(e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("movie/".concat(e,"/reviews?")).then((function(n){return n.data.results}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=641.567128cb.chunk.js.map