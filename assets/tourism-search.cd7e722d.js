var Q=Object.defineProperty,W=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var D=(t,e,s)=>e in t?Q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,f=(t,e)=>{for(var s in e||(e={}))Z.call(e,s)&&D(t,s,e[s]);if(S)for(var s of S(e))ee.call(e,s)&&D(t,s,e[s]);return t},E=(t,e)=>W(t,X(e));import{o as d,m as _,n,d as z,z as L,f as w,A as M,H as te,l as v,F as R,s as V,x as C,D as P,y as B,t as g,E as b,I as j,J as se,K as k,L as T,e as ne,M as ae,w as A,B as le,G as q}from"./vendor.4a1ab756.js";import{_ as oe}from"./index.0b970818.js";import{u as ue}from"./index.2fd07e63.js";const ie={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 380 790"},re=n("path",{d:"M65 8l311 311L65 630L0 564l245-245L0 74z",fill:"currentColor"},null,-1),ce=[re];function de(t,e){return d(),_("svg",ie,ce)}var _e={name:"il-arrow-right",render:de};const pe={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},me=n("path",{d:"M7 21l7.9-18H17L9.1 21H7z",fill:"currentColor"},null,-1),he=[me];function ve(t,e){return d(),_("svg",pe,he)}var ge={name:"mdi-slash-forward",render:ve};const fe={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 380 790"},xe=n("path",{d:"M311 630L0 319L311 8l65 66l-245 245l245 245z",fill:"currentColor"},null,-1),ye=[xe];function we(t,e){return d(),_("svg",fe,ye)}var be={name:"il-arrow-left",render:we};const $e={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 384 512"},Ce=n("path",{d:"M80.95 472.23c-4.28 17.16 6.14 34.53 23.28 38.81c2.61.66 5.22.95 7.8.95c14.33 0 27.37-9.7 31.02-24.23l25.24-100.97l-52.78-52.78l-34.56 138.22zm14.89-196.12L137 117c2.19-8.42-3.14-16.95-11.92-19.06c-43.88-10.52-88.35 15.07-99.32 57.17L.49 253.24c-2.19 8.42 3.14 16.95 11.92 19.06l63.56 15.25c8.79 2.1 17.68-3.02 19.87-11.44zM368 160h-16c-8.84 0-16 7.16-16 16v16h-34.75l-46.78-46.78C243.38 134.11 228.61 128 212.91 128c-27.02 0-50.47 18.3-57.03 44.52l-26.92 107.72a32.012 32.012 0 0 0 8.42 30.39L224 397.25V480c0 17.67 14.33 32 32 32s32-14.33 32-32v-82.75c0-17.09-6.66-33.16-18.75-45.25l-46.82-46.82c.15-.5.49-.89.62-1.41l19.89-79.57l22.43 22.43c6 6 14.14 9.38 22.62 9.38h48v240c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16V176c.01-8.84-7.15-16-15.99-16zM240 96c26.51 0 48-21.49 48-48S266.51 0 240 0s-48 21.49-48 48s21.49 48 48 48z",fill:"currentColor"},null,-1),ke=[Ce];function Ee(t,e){return d(),_("svg",$e,ke)}var ze={name:"fa-solid-hiking",render:Ee};const Me={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Be=n("path",{d:"M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z",fill:"currentColor"},null,-1),Ae=[Be];function Fe(t,e){return d(),_("svg",Me,Ae)}var Se={name:"ic-round-arrow-drop-down",render:Fe};const H={small:"h-10",medium:"h-12",large:"h-14"},Y={small:"text-sm",medium:"text-base",large:"text-2xl"},De={class:"group relative inline-flex items-center bg-white overflow-hidden rounded-md shadow-md"},Le=["value","textContent"],Re={class:"absolute top-[50%] right-0 transform -translate-x-[50%] -translate-y-[50%] inline-flex items-center"},Ve={name:"UiSelect"};function Pe(t){const e=t,s=L(e,"value"),x=w(()=>{const l=["flex-grow","px-3","pr-8","w-full","truncate","text-current","bg-transparent","outline-none","appearance-none","cursor-pointer"];return l.push(Y[e.size]),l.push(H[e.size]),l});return(l,a)=>{const o=Se;return d(),_("div",De,[M(n("select",{"onUpdate:modelValue":a[0]||(a[0]=u=>P(s)?s.value=u:null),class:B(v(x))},[(d(!0),_(R,null,V(e.options,u=>(d(),_("option",{key:u.value,value:u.value,textContent:C(u.label)},null,8,Le))),128))],2),[[te,v(s)]]),n("span",Re,[g(o)])])}}const je=z(E(f({},Ve),{props:{size:{default:"medium"},value:null,options:null},setup:Pe})),Te={class:"inline-flex items-center bg-white overflow-hidden rounded-md shadow-md"},qe={key:0,m:"-r-1",p:"x-3 r-0",class:"inline-flex justify-center items-center"},He=["type","placeholder"],Ye={key:0,m:"-l-1",p:"x-3 l-0",class:"inline-flex justify-center items-center"},Ke={name:"UiInput"};function Ne(t){const e=t,s=L(e,"value"),x=w(()=>{const l=["flex-grow","px-3","truncate","text-current","bg-transparent","outline-none"];return l.push(Y[e.size]),l.push(H[e.size]),l});return(l,a)=>(d(),_("div",Te,[b(l.$slots,"prepend",{},()=>[l.$slots.prefix?(d(),_("div",qe,[b(l.$slots,"prefix")])):j("",!0)]),M(n("input",{"onUpdate:modelValue":a[0]||(a[0]=o=>P(s)?s.value=o:null),class:B(v(x)),type:e.type,placeholder:e.placeholder},null,10,He),[[se,v(s)]]),b(l.$slots,"append",{},()=>[l.$slots.suffix?(d(),_("div",Ye,[b(l.$slots,"suffix")])):j("",!0)])]))}const Ue=z(E(f({},Ke),{props:{type:{default:"text"},size:{default:"medium"},value:null,placeholder:{default:""}},setup:Ne})),Ie={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Oe=n("path",{d:"M10.5 16.5a6 6 0 1 0 0-12a6 6 0 0 0 0 12zm6.32-1.094l3.58 3.58a1 1 0 1 1-1.415 1.413l-3.58-3.58a8 8 0 1 1 1.414-1.414z",fill:"currentColor"},null,-1),Ge=[Oe];function Je(t,e){return d(),_("svg",Ie,Ge)}var Qe={name:"jam-search",render:Je};const We=[{label:"\u4E0D\u5206\u7E23\u5E02",value:""},{label:"\u81FA\u5317\u5E02",value:"Taipei"},{label:"\u65B0\u5317\u5E02",value:"NewTaipei"},{label:"\u6843\u5712\u5E02",value:"Taoyuan"},{label:"\u81FA\u4E2D\u5E02",value:"Taichung"},{label:"\u81FA\u5357\u5E02",value:"Tainan"},{label:"\u9AD8\u96C4\u5E02",value:"Kaohsiung"},{label:"\u57FA\u9686\u5E02",value:"Keelung"},{label:"\u65B0\u7AF9\u5E02",value:"Hsinchu"},{label:"\u65B0\u7AF9\u7E23",value:"HsinchuCounty"},{label:"\u82D7\u6817\u7E23",value:"MiaoliCounty"},{label:"\u5F70\u5316\u7E23",value:"ChanghuaCounty"},{label:"\u5357\u6295\u7E23",value:"NantouCounty"},{label:"\u96F2\u6797\u7E23",value:"YunlinCounty"},{label:"\u5609\u7FA9\u7E23",value:"ChiayiCounty"},{label:"\u5609\u7FA9\u5E02",value:"Chiayi"},{label:"\u5C4F\u6771\u7E23",value:"PingtungCounty"},{label:"\u5B9C\u862D\u7E23",value:"YilanCounty"},{label:"\u82B1\u84EE\u7E23",value:"HualienCounty"},{label:"\u81FA\u6771\u7E23",value:"TaitungCounty"},{label:"\u91D1\u9580\u7E23",value:"KinmenCounty"},{label:"\u6F8E\u6E56\u7E23",value:"PenghuCounty"},{label:"\u9023\u6C5F\u7E23",value:"LienchiangCounty"}],Xe=t=>f({immediate:!0,loading:!1,page:1,size:20,total:0},t),Ze=t=>t(),et=()=>{const t=k({keyword:"",city:""}),e=(a,o)=>{a.value.immediate=!1,a.value.page=o.page,a.value.size=o.size,t.value.keyword=o.keyword,t.value.city=o.city},s=(a,o={},u={})=>{const r=f(f({page:1,size:20},t.value),o),p=a.join(" and ");return{searchParams:f({$top:r.size,$skip:(r.page-1)*r.size,$filter:p},u),summaryParams:{$filter:p},options:r}},x=a=>{const{state:o,searchRequest:u,summaryRequest:r,conditions:p,queryOptions:m,overwrite:y}=a,{searchParams:i,summaryParams:c,options:$}=s(p,m,y);u(i),$.page===1&&r(c),e(o,$)},l=Ze(()=>{const a=ue("Tourism"),o=a.request("/ScenicSpot",{$select:"ID"}),u=a.request("/ScenicSpot",{}),r=k(Xe({data:u.data}));return T(()=>{var p,m;r.value.loading=u.isFetching.value,r.value.total=(m=(p=o.data.value)==null?void 0:p.length)!=null?m:r.value.total}),{state:r,query:(p,m={})=>x({state:r,conditions:p,queryOptions:m,searchRequest:u.reload,summaryRequest:o.reload,overwrite:{$orderby:"UpdateTime desc"}})}});return{global:t,scenicSpot:l}};var K=et();const tt={class:"m-2 mx-5 p-4 py-18 text-center rounded-md select-none bg-gradient-to-br from-yellow-200 to-light-100 dark:from-indigo-700 dark:to-violet-500"},st=n("div",{class:"py-4 text-4xl"},[n("span",{class:"text-violet-700 dark:text-yellow-300"},"\u63A2\u7D22"),n("span",{class:"px-2 text-dark-500 dark:text-light-50"},"\u60A8\u60F3\u53BB\u7684\u5730\u65B9")],-1),nt=["onKeyup"],at={class:"m-2 w-full sm:w-auto flex-grow"},lt={class:"m-2 w-full sm:w-auto"},ot={class:"p-5 px-7 m-auto max-w-screen-2xl text-dark-700 dark:text-light-900"},ut={class:"flex items-center p-2 select-none text-2xl"},it={class:"pr-2"},rt=q(" \u5171\u6709"),ct=["textContent"],dt=q("\u7B46\u641C\u5C0B\u7D50\u679C "),_t={class:"sticky z-5 bottom-0 flex justify-center items-center p-2 py-4 text-center children:mx-1 whitespace-nowrap bg-light-50 dark:bg-dark-300"},pt={class:"relative px-2 flex-shrink-0 flex items-center rounded-md overflow-hidden select-none bg-true-gray-200 bg-opacity-50 dark:bg-dark-100 shadow-sm dark:shadow-light-900"},mt=["value"],ht=["value"],vt={class:"px-2"},wt=z({props:{loading:{default:!1},total:{default:0},pagination:{default:()=>({page:1,size:10})}},emits:["search","page-change"],setup(t,{emit:e}){const s=t,x=We.map(i=>i.value?{label:i.label,value:i.label}:i),l=ne(),a=k(f({module:l.path.replace(/\/tourism\//,"")},v(K.global))),o=k(!1);T(()=>{s.loading?o.value=!0:setTimeout(()=>{o.value=!1},250)});const u=w(()=>Math.ceil(s.total/s.pagination.size)),r=w(()=>s.pagination.page>1),p=w(()=>s.pagination.page<u.value),m=()=>{const{keyword:i,city:c}=a.value;K.global.value={keyword:i,city:c},e("search",{keyword:i,city:c})},y=i=>{i==="prev"&&r.value&&e("page-change",s.pagination.page-1),i==="next"&&p.value&&e("page-change",s.pagination.page+1),typeof i!="string"&&e("page-change",+i.target.value)};return(i,c)=>{const $=Qe,N=Ue,U=je,I=ze,O=be,F=oe,G=ge,J=_e;return d(),_("div",{class:B(["with-overlay",{"is-active":o.value}])},[n("div",tt,[st,n("div",{class:"mx-auto max-w-screen-sm flex flex-col sm:flex-row items-center text-dark-700",onKeyup:ae(m,["enter"])},[n("div",at,[g(N,{value:a.value.keyword,"onUpdate:value":c[0]||(c[0]=h=>a.value.keyword=h),class:"w-full",placeholder:"\u641C\u5C0B\u95DC\u9375\u5B57"},{suffix:A(()=>[n("div",{class:"inline-flex justify-center items-center h-8 w-8 rounded-md text-light-50 bg-gradient-to-br from-yellow-400 to-yellow-500 cursor-pointer",onClick:m},[g($)])]),_:1},8,["value"])]),n("div",lt,[g(U,{value:a.value.city,"onUpdate:value":[c[1]||(c[1]=h=>a.value.city=h),m],options:v(x),class:"w-full"},null,8,["value","options"])])],40,nt)]),n("div",ot,[n("div",ut,[n("span",it,[g(I)]),rt,n("span",{class:"px-2 text-yellow-300",textContent:C(s.total)},null,8,ct),dt]),b(i.$slots,"default"),M(n("div",_t,[g(F,{class:"text-small",disabled:!v(r),onClick:c[2]||(c[2]=h=>y("prev"))},{content:A(()=>[g(O)]),_:1},8,["disabled"]),n("div",pt,[n("select",{value:t.pagination.page,class:"h-9 m-1 px-4 text-current text-center outline-none rounded-md appearance-none bg-light-50 dark:bg-dark-400",onChange:c[3]||(c[3]=h=>y(h))},[(d(!0),_(R,null,V(v(u),h=>(d(),_("option",{key:h,class:"bg-light-50 text-dark-900 dark:bg-dark-400 dark:text-true-gray-400",value:h},C(h),9,ht))),128))],40,mt),g(G),n("div",vt,C(v(u)),1)]),g(F,{class:"text-small",disabled:!v(p),onClick:c[4]||(c[4]=h=>y("next"))},{content:A(()=>[g(J)]),_:1},8,["disabled"])],512),[[le,v(u)>1]])])],2)}}});export{wt as _,K as s};
