import{_ as U,a as S}from"./baseline-arrow-back-ios-new.6adf9548.js";import{o as a,s as i,v as t,d as T,e as V,q as e,b as I,h as O,a as H,g as F,x as r,y as J,J as n,C as _,D as d,K}from"./vendor.c1844db1.js";import{_ as Y}from"./location-filled.06068bff.js";import{_ as G}from"./index.45ca7419.js";import{i as Q,u as W}from"./index.759eb667.js";const X={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Z=t("path",{d:"M14.121 10.48a1 1 0 0 0-1.414 0l-.707.706a2 2 0 1 1-2.828-2.828l5.63-5.632a6.5 6.5 0 0 1 6.377 10.568l-2.108 2.135l-4.95-4.95zM3.161 4.468a6.503 6.503 0 0 1 8.009-.938L7.757 6.944a4 4 0 0 0 5.513 5.794l.144-.137l4.243 4.242l-4.243 4.243a2 2 0 0 1-2.828 0L3.16 13.66a6.5 6.5 0 0 1 0-9.192z",fill:"currentColor"},null,-1),tt=[Z];function et(N,c){return a(),i("svg",X,tt)}var st={name:"ri-service-fill",render:et};const ot={class:"p-4 m-auto max-w-screen-2xl text-true-gray-600 dark:text-true-gray-400"},nt={class:"flex items-center w-full"},lt=["textContent"],at={class:"flex flex-wrap py-4 w-full"},it={class:"w-full py-4 md:w-1/2"},rt=["src","alt"],ct={key:1,class:"flex justify-center items-center min-h-120 rounded-md text-2xl text-true-gray-500 bg-true-gray-200 dark:bg-dark-50"},ut={class:"w-full flex flex-col py-4 md:w-1/2"},_t=["textContent"],dt={class:"flex flex-wrap mt-4 md:mx-4 px-4 py-2 shadow-md text-true-gray-600 dark:text-true-gray-300 bg-true-gray-100 dark:bg-dark-100 rounded-sm"},mt={class:"flex items-center py-2 <sm:w-full sm:min-w-1/2"},xt=["textContent"],pt={class:"flex items-center py-2 <sm:w-full sm:min-w-1/2"},ft=["textContent"],ht={class:"flex items-center py-2 <sm:w-full sm:min-w-1/2"},vt=["href"],wt=["textContent"],gt={class:"w-full py-4 md:w-1/2"},yt=t("h3",{class:"text-2xl leading-10 dark:text-light-900"},"\u4EA4\u901A\u65B9\u5F0F",-1),kt=["textContent"],Ct={class:"w-full py-4 md:w-1/2 md:px-4"},bt=["src"],Nt=T({setup(N){const c=Q(),m=V(e(c==null?void 0:c.title)||""),x="tourism-activity",p=I(),z=O(),o=W("Tourism").request("/Activity",{$top:1,$filter:`ActivityID eq '${z.params.id}'`});H({title:m}),o.onFetchFinally(()=>{var l;((l=o.data.value)==null?void 0:l.length)?m.value=`${o.data.value[0].ActivityName} - \u53F0\u7063\u65C5\u904A\u666F\u9EDE\u5C0E\u89BD`:p.replace({name:x})}),o.execute();const s=F(()=>o.data.value&&o.data.value[0]),f=F(()=>{if(!s.value)return null;const{PositionLat:l,PositionLon:u}=s.value.Position||{};return`https://maps.google.com/maps?q=${l},${u}&z=18&ie=UTF8&output=embed`});return(l,u)=>{var h,v,w,g,y,k,C,b,A,P,$,B,D,j;const E=S,M=G,q=Y,L=st,R=U;return a(),i("div",ot,[t("div",nt,[r(M,{onClick:u[0]||(u[0]=Pt=>e(p).push({name:x}))},{content:J(()=>[r(E)]),_:1}),t("h2",{class:"flex-grow px-4 text-2xl dark:text-light-900",textContent:n((h=e(s))==null?void 0:h.ActivityName)},null,8,lt)]),t("div",at,[t("div",it,[((w=(v=e(s))==null?void 0:v.Picture)==null?void 0:w.PictureUrl1)?(a(),i("img",{key:0,class:"w-full max-w-full rounded-md pointer-events-none",src:(g=e(s).Picture)==null?void 0:g.PictureUrl1,alt:(y=e(s).Picture)==null?void 0:y.PictureDescription1},null,8,rt)):(a(),i("div",ct," \u66AB\u7121\u5716\u7247 "))]),t("div",ut,[t("p",{class:"flex-grow text-base md:px-4",textContent:n((k=e(s))==null?void 0:k.Description)},null,8,_t),t("div",dt,[_(t("div",mt,[r(q,{class:"flex-shrink-0 text-xl text-orange-400 dark:text-yellow-300"}),t("span",{class:"px-4",textContent:n((C=e(s))==null?void 0:C.Address)},null,8,xt)],512),[[d,(b=e(s))==null?void 0:b.Address]]),_(t("div",pt,[r(L,{class:"flex-shrink-0 text-xl text-orange-400 dark:text-yellow-300"}),t("span",{class:"px-4",textContent:n((A=e(s))==null?void 0:A.Organizer)},null,8,ft)],512),[[d,(P=e(s))==null?void 0:P.Organizer]]),_(t("div",ht,[r(R,{class:"flex-shrink-0 text-xl text-orange-400 dark:text-yellow-300"}),t("a",{href:`tel:${($=e(s))==null?void 0:$.Phone}`},[t("span",{class:"px-4",textContent:n((B=e(s))==null?void 0:B.Phone)},null,8,wt)],8,vt)],512),[[d,(D=e(s))==null?void 0:D.Phone]])])]),t("div",gt,[yt,t("p",{textContent:n(((j=e(s))==null?void 0:j.TravelInfo)||"\u66AB\u7121\u8CC7\u6599")},null,8,kt)]),t("div",Ct,[e(f)?(a(),i("iframe",{key:0,class:"w-full h-full h-120 rounded-sm overflow-hidden",src:e(f),frameborder:"0"},null,8,bt)):K("",!0)])])])}}});export{Nt as default};
