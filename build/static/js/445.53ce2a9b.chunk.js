"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[445],{9445:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(2982),a=n(885),u=n(2791),o=n(501),i=n(1207),c="MoviesPage_SearchForm__n4Ih9",s="MoviesPage_SearchForm_button__o13Jm",f="MoviesPage_SearchForm_input__go+a6",p=n(184),l=function(){var e=(0,u.useState)(""),t=(0,a.Z)(e,2),n=t[0],l=t[1],h=(0,u.useState)(""),d=(0,a.Z)(h,2),m=d[0],v=d[1],g=(0,u.useState)(null),_=(0,a.Z)(g,2),y=_[0],b=_[1],S=(0,o.lr)({}),x=(0,a.Z)(S,2),w=(x[0],x[1]);(0,u.useEffect)((function(){""!==n&&(w({query:n}),(0,i.qF)(n).then((function(e){b((0,r.Z)(e.data.results))})))}),[n]);return(0,p.jsxs)("div",{children:[(0,p.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===m.trim())return alert("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u043e\u0448\u0443\u043a\u043e\u0432\u0438\u0439 \u0437\u0430\u043f\u0438\u0442!");l(m),v("")},className:c,children:[(0,p.jsx)("input",{className:f,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",value:m,onChange:function(e){v(e.currentTarget.value.toLowerCase())}}),(0,p.jsx)("button",{type:"submit",className:s,children:"Search"})]}),y&&y.length>0&&(0,p.jsx)("ul",{children:y.map((function(e){return(0,p.jsx)("li",{children:(0,p.jsx)(o.rU,{to:"/movies/".concat(e.id),children:e.title||e.name})},e.id)}))}),y&&0===y.length&&(0,p.jsx)("p",{children:"Nothing found for your request"})]})}},1207:function(e,t,n){n.d(t,{Cm:function(){return h},IH:function(){return l},fO:function(){return s},hG:function(){return p},qF:function(){return f}});var r=n(5861),a=n(7757),u=n.n(a),o=n(4569),i=n.n(o),c="2c5437e569f333c04d8e63042c43c49b",s=function(){return i().get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(c))},f=function(e){return i().get("https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"))},p=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("\nhttps://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(c,"&language=en-US"));case 2:return n=e.sent,{},r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return n=e.sent,{},r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return n=e.sent,r=[],n.data.results.map((function(e){r.push(e)})),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},2982:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(907);var a=n(181);function u(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,a.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=445.53ce2a9b.chunk.js.map