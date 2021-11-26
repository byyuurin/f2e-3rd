import{_ as S,a as V}from"./baseline-arrow-back-ios-new.bd4a64d1.js";import{_ as z}from"./bxs-time-five.7c6363a3.js";import{_ as I}from"./location-filled.45316623.js";import{_ as L}from"./index.e781e679.js";import{d as O,e as G,q as e,b as H,h as K,a as M,g as E,o as i,s as c,t,y as l,z as J,B as n,E as _,G as d,K as Q}from"./vendor.b01bb05d.js";import{i as W,u as X}from"./index.13d9e0a9.js";const Y={class:"p-4 m-auto max-w-screen-2xl text-true-gray-600 dark:text-true-gray-400"},Z={class:"flex items-center w-full"},tt=["textContent"],et={class:"flex flex-wrap py-4 w-full"},st={class:"w-full py-4 md:w-1/2"},ot=["src","alt"],nt={key:1,class:"flex justify-center items-center min-h-120 rounded-md text-2xl text-true-gray-500 bg-true-gray-200 dark:bg-dark-50"},at={class:"w-full flex flex-col py-4 md:w-1/2"},lt=["textContent"],rt={class:"flex flex-wrap mt-4 md:mx-4 px-4 py-2 shadow-md text-true-gray-600 dark:text-true-gray-300 bg-true-gray-100 dark:bg-dark-100 rounded-sm"},it={class:"flex items-center py-2 <sm:w-full sm:min-w-1/2"},ct=["textContent"],ut={class:"flex items-center py-2 <sm:w-full sm:min-w-1/2"},_t=["textContent"],dt={class:"flex items-center py-2 <sm:w-full sm:min-w-1/2"},mt=["href"],xt=["textContent"],pt={class:"w-full py-4 md:w-1/2"},ft=t("h3",{class:"text-2xl leading-10 dark:text-light-900"},"\u505C\u8ECA\u8CC7\u8A0A",-1),ht=["textContent"],wt={class:"w-full py-4 md:w-1/2 md:px-4"},gt=["src"],Bt=O({setup(vt){const u=W(),m=G(e(u==null?void 0:u.title)||""),x="tourism-restaurant",p=H(),N=K(),o=X("Tourism").request("/Restaurant",{$top:1,$filter:`ID eq '${N.params.id}'`});M({title:m}),o.onFetchFinally(()=>{var a;((a=o.data.value)==null?void 0:a.length)?m.value=`${o.data.value[0].Name} - \u53F0\u7063\u65C5\u904A\u666F\u9EDE\u5C0E\u89BD`:p.replace({name:x})}),o.execute();const s=E(()=>o.data.value&&o.data.value[0]),f=E(()=>{if(!s.value)return null;const{PositionLat:a,PositionLon:r}=s.value.Position||{};return`https://maps.google.com/maps?q=${a},${r}&z=18&ie=UTF8&output=embed`});return(a,r)=>{var h,w,g,v,y,C,k,b,P,$,j,A,B,D;const F=V,q=L,R=I,T=z,U=S;return i(),c("div",Y,[t("div",Z,[l(q,{onClick:r[0]||(r[0]=Ct=>e(p).push({name:x}))},{content:J(()=>[l(F)]),_:1}),t("h2",{class:"flex-grow px-4 text-2xl dark:text-light-900",textContent:n((h=e(s))==null?void 0:h.Name)},null,8,tt)]),t("div",et,[t("div",st,[((g=(w=e(s))==null?void 0:w.Picture)==null?void 0:g.PictureUrl1)?(i(),c("img",{key:0,class:"w-full max-w-full rounded-md pointer-events-none",src:(v=e(s).Picture)==null?void 0:v.PictureUrl1,alt:(y=e(s).Picture)==null?void 0:y.PictureDescription1},null,8,ot)):(i(),c("div",nt," \u66AB\u7121\u5716\u7247 "))]),t("div",at,[t("p",{class:"flex-grow text-base md:px-4",textContent:n((C=e(s))==null?void 0:C.Description)},null,8,lt),t("div",rt,[_(t("div",it,[l(R,{class:"flex-shrink-0 text-xl text-orange-400 dark:text-yellow-300"}),t("span",{class:"px-4",textContent:n((k=e(s))==null?void 0:k.Address)},null,8,ct)],512),[[d,(b=e(s))==null?void 0:b.Address]]),_(t("div",ut,[l(T,{class:"flex-shrink-0 text-xl text-orange-400 dark:text-yellow-300"}),t("span",{class:"px-4",textContent:n((P=e(s))==null?void 0:P.OpenTime)},null,8,_t)],512),[[d,($=e(s))==null?void 0:$.OpenTime]]),_(t("div",dt,[l(U,{class:"flex-shrink-0 text-xl text-orange-400 dark:text-yellow-300"}),t("a",{href:`tel:${(j=e(s))==null?void 0:j.Phone}`},[t("span",{class:"px-4",textContent:n((A=e(s))==null?void 0:A.Phone)},null,8,xt)],8,mt)],512),[[d,(B=e(s))==null?void 0:B.Phone]])])]),t("div",pt,[ft,t("p",{textContent:n(((D=e(s))==null?void 0:D.ParkingInfo)||"\u66AB\u7121\u8CC7\u6599")},null,8,ht)]),t("div",wt,[e(f)?(i(),c("iframe",{key:0,class:"w-full h-full h-120 rounded-sm overflow-hidden",src:e(f),frameborder:"0"},null,8,gt)):Q("",!0)])])])}}});export{Bt as default};
