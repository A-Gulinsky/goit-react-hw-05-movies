"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[691],{691:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r,a,i,o=n(433),c=n(861),u=n(439),s=n(687),p=n.n(s),l=n(791),f=n(285),d=n(87),h=n(689),m=n(168),g=n(686),v=g.Z.div(r||(r=(0,m.Z)(["\n  padding-left: 20px;\n"]))),x=g.Z.ul(a||(a=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n\n  margin-top: 30px;\n"]))),k=(0,g.Z)(d.rU)(i||(i=(0,m.Z)(["\n  font-size: 18px;\n  font-weight: 600;\n  \n  text-decoration: none;\n  color: #363434;\n\n  &:hover {\n    color: #5d6f85;\n  }\n\n"]))),j=n(270),Z=n(184),y=function(){var e,t=(0,d.lr)(),n=(0,u.Z)(t,2),r=n[0],a=n[1],i=(0,l.useState)([]),s=(0,u.Z)(i,2),m=s[0],g=s[1],y=(0,h.TH)(),b=null!==(e=r.get("query"))&&void 0!==e?e:"";return(0,l.useEffect)((function(){function e(){return(e=(0,c.Z)(p().mark((function e(){var t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.gH)(b);case 3:t=e.sent,g((0,o.Z)(t.results)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}b&&function(){e.apply(this,arguments)}()}),[b]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(j.q,{children:[(0,Z.jsx)("title",{children:"Title | Movie Page"}),(0,Z.jsx)("meta",{property:"og:url",content:"https://a-gulinsky.github.io/goit-react-hw-05-movies/movies"}),(0,Z.jsx)("meta",{property:"og:title",content:"Title | Movie Page"}),(0,Z.jsx)("meta",{property:"og:site_name",content:"Movies"}),(0,Z.jsx)("meta",{property:"og:type",content:"article"}),(0,Z.jsx)("meta",{property:"og:description",content:"Description: Best Movie in Ukraine 2. Best Movie in Ukraine 3. Best Movie in Ukraine"}),(0,Z.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,Z.jsx)("meta",{property:"og:image",content:"https://img.freepik.com/free-photo/fresh-natural-green-schefflera-arboricola-background_53876-153311.jpg?w=996&t=st=1701474143~exp=1701474743~hmac=50682caf3fdfd630dff9ea401437b10bd57f30234e16b1f53a14a718a5ea0498"}),(0,Z.jsx)("meta",{name:"description",content:"Description: Best Movie in Ukraine 2. Best Movie in Ukraine 3. Best Movie in Ukraine"})]}),(0,Z.jsxs)(v,{children:[(0,Z.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!e.target.elements.input.value)return a({});a({query:e.target.elements.input.value})},children:[(0,Z.jsx)("input",{type:"text",name:"input"}),(0,Z.jsx)("button",{type:"submit",children:"Search"})]}),(0,Z.jsx)(x,{children:m.map((function(e){return(0,Z.jsx)("li",{children:(0,Z.jsx)(k,{to:"/movies/".concat(e.id),state:{from:y},children:e.title})},e.id)}))})]})]})}},285:function(e,t,n){n.d(t,{Hg:function(){return u},d0:function(){return s},gH:function(){return l},kq:function(){return p}});var r=n(861),a=n(687),i=n.n(a),o=n(243);o.Z.defaults.baseURL="https://api.themoviedb.org/3";var c={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDA3OWJhZDEwZWQxODQ1M2Y2MjZkNWFlYTk4YWI3NCIsInN1YiI6IjY0ZTBiNjBkYWFlYzcxMDNmOTk4MDA4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cZ71jAC2kXZRjWif2pQkTYjmwqMcqAvb4d3kK3-HrX8"}},u=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/trending/all/day?language=en-US",c);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/movie/".concat(t,"?language=en-US"),c);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(t,n){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/movie/".concat(t,"/").concat(n,"?language=en-US"),c);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1"),c);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=691.fb56b498.chunk.js.map