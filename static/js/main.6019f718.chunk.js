(this.webpackJsonpplnd_test=this.webpackJsonpplnd_test||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(4),s=n.n(r),i=(n(13),n(5)),o=n(6),u=n(8),l=n(7),d=(n(14),n(15),n(0)),j=function(){return Object(d.jsx)("header",{children:Object(d.jsxs)("div",{className:"header_box",children:[Object(d.jsx)("p",{className:"header_text_1"}),Object(d.jsx)("p",{className:"header_text_2"})]})})},h=n(3),b=(n(17),n(18),function(e){var t=e.card,n=t.title,c=t.description,a=t.imagePath;return Object(d.jsxs)("div",{className:"card_box",children:[Object(d.jsx)("h1",{children:n}),Object(d.jsx)("p",{children:c}),Object(d.jsx)("img",{className:"img",src:a,alt:"description"})]})}),f=(n(19),function(e){for(var t=e.totalAmountCards,n=e.cardsPerPage,c=e.pagination,a=e.text,r=[],s=1;s<=Math.ceil(t/n);s++)r.push(s);return Object(d.jsxs)("div",{className:"paginate_box",children:[Object(d.jsxs)("span",{className:"paginate_text",children:["Page ",a," out 5"]}),r.map((function(e,t){return Object(d.jsx)("button",{className:"btn_style",onClick:function(t){return c(e)},children:e},t)}))]})}),p=function(e){var t=Object(c.useState)(1),n=Object(h.a)(t,2),r=n[0],s=n[1],i=Object(c.useState)(4),o=Object(h.a)(i,1)[0],u=r*o,l=u-o,j=r;return Object(d.jsxs)(a.a.Fragment,{children:[Object(d.jsx)(f,{totalAmountCards:e.cards.length,cardsPerPage:o,pagination:function(e){return s(e)},text:j}),Object(d.jsx)("div",{className:"card-style",children:e.cards.slice(l,u).map((function(e,t){return Object(d.jsx)(b,{card:e},t)}))})]})},x=(n(20),function(e){var t=e.placeholder,n=e.changeEvent;return Object(d.jsx)("div",{className:"search_box",children:Object(d.jsx)("input",{className:"search_field",type:"search",placeholder:t,onChange:n})})}),O=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={cards:[],search:""},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.npoint.io/7a132490453b8bfdcc9f").then((function(e){return e.json()})).then((function(t){return e.setState({cards:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.cards,c=t.search,a=n.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())}));return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(j,{}),Object(d.jsx)(x,{placeholder:"search after title my dear",changeEvent:function(t){return e.setState({search:t.target.value})}}),Object(d.jsx)(p,{cards:a})]})}}]),n}(c.Component),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),m()}],[[21,1,2]]]);
//# sourceMappingURL=main.6019f718.chunk.js.map