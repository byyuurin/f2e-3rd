import{_ as x,a as b}from"./photo-card.691ea45d.js";import{d as j,e as w,b as P,g as C,o as d,c as k,z as D,q as e,t as $,s as g,x as B,F as L,y as N}from"./vendor.b01bb05d.js";import{b as R,c as q}from"./index.13d9e0a9.js";import"./index.e781e679.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./bxs-time-five.7c6363a3.js";import"./location-filled.45316623.js";var h={};const z=j({setup(M){const a=R(),p=w(),y=P(),r=q(),l=C(()=>({isLoading:e(a.activity.isLoading),state:e(a.activity.state),items:e(a.activity.data),total:e(a.activity.total)})),f=(o,c=1)=>{const s=["City ne null","Description ne null"],{keyword:i,city:t}=e(o);t&&s.push(`City eq '${t}'`),i&&s.push(`contains(Name, '${i}')`),a.activity.query(s,{page:c})},u=(o,c=1)=>f(o,c),_=o=>{var i,t,n;f(a.global,o);const c=(t=(i=p.value)==null?void 0:i.offsetParent)==null?void 0:t.offsetTop,s=((n=p.value)==null?void 0:n.offsetTop)||0;r==null||r.top(!0,{top:c+s-52})},v=o=>{r==null||r.top(!1),y.push({name:"tourism-activity-id",params:{id:o}})};return a.activity.state.value.immediate&&u(a.global),(o,c)=>{const s=b,i=x;return d(),k(i,{loading:e(l).isLoading,total:e(l).total,pagination:{page:e(l).state.page,size:e(l).state.size},class:"text-orange-200",onSearch:u,onPageChange:_},{default:D(()=>[$("div",{ref:(t,n)=>{n.wrapperRef=t,p.value=t},class:"flex flex-wrap items-stretch"},[(d(!0),g(L,null,B(e(l).items,t=>{var n,m;return d(),g("div",{key:t.ID,class:"group w-full p-2 md:max-w-1/2 xl:max-w-1/3 2xl:max-w-1/4 select-none"},[N(s,{src:(n=t.Picture)==null?void 0:n.PictureUrl1,alt:(m=t.Picture)==null?void 0:m.PictureDescription1,title:t.Name,description:t.Description,city:t.City,onMore:S=>v(t.ID)},null,8,["src","alt","title","description","city","onMore"])])}),128))],512)]),_:1},8,["loading","total","pagination"])}}});typeof h=="function"&&h(z);export{z as default};
