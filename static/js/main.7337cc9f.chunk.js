(this["webpackJsonpedward-matthews.github.io"]=this["webpackJsonpedward-matthews.github.io"]||[]).push([[1],{122:function(e,t,n){},154:function(e,t){},155:function(e,t,n){var i={"./higher-order-functions-in-javascript.mdx":156};function a(e){var t=c(e);return n(t)}function c(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}a.keys=function(){return Object.keys(i)},a.resolve=c,e.exports=a,a.id=155},156:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/higher-order-functions-in-javascript.5a758fa9.mdx"},157:function(e,t,n){var i={"./higher-order-functions-in-javascript.mdx":[117,0]};function a(e){if(!n.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(i)},a.id=157,e.exports=a},158:function(e,t,n){var i={"./higher-order-functions-in-javascript.mdx":[117,0]};function a(e){if(!n.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(i)},a.id=158,e.exports=a},160:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),c=n(32),s=n.n(c),r=(n(122),n(31)),o=n(0),l=function(){return Object(o.jsxs)("header",{children:[Object(o.jsx)(r.b,{to:"/",children:Object(o.jsxs)("picture",{children:[Object(o.jsx)("source",{srcSet:"/logo.webp",type:"image/webp"}),Object(o.jsx)("img",{src:"/logo.png",alt:"A logo resembling a Japanese inkan stamp with the name \u3048\u3069"})]})}),Object(o.jsx)("h1",{children:"Edward Matthews"})]})},u=n(109),d=n(9),j=function(e){var t=e.icon,n=e.clickHandler,i=e.pos,a=e.label,c=e.expand;return Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{className:"floating-label",style:{bottom:"calc(26px + ".concat(i," * 60px)")},children:a}),Object(o.jsx)("button",{className:"floating-button floating-moving-button",onClick:function(){return[n(),c&&c(!1)]},style:{bottom:"calc(20px + ".concat(i," * 60px)")},children:Object(o.jsx)("i",{className:"bi ".concat(t)})})]})},b=n(12),m=function(e){var t=e.expand,n=e.modalControl,i=Object(b.g)(),a=function(e){return function(){i.push(e)}};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(j,{icon:"bi-chat-text",clickHandler:function(){return n(!0)},pos:1,label:"Contact"}),Object(o.jsx)(j,{icon:"bi-pen",clickHandler:a("/articles"),pos:2,label:"Articles",expand:t}),Object(o.jsx)(j,{icon:"bi-journal-code",clickHandler:a("/portfolio"),pos:3,label:"Portfolio",expand:t}),Object(o.jsx)(j,{icon:"bi-house",clickHandler:a("/"),pos:4,label:"Home",expand:t})]})},h=n(49),O=n(3),x=n.n(O),p=n(8),f=n(35),g=n(57),w=n(38),v=function(e){var t=e.setDisplayContactForm,n=e.setResponse,a=Object(i.useState)(""),c=Object(d.a)(a,2),s=c[0],r=c[1],l=Object(i.useState)(""),u=Object(d.a)(l,2),j=u[0],b=u[1],m=Object(i.useState)(""),h=Object(d.a)(m,2),O=h[0],v=h[1],y=Object(i.useState)(!1),N=Object(d.a)(y,2),k=N[0],S=N[1];function q(){return E.apply(this,arguments)}function E(){return(E=Object(p.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://script.google.com/macros/s/AKfycbxz6_KfLFeEtI5NKcJ5G72XGjttAi_2XE_kaisbulNRM9KIxAAxRSew1GNy6GiXyEI/exec",t="?name=".concat(s,"&message=").concat(j,"&email=").concat(O),e.next=4,fetch("https://script.google.com/macros/s/AKfycbxz6_KfLFeEtI5NKcJ5G72XGjttAi_2XE_kaisbulNRM9KIxAAxRSew1GNy6GiXyEI/exec"+t,{method:"POST"});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(o.jsxs)(f.a,{children:[Object(o.jsx)(f.a.Group,{className:"mb-3",children:Object(o.jsx)(w.a,{controlId:"floatingInput",label:"Name",className:"mb-3",children:Object(o.jsx)(f.a.Control,{type:"text",onChange:function(e){return r(e.target.value)}})})}),Object(o.jsx)(f.a.Group,{className:"mb-3",children:Object(o.jsx)(w.a,{controlId:"floatingTextarea2",label:"Message",children:Object(o.jsx)(f.a.Control,{as:"textarea",style:{height:"100px"},onChange:function(e){return b(e.target.value)}})})}),Object(o.jsx)(f.a.Group,{className:"mb-3",children:Object(o.jsx)(w.a,{controlId:"floatingInput",label:"Email address",className:"mb-3",children:Object(o.jsx)(f.a.Control,{type:"email",onChange:function(e){return v(e.target.value)}})})}),Object(o.jsx)("span",{onClick:function(){return t(!1)},onMouseEnter:function(){return S(!0)},onMouseLeave:function(){return S(!1)},children:Object(o.jsx)("i",{className:"bi bi-arrow-return-left unusual-link"})}),k&&Object(o.jsx)("span",{children:' Won\'t you at least say "Hi"?'}),Object(o.jsx)(g.a,{variant:"primary",className:"float-end",size:"lg",onClick:function(){return[q(),n("Thanks for reaching out!"),t(!1)]},children:"Send"})]})},y=n(107),N=function(e){var t=e.response,n=e.setDisplayContactForm;function i(e){window.location.href=e}return Object(o.jsx)(y.a,{borderless:!0,hover:!0,children:Object(o.jsxs)("tbody",{children:[Object(o.jsxs)("tr",{onClick:function(){return n(!0)},style:{textDecorationColor:"red"},className:"unusual-link",children:[Object(o.jsx)("td",{children:Object(o.jsx)("i",{className:"bi bi-envelope-fill"})}),Object(o.jsx)("td",{children:t.length>0?Object(o.jsx)("span",{children:t}):Object(o.jsx)("span",{children:"Message"})})]}),Object(o.jsxs)("tr",{onClick:function(){return i("https://github.com/edward-matthews")},style:{textDecorationColor:"#24292e"},className:"unusual-link",children:[Object(o.jsx)("td",{children:Object(o.jsx)("i",{className:"bi bi-github"})}),Object(o.jsx)("td",{children:"GitHub"})]}),Object(o.jsxs)("tr",{onClick:function(){return i("https://www.google.com/search?q=linkedin")},style:{textDecorationColor:"#2867B2"},className:"unusual-link",children:[Object(o.jsx)("td",{children:Object(o.jsx)("i",{className:"bi bi-linkedin"})}),Object(o.jsx)("td",{children:"LinkedIn"})]}),Object(o.jsxs)("tr",{onClick:function(){return i("https://twitter.com/matthewsedwardj")},style:{textDecorationColor:"#00acee"},className:"unusual-link",children:[Object(o.jsx)("td",{children:Object(o.jsx)("i",{className:"bi bi-twitter"})}),Object(o.jsx)("td",{children:"Twitter"})]}),Object(o.jsxs)("tr",{onClick:function(){return i("https://www.google.com/search?q=youtube")},style:{textDecorationColor:"#c4302b"},className:"unusual-link",children:[Object(o.jsx)("td",{children:Object(o.jsx)("i",{className:"bi bi-youtube"})}),Object(o.jsx)("td",{children:"YouTube"})]})]})})},k=function(e){var t=e.modalOpen,n=e.setModalOpen,a=Object(i.useState)(!1),c=Object(d.a)(a,2),s=c[0],r=c[1],l=Object(i.useState)(""),u=Object(d.a)(l,2),j=u[0],b=u[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(h.a,{show:t,onHide:function(){return n(!1)},size:"lg",centered:!0,children:[Object(o.jsx)(h.a.Header,{closeButton:!0,children:Object(o.jsx)(h.a.Title,{children:"Contact Me!"})}),Object(o.jsx)(h.a.Body,{children:s?Object(o.jsx)(v,{setDisplayContactForm:r,setResponse:b}):Object(o.jsx)(N,{setDisplayContactForm:r,response:j})}),Object(o.jsx)(h.a.Footer,{})]})})},S=function(){var e=Object(i.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(!1),s=Object(d.a)(c,2),r=s[0],l=s[1];return Object(i.useEffect)((function(){window.addEventListener("scroll",(function(){return a(!1)}))}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("button",{className:"floating-button",onClick:function(){return a(!n)},children:n?Object(o.jsx)("i",{className:"bi bi-dash",style:{bottom:"0px"}}):Object(o.jsx)("i",{className:"bi bi-plus",style:{bottom:"0px"}})}),n&&Object(o.jsx)(m,{expand:a,modalControl:l}),Object(o.jsx)(k,{modalOpen:r,setModalOpen:l})]})},q=function(e){var t=e.children;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(l,{}),Object(o.jsx)(u.a,{id:"contentDiv",children:t}),Object(o.jsx)(S,{})]})},E=n(73),C=n(36),_=n(72),M=function(e){var t=e.title,n=e.description,i=e.thumbnail,a=e.url;return Object(o.jsxs)(_.a,{children:[Object(o.jsx)("title",{children:t}),Object(o.jsx)("meta",{name:"description",content:n}),Object(o.jsx)("meta",{itemProp:"name",content:"Edward Matthews"}),Object(o.jsx)("meta",{itemProp:"description",content:n}),Object(o.jsx)("meta",{itemProp:"image",content:i}),Object(o.jsx)("meta",{property:"og:url",content:"/edwardmatthe.ws".concat(a)}),Object(o.jsx)("meta",{property:"og:type",content:"website"}),Object(o.jsx)("meta",{property:"og:title",content:t}),Object(o.jsx)("meta",{property:"og:description",content:n}),Object(o.jsx)("meta",{property:"og:image",content:i}),Object(o.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),Object(o.jsx)("meta",{name:"twitter:title",content:t}),Object(o.jsx)("meta",{name:"twitter:description",content:n}),Object(o.jsx)("meta",{name:"twitter:image",content:i})]})},I=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(M,{title:"EdwardMatthe.ws",description:"My name is Edward Matthews. I am a South West England-based full stack web developer specialising in Django and React. I build responsive websites with robust backends to high standards, using HTML5, CSS3, JavaScript and Python.",thumbnail:"https://edwardmatthe.ws/logo.png",url:"/"}),Object(o.jsx)(E.a,{children:Object(o.jsxs)(C.a,{children:[Object(o.jsx)("h1",{children:"Tum mihi Piso: Quid ergo?"}),Object(o.jsxs)("p",{children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",Object(o.jsx)("mark",{children:"Ita nemo beato beatior."})," ","Quae quo sunt excelsiores, eo dant clariora indicia naturae."," "]}),Object(o.jsx)("h2",{children:"Non risu potius quam oratione eiciendum?"}),Object(o.jsxs)("p",{children:["Dicam, inquam, et quidem discendi causa magis, quam quo te aut Epicurum reprehensum velim."," ",Object(o.jsx)("b",{children:"Quoniam, si dis placet, ab Epicuro loqui discimus."})," Hoc ne statuam quidem dicturam pater aiebat, si loqui posset. ",Object(o.jsx)("i",{children:"Duo Reges: constructio interrete."})," Dic in quovis conventu te omnia facere, ne doleas. Hanc ergo intuens debet institutum illud quasi signum absolvere. Dolere malum est: in crucem qui agitur, beatus esse non potest."," "]}),Object(o.jsx)("h3",{children:"Bonum incolumis acies: misera caecitas."}),Object(o.jsxs)("p",{children:["Hoc dictum in una re latissime patet, ut in omnibus factis re, non teste moveamur. Nunc ita separantur, ut disiuncta sint, quo nihil potest esse perversius. ",Object(o.jsx)("b",{children:"Non igitur bene."})," An ea, quae per vinitorem antea consequebatur, per se ipsa curabit? ",Object(o.jsx)("mark",{children:"Sed nimis multa."})," Ut nemo dubitet, eorum omnia officia quo spectare, quid sequi, quid fugere debeant?"," ",Object(o.jsx)("mark",{children:"Nam quid possumus facere melius?"})," "]}),Object(o.jsx)("blockquote",{cite:"http://loripsum.net",children:"Si est nihil in eo, quod perficiendum est, praeter motum ingenii quendam, id est rationem, necesse est huic ultimum esse virtute agere;"}),Object(o.jsxs)("ol",{children:[Object(o.jsx)("li",{children:"Quamquam te quidem video minime esse deterritum."}),Object(o.jsx)("li",{children:"Hoc est non modo cor non habere, sed ne palatum quidem."}),Object(o.jsx)("li",{children:"Potius inflammat, ut coercendi magis quam dedocendi esse videantur."}),Object(o.jsx)("li",{children:"Si enim ad populum me vocas, eum."}),Object(o.jsx)("li",{children:"Illud dico, ea, quae dicat, praeclare inter se cohaerere."})]}),Object(o.jsx)("h4",{children:"Certe nihil nisi quod possit ipsum propter se iure laudari."}),Object(o.jsxs)("p",{children:["Tu quidem reddes; Ut in geometria, prima si dederis, danda sunt omnia. Videmus igitur ut conquiescere ne infantes quidem possint. Sed ne, dum huic obsequor, vobis molestus sim."," "]}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"Sit sane ista voluptas."}),Object(o.jsx)("li",{children:"Istic sum, inquit."}),Object(o.jsx)("li",{children:"Itaque e contrario moderati aequabilesque habitus, affectiones ususque corporis apti esse ad naturam videntur."}),Object(o.jsx)("li",{children:"Si quicquam extra virtutem habeatur in bonis."})]}),Object(o.jsxs)("p",{children:["In his igitur partibus duabus nihil erat, quod Zeno commutare gestiret. Serpere anguiculos, nare anaticulas, evolare merulas, cornibus uti videmus boves, nepas aculeis. Eiuro, inquit adridens, iniquum, hac quidem de re; Ea, quae dialectici nunc tradunt et docent, nonne ab illis instituta sunt aut inventa sunt? ",Object(o.jsx)("mark",{children:"Sed nimis multa."})," "]})]})})]})},D=n(2),T=n(42),A=n(92),F=n(116),H=n(75),P=n(23),L=n.n(P),R=n(165);new H.a({auth:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ACCESS_TOKEN,userAgent:"edwardmatthe.ws v1.0.0"});function G(e,t){var n=L()(),i=L()(e,L.a.ISO_8601),a=L.a.duration(t,"days");return L.a.duration(n.diff(i))<a}var U=new Map([["Python","https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"],["TypeScript","https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1920px-Typescript_logo_2020.svg.png"]]),K=function(e){return Object(o.jsx)(C.a,{children:Object(o.jsxs)(T.a,{bg:"dark",text:"light",style:{width:"18rem"},className:"mt-2 mx-auto g-2 h-100 portfolioCard",border:"dark",children:[Object(o.jsxs)(T.a.Header,{style:{height:"2.5rem",position:"relative"},children:[G(e.created_at,14)&&Object(o.jsxs)("span",{children:[Object(o.jsx)(A.a,{pill:!0,bg:"danger",children:"New!"})," "]}),G(e.updated_at,7)&&Object(o.jsx)(A.a,{pill:!0,bg:"warning",children:"Updated Recently!"}),e.language&&Object(o.jsx)(F.a,{src:U.get(e.language),width:"32px",style:{float:"right",position:"relative",top:"50%",transform:"translateY(-50%)"},rounded:!0})]}),Object(o.jsxs)(T.a.Body,{className:"d-flex flex-column",children:[Object(o.jsx)(T.a.Title,{children:e.name}),Object(o.jsx)(T.a.Text,{children:e.description}),Object(o.jsxs)(R.a,{className:"mt-auto",children:[e.homepage&&Object(o.jsx)(g.a,{href:e.homepage,variant:"light",className:"mx-auto",children:"View Live"}),Object(o.jsx)(g.a,{href:e.html_url,variant:"light",className:"mx-auto",children:"View on GitHub"})]})]}),Object(o.jsxs)(T.a.Footer,{className:"text-muted text-end small",children:["Updated ",L()(e.updated_at,L.a.ISO_8601).fromNow()]})]})})},Y=n(74),B=function(){var e=Object(i.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1],c=new H.a({userAgent:"edwardmatthe.ws v1.0.0"}),s=Object(i.useState)([]),r=Object(d.a)(s,2),l=r[0],u=r[1];Object(i.useEffect)((function(){var e=[];c.rest.repos.listForUser({username:"edward-matthews",sort:"updated"}).then((function(e){return e.data})).then((function(t){return t.forEach((function(t){return e.push(c.rest.repos.get({owner:"edward-matthews",repo:t.name}))}))})).then((function(){return Promise.all(e).then((function(e){return u(e)})).then((function(){return a(!0)}))})).catch((function(e){return console.log(e)}))}),[]);var j=Array.from(new Set(l.map((function(e){return e.data.language})).filter((function(e){return null!==e})))),b=Object(i.useState)("all"),m=Object(d.a)(b,2),h=m[0],O=m[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(M,{title:"Portfolio | EdwardMatthe.ws",description:"All of my public repositories from github.com/edward-matthews pulled in dynamically with the GitHub API. Filter by language and be sure to check those with an 'Updated Recently!' badge to see the what's keeping my attention right now.",thumbnail:"https://edwardmatthe.ws/logo.png",url:"/portfolio"}),Object(o.jsx)(w.a,{controlId:"floatingSelect",label:"Languages",children:Object(o.jsxs)(f.a.Select,{"aria-label":"Language Select",onChange:function(e){O(e.target.value)},defaultValue:"all",children:[Object(o.jsx)("option",{value:"all",children:"All"}),j.map((function(e,t){return Object(o.jsx)("option",{value:e,children:e},t)}))]})}),n?Object(o.jsx)(E.a,{xs:1,md:2,lg:3,className:"g-0 align-items-stretch d-flex",children:l.map((function(e){return h===e.data.language||"all"===h?Object(o.jsxs)(C.a,{className:"my-2 g-2 align-items-stretch d-flex",children:[Object(o.jsx)(K,Object(D.a)({},e.data))," "]},e.data.id):null}))}):Object(o.jsx)(Y.a,{animation:"border",role:"status",className:"d-flex mx-auto mt-2",children:Object(o.jsx)("span",{className:"visually-hidden",children:"Loading..."})})]})},J=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(M,{title:"404 | EdwardMatthe.ws",description:"You shouldn't have found this page. If you followed a link and ended up here please reach and tell me about it so I can find and fix it!",thumbnail:"https://edwardmatthe.ws/logo.png",url:"/404"}),Object(o.jsx)("div",{children:"Not sure how you ended up here. Try navigating elsewhere from the button below. If you followed a link and ended up here please reach and tell me about it so I can find and fix it!"})]})},X=n(56),z=n(58),V=function(){var e=new URLSearchParams(Object(b.h)().search),t=Object(i.useState)([]),a=Object(d.a)(t,2),c=a[0],s=a[1],l=Object(i.useState)(!1),u=Object(d.a)(l,2),j=u[0],m=u[1],h=Object(i.useState)(e.getAll("tags")),O=Object(d.a)(h,2),x=O[0],p=O[1];Object(i.useEffect)((function(){n(155).keys().map((function(e){n(157)("./".concat(e.substring(2,e.length))).then((function(e){return s([].concat(Object(X.a)(c),[e.metadata]))})).catch((function(e){return console.error(e)}))})),m(!0)}),[]);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(M,{title:"Articles | EdwardMatthe.ws",description:"All of my writings, primarily about Django and React, links to edit any article on GitHub if you find a mistake (oops!).",thumbnail:"https://edwardmatthe.ws/logo.png",url:"/articles"}),Object(o.jsx)("ul",{className:"checkboxList",children:["Django","React","JavaScript","Python"].map((function(e,t){return Object(o.jsxs)("li",{children:[Object(o.jsx)("input",{type:"checkbox",id:e,onClick:function(){return function(e){document.getElementById(e).checked?x.includes(e)||p([].concat(Object(X.a)(x),[e])):x.includes(e)&&p(x.filter((function(t){return t!==e})))}("".concat(e))}}),e]},t)}))}),j?Object(o.jsx)(z.a,{defaultActiveKey:"0",children:c.map((function(e,t){if(e.published&&(e.tags.some((function(e){return x.includes(e)}))||0===x.length))return Object(o.jsxs)(z.a.Item,{eventKey:String(t),children:[Object(o.jsxs)(z.a.Header,{children:[Object(o.jsx)("span",{className:"me-auto",children:e.title}),Object(o.jsx)("small",{className:"ms-auto",children:L()(e.publishedOn).format("MMMM Do, YYYY")})]}),Object(o.jsxs)(z.a.Body,{children:[e.description,Object(o.jsx)("br",{}),Object(o.jsx)(r.b,{to:"/articles/".concat(e.slug),children:"Read more..."})]})]},t)}))}):Object(o.jsx)(Y.a,{animation:"border",role:"status",className:"d-flex mx-auto mt-2",children:Object(o.jsx)("span",{className:"visually-hidden",children:"Loading..."})})]})},W=function(){var e=Object(b.i)().slug,t=Object(i.useState)(""),a=Object(d.a)(t,2),c=a[0],s=a[1],l=Object(i.useState)(),u=Object(d.a)(l,2),j=u[0],m=u[1],h=Object(i.useState)(!1),O=Object(d.a)(h,2),x=O[0],p=O[1];return Object(i.useEffect)((function(){n(158)("./".concat(e,".mdx")).then((function(e){return[s(e.default),m(e.metadata)]})).catch((function(){return p(!0)}))}),[]),Object(o.jsxs)(o.Fragment,{children:[x&&Object(o.jsx)(b.a,{to:"/404"}),j&&Object(o.jsx)(M,{title:"".concat(j.title," | EdwardMatthe.ws"),description:j.description,thumbnail:j.thumbnail,url:"/articles/".concat(e)}),j&&Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:j.title}),Object(o.jsxs)("small",{children:[L()(j.publishedOn).format("MMMM Do, YYYY"),Object(o.jsx)("a",{className:"externalLink",href:"https://github.com/edward-matthews/edward-matthews.github.io/edit/main/src/posts/".concat(e,".mdx"),children:Object(o.jsxs)("i",{style:{fontSize:"14px",display:"inline"},className:"bi bi-github",children:[" ","Edit on GitHub"]})})]}),Object(o.jsx)("img",{src:j.banner,width:"100%"}),c,Object(o.jsx)("div",{className:"tags",children:j.tags.map((function(e,t){return Object(o.jsx)(r.b,{to:"/articles?tags=".concat(e),children:Object(o.jsxs)("mark",{style:{display:"inline-block",margin:"0.25em",marginBottom:"2em"},children:["#",e]})},t)}))})]})]})},Q=function(){return Object(o.jsxs)(b.d,{children:[Object(o.jsx)(b.b,{exact:!0,path:"/",children:Object(o.jsx)(I,{})}),Object(o.jsx)(b.b,{path:"/portfolio",children:Object(o.jsx)(B,{})}),Object(o.jsx)(b.b,{path:"/articles/:slug",children:Object(o.jsx)(W,{})}),Object(o.jsx)(b.b,{path:"/articles",children:Object(o.jsx)(V,{})}),Object(o.jsx)(b.b,{path:"*",children:Object(o.jsx)(J,{})})]})},Z=(n(159),function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(r.a,{children:Object(o.jsx)(q,{children:Object(o.jsx)(_.b,{children:Object(o.jsx)(Q,{})})})})})});s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(Z,{})}),document.getElementById("root"))}},[[160,2,3]]]);
//# sourceMappingURL=main.7337cc9f.chunk.js.map