(this["webpackJsonpedward-matthews.github.io"]=this["webpackJsonpedward-matthews.github.io"]||[]).push([[0],{142:function(e,t,n){},173:function(e,t){},174:function(e,t){},204:function(e,t,n){var i={"./test-post.md":[209,3]};function c(e){if(!n.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],c=t[0];return n.e(t[1]).then((function(){return n(c)}))}c.keys=function(){return Object.keys(i)},c.id=204,e.exports=c},206:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),a=n(32),s=n.n(a),r=(n(142),n(41)),o=n(106),l=n(79),u=n(0),d=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(o.a,{bg:"primary",variant:"dark",className:"mb-2 py-4",children:Object(u.jsx)(l.a,{children:Object(u.jsxs)(o.a.Brand,{as:r.b,to:"/",className:"py-4 h4 mx-auto",children:[Object(u.jsx)("img",{alt:"",src:"/logo.png",width:"30",height:"30",className:"d-inline-block align-top"})," ","Edward Matthews"]})})})})},j=n(9),b=function(e){var t=e.icon,n=e.clickHandler,i=e.pos,c=e.label,a=e.expand;return Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"floating-label",style:{bottom:"calc(26px + ".concat(i," * 60px)")},children:c}),Object(u.jsx)("button",{className:"floating-button floating-moving-button",onClick:function(){return[n(),a&&a(!1)]},style:{bottom:"calc(20px + ".concat(i," * 60px)")},children:Object(u.jsx)("i",{className:"bi ".concat(t)})})]})},m=n(13),h=function(e){var t=e.expand,n=e.modalControl,i=Object(m.f)(),c=function(e){return function(){i.push(e)}};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,{icon:"bi-chat-text",clickHandler:function(){return n(!0)},pos:1,label:"Contact"}),Object(u.jsx)(b,{icon:"bi-pen",clickHandler:c("/articles"),pos:2,label:"Articles",expand:t}),Object(u.jsx)(b,{icon:"bi-journal-code",clickHandler:c("/portfolio"),pos:3,label:"Portfolio",expand:t}),Object(u.jsx)(b,{icon:"bi-house",clickHandler:c("/"),pos:4,label:"Home",expand:t})]})},O=n(52),x=n(4),p=n.n(x),f=n(8),g=n(36),w=n(62),v=n(39),y=function(e){var t=e.setDisplayContactForm,n=e.setResponse,c=Object(i.useState)(""),a=Object(j.a)(c,2),s=a[0],r=a[1],o=Object(i.useState)(""),l=Object(j.a)(o,2),d=l[0],b=l[1],m=Object(i.useState)(""),h=Object(j.a)(m,2),O=h[0],x=h[1],y=Object(i.useState)(!1),N=Object(j.a)(y,2),k=N[0],S=N[1];function q(){return C.apply(this,arguments)}function C(){return(C=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://script.google.com/macros/s/AKfycbxz6_KfLFeEtI5NKcJ5G72XGjttAi_2XE_kaisbulNRM9KIxAAxRSew1GNy6GiXyEI/exec",t="?name=".concat(s,"&message=").concat(d,"&email=").concat(O),e.next=4,fetch("https://script.google.com/macros/s/AKfycbxz6_KfLFeEtI5NKcJ5G72XGjttAi_2XE_kaisbulNRM9KIxAAxRSew1GNy6GiXyEI/exec"+t,{method:"POST"});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(u.jsxs)(g.a,{children:[Object(u.jsx)(g.a.Group,{className:"mb-3",children:Object(u.jsx)(v.a,{controlId:"floatingInput",label:"Name",className:"mb-3",children:Object(u.jsx)(g.a.Control,{type:"text",onChange:function(e){return r(e.target.value)}})})}),Object(u.jsx)(g.a.Group,{className:"mb-3",children:Object(u.jsx)(v.a,{controlId:"floatingTextarea2",label:"Message",children:Object(u.jsx)(g.a.Control,{as:"textarea",style:{height:"100px"},onChange:function(e){return b(e.target.value)}})})}),Object(u.jsx)(g.a.Group,{className:"mb-3",children:Object(u.jsx)(v.a,{controlId:"floatingInput",label:"Email address",className:"mb-3",children:Object(u.jsx)(g.a.Control,{type:"email",onChange:function(e){return x(e.target.value)}})})}),Object(u.jsx)("span",{onClick:function(){return t(!1)},onMouseEnter:function(){return S(!0)},onMouseLeave:function(){return S(!1)},children:Object(u.jsx)("i",{className:"bi bi-arrow-return-left unusual-link"})}),k&&Object(u.jsx)("span",{children:' Won\'t you at least say "Hi"?'}),Object(u.jsx)(w.a,{variant:"primary",className:"float-end",size:"lg",onClick:function(){return[q(),n("Thanks for reaching out!"),t(!1)]},children:"Send"})]})},N=n(126),k=function(e){var t=e.response,n=e.setDisplayContactForm;function i(e){window.location.href=e}return Object(u.jsx)(N.a,{borderless:!0,hover:!0,children:Object(u.jsxs)("tbody",{children:[Object(u.jsxs)("tr",{onClick:function(){return n(!0)},style:{textDecorationColor:"red"},className:"unusual-link",children:[Object(u.jsx)("td",{children:Object(u.jsx)("i",{className:"bi bi-envelope-fill"})}),Object(u.jsx)("td",{children:t.length>0?Object(u.jsx)("span",{children:t}):Object(u.jsx)("span",{children:"Message"})})]}),Object(u.jsxs)("tr",{onClick:function(){return i("https://github.com/edward-matthews")},style:{textDecorationColor:"#24292e"},className:"unusual-link",children:[Object(u.jsx)("td",{children:Object(u.jsx)("i",{className:"bi bi-github"})}),Object(u.jsx)("td",{children:"GitHub"})]}),Object(u.jsxs)("tr",{onClick:function(){return i("https://www.google.com/search?q=linkedin")},style:{textDecorationColor:"#2867B2"},className:"unusual-link",children:[Object(u.jsx)("td",{children:Object(u.jsx)("i",{className:"bi bi-linkedin"})}),Object(u.jsx)("td",{children:"LinkedIn"})]}),Object(u.jsxs)("tr",{onClick:function(){return i("https://twitter.com/matthewsedwardj")},style:{textDecorationColor:"#00acee"},className:"unusual-link",children:[Object(u.jsx)("td",{children:Object(u.jsx)("i",{className:"bi bi-twitter"})}),Object(u.jsx)("td",{children:"Twitter"})]}),Object(u.jsxs)("tr",{onClick:function(){return i("https://www.google.com/search?q=youtube")},style:{textDecorationColor:"#c4302b"},className:"unusual-link",children:[Object(u.jsx)("td",{children:Object(u.jsx)("i",{className:"bi bi-youtube"})}),Object(u.jsx)("td",{children:"YouTube"})]})]})})},S=function(e){var t=e.modalOpen,n=e.setModalOpen,c=Object(i.useState)(!1),a=Object(j.a)(c,2),s=a[0],r=a[1],o=Object(i.useState)(""),l=Object(j.a)(o,2),d=l[0],b=l[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(O.a,{show:t,onHide:function(){return n(!1)},size:"lg",centered:!0,children:[Object(u.jsx)(O.a.Header,{closeButton:!0,children:Object(u.jsx)(O.a.Title,{children:"Contact Me!"})}),Object(u.jsx)(O.a.Body,{children:s?Object(u.jsx)(y,{setDisplayContactForm:r,setResponse:b}):Object(u.jsx)(k,{setDisplayContactForm:r,response:d})}),Object(u.jsx)(O.a.Footer,{})]})})},q=function(){var e=Object(i.useState)(!1),t=Object(j.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(!1),s=Object(j.a)(a,2),r=s[0],o=s[1];return Object(i.useEffect)((function(){window.addEventListener("scroll",(function(){return c(!1)}))}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{className:"floating-button",onClick:function(){return c(!n)},children:n?Object(u.jsx)("i",{className:"bi bi-dash",style:{bottom:"0px"}}):Object(u.jsx)("i",{className:"bi bi-plus",style:{bottom:"0px"}})}),n&&Object(u.jsx)(h,{expand:c,modalControl:o}),Object(u.jsx)(S,{modalOpen:r,setModalOpen:o})]})},C=function(e){var t=e.children;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d,{}),Object(u.jsx)(l.a,{id:"contentDiv",children:t}),Object(u.jsx)(q,{})]})},_=n(82),E=n(38),T=function(){return Object(u.jsx)(_.a,{children:Object(u.jsxs)(E.a,{children:[Object(u.jsx)("h1",{children:"Tum mihi Piso: Quid ergo?"}),Object(u.jsxs)("p",{children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",Object(u.jsx)("mark",{children:"Ita nemo beato beatior."})," Quae quo sunt excelsiores, eo dant clariora indicia naturae."," "]}),Object(u.jsx)("h2",{children:"Non risu potius quam oratione eiciendum?"}),Object(u.jsxs)("p",{children:["Dicam, inquam, et quidem discendi causa magis, quam quo te aut Epicurum reprehensum velim."," ",Object(u.jsx)("b",{children:"Quoniam, si dis placet, ab Epicuro loqui discimus."})," Hoc ne statuam quidem dicturam pater aiebat, si loqui posset. ",Object(u.jsx)("i",{children:"Duo Reges: constructio interrete."})," Dic in quovis conventu te omnia facere, ne doleas. Hanc ergo intuens debet institutum illud quasi signum absolvere. Dolere malum est: in crucem qui agitur, beatus esse non potest."," "]}),Object(u.jsx)("h3",{children:"Bonum incolumis acies: misera caecitas."}),Object(u.jsxs)("p",{children:["Hoc dictum in una re latissime patet, ut in omnibus factis re, non teste moveamur. Nunc ita separantur, ut disiuncta sint, quo nihil potest esse perversius. ",Object(u.jsx)("b",{children:"Non igitur bene."})," An ea, quae per vinitorem antea consequebatur, per se ipsa curabit? ",Object(u.jsx)("mark",{children:"Sed nimis multa."})," Ut nemo dubitet, eorum omnia officia quo spectare, quid sequi, quid fugere debeant?"," ",Object(u.jsx)("mark",{children:"Nam quid possumus facere melius?"})," "]}),Object(u.jsx)("blockquote",{cite:"http://loripsum.net",children:"Si est nihil in eo, quod perficiendum est, praeter motum ingenii quendam, id est rationem, necesse est huic ultimum esse virtute agere;"}),Object(u.jsxs)("ol",{children:[Object(u.jsx)("li",{children:"Quamquam te quidem video minime esse deterritum."}),Object(u.jsx)("li",{children:"Hoc est non modo cor non habere, sed ne palatum quidem."}),Object(u.jsx)("li",{children:"Potius inflammat, ut coercendi magis quam dedocendi esse videantur."}),Object(u.jsx)("li",{children:"Si enim ad populum me vocas, eum."}),Object(u.jsx)("li",{children:"Illud dico, ea, quae dicat, praeclare inter se cohaerere."})]}),Object(u.jsx)("h4",{children:"Certe nihil nisi quod possit ipsum propter se iure laudari."}),Object(u.jsxs)("p",{children:["Tu quidem reddes; Ut in geometria, prima si dederis, danda sunt omnia. Videmus igitur ut conquiescere ne infantes quidem possint. Sed ne, dum huic obsequor, vobis molestus sim."," "]}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"Sit sane ista voluptas."}),Object(u.jsx)("li",{children:"Istic sum, inquit."}),Object(u.jsx)("li",{children:"Itaque e contrario moderati aequabilesque habitus, affectiones ususque corporis apti esse ad naturam videntur."}),Object(u.jsx)("li",{children:"Si quicquam extra virtutem habeatur in bonis."})]}),Object(u.jsxs)("p",{children:["In his igitur partibus duabus nihil erat, quod Zeno commutare gestiret. Serpere anguiculos, nare anaticulas, evolare merulas, cornibus uti videmus boves, nepas aculeis. Eiuro, inquit adridens, iniquum, hac quidem de re; Ea, quae dialectici nunc tradunt et docent, nonne ab illis instituta sunt aut inventa sunt? ",Object(u.jsx)("mark",{children:"Sed nimis multa."})," "]})]})})},I=n(2),A=n(44),H=n(105),D=n(132),M=n(86),F=n(35),P=n.n(F),L=n(212);new M.a({auth:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ACCESS_TOKEN,userAgent:"edwardmatthe.ws v1.0.0"});function G(e,t){var n=P()(),i=P()(e,P.a.ISO_8601),c=P.a.duration(t,"days");return P.a.duration(n.diff(i))<c}var R=new Map([["Python","https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"],["TypeScript","https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1920px-Typescript_logo_2020.svg.png"]]),K=function(e){return Object(u.jsx)(E.a,{children:Object(u.jsxs)(A.a,{bg:"dark",text:"light",style:{width:"18rem"},className:"mt-2 mx-auto g-2 h-100 portfolioCard",border:"dark",children:[Object(u.jsxs)(A.a.Header,{style:{height:"2.5rem",position:"relative"},children:[G(e.created_at,14)&&Object(u.jsxs)("span",{children:[Object(u.jsx)(H.a,{pill:!0,bg:"danger",children:"New!"})," "]}),G(e.updated_at,7)&&Object(u.jsx)(H.a,{pill:!0,bg:"warning",children:"Updated Recently!"}),e.language&&Object(u.jsx)(D.a,{src:R.get(e.language),width:"32px",style:{float:"right",position:"relative",top:"50%",transform:"translateY(-50%)"},rounded:!0})]}),Object(u.jsxs)(A.a.Body,{className:"d-flex flex-column",children:[Object(u.jsx)(A.a.Title,{children:e.name}),Object(u.jsx)(A.a.Text,{children:e.description}),Object(u.jsxs)(L.a,{className:"mt-auto",children:[e.homepage&&Object(u.jsx)(w.a,{href:e.homepage,variant:"light",className:"mx-auto",children:"View Live"}),Object(u.jsx)(w.a,{href:e.html_url,variant:"light",className:"mx-auto",children:"View on GitHub"})]})]}),Object(u.jsxs)(A.a.Footer,{className:"text-muted text-end small",children:["Updated ",P()(e.updated_at,P.a.ISO_8601).fromNow()]})]})})},U=n(84),B=n(133),X=function(e){var t=e.title,n=e.description,i=e.thumbnail,c=e.url;return Object(u.jsxs)(B.a,{children:[Object(u.jsxs)("title",{children:["Edward Matthews | ",t]}),Object(u.jsx)("meta",{name:"description",content:n}),Object(u.jsx)("meta",{itemProp:"name",content:"Edward Matthews"}),Object(u.jsx)("meta",{itemProp:"description",content:n}),Object(u.jsx)("meta",{itemProp:"image",content:i}),Object(u.jsx)("meta",{property:"og:url",content:"https://edwardmatthe.ws/".concat(c)}),Object(u.jsx)("meta",{property:"og:type",content:"website"}),Object(u.jsx)("meta",{property:"og:title",content:"Edward Matthews | ".concat(t)}),Object(u.jsx)("meta",{property:"og:description",content:n}),Object(u.jsx)("meta",{property:"og:image",content:i}),Object(u.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),Object(u.jsx)("meta",{name:"twitter:title",content:"Edward Matthews | ".concat(t)}),Object(u.jsx)("meta",{name:"twitter:description",content:n}),Object(u.jsx)("meta",{name:"twitter:image",content:i})]})},Y=function(){var e=Object(i.useState)(!1),t=Object(j.a)(e,2),n=t[0],c=t[1],a=new M.a({userAgent:"edwardmatthe.ws v1.0.0"}),s=Object(i.useState)([]),r=Object(j.a)(s,2),o=r[0],l=r[1];Object(i.useEffect)((function(){var e=[];a.rest.repos.listForUser({username:"edward-matthews",sort:"updated"}).then((function(e){return e.data})).then((function(t){return t.forEach((function(t){return e.push(a.rest.repos.get({owner:"edward-matthews",repo:t.name}))}))})).then((function(){return Promise.all(e).then((function(e){return l(e)})).then((function(){return c(!0)}))})).catch((function(e){return console.log(e)}))}),[]);var d=Array.from(new Set(o.map((function(e){return e.data.language})).filter((function(e){return null!==e})))),b=Object(i.useState)("all"),m=Object(j.a)(b,2),h=m[0],O=m[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(X,{title:"Portfolio",description:"All of the repositories found at github.com/edward-matthews pulled in dynamically from the GitHub API. Filter by language and be sure to check those with an 'Updated Recently!' badge to see the what's keeping my attention right now.",thumbnail:"",url:"/portfolio"}),Object(u.jsx)(v.a,{controlId:"floatingSelect",label:"Languages",children:Object(u.jsxs)(g.a.Select,{"aria-label":"Language Select",onChange:function(e){O(e.target.value)},defaultValue:"all",children:[Object(u.jsx)("option",{value:"all",children:"All"}),d.map((function(e,t){return Object(u.jsx)("option",{value:e,children:e},t)}))]})}),n?Object(u.jsx)(_.a,{xs:1,md:2,lg:3,className:"g-0 align-items-stretch d-flex",children:o.map((function(e){return h===e.data.language||"all"===h?Object(u.jsxs)(E.a,{className:"my-2 g-2 align-items-stretch d-flex",children:[Object(u.jsx)(K,Object(I.a)({},e.data))," "]},e.data.id):null}))}):Object(u.jsx)(U.a,{animation:"border",role:"status",className:"d-flex mx-auto mt-2",children:Object(u.jsx)("span",{className:"visually-hidden",children:"Loading..."})})]})},V=function(){return Object(u.jsx)("div",{children:"Not sure how you ended up here. Try navigating elsewhere with one of the links above."})},z=n(63),J=function(){var e=Object(i.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(!1),s=Object(j.a)(a,2),r=s[0],o=s[1];return Object(i.useEffect)((function(){fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@edward-matthews").then((function(e){return e.json()})).then((function(e){return c(e.items)})).then((function(){return o(!0)}))}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(X,{title:"Articles",description:"All of my writings, primarily about Django and React, links to edit any article on GitHub if you find a mistakae (oops!).",thumbnail:"",url:"/articles"}),r?Object(u.jsx)(z.a,{defaultActiveKey:"0",flush:!0,children:n.map((function(e,t){return Object(u.jsxs)(z.a.Item,{eventKey:String(t),children:[Object(u.jsxs)(z.a.Header,{children:[Object(u.jsx)("span",{className:"me-auto",children:e.title}),Object(u.jsx)("small",{className:"ms-auto",children:P()(e.pubDate).format("dddd, MMMM Do YYYY")})]}),Object(u.jsx)(z.a.Body,{dangerouslySetInnerHTML:{__html:e.description}})]},t)}))}):Object(u.jsx)(U.a,{animation:"border",role:"status",className:"d-flex mx-auto mt-2",children:Object(u.jsx)("span",{className:"visually-hidden",children:"Loading..."})})]})},Q=n(136),W=n.n(Q),Z=n(137),$=function(e){var t=e.children;return Object(u.jsx)("div",{dangerouslySetInnerHTML:{__html:Z.a.parse(t)}})},ee=function(){var e=Object(m.g)().slug,t=Object(i.useState)(""),c=Object(j.a)(t,2),a=c[0],s=c[1],r=Object(i.useState)(),o=Object(j.a)(r,2),l=o[0],d=o[1];return Object(i.useEffect)((function(){n(204)("./".concat(e,".md")).then((function(e){return fetch(e.default)})).then((function(e){return e.text()})).then((function(e){return W()(e)})).then((function(e){return[s(e.content),d(e.data)]})).catch((function(){return console.error("No post found with id ".concat(e,"."))}))}),[]),Object(u.jsxs)(u.Fragment,{children:[l&&l.isPublished&&Object(u.jsx)(X,{title:l.seoTitle,description:l.description,thumbnail:l.thumbnail,url:"/articles/".concat(e)}),l&&l.isPublished?Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:l.title}),Object(u.jsx)("small",{children:l.publishedOn}),Object(u.jsx)("img",{src:l.banner,width:"100%"}),Object(u.jsx)($,{children:a})]}):Object(u.jsx)(V,{})]})},te=function(){return Object(u.jsxs)(m.c,{children:[Object(u.jsx)(m.a,{exact:!0,path:"/",children:Object(u.jsx)(T,{})}),Object(u.jsx)(m.a,{path:"/portfolio",children:Object(u.jsx)(Y,{})}),Object(u.jsx)(m.a,{path:"/articles/:slug",children:Object(u.jsx)(ee,{})}),Object(u.jsx)(m.a,{path:"/articles",children:Object(u.jsx)(J,{})}),Object(u.jsx)(m.a,{path:"*",children:Object(u.jsx)(V,{})})]})},ne=(n(205),function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(r.a,{children:Object(u.jsx)(C,{children:Object(u.jsx)(te,{})})})})});s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(ne,{})}),document.getElementById("root"))}},[[206,1,2]]]);
//# sourceMappingURL=main.68860c53.chunk.js.map