import{_ as j,a as v}from"./photo-card.d730af50.js";import{d as w,e as S,b as P,g as b,o as f,c as k,z as C,q as t,t as D,s as g,x as $,F as B,y as L}from"./vendor.808645c9.js";import{b as N,c as R}from"./index.f2f46a64.js";import"./index.a9a2fc90.js";import"./index.4b808e68.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./bxs-time-five.7e1083aa.js";import"./location-filled.053275ae.js";var _={};const q=w({setup(z){const o=N(),l=S(),h=P(),c=R(),i=b(()=>({isLoading:t(o.scenicSpot.isLoading),state:t(o.scenicSpot.state),items:t(o.scenicSpot.data),total:t(o.scenicSpot.total)})),d=(s,r=1)=>{const a=["City ne null","Description ne null"],{keyword:n,city:e}=t(s);e&&a.push(`City eq '${e}'`),n&&a.push(`contains(Name, '${n}')`),o.scenicSpot.query(a,{page:r})},u=(s,r=1)=>d(s,r),x=s=>{var n,e,p;d(o.global,s);const r=(e=(n=l.value)==null?void 0:n.offsetParent)==null?void 0:e.offsetTop,a=((p=l.value)==null?void 0:p.offsetTop)||0;c==null||c.top(!0,{top:r+a-52})},y=s=>{c==null||c.top(!1),h.push({name:"tourism-scenic-spot-id",params:{id:s}})};return o.scenicSpot.state.value.immediate&&u(o.global),(s,r)=>{const a=v,n=j;return f(),k(n,{loading:t(i).isLoading,total:t(i).total,pagination:{page:t(i).state.page,size:t(i).state.size},class:"text-orange-200",onSearch:u,onPageChange:x},{default:C(()=>[D("div",{ref_key:"wrapperRef",ref:l,class:"flex flex-wrap items-stretch"},[(f(!0),g(B,null,$(t(i).items,e=>{var p,m;return f(),g("div",{key:e.ID,class:"group w-full p-2 md:max-w-1/2 xl:max-w-1/3 2xl:max-w-1/4 select-none"},[L(a,{src:(p=e.Picture)==null?void 0:p.PictureUrl1,alt:(m=e.Picture)==null?void 0:m.PictureDescription1,title:e.Name,description:e.Description,city:e.City,time:e.OpenTime,onMore:M=>y(e.ID)},null,8,["src","alt","title","description","city","time","onMore"])])}),128))],512)]),_:1},8,["loading","total","pagination"])}}});typeof _=="function"&&_(q);export{q as default};
