"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[73],{6073:function(n,e,t){t.r(e),t.d(e,{default:function(){return g}});var r,a,u,c,i=t(168),s=t(7686),o=s.Z.div(r||(r=(0,i.Z)(["\n\n"]))),p=s.Z.ul(a||(a=(0,i.Z)(["\ndisplay: flex;\nflex-wrap: wrap;\nlist-style: none;\njustify-content: space-between;\nalign-items: center;\ngap: 15px;\n"]))),f=s.Z.h3(u||(u=(0,i.Z)(["\ntext-align: center;\nfont-size: 20px;\nfont-weight: 600;\ncolor:#F5F6F8;\nmargin-bottom: 0;\nmargin-top: 0;\n"]))),l=s.Z.p(c||(c=(0,i.Z)(["\ntext-align: center;\nfont-size: 15px;\nfont-weight: 500;\ncolor:#F5F6F8;\n"]))),d=t(8866),h=t(1544),v=t(2040),x=t(184),g=function(){var n=(0,v.P4)(),e=n.error,t=n.loading,r=n.cast;return(0,x.jsxs)(o,{children:[t&&(0,x.jsx)(d.Z,{}),e&&(0,x.jsxs)(h.Bc,{children:["\u274c Something went wrong - ",e]}),r&&(0,x.jsx)(p,{children:r.length>0?r.map((function(n){return(0,x.jsxs)(h.HC,{children:[(0,x.jsx)(f,{children:n.name}),(0,x.jsxs)(l,{children:["Character: ",n.character]}),(0,x.jsx)("img",{src:n.profile_path?["https://image.tmdb.org/t/p/w500".concat(n.profile_path)]:"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:n.name,width:250})]},n.id)})):(0,x.jsx)("li",{children:(0,x.jsx)(h.Bc,{children:"We don't have information about cast"})})})]})}},8866:function(n,e,t){t(2791);var r=t(5682),a=t(184);e.Z=function(){return(0,a.jsx)("div",{style:{zIndex:"1000",position:"fixed",left:"45%",top:"44%"},children:(0,a.jsx)(r.p2,{height:"160",width:"160",color:"#4fa94d",ariaLabel:"circles-loading",wrapperStyle:{},wrapperClass:"",visible:!0})})}},1544:function(n,e,t){t.d(e,{Bc:function(){return h},Dx:function(){return d},HC:function(){return f},TF:function(){return l},aV:function(){return p}});var r,a,u,c,i,s=t(168),o=t(7686),p=o.Z.ul(r||(r=(0,s.Z)(["\npadding: 15px;\ndisplay: grid;\ngrid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\ngap: 15px;\nlist-style: none;\n"]))),f=o.Z.li(a||(a=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 26px;\nborder: 0.5px solid #424750;\nbackground: #282C30;\nbox-shadow: 4px 4px 20px 0px rgba(16, 16, 18, 0.75), -3px -3px 15px 0px #262E32;\npadding: 10px;\n"]))),l=o.Z.img(u||(u=(0,s.Z)(["\n border-radius: 26px;\n"]))),d=o.Z.h1(c||(c=(0,s.Z)(["\ncolor: #fff;\ntext-align: center;\nwidth: 250px;\nheight: 35px;\nfont-size: 15px;\nfont-weight: 700;\ntext-transform: uppercase;\nmargin-bottom: 0;\n"]))),h=o.Z.p(i||(i=(0,s.Z)(["\ncolor:#F5F6F8;\ntext-align: center;\n"])))},2040:function(n,e,t){t.d(e,{P4:function(){return d},a1:function(){return p},Cl:function(){return h},fN:function(){return l}});t(7806);var r=t(5861),a=t(9439),u=t(4687),c=t.n(u),i=t(2791),s=t(7689),o=t(4390),p=function(){var n=(0,s.UO)().movieId,e=(0,i.useState)(null),t=(0,a.Z)(e,2),u=t[0],p=t[1],f=(0,i.useState)(!1),l=(0,a.Z)(f,2),d=l[0],h=l[1],v=(0,i.useState)(null),x=(0,a.Z)(v,2),g=x[0],m=x[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,h(!0),e.next=6,(0,o.hG)(n);case 6:t=e.sent,p(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),m("something wrong(");case 13:return e.prev=13,h(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),{movies:u,loading:d,error:g}},f=t(1087),l=function(){var n=(0,f.lr)(),e=(0,a.Z)(n,2),t=e[0],u=e[1],s=(0,i.useState)(null),p=(0,a.Z)(s,2),l=p[0],d=p[1],h=(0,i.useState)(null),v=(0,a.Z)(h,2),x=v[0],g=v[1],m=(0,i.useState)(!1),Z=(0,a.Z)(m,2),w=Z[0],b=Z[1],k=t.get("query");return(0,i.useEffect)((function(){var n=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(k){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,b(!0),n.next=6,(0,o.XK)(k);case 6:e=n.sent,d(e.results),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),g("something wrong(");case 13:return n.prev=13,b(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[2,10,13,16]])})));return function(){return n.apply(this,arguments)}}();n()}),[k]),{search:l,error:x,loading:w,handleSubmit:function(n){u({query:n})}}},d=function(){var n=(0,i.useState)(null),e=(0,a.Z)(n,2),t=e[0],u=e[1],p=(0,i.useState)(!1),f=(0,a.Z)(p,2),l=f[0],d=f[1],h=(0,i.useState)(null),v=(0,a.Z)(h,2),x=v[0],g=v[1],m=(0,s.UO)().movieId;return(0,i.useEffect)((function(){var n=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(m){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,d(!0),n.next=6,(0,o.k8)(m);case 6:e=n.sent,g(e.cast),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),u("something wrong(");case 13:return n.prev=13,d(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[2,10,13,16]])})));return function(){return n.apply(this,arguments)}}();n()}),[m]),{error:t,loading:l,cast:x}},h=function(){var n=(0,i.useState)(null),e=(0,a.Z)(n,2),t=e[0],u=e[1],p=(0,i.useState)(!1),f=(0,a.Z)(p,2),l=f[0],d=f[1],h=(0,i.useState)([]),v=(0,a.Z)(h,2),x=v[0],g=v[1],m=(0,s.UO)().movieId;return(0,i.useEffect)((function(){var n=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(m){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,d(!0),n.next=6,(0,o.oV)(m);case 6:e=n.sent,g(e.results),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),u("something wrong(");case 13:return n.prev=13,d(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[2,10,13,16]])})));return function(){return n.apply(this,arguments)}}();n()}),[m]),{error:t,loading:l,reviews:x}}},7806:function(n,e,t){t.d(e,{F:function(){return o}});var r=t(5861),a=t(9439),u=t(4687),c=t.n(u),i=t(2791),s=t(4390),o=function(){var n=(0,i.useState)([]),e=(0,a.Z)(n,2),t=e[0],u=e[1],o=(0,i.useState)(null),p=(0,a.Z)(o,2),f=p[0],l=p[1],d=(0,i.useState)(!1),h=(0,a.Z)(d,2),v=h[0],x=h[1];return(0,i.useEffect)((function(){var n=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,x(!0),n.next=4,(0,s.Tg)();case 4:e=n.sent,u(e.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),l("something wrong(");case 11:return n.prev=11,x(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),{movies:t,error:f,loading:v}}},4390:function(n,e,t){t.d(e,{Tg:function(){return s},XK:function(){return o},hG:function(){return p},k8:function(){return f},oV:function(){return l}});var r=t(5861),a=t(4687),u=t.n(a),c=t(5294);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="4eede4a470802f6f0ed7ee55539b1602",s=function(){var n=(0,r.Z)(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(i));case 2:return n.abrupt("return",n.sent.data);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(u().mark((function n(e){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(i,"&query=").concat(e,"&include_adult=false"));case 2:return n.abrupt("return",n.sent.data);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(i));case 2:return n.abrupt("return",n.sent.data);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(i));case 2:return n.abrupt("return",n.sent.data);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(e){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=").concat(i));case 2:return n.abrupt("return",n.sent.data);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=73.b4f700b6.chunk.js.map