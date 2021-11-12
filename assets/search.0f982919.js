var _=Object.defineProperty;var c=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var d=(a,e,u)=>e in a?_(a,e,{enumerable:!0,configurable:!0,writable:!0,value:u}):a[e]=u,v=(a,e)=>{for(var u in e||(e={}))b.call(e,u)&&d(a,u,e[u]);if(c)for(var u of c(e))x.call(e,u)&&d(a,u,e[u]);return a};import{o as s,l as i,m as l,E as g,d as C,e as w,F as f,z as h,G as k,H as F,x as p,I as B,q as A,J as D,K as M,L as K,M as S,B as T}from"./vendor.4a872063.js";const j={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},z=l("path",{d:"M10.5 16.5a6 6 0 1 0 0-12a6 6 0 0 0 0 12zm6.32-1.094l3.58 3.58a1 1 0 1 1-1.415 1.413l-3.58-3.58a8 8 0 1 1 1.414-1.414z",fill:"currentColor"},null,-1),H=[z];function N(a,e){return s(),i("svg",j,H)}var V={name:"jam-search",render:N};const y=g("saved-search",{keyword:"",city:""}),$=[{label:"\u4E0D\u5206\u7E23\u5E02",value:""},{label:"\u81FA\u5317\u5E02",value:"Taipei"},{label:"\u65B0\u5317\u5E02",value:"NewTaipei"},{label:"\u6843\u5712\u5E02",value:"Taoyuan"},{label:"\u81FA\u4E2D\u5E02",value:"Taichung"},{label:"\u81FA\u5357\u5E02",value:"Tainan"},{label:"\u9AD8\u96C4\u5E02",value:"Kaohsiung"},{label:"\u57FA\u9686\u5E02",value:"Keelung"},{label:"\u65B0\u7AF9\u5E02",value:"Hsinchu"},{label:"\u65B0\u7AF9\u7E23",value:"HsinchuCounty"},{label:"\u82D7\u6817\u7E23",value:"MiaoliCounty"},{label:"\u5F70\u5316\u7E23",value:"ChanghuaCounty"},{label:"\u5357\u6295\u7E23",value:"NantouCounty"},{label:"\u96F2\u6797\u7E23",value:"YunlinCounty"},{label:"\u5609\u7FA9\u7E23",value:"ChiayiCounty"},{label:"\u5609\u7FA9\u5E02",value:"Chiayi"},{label:"\u5C4F\u6771\u7E23",value:"PingtungCounty"},{label:"\u5B9C\u862D\u7E23",value:"YilanCounty"},{label:"\u82B1\u84EE\u7E23",value:"HualienCounty"},{label:"\u81FA\u6771\u7E23",value:"TaitungCounty"},{label:"\u91D1\u9580\u7E23",value:"KinmenCounty"},{label:"\u6F8E\u6E56\u7E23",value:"PenghuCounty"},{label:"\u9023\u6C5F\u7E23",value:"LienchiangCounty"}],L={class:"m-2 mx-5 p-4 py-18 text-center rounded-md bg-gradient-to-br from-yellow-200 to-light-100 dark:from-indigo-700 dark:to-violet-500"},Y=l("div",{class:"py-4 text-4xl"},[l("span",{class:"text-violet-700 dark:text-yellow-300"},"\u63A2\u7D22"),l("span",{class:"px-2 text-dark-500 dark:text-light-50"},"\u60A8\u60F3\u53BB\u7684\u5730\u65B9")],-1),P=["onKeyup"],R={class:"m-2 relative inline-block rounded-md overflow-hidden flex-grow"},U={class:"m-2 inline-block rounded-md overflow-hidden"},q=["value"],G={class:"p-2 px-5"},O=C({emits:["search"],setup(a,{emit:e}){const u=w(),n=f(v({module:u.path.replace(/\/tourism\//,"")},h(y))),r=()=>{y.value={keyword:n.value.keyword,city:n.value.city},e("search")};return k(()=>{e("search")}),(m,o)=>{const E=V;return s(),i("div",null,[l("div",L,[Y,l("div",{class:"mx-auto max-w-screen-sm flex items-center text-dark-700",onKeyup:F(r,["enter"])},[l("div",R,[p(l("input",{"onUpdate:modelValue":o[0]||(o[0]=t=>n.value.keyword=t),class:"w-full h-12 px-3 pr-12 text-xl text-current outline-none truncate",type:"text",placeholder:"\u641C\u5C0B\u95DC\u9375\u5B57"},null,512),[[B,n.value.keyword]]),l("div",{class:"absolute z-1 top-2 right-2 inline-flex justify-center items-center h-8 w-8 rounded-md text-light-50 bg-gradient-to-br from-yellow-400 to-yellow-500 cursor-pointer",onClick:r},[A(E)])]),l("div",U,[p(l("select",{"onUpdate:modelValue":o[1]||(o[1]=t=>n.value.city=t),class:"w-full px-2 h-12 text-current outline-none appearance-none"},[(s(!0),i(M,null,K(h($),t=>(s(),i("option",{key:t.value,value:t.value},S(t.label),9,q))),128))],512),[[D,n.value.city]])])],40,P)]),l("div",G,[T(m.$slots,"default")])])}}});export{O as _,$ as c,y as s};
