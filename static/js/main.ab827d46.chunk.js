(this["webpackJsonpedward-matthews.github.io"]=this["webpackJsonpedward-matthews.github.io"]||[]).push([[2],{135:function(e,t,n){},169:function(e,t){},170:function(e,t,n){var c={"./higher-order-functions-in-javascript.mdx":171,"./post-template.mdx":172};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}a.keys=function(){return Object.keys(c)},a.resolve=s,e.exports=a,a.id=170},171:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/higher-order-functions-in-javascript.477be617.mdx"},172:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/post-template.11473911.mdx"},173:function(e,t,n){var c={"./higher-order-functions-in-javascript.mdx":[129,0],"./post-template.mdx":[130,1]};function a(e){if(!n.o(c,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=c[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(c)},a.id=173,e.exports=a},174:function(e,t,n){var c={"./higher-order-functions-in-javascript.mdx":[129,0],"./post-template.mdx":[130,1]};function a(e){if(!n.o(c,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=c[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(c)},a.id=174,e.exports=a},176:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(32),r=n.n(s),i=(n(135),n(31)),o=n(9),l=n(87),d=n(55),j=n(1),u=function(e){var t=e.modalControl,n=e.menuShift,a=function(){var e,t=null===(e=document.getElementById("header"))||void 0===e?void 0:e.scrollHeight;t&&(window.scrollY>=t&&n(!0),window.scrollY<t&&n(!1))};return Object(c.useEffect)((function(){window.addEventListener("scroll",a)}),[]),Object(j.jsxs)("div",{onScroll:a,children:[Object(j.jsx)("header",{id:"header",children:Object(j.jsx)(i.b,{to:"/",children:Object(j.jsxs)("picture",{children:[Object(j.jsx)("source",{srcSet:"/images/logo.webp",type:"image/webp"}),Object(j.jsx)("img",{src:"/images/logo.png",alt:"A logo resembling a Japanese inkan stamp with the name \u3048\u3069"})]})})}),Object(j.jsxs)(l.a,{collapseOnSelect:!0,expand:"sm",variant:"dark",children:[Object(j.jsx)(l.a.Toggle,{onClick:function(){var e=document.getElementById("contentDiv");null===e||void 0===e||e.classList.toggle("moved")},"aria-controls":"responsive-navbar-nav"}),Object(j.jsx)(l.a.Collapse,{id:"responsive-navbar-nav",children:Object(j.jsxs)(d.a,{className:"mx-auto",children:[Object(j.jsxs)(d.a.Link,{href:"/",children:[Object(j.jsx)("i",{className:"bi bi-house"})," Home"]}),Object(j.jsxs)(d.a.Link,{href:"/portfolio",children:[Object(j.jsx)("i",{className:"bi bi-journal-code"})," Portfolio"]}),Object(j.jsxs)(d.a.Link,{href:"/articles",children:[Object(j.jsx)("i",{className:"bi bi-pen"})," Articles"]}),Object(j.jsxs)(d.a.Link,{onClick:function(){return t(!0)},children:[Object(j.jsx)("i",{className:"bi bi-chat-text"})," Contact"]})]})})]})]})},b=n(119),h=function(e){var t=e.icon,n=e.clickHandler,c=e.pos,a=e.label,s=e.expand;return Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:"floating-label",style:{bottom:"calc(26px + ".concat(c," * 60px)")},children:a}),Object(j.jsx)("button",{className:"floating-button floating-moving-button",onClick:function(){return[n(),s&&s(!1)]},style:{bottom:"calc(20px + ".concat(c," * 60px)")},children:Object(j.jsx)("i",{className:"bi ".concat(t)})})]})},m=n(12),O=function(e){var t=e.expand,n=e.modalControl,c=Object(m.g)(),a=function(e){return function(){c.push(e)}};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(h,{icon:"bi-chat-text",clickHandler:function(){return n(!0)},pos:1,label:"Contact"}),Object(j.jsx)(h,{icon:"bi-pen",clickHandler:a("/articles"),pos:2,label:"Articles",expand:t}),Object(j.jsx)(h,{icon:"bi-journal-code",clickHandler:a("/portfolio"),pos:3,label:"Portfolio",expand:t}),Object(j.jsx)(h,{icon:"bi-house",clickHandler:a("/"),pos:4,label:"Home",expand:t})]})},x=function(e){var t=e.modalControl,n=e.buttonVisibility,a=Object(c.useState)(!1),s=Object(o.a)(a,2),r=s[0],i=s[1];return Object(c.useEffect)((function(){window.addEventListener("scroll",(function(){return i(!1)}))}),[]),Object(j.jsxs)(j.Fragment,{children:[n&&Object(j.jsx)("button",{className:"floating-button",onClick:function(){return i(!r)},children:r?Object(j.jsx)("i",{className:"bi bi-dash",style:{bottom:"0px"}}):Object(j.jsx)("i",{className:"bi bi-plus",style:{bottom:"0px"}})}),r&&Object(j.jsx)(O,{expand:i,modalControl:t})]})},p=n(54),f=n(4),g=n.n(f),w=n(8),v=n(35),y=n(60),k=n(40),N=function(e){var t=e.setDisplayContactForm,n=e.setResponse,a=Object(c.useState)(""),s=Object(o.a)(a,2),r=s[0],i=s[1],l=Object(c.useState)(""),d=Object(o.a)(l,2),u=d[0],b=d[1],h=Object(c.useState)(""),m=Object(o.a)(h,2),O=m[0],x=m[1],p=Object(c.useState)(!1),f=Object(o.a)(p,2),N=f[0],S=f[1];function C(){return E.apply(this,arguments)}function E(){return(E=Object(w.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://script.google.com/macros/s/AKfycbxz6_KfLFeEtI5NKcJ5G72XGjttAi_2XE_kaisbulNRM9KIxAAxRSew1GNy6GiXyEI/exec",t="?name=".concat(r,"&message=").concat(u,"&email=").concat(O),e.next=4,fetch("https://script.google.com/macros/s/AKfycbxz6_KfLFeEtI5NKcJ5G72XGjttAi_2XE_kaisbulNRM9KIxAAxRSew1GNy6GiXyEI/exec"+t,{method:"POST"});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(j.jsxs)(v.a,{children:[Object(j.jsx)(v.a.Group,{className:"mb-3",children:Object(j.jsx)(k.a,{controlId:"floatingInput",label:"Name",className:"mb-3",children:Object(j.jsx)(v.a.Control,{type:"text",onChange:function(e){return i(e.target.value)}})})}),Object(j.jsx)(v.a.Group,{className:"mb-3",children:Object(j.jsx)(k.a,{controlId:"floatingTextarea2",label:"Message",children:Object(j.jsx)(v.a.Control,{as:"textarea",style:{height:"100px"},onChange:function(e){return b(e.target.value)}})})}),Object(j.jsx)(v.a.Group,{className:"mb-3",children:Object(j.jsx)(k.a,{controlId:"floatingInput",label:"Email address",className:"mb-3",children:Object(j.jsx)(v.a.Control,{type:"email",onChange:function(e){return x(e.target.value)}})})}),Object(j.jsx)("span",{onClick:function(){return t(!1)},onMouseEnter:function(){return S(!0)},onMouseLeave:function(){return S(!1)},children:Object(j.jsx)("i",{className:"bi bi-arrow-return-left unusual-link"})}),N&&Object(j.jsx)("span",{children:' Won\'t you at least say "Hi"?'}),Object(j.jsx)(y.a,{variant:"primary",className:"float-end",size:"lg",onClick:function(){return[C(),n("Thanks for reaching out!"),t(!1)]},children:"Send"})]})},S=n(117),C=function(e){var t=e.response,n=e.setDisplayContactForm;function c(e){window.location.href=e}return Object(j.jsx)(S.a,{borderless:!0,hover:!0,children:Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{onClick:function(){return n(!0)},style:{textDecorationColor:"red"},className:"unusual-link",children:[Object(j.jsx)("td",{children:Object(j.jsx)("i",{className:"bi bi-envelope-fill"})}),Object(j.jsx)("td",{children:t.length>0?Object(j.jsx)("span",{children:t}):Object(j.jsx)("span",{children:"Message"})})]}),Object(j.jsxs)("tr",{onClick:function(){return c("https://github.com/edward-matthews")},style:{textDecorationColor:"#24292e"},className:"unusual-link",children:[Object(j.jsx)("td",{children:Object(j.jsx)("i",{className:"bi bi-github"})}),Object(j.jsx)("td",{children:"GitHub"})]}),Object(j.jsxs)("tr",{onClick:function(){return c("https://www.linkedin.com/in/matthewsedwardj")},style:{textDecorationColor:"#2867B2"},className:"unusual-link",children:[Object(j.jsx)("td",{children:Object(j.jsx)("i",{className:"bi bi-linkedin"})}),Object(j.jsx)("td",{children:"LinkedIn"})]}),Object(j.jsxs)("tr",{onClick:function(){return c("https://twitter.com/matthewsedwardj")},style:{textDecorationColor:"#00acee"},className:"unusual-link",children:[Object(j.jsx)("td",{children:Object(j.jsx)("i",{className:"bi bi-twitter"})}),Object(j.jsx)("td",{children:"Twitter"})]})]})})},E=function(e){var t=e.modalOpen,n=e.setModalOpen,a=Object(c.useState)(!1),s=Object(o.a)(a,2),r=s[0],i=s[1],l=Object(c.useState)(""),d=Object(o.a)(l,2),u=d[0],b=d[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(p.a,{show:t,onHide:function(){return n(!1)},size:"lg",centered:!0,children:[Object(j.jsx)(p.a.Header,{closeButton:!0,children:Object(j.jsx)(p.a.Title,{children:"Contact Me!"})}),Object(j.jsx)(p.a.Body,{children:r?Object(j.jsx)(N,{setDisplayContactForm:i,setResponse:b}):Object(j.jsx)(C,{setDisplayContactForm:i,response:u})}),Object(j.jsx)(p.a.Footer,{})]})})},M=function(e){var t=e.children,n=Object(c.useState)(!1),a=Object(o.a)(n,2),s=a[0],r=a[1],i=Object(c.useState)(!1),l=Object(o.a)(i,2),d=l[0],h=l[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u,{modalControl:r,menuShift:h}),Object(j.jsx)(b.a,{id:"contentDiv",children:t}),Object(j.jsx)(x,{modalControl:r,buttonVisibility:d}),Object(j.jsx)(E,{modalOpen:s,setModalOpen:r})]})},_=n(80),I=function(e){var t=e.title,n=e.description,c=e.thumbnail,a=e.url;return Object(j.jsxs)(_.a,{children:[Object(j.jsx)("title",{children:t}),Object(j.jsx)("meta",{name:"description",content:n}),Object(j.jsx)("meta",{itemProp:"name",content:"Edward Matthews"}),Object(j.jsx)("meta",{itemProp:"description",content:n}),Object(j.jsx)("meta",{itemProp:"image",content:c}),Object(j.jsx)("meta",{property:"og:url",content:"/edwardmatthe.ws".concat(a)}),Object(j.jsx)("meta",{property:"og:type",content:"website"}),Object(j.jsx)("meta",{property:"og:title",content:t}),Object(j.jsx)("meta",{property:"og:description",content:n}),Object(j.jsx)("meta",{property:"og:image",content:c}),Object(j.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),Object(j.jsx)("meta",{name:"twitter:title",content:t}),Object(j.jsx)("meta",{name:"twitter:description",content:n}),Object(j.jsx)("meta",{name:"twitter:image",content:c})]})},A=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(I,{title:"EdwardMatthe.ws",description:"My name is Edward Matthews. I am a South West England-based full stack web developer specialising in Django and React. I build responsive websites with robust backends to high standards, using HTML5, CSS3, JavaScript and Python.",thumbnail:"https://edwardmatthe.ws/logo.png",url:"/"}),Object(j.jsx)("h1",{children:"Welcome \ud83d\udc4b"}),Object(j.jsx)("h4",{children:"My name is Edward Matthews."}),Object(j.jsx)("p",{children:"I'm a South West England based freelance full stack web developer working (primarily) with React and Django."})]})},D=n(2),F=n(44),L=n(48),T=n(101),H=n(126),P=n(82),R=n(19),G=n.n(R),Y=n(181);new P.a({auth:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ACCESS_TOKEN,userAgent:"edwardmatthe.ws v1.0.0"});function K(e,t){var n=G()(),c=G()(e,G.a.ISO_8601),a=G.a.duration(t,"days");return G.a.duration(n.diff(c))<a}var U=new Map([["Python","https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"],["TypeScript","https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1920px-Typescript_logo_2020.svg.png"]]),B=function(e){return Object(j.jsx)(L.a,{children:Object(j.jsxs)(F.a,{bg:"dark",text:"light",style:{width:"18rem"},className:"mt-2 mx-auto g-2 h-100 portfolioCard",border:"dark",children:[Object(j.jsxs)(F.a.Header,{style:{height:"2.5rem",position:"relative"},children:[K(e.created_at,14)&&Object(j.jsxs)("span",{children:[Object(j.jsx)(T.a,{pill:!0,bg:"danger",children:"New!"})," "]}),K(e.updated_at,7)&&Object(j.jsx)(T.a,{pill:!0,bg:"warning",children:"Updated Recently!"}),e.language&&Object(j.jsx)(H.a,{src:U.get(e.language),width:"32px",style:{float:"right",position:"relative",top:"50%",transform:"translateY(-50%)"},rounded:!0})]}),Object(j.jsxs)(F.a.Body,{className:"d-flex flex-column",children:[Object(j.jsx)(F.a.Title,{children:e.name}),Object(j.jsx)(F.a.Text,{children:e.description}),Object(j.jsxs)(Y.a,{className:"mt-auto",children:[e.homepage&&Object(j.jsx)(y.a,{href:e.homepage,variant:"light",className:"mx-auto",children:"View Live"}),Object(j.jsx)(y.a,{href:e.html_url,variant:"light",className:"mx-auto",children:"View on GitHub"})]})]}),Object(j.jsxs)(F.a.Footer,{className:"text-muted text-end small",children:["Updated ",G()(e.updated_at,G.a.ISO_8601).fromNow()]})]})})},W=n(127),J=n(81),V=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],s=new P.a({userAgent:"edwardmatthe.ws v1.0.0"}),r=Object(c.useState)([]),i=Object(o.a)(r,2),l=i[0],d=i[1];Object(c.useEffect)((function(){var e=[];s.rest.repos.listForUser({username:"edward-matthews",sort:"updated"}).then((function(e){return e.data})).then((function(t){return t.forEach((function(t){return e.push(s.rest.repos.get({owner:"edward-matthews",repo:t.name}))}))})).then((function(){return Promise.all(e).then((function(e){return d(e)})).then((function(){return a(!0)}))})).catch((function(e){return console.log(e)}))}),[]);var u=Array.from(new Set(l.map((function(e){return e.data.language})).filter((function(e){return null!==e})))),b=Object(c.useState)("all"),h=Object(o.a)(b,2),m=h[0],O=h[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(I,{title:"Portfolio | EdwardMatthe.ws",description:"All of my public repositories from github.com/edward-matthews pulled in dynamically with the GitHub API. Filter by language and be sure to check those with an 'Updated Recently!' badge to see the what's keeping my attention right now.",thumbnail:"https://edwardmatthe.ws/logo.png",url:"/portfolio"}),Object(j.jsx)(k.a,{controlId:"floatingSelect",label:"Languages",children:Object(j.jsxs)(v.a.Select,{"aria-label":"Language Select",onChange:function(e){O(e.target.value)},defaultValue:"all",children:[Object(j.jsx)("option",{value:"all",children:"All"}),u.map((function(e,t){return Object(j.jsx)("option",{value:e,children:e},t)}))]})}),n?Object(j.jsx)(W.a,{xs:1,md:2,lg:3,className:"g-0 align-items-stretch d-flex",children:l.map((function(e){return m===e.data.language||"all"===m?Object(j.jsxs)(L.a,{className:"my-2 g-2 align-items-stretch d-flex",children:[Object(j.jsx)(B,Object(D.a)({},e.data))," "]},e.data.id):null}))}):Object(j.jsx)(J.a,{animation:"border",role:"status",className:"d-flex mx-auto mt-2",children:Object(j.jsx)("span",{className:"visually-hidden",children:"Loading..."})})]})},X=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(I,{title:"404 | EdwardMatthe.ws",description:"You shouldn't have found this page. If you followed a link and ended up here please reach and tell me about it so I can find and fix it!",thumbnail:"https://edwardmatthe.ws/logo.png",url:"/404"}),Object(j.jsx)("div",{children:"Not sure how you ended up here. Try navigating elsewhere from the button below. If you followed a link and ended up here please reach and tell me about it so I can find and fix it!"})]})},z=n(10),q=n(63),Q=n(64),Z=function(){var e=new URLSearchParams(Object(m.h)().search),t=Object(c.useState)([]),a=Object(o.a)(t,2),s=a[0],r=a[1],l=Object(c.useState)(!1),d=Object(o.a)(l,2),u=d[0],b=d[1],h=Object(c.useState)(e.getAll("tags")),O=Object(o.a)(h,2),x=O[0],p=O[1],f=Object(c.useState)({}),g=Object(o.a)(f,2),w=g[0],v=g[1];Object(c.useEffect)((function(){n(170).keys().map((function(e){n(173)("./".concat(e.substring(2,e.length))).then((function(e){return e.metadata})).then((function(e){r((function(t){return[].concat(Object(q.a)(t),[e])})),e.tags.map((function(e){v((function(t){return Object(D.a)(Object(D.a)({},t),{},Object(z.a)({},e,e in t?t[e]+1:1))}))}))})).catch((function(e){return console.error(e)}))})),b(!0)}),[]);var y,k;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(I,{title:"Articles | EdwardMatthe.ws",description:"All of my writings, primarily about Django and React, links to edit any article on GitHub if you find a mistake (oops!).",thumbnail:"https://edwardmatthe.ws/logo.png",url:"/articles"}),Object(j.jsx)("ul",{className:"checkboxList",children:(k=Object.keys(w),k.sort((function(e,t){return w[t]-w[e]}))).map((function(e,t){return Object(j.jsxs)("li",{children:[Object(j.jsx)("input",{type:"checkbox",id:e,checked:x.includes(e),onClick:function(){return t="".concat(e),void(document.getElementById(t).checked?x.includes(t)||p([].concat(Object(q.a)(x),[t])):x.includes(t)&&p(x.filter((function(e){return e!==t}))));var t}}),"".concat(e,"(").concat(w[e],")")]},t)}))}),u?Object(j.jsx)(Q.a,{defaultActiveKey:"0",children:(y=s,y.sort((function(e,t){return G()(t.publishedOn).diff(G()(e.publishedOn))}))).map((function(e,t){if(e.published&&(e.tags.some((function(e){return x.includes(e)}))||0===x.length))return Object(j.jsxs)(Q.a.Item,{eventKey:String(t),children:[Object(j.jsxs)(Q.a.Header,{children:[Object(j.jsx)("span",{className:"me-auto",children:e.title}),Object(j.jsx)("small",{className:"ms-auto",children:G()(e.publishedOn).format("MMMM Do, YYYY")})]}),Object(j.jsxs)(Q.a.Body,{children:[e.description,Object(j.jsx)("br",{}),Object(j.jsx)(i.b,{to:"/articles/".concat(e.slug),children:"Read more..."})]})]},t)}))}):Object(j.jsx)(J.a,{animation:"border",role:"status",className:"d-flex mx-auto mt-2",children:Object(j.jsx)("span",{className:"visually-hidden",children:"Loading..."})})]})},$=function(){var e=Object(m.i)().slug,t=Object(c.useState)(""),a=Object(o.a)(t,2),s=a[0],r=a[1],l=Object(c.useState)(),d=Object(o.a)(l,2),u=d[0],b=d[1],h=Object(c.useState)(!1),O=Object(o.a)(h,2),x=O[0],p=O[1];return Object(c.useEffect)((function(){n(174)("./".concat(e,".mdx")).then((function(e){return[r(e.default),b(e.metadata)]})).catch((function(){return p(!0)}))}),[]),Object(j.jsxs)(j.Fragment,{children:[x&&Object(j.jsx)(m.a,{to:"/404"}),u&&Object(j.jsx)(I,{title:"".concat(u.title," | EdwardMatthe.ws"),description:u.description,thumbnail:u.thumbnail,url:"/articles/".concat(e)}),u&&Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:u.title}),Object(j.jsxs)("small",{children:[Object(j.jsx)("i",{children:G()(u.publishedOn).format("MMMM Do, YYYY")}),u.updatedOn&&Object(j.jsxs)(j.Fragment,{children:[" (Updated: ",G()(u.updatedOn).format("MMMM Do, YYYY"),")"]}),Object(j.jsx)("a",{className:"externalLink",href:"https://github.com/edward-matthews/edward-matthews.github.io/edit/main/src/posts/".concat(e,".mdx"),children:Object(j.jsxs)("i",{style:{fontSize:"14px",display:"inline"},className:"bi bi-github",children:[" ","Edit on GitHub"]})})]}),s,Object(j.jsx)("div",{className:"tags",children:u.tags.map((function(e,t){return Object(j.jsx)(i.b,{to:"/articles?tags=".concat(e),children:Object(j.jsxs)("mark",{style:{display:"inline-block",margin:"0.25em",marginBottom:"2em"},children:["#",e]})},t)}))})]})]})},ee=function(){return Object(j.jsxs)(m.d,{children:[Object(j.jsx)(m.b,{exact:!0,path:"/",children:Object(j.jsx)(A,{})}),Object(j.jsx)(m.b,{path:"/portfolio",children:Object(j.jsx)(V,{})}),Object(j.jsx)(m.b,{path:"/articles/:slug",children:Object(j.jsx)($,{})}),Object(j.jsx)(m.b,{path:"/articles",children:Object(j.jsx)(Z,{})}),Object(j.jsx)(m.b,{path:"*",children:Object(j.jsx)(X,{})})]})},te=(n(175),n(103)),ne=n(102),ce=n(128),ae={code:function(e){var t=e.children,n=e.className.replace(/language-/,"");return Object(j.jsx)(ne.a,Object(D.a)(Object(D.a)({},ne.b),{},{theme:ce.a,code:t,language:n,children:function(e){var t=e.className,n=e.style,c=e.tokens,a=e.getLineProps,s=e.getTokenProps;return Object(j.jsx)("pre",{className:t,style:Object(D.a)(Object(D.a)({},n),{},{padding:"20px"}),children:c.slice(0,c.length-1).map((function(e,t){return Object(j.jsx)("div",Object(D.a)(Object(D.a)({},a({line:e,key:t})),{},{children:e.map((function(e,t){return Object(j.jsx)("span",Object(D.a)({},s({token:e,key:t})),t)}))}),t)}))})}}))}},se=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(i.a,{children:Object(j.jsx)(M,{children:Object(j.jsx)(_.b,{children:Object(j.jsx)(te.a,{components:ae,children:Object(j.jsx)(ee,{})})})})})})};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(se,{})}),document.getElementById("root"))}},[[176,3,4]]]);
//# sourceMappingURL=main.ab827d46.chunk.js.map