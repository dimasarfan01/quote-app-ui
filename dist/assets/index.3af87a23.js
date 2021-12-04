var ne=Object.defineProperty,re=Object.defineProperties;var oe=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var j=(t,a,s)=>a in t?ne(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,d=(t,a)=>{for(var s in a||(a={}))I.call(a,s)&&j(t,s,a[s]);if(L)for(var s of L(a))A.call(a,s)&&j(t,s,a[s]);return t},m=(t,a)=>re(t,oe(a));var U=(t,a)=>{var s={};for(var r in t)I.call(t,r)&&a.indexOf(r)<0&&(s[r]=t[r]);if(t!=null&&L)for(var r of L(t))a.indexOf(r)<0&&A.call(t,r)&&(s[r]=t[r]);return s};import{c as G,a as C,o as H,r as x,j as n,b as e,B as ie,d as ce,e as de,L as y,f as ue,u as N,g as Q,t as h,h as g,i as _,k as M,l as me,m as he,n as b,p as pe,F as fe,q as z,s as K,v as V,w as W,x as ge,y as xe,z as be,A as we,C as ve,D as ye,R as Ne,E as w,N as S,G as Se,H as ke,I as De,J as Pe,P as Te,K as Le,M as Ce,O as Qe,Q as Ee,S as qe,T as Re,U as $e,V as Fe,W as Oe,X as Be,Y as Ie}from"./vendor.9511d23d.js";const Ae=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=s(l);fetch(l.href,o)}};Ae();const je={data:null},J=G({name:"userData",initialState:je,reducers:{setDataUser:(t,a)=>{t.data=a.payload},userDataListener:t=>{const a=C.get("token");if(a){const s=window.atob(`${a}`),r=H(s);t.data=r.user}else t.data=null}}}),{setDataUser:Y,userDataListener:Ue}=J.actions;var Ge=J.reducer;function p(t){const i=t,{placeholder:a="",isPassword:s=!1}=i,r=U(i,["placeholder","isPassword"]),[l,o]=x.exports.useState(!1);return s?n("div",{className:"flex relative w-full items-center",children:[e("button",{className:"absolute right-4 text-gray-500",onClick:()=>o(!l),children:l?e(ie,{className:"h-6 w-6"}):e(ce,{className:"h-6 w-6"})}),e("input",d({type:l?"text":"password",placeholder:a,className:"input input-bordered w-full"},r))]}):e("input",d({type:"text",placeholder:a,className:"input input-bordered w-full"},r))}function E(t){const{name:a="",link:s="/",icon:r=null,roundedLeft:l=!1,roundedRight:o=!1}=t,i=de({"bg-gray-500 py-2 px-4 text-white shadow-md flex items-center space-x-2 hover:bg-gray-700 ease-in-out duration-500":!0,"rounded-r-md":o===!0,"rounded-l-md":l===!0});return e(y,{to:s,children:n("div",{className:i,children:[e("span",{children:r}),e("p",{children:a})]})})}async function v(t){const{url:a,method:s,data:r,token:l}=t;let o={};if(l){const u=C.get("token");u&&(o={Authorization:`Bearer ${window.atob(`${u}`)}`})}const i=await ue({url:a,method:s,data:r,headers:o}).catch(u=>u.response);if(i.status>300)return{error:!0,message:i.data.message,data:null};const f=Object.keys(i.data).length;return{error:!1,message:"Success",data:f>1?i.data:i.data.data}}const F="https://quote-app-server.herokuapp.com",O="api/v1",He=async t=>{const a=`${F}/${O}/auth/signup`;return v({url:a,method:"POST",data:t})},_e=async t=>{const a=`${F}/${O}/auth/signin`;return v({url:a,method:"POST",data:t})},Me=async t=>{const a=`${F}/${O}/user/check-email`;return v({url:a,method:"POST",data:t})};function ze(){const[t,a]=x.exports.useState({email:"",password:"",buttonDisabled:!1,buttonText:"Submit"}),s=N(),r=Q(),l=async()=>{a(m(d({},t),{buttonText:"Processing...",buttonDisabled:!0}));const o={email:t.email,password:t.password};if(!t.email||!t.password)a(m(d({},t),{buttonText:"Submit",buttonDisabled:!1})),h.warning("Please fill every form");else{const i=await _e(o);if(i.error)a(m(d({},t),{buttonText:"Submit",buttonDisabled:!1})),h.error(i.message);else{a(m(d({},t),{buttonText:"Submit",buttonDisabled:!1})),h.success("Sign-in berhasil");const f=i.data.token,c=H(f);r(Y(c.user));const u=window.btoa(f);C.set("token",u,{expires:1}),s("/")}}};return n("div",{className:"card-body w-full lg:w-28rem space-y-4",children:[e(p,{placeholder:"Enter your email",value:t.email,onChange:o=>a(m(d({},t),{email:o.target.value}))}),e(p,{isPassword:!0,placeholder:"Enter your password",value:t.password,onChange:o=>a(m(d({},t),{password:o.target.value}))}),e("button",{className:"btn",disabled:t.buttonDisabled,onClick:l,children:t.buttonText})]})}function Ke(){return n("div",{className:"card shadow lg:w-auto w-11/12 relative flex flex-col items-center",children:[e("h1",{className:"absolute top-3 text-white font-bold",children:"LOGIN"}),n("div",{className:"bg-gray-500 p-4 flex flex-row items-center space-x-2 w-full",children:[e(g,{className:"text-gray-700"}),e(g,{className:"text-gray-700"}),e(g,{})]}),n("div",{className:"flex items-center mt-4 bg-gray-50 justify-between w-full",children:[e(E,{name:"Home",icon:e(_,{}),roundedRight:!0,link:"/"}),e(E,{name:"Register",icon:e(M,{}),roundedLeft:!0,link:"/auth/register"})]}),e(ze,{})]})}function Ve(){return e("div",{className:"flex flex-col items-center justify-center h-screen w-screen",children:e(Ke,{})})}function We(){const[t,a]=x.exports.useState({name:"",email:"",password:"",gender:"Choose your Gender",buttonDisabled:!1,buttonText:"Submit"}),s=N(),r=async()=>{a(m(d({},t),{buttonText:"Processing...",buttonDisabled:!0}));const l=await Me({email:t.email});if(!t.name||!t.email||!t.password||t.gender==="Choose your Gender")a(m(d({},t),{buttonText:"Submit",buttonDisabled:!1})),h.warning("please fill every form");else if(l.data===1)a(m(d({},t),{buttonText:"Submit",buttonDisabled:!1})),h.error("Email Already Existed");else{const o=new FormData;o.append("email",t.email),o.append("password",t.password),o.append("name",t.name),o.append("gender",t.gender);const i=await He(o);(i==null?void 0:i.error)?(a(m(d({},t),{buttonText:"Submit",buttonDisabled:!1})),h.error(i.message)):(a(m(d({},t),{buttonText:"Success",buttonDisabled:!1})),h.success("Sign-up successful"),s("/auth/login"))}};return n("div",{className:"card-body w-full lg:w-28rem space-y-4",children:[e(p,{placeholder:"Enter your name",value:t.name,onChange:l=>a(m(d({},t),{name:l.target.value}))}),e(p,{placeholder:"Enter your email",value:t.email,onChange:l=>a(m(d({},t),{email:l.target.value}))}),e(p,{isPassword:!0,placeholder:"Enter your password",value:t.password,onChange:l=>a(m(d({},t),{password:l.target.value}))}),n("select",{className:"select select-bordered w-full",value:t.gender,onChange:l=>a(m(d({},t),{gender:l.target.value})),children:[e("option",{disabled:"disabled",value:"Choose your Gender",children:"Choose your Gender"}),e("option",{value:"Male",children:"Male"}),e("option",{value:"Female",children:"Female"})]}),e("button",{className:"btn",onClick:r,disabled:t.buttonDisabled,children:t.buttonText})]})}function Je(){return n("div",{className:"card shadow lg:w-auto w-11/12 relative flex flex-col items-center",children:[e("h1",{className:"absolute top-3 text-white font-bold",children:"REGISTER"}),n("div",{className:"bg-gray-500 p-4 flex flex-row items-center space-x-2 w-full",children:[e(g,{className:"text-gray-700"}),e(g,{className:"text-gray-700"}),e(g,{})]}),n("div",{className:"flex items-center mt-4 bg-gray-50 justify-between w-full",children:[e(E,{name:"Home",icon:e(_,{}),roundedRight:!0,link:"/"}),e(E,{name:"Login",icon:e(M,{}),roundedLeft:!0,link:"/auth/login"})]}),e(We,{})]})}function Ye(){return e("div",{className:"flex flex-col items-center justify-center h-screen w-screen",children:e(Je,{})})}const k="https://quote-app-server.herokuapp.com",D="api/v1",Xe=async t=>{const a=`${k}/${D}/quote/post`;return v({url:a,method:"POST",data:t,token:!0})},Ze=async t=>{const a=`${k}/${D}/quote/like/${t}`;return v({url:a,method:"POST",token:!0})},et=async t=>{const a=`${k}/${D}/quote/delete/${t}`;return v({url:a,method:"DELETE",token:!0})},tt=async(t,a)=>{const s=`${k}/${D}/quote/update/${t}`;return v({url:s,method:"PUT",data:a,token:!0})},q=me({reducerPath:"getQuoteDataApi",baseQuery:he({baseUrl:`${k}/${D}`}),endpoints:t=>({getQuoteDataByQuery:t.query({query:({page:a=1,limit:s=8,tag:r=""})=>`/quote/get?page=${a}&limit=${s}&tag=${r}`})})}),{useGetQuoteDataByQueryQuery:X}=q;function Z({data:t}){const a=N(),s=b(c=>c.userData.data),[r,l]=x.exports.useState({quote:"",tags:""}),o=async c=>{if(s){const u=await Ze(c);(u==null?void 0:u.error)?h.error(u.message):a(0)}else h.error("Only Login user can Like Quote"),a("/auth/login")},i=async c=>{const u=await et(c);(u==null?void 0:u.error)?h.error(u.message):a(0)},f=async c=>{let u=r.tags.split(",");const P=new FormData;P.append("quote",r.quote);for(let $=0;$<u.length;$++)P.append("tags",u[$]);const T=await tt(c,P);(T==null?void 0:T.error)?h.error(T.message):a(0)};return t.map(c=>n("div",{className:"rounded-lg relative",children:[c.creator._id===(s==null?void 0:s.id)&&n("div",{className:"absolute top-4 right-4 flex flex-row space-x-4",children:[e("button",{onClick:()=>i(c._id),children:e(pe,{className:"text-red-600"})}),e(at,{state:r,setState:l,handleData:()=>l({quote:c.quote,tags:c.tags.join(",")}),handleEdit:()=>f(c._id)})]}),e(st,{data:c}),e(lt,{data:c}),e(nt,{data:c,onClick:()=>o(c._id)})]},c._id))}function at({state:t,setState:a,handleData:s,handleEdit:r}){return n(fe,{children:[e("label",{htmlFor:"my-modal-2",className:"cursor-pointer text-blue-500",onClick:s,children:e(z,{})}),e("input",{type:"checkbox",id:"my-modal-2",className:"modal-toggle"}),e("div",{className:"modal",children:n("div",{className:"modal-box space-y-2",children:[e("span",{children:"Quote"}),e(p,{value:t.quote,onChange:l=>a(m(d({},t),{quote:l.target.value}))}),e("span",{children:"Tags"}),e(p,{value:t.tags,onChange:l=>a(m(d({},t),{tags:l.target.value}))}),n("div",{className:"modal-action",children:[e("label",{htmlFor:"my-modal-2",className:"btn btn-primary",onClick:r,children:"Edit"}),e("label",{htmlFor:"my-modal-2",className:"btn",children:"Close"})]})]})})]})}function st({data:t}){return n("div",{className:"flex flex-col p-2 break-all rounded-t-lg shadow",children:[e(K,{className:"h-8 w-8"}),e("p",{className:"text-2xl self-center text-center",children:t.quote}),e(V,{className:"h-8 w-8 self-end"})]})}function lt({data:t}){return e("div",{className:"grid grid-cols-3 gap-3 break-all p-2 bg-gray-100 shadow",children:t.tags?t.tags.map((a,s)=>e(y,{to:`/tag/${a}`,children:n("p",{className:"text-sm text-gray-500 hover:text-gray-700",children:["#",a]})},s)):e("p",{children:"#"})})}function nt({data:t,onClick:a}){return e("div",{className:"bg-gray-700 py-2 rounded-b-lg shadow px-4",children:n("div",{className:"flex flex-row items-center justify-between",children:[n("div",{className:"flex flex-row space-x-2 items-center",children:[e("span",{className:"lg:px-6 lg:py-4 px-5 py-3 bg-gray-900 rounded-full font-bold capitalize text-white",children:t.creator.name.slice(0,1)}),n("div",{className:"flex flex-col text-white text-xs lg:text-base",children:[e("p",{children:t.creator.email}),e("p",{children:t.creator.name})]})]}),n("div",{className:"flex flex-row items-center space-x-2",children:[e("button",{className:"btn rounded-full bg-gray-700 border-0 px-3",onClick:a,children:e(W,{className:"h-6 w-6"})}),e("span",{className:"text-white font-bold",children:t.likes.length})]})]})})}function ee({state:t,setState:a,totalPage:s}){return n("div",{className:"flex flex-row justify-center",children:[e("div",{className:"p-2 flex flex-col space-y-2",children:e("select",{value:t.page,onChange:r=>a(m(d({},t),{page:r.target.value})),className:"select select-bordered w-full max-w-xs",children:s.map((r,l)=>n("option",{value:r,children:["Page ",r]},l))})}),e("div",{className:"p-2 flex flex-col space-y-2",children:n("select",{value:t.limit,onChange:r=>a(m(d({},t),{limit:r.target.value})),className:"select select-bordered w-full max-w-xs",children:[e("option",{value:6,children:"Limit 6"}),e("option",{value:8,children:"Limit 8"}),e("option",{value:12,children:"Limit 12"})]})})]})}function te(){return e("div",{className:"flex flex-col items-center",children:n("div",{className:"lds-ellipsis",children:[e("div",{}),e("div",{}),e("div",{}),e("div",{})]})})}function rt(){const[t,a]=x.exports.useState({page:1,limit:6}),{data:s,isFetching:r}=X({page:t.page,limit:t.limit});if(r)return e(te,{});let l=[];for(let o=1;o<=s.numberOfPages;o++)l.push(o);return n("div",{className:"flex flex-col",children:[e("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-3 p-2",children:e(Z,{data:s.data})}),e(ee,{state:t,setState:a,totalPage:l})]})}function ot(){return e(y,{to:"/",children:n("div",{className:"flex flex-row items-center space-x-2 hover:text-lg ease-in-out duration-500",children:[e(ge,{className:"h-8 w-8"}),e("h1",{children:"Quote-App"})]})})}function B(t){const{name:a,icon:s,link:r,onClick:l,noLink:o}=t;return o?n("li",{className:"hover:bg-gray-200 rounded-xl flex items-center flex-row font-mono cursor-pointer",onClick:l,children:[e("span",{children:s}),e("p",{children:a})]}):e(y,{to:r,children:n("li",{className:"hover:bg-gray-200 rounded-xl flex items-center flex-row font-mono",children:[e("span",{children:s}),e("p",{children:a})]})})}function R(){const t=b(l=>l.userData.data),a=Q(),s=N();return n("nav",{className:"navbar mb-2 shadow-md justify-between px-4",children:[e(ot,{}),t?e("div",{className:"flex",children:n("div",{className:"dropdown dropdown-end",children:[e("div",{tabIndex:"0",className:"m-1 btn bg-white text-black rounded-full shadow-md hover:text-white p-3",children:e(xe,{className:"h-6 w-6"})}),n("ul",{tabIndex:"0",className:"p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 mt-4",children:[e(B,{name:"Profile",icon:e(be,{}),link:"/profile"}),e(B,{name:"Post Quote",icon:e(z,{}),link:"/post-quote"}),e(B,{noLink:!0,name:"Logout",icon:e(we,{}),onClick:async()=>{a(Y(null)),C.remove("token"),s("/")}})]})]})}):e(y,{to:"/auth/login",children:e("button",{className:"btn",children:"Login"})})]})}function it(){return n("div",{children:[e(R,{}),e(rt,{})]})}const ct={quote:"",tags:[""]},ae=G({name:"postQuote",initialState:ct,reducers:{setQuote:(t,a)=>{t.quote=a.payload},setTags:(t,a)=>{t.tags=a.payload.toLowerCase().split(",")}}}),{setQuote:dt,setTags:ut}=ae.actions;var mt=ae.reducer;function se({title:t,children:a}){return n("div",{className:"bg-white w-full rounded-lg shadow-md relative flex flex-col items-center",children:[e("h1",{className:"absolute top-3 text-white font-bold",children:t}),n("div",{className:"bg-gray-500 p-4 flex flex-row items-center space-x-2 w-full rounded-t-lg",children:[e(g,{className:"text-gray-700"}),e(g,{className:"text-gray-700"}),e(g,{})]}),a]})}function ht(){const[t,a]=x.exports.useState({buttonText:"Submit",buttonDisabled:!1}),s=b(i=>i.postQuote),r=Q(),l=N(),o=async()=>{if(a({buttonText:"Processing...",buttonDisabled:!0}),s.quote===""||s.tags[0].length===0)a({buttonText:"Submit",buttonDisabled:!1}),h.warning("Please fill every form");else{const i=new FormData;i.append("quote",s.quote);for(let c=0;c<s.tags.length;c++)i.append("tags",s.tags[c]);const f=await Xe(i);(f==null?void 0:f.error)?(a({buttonText:"Submit",buttonDisabled:!1}),h.error(f.message)):(a({buttonText:"Success",buttonDisabled:!1}),h.success("Post Quote Successful"),l("/"),l(0))}};return e("div",{className:"flex-1 flex items-center flex-col w-full p-2",children:e("div",{className:"w-full flex flex-col items-center",children:e(se,{title:"Post Quote",children:n("div",{className:"flex flex-col space-y-4 w-11/12 py-4",children:[n("div",{className:"flex flex-col",children:[e("label",{className:"label",children:e("span",{className:"label-text text-lg",children:"Quote"})}),e(p,{placeholder:"Example: it is what it is",value:s.quote,onChange:i=>r(dt(i.target.value))})]}),n("div",{className:"flex flex-col",children:[e("label",{className:"label",children:e("span",{className:"label-text text-lg",children:"Tags(comma separated)"})}),e(p,{placeholder:"Example: inspirational,coding,virtue,life",value:s.tags,onChange:i=>r(ut(i.target.value))})]}),e("button",{className:"btn",onClick:o,disabled:t.buttonDisabled,children:t.buttonText})]})})})})}function pt(){const t=b(s=>s.postQuote),a=b(s=>s.userData.data);return e("div",{className:"flex-1 flex items-center flex-col w-full p-2",children:e("div",{className:"w-full flex flex-col items-center",children:e(se,{title:"Preview",children:e(ft,{children:n("div",{className:"flex flex-col rounded-lg shadow-md",children:[e(gt,{states:t}),e(xt,{states:t}),e(bt,{user:a})]})})})})})}function ft({children:t}){return e("div",{className:"flex flex-col space-y-4 w-11/12 py-4",children:t})}function gt({states:t}){return n("div",{className:"flex flex-col p-2 break-all",children:[e(K,{className:"h-8 w-8"}),e("p",{className:"text-2xl self-center text-center",children:t.quote}),e(V,{className:"h-8 w-8 self-end"})]})}function xt({states:t}){return e("div",{className:"grid grid-cols-5 gap-2 break-all p-2 bg-gray-100",children:t.tags?t.tags.map((a,s)=>n("p",{children:["#",a]},s+1)):e("p",{children:"#"})})}function bt({user:t}){return e("div",{className:"bg-gray-700 py-2 rounded-b-lg shadow-md px-4",children:n("div",{className:"flex flex-row items-center justify-between",children:[n("div",{className:"flex flex-row space-x-2 items-center",children:[e("span",{className:"px-6 py-4 bg-gray-900 rounded-full font-bold capitalize text-white",children:t.name.slice(0,1)}),n("div",{className:"flex flex-col text-white",children:[e("p",{children:t.email}),e("p",{children:t.name})]})]}),n("div",{className:"flex flex-row items-center space-x-2",children:[e("button",{className:"btn rounded-full bg-gray-700 border-0 px-3",children:e(W,{className:"h-6 w-6"})}),e("span",{className:"text-white font-bold",children:"1"})]})]})})}function wt(){return n("div",{className:"flex flex-col lg:flex-row",children:[e(ht,{}),e(pt,{})]})}function vt(){return n("div",{children:[e(R,{}),e(wt,{})]})}function yt(){const t=b(a=>a.userData.data);return n("div",{children:[e(R,{}),e("div",{className:"flex flex-col items-center mt-4",children:n("div",{className:"bg-white shadow px-2 py-4 rounded-lg w-full lg:w-96 space-y-4",children:[e("h1",{className:"text-center font-mono text-lg",children:"Profile"}),e(p,{placeholder:t==null?void 0:t.name,disabled:!0}),e(p,{placeholder:t==null?void 0:t.email,disabled:!0}),e(p,{placeholder:t==null?void 0:t.gender,disabled:!0})]})})]})}function Nt(){const[t,a]=x.exports.useState({page:1,limit:6}),{tagName:s}=ve(),{data:r,isFetching:l}=X({page:t.page,limit:t.limit,tag:s});if(l)return e(te,{});let o=[];for(let i=1;i<=r.numberOfPages;i++)o.push(i);return n("div",{children:[e("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-3 p-2",children:e(Z,{data:r.data})}),e(ee,{state:t,setState:a,totalPage:o})]})}function St(){return n("div",{children:[e(R,{}),e(Nt,{})]})}function kt(){const t=b(r=>r.userData.data),a=Q(),s=ye();return x.exports.useEffect(()=>{s.pathname==="/"&&a(Ue())},[s.pathname]),n(Ne,{children:[e(w,{path:"*",element:e(S,{to:"/"})}),e(w,{path:"/",element:e(it,{})}),e(w,{path:"/auth/login",element:t?e(S,{to:"/"}):e(Ve,{})}),e(w,{path:"/auth/register",element:t?e(S,{to:"/"}):e(Ye,{})}),e(w,{path:"/post-quote",element:t?e(vt,{}):e(S,{to:"/"})}),e(w,{path:"/profile",element:t?e(yt,{}):e(S,{to:"/"})}),e(w,{path:"/tag/:tagName",element:e(St,{})})]})}const Dt={key:"userData",version:1,storage:Ee},Pt=Se(Dt,Ge),le=ke({reducer:{userData:Pt,postQuote:mt,[q.reducerPath]:q.reducer},middleware:t=>t({serializableCheck:{ignoredActions:[De,Pe,Te,Le,Ce,Qe]}}).concat(q.middleware)});let Tt=qe(le);Re.render(e($e.StrictMode,{children:e(Fe,{children:e(Oe,{store:le,children:n(Be,{loading:null,persistor:Tt,children:[e(kt,{}),e(Ie,{})]})})})}),document.getElementById("root"));