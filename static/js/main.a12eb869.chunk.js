(this["webpackJsonpedward-matthews.github.io"]=this["webpackJsonpedward-matthews.github.io"]||[]).push([[0],{125:function(e,t,i){},160:function(e,t){},161:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),c=i(30),s=i.n(c),r=(i(125),i(35)),o=i(10),l=i(63),u=i(54),d=i(78),j=i(53),b=i(4),m=i.n(b),h=i(7),x=i(33),O=i(58),p=i(40),f=i(1),g=function(e){var t=e.setDisplayContactForm,i=e.setResponse,a=Object(n.useState)(""),c=Object(o.a)(a,2),s=c[0],r=c[1],l=Object(n.useState)(""),u=Object(o.a)(l,2),d=u[0],j=u[1],b=Object(n.useState)(""),g=Object(o.a)(b,2),v=g[0],N=g[1],q=Object(n.useState)(!1),w=Object(o.a)(q,2),y=w[0],k=w[1];function S(){return C.apply(this,arguments)}function C(){return(C=Object(h.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://script.google.com/macros/s/AKfycbxz6_KfLFeEtI5NKcJ5G72XGjttAi_2XE_kaisbulNRM9KIxAAxRSew1GNy6GiXyEI/exec",t="?name=".concat(s,"&message=").concat(d,"&email=").concat(v),e.next=4,fetch("https://script.google.com/macros/s/AKfycbxz6_KfLFeEtI5NKcJ5G72XGjttAi_2XE_kaisbulNRM9KIxAAxRSew1GNy6GiXyEI/exec"+t,{method:"POST"});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(f.jsxs)(x.a,{children:[Object(f.jsx)(x.a.Group,{className:"mb-3",children:Object(f.jsx)(p.a,{controlId:"floatingInput",label:"Name",className:"mb-3",children:Object(f.jsx)(x.a.Control,{type:"text",onChange:function(e){return r(e.target.value)}})})}),Object(f.jsx)(x.a.Group,{className:"mb-3",children:Object(f.jsx)(p.a,{controlId:"floatingTextarea2",label:"Message",children:Object(f.jsx)(x.a.Control,{as:"textarea",style:{height:"100px"},onChange:function(e){return j(e.target.value)}})})}),Object(f.jsx)(x.a.Group,{className:"mb-3",children:Object(f.jsx)(p.a,{controlId:"floatingInput",label:"Email address",className:"mb-3",children:Object(f.jsx)(x.a.Control,{type:"email",onChange:function(e){return N(e.target.value)}})})}),Object(f.jsx)("span",{onClick:function(){return t(!1)},onMouseEnter:function(){return k(!0)},onMouseLeave:function(){return k(!1)},children:Object(f.jsx)("i",{className:"bi bi-arrow-return-left unusual-link"})}),y&&Object(f.jsx)("span",{children:' Won\'t you at least say "Hi"?'}),Object(f.jsx)(O.a,{variant:"primary",className:"float-end",size:"lg",onClick:function(){return[S(),i("Thanks for reaching out!"),t(!1)]},children:"Send"})]})},v=i(113),N=function(e){var t=e.response,i=e.setDisplayContactForm;function n(e){window.location.href=e}return Object(f.jsx)(v.a,{borderless:!0,hover:!0,children:Object(f.jsxs)("tbody",{children:[Object(f.jsxs)("tr",{onClick:function(){return i(!0)},style:{textDecorationColor:"red"},className:"unusual-link",children:[Object(f.jsx)("td",{children:Object(f.jsx)("i",{className:"bi bi-envelope-fill"})}),Object(f.jsx)("td",{children:t.length>0?Object(f.jsx)("span",{children:t}):Object(f.jsx)("span",{children:"Message"})})]}),Object(f.jsxs)("tr",{onClick:function(){return n("https://github.com/edward-matthews")},style:{textDecorationColor:"#24292e"},className:"unusual-link",children:[Object(f.jsx)("td",{children:Object(f.jsx)("i",{className:"bi bi-github"})}),Object(f.jsx)("td",{children:"GitHub"})]}),Object(f.jsxs)("tr",{onClick:function(){return n("https://www.google.com/search?q=linkedin")},style:{textDecorationColor:"#2867B2"},className:"unusual-link",children:[Object(f.jsx)("td",{children:Object(f.jsx)("i",{className:"bi bi-linkedin"})}),Object(f.jsx)("td",{children:"LinkedIn"})]}),Object(f.jsxs)("tr",{onClick:function(){return n("https://www.google.com/search?q=twitter")},style:{textDecorationColor:"#00acee"},className:"unusual-link",children:[Object(f.jsx)("td",{children:Object(f.jsx)("i",{className:"bi bi-twitter"})}),Object(f.jsx)("td",{children:"Twitter"})]}),Object(f.jsxs)("tr",{onClick:function(){return n("https://www.google.com/search?q=youtube")},style:{textDecorationColor:"#c4302b"},className:"unusual-link",children:[Object(f.jsx)("td",{children:Object(f.jsx)("i",{className:"bi bi-youtube"})}),Object(f.jsx)("td",{children:"YouTube"})]})]})})},q=(i(130),function(e){var t=e.modalOpen,i=e.setModalOpen,a=Object(n.useState)(!1),c=Object(o.a)(a,2),s=c[0],r=c[1],l=Object(n.useState)(""),u=Object(o.a)(l,2),d=u[0],b=u[1];return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(j.a,{show:t,onHide:function(){return i(!1)},size:"lg",centered:!0,children:[Object(f.jsx)(j.a.Header,{closeButton:!0,children:Object(f.jsx)(j.a.Title,{children:"Contact Me!"})}),Object(f.jsx)(j.a.Body,{children:s?Object(f.jsx)(g,{setDisplayContactForm:r,setResponse:b}):Object(f.jsx)(N,{setDisplayContactForm:r,response:d})}),Object(f.jsx)(j.a.Footer,{})]})})}),w=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),i=t[0],a=t[1],c=Object(n.useState)(!1),s=Object(o.a)(c,2),j=s[0],b=s[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(l.a,{expanded:i,collapseOnSelect:!0,expand:"lg",bg:"primary",variant:"dark",sticky:"top",className:"mb-2 py-4",children:Object(f.jsxs)(d.a,{children:[Object(f.jsx)(l.a.Brand,{as:r.b,to:"/",className:"py-4",children:"Edward Matthews"}),Object(f.jsx)(l.a.Toggle,{onClick:function(){return a(!i)},"aria-controls":"responsive-navbar-nav",children:i?Object(f.jsx)("i",{className:"bi bi-code-slash"}):Object(f.jsx)("i",{className:"bi bi-code"})}),Object(f.jsx)(l.a.Collapse,{id:"responsive-navbar-nav",children:Object(f.jsxs)(u.a,{className:"ms-auto",children:[Object(f.jsx)(u.a.Link,{as:r.c,to:"/about",onClick:function(){return a(!1)},className:"mx-5 h4",children:Object(f.jsx)("i",{className:"bi bi-person-square",children:" About"})}),Object(f.jsx)(u.a.Link,{as:r.c,to:"/portfolio",onClick:function(){return a(!1)},className:"mx-5 h4",children:Object(f.jsx)("i",{className:"bi bi-journal-code",children:" Portfolio"})}),Object(f.jsx)(u.a.Link,{as:r.c,to:"/articles",onClick:function(){return a(!1)},className:"mx-5 h4",children:Object(f.jsx)("i",{className:"bi bi-pen",children:" Articles"})}),Object(f.jsx)(u.a.Link,{as:r.b,to:"#",onClick:function(){return[a(!1),b(!0)]},className:"mx-5 me-auto",children:Object(f.jsx)("i",{className:"bi bi-chat-text h4",children:" Contact"})})]})})]})}),Object(f.jsx)(q,{modalOpen:j,setModalOpen:b})]})},y=function(e){var t=e.children;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(w,{}),Object(f.jsx)(d.a,{id:"contentDiv",children:t})]})},k=i(12),S=i(80),C=i(37),E=function(){return Object(f.jsx)(S.a,{children:Object(f.jsxs)(C.a,{children:[Object(f.jsx)("h1",{children:"Tum mihi Piso: Quid ergo?"}),Object(f.jsxs)("p",{children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",Object(f.jsx)("mark",{children:"Ita nemo beato beatior."})," Quae quo sunt excelsiores, eo dant clariora indicia naturae."," "]}),Object(f.jsx)("h2",{children:"Non risu potius quam oratione eiciendum?"}),Object(f.jsxs)("p",{children:["Dicam, inquam, et quidem discendi causa magis, quam quo te aut Epicurum reprehensum velim."," ",Object(f.jsx)("b",{children:"Quoniam, si dis placet, ab Epicuro loqui discimus."})," Hoc ne statuam quidem dicturam pater aiebat, si loqui posset. ",Object(f.jsx)("i",{children:"Duo Reges: constructio interrete."})," Dic in quovis conventu te omnia facere, ne doleas. Hanc ergo intuens debet institutum illud quasi signum absolvere. Dolere malum est: in crucem qui agitur, beatus esse non potest."," "]}),Object(f.jsx)("h3",{children:"Bonum incolumis acies: misera caecitas."}),Object(f.jsxs)("p",{children:["Hoc dictum in una re latissime patet, ut in omnibus factis re, non teste moveamur. Nunc ita separantur, ut disiuncta sint, quo nihil potest esse perversius. ",Object(f.jsx)("b",{children:"Non igitur bene."})," An ea, quae per vinitorem antea consequebatur, per se ipsa curabit? ",Object(f.jsx)("mark",{children:"Sed nimis multa."})," Ut nemo dubitet, eorum omnia officia quo spectare, quid sequi, quid fugere debeant?"," ",Object(f.jsx)("mark",{children:"Nam quid possumus facere melius?"})," "]}),Object(f.jsx)("blockquote",{cite:"http://loripsum.net",children:"Si est nihil in eo, quod perficiendum est, praeter motum ingenii quendam, id est rationem, necesse est huic ultimum esse virtute agere;"}),Object(f.jsxs)("ol",{children:[Object(f.jsx)("li",{children:"Quamquam te quidem video minime esse deterritum."}),Object(f.jsx)("li",{children:"Hoc est non modo cor non habere, sed ne palatum quidem."}),Object(f.jsx)("li",{children:"Potius inflammat, ut coercendi magis quam dedocendi esse videantur."}),Object(f.jsx)("li",{children:"Si enim ad populum me vocas, eum."}),Object(f.jsx)("li",{children:"Illud dico, ea, quae dicat, praeclare inter se cohaerere."})]}),Object(f.jsx)("h4",{children:"Certe nihil nisi quod possit ipsum propter se iure laudari."}),Object(f.jsxs)("p",{children:["Tu quidem reddes; Ut in geometria, prima si dederis, danda sunt omnia. Videmus igitur ut conquiescere ne infantes quidem possint. Sed ne, dum huic obsequor, vobis molestus sim."," "]}),Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:"Sit sane ista voluptas."}),Object(f.jsx)("li",{children:"Istic sum, inquit."}),Object(f.jsx)("li",{children:"Itaque e contrario moderati aequabilesque habitus, affectiones ususque corporis apti esse ad naturam videntur."}),Object(f.jsx)("li",{children:"Si quicquam extra virtutem habeatur in bonis."})]}),Object(f.jsxs)("p",{children:["In his igitur partibus duabus nihil erat, quod Zeno commutare gestiret. Serpere anguiculos, nare anaticulas, evolare merulas, cornibus uti videmus boves, nepas aculeis. Eiuro, inquit adridens, iniquum, hac quidem de re; Ea, quae dialectici nunc tradunt et docent, nonne ab illis instituta sunt aut inventa sunt? ",Object(f.jsx)("mark",{children:"Sed nimis multa."})," "]})]})})},I=function(){return Object(f.jsx)("div",{})},_=i(2),A=i(45),T=i(100),D=i(81),F=i(42),L=i.n(F),H=i(166);new D.a({auth:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ACCESS_TOKEN,userAgent:"edward-matthews.github.io v1.0.0"});function K(e,t){var i=L()(),n=L()(e,L.a.ISO_8601),a=L.a.duration(t,"days");return L.a.duration(i.diff(n))<a}var G=function(e){return Object(f.jsx)(C.a,{children:Object(f.jsxs)(A.a,{bg:"dark",text:"light",style:{width:"18rem"},className:"mt-2 mx-auto g-2 h-100 portfolioCard",border:"dark",children:[Object(f.jsxs)(A.a.Header,{style:{height:"2.5rem"},children:[K(e.created_at,14)&&Object(f.jsxs)("span",{children:[Object(f.jsx)(T.a,{pill:!0,bg:"danger",children:"New!"})," "]}),K(e.updated_at,7)&&Object(f.jsx)(T.a,{pill:!0,bg:"warning",children:"Updated Recently!"})]}),Object(f.jsxs)(A.a.Body,{className:"d-flex flex-column",children:[Object(f.jsx)(A.a.Title,{children:e.name}),Object(f.jsx)(A.a.Text,{children:e.description}),Object(f.jsxs)(H.a,{className:"mt-auto",children:[e.homepage&&Object(f.jsx)(O.a,{href:e.homepage,variant:"light",className:"mx-auto",children:"View Live"}),Object(f.jsx)(O.a,{href:e.html_url,variant:"light",className:"mx-auto",children:"View on GitHub"})]})]}),Object(f.jsxs)(A.a.Footer,{className:"text-muted text-end small",children:["Updated ",L()(e.updated_at,L.a.ISO_8601).fromNow()]})]})})},R=i(120),M=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),i=t[0],a=t[1],c=new D.a({userAgent:"edward-matthews.github.io v1.0.0"}),s=Object(n.useState)([]),r=Object(o.a)(s,2),l=r[0],u=r[1];Object(n.useEffect)((function(){var e=[];c.rest.repos.listForUser({username:"edward-matthews",sort:"updated"}).then((function(e){return e.data})).then((function(t){return t.forEach((function(t){return e.push(c.rest.repos.get({owner:"edward-matthews",repo:t.name}))}))})).then((function(){return Promise.all(e).then((function(e){return u(e)})).then((function(){return a(!0)}))})).catch((function(e){return console.log(e)}))}),[]);var d=l.map((function(e){return e.data.language})).filter((function(e){return null!==e})),j=Object(n.useState)("all"),b=Object(o.a)(j,2),m=b[0],h=b[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(p.a,{controlId:"floatingSelect",label:"Languages",children:Object(f.jsxs)(x.a.Select,{"aria-label":"Language Select",onChange:function(e){h(e.target.value)},defaultValue:"all",children:[Object(f.jsx)("option",{value:"all",children:"All"}),d.map((function(e,t){return Object(f.jsx)("option",{value:e,children:e},t)}))]})}),i?Object(f.jsx)(S.a,{xs:1,md:2,lg:3,className:"g-0 align-items-stretch d-flex",children:l.map((function(e){return console.log(e),m===e.data.language||"all"===m?Object(f.jsxs)(C.a,{className:"my-2 g-2 align-items-stretch d-flex",children:[Object(f.jsx)(G,Object(_.a)({},e.data))," "]},e.data.id):null}))}):Object(f.jsx)(R.a,{animation:"border",role:"status",className:"d-flex mx-auto mt-2",children:Object(f.jsx)("span",{className:"visually-hidden",children:"Loading..."})})]})},P=function(){return Object(f.jsx)("div",{children:"Not sure how you ended up here. Try navigating elsewhere with one of the links above."})},B=i(62),U=function(){return Object(f.jsx)(B.a,{defaultActiveKey:"0",children:Object(f.jsxs)(B.a.Item,{eventKey:"0",children:[Object(f.jsx)(B.a.Header,{children:"Accordion Item #1"}),Object(f.jsx)(B.a.Body,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})})},X=function(){return Object(f.jsxs)(k.c,{children:[Object(f.jsx)(k.a,{exact:!0,path:"/",children:Object(f.jsx)(E,{})}),Object(f.jsx)(k.a,{path:"/about",children:Object(f.jsx)(I,{})}),Object(f.jsx)(k.a,{path:"/portfolio",children:Object(f.jsx)(M,{})}),Object(f.jsx)(k.a,{path:"/articles",children:Object(f.jsx)(U,{})}),Object(f.jsx)(k.a,{path:"*",children:Object(f.jsx)(P,{})})]})},V=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(r.a,{children:Object(f.jsx)(y,{children:Object(f.jsx)(X,{})})})})};s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(V,{})}),document.getElementById("root"))}},[[161,1,2]]]);
//# sourceMappingURL=main.a12eb869.chunk.js.map