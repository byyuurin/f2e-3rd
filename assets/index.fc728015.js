import{_ as x,a as j}from"./photo-card.d730af50.js";import{d as w,e as P,b,g as k,o as f,c as C,z as D,q as e,t as $,s as g,x as B,F as L,y as N}from"./vendor.808645c9.js";import{b as R,c as q}from"./index.f2f46a64.js";import"./index.a9a2fc90.js";import"./index.4b808e68.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./bxs-time-five.7e1083aa.js";import"./location-filled.053275ae.js";var _={};const z=w({setup(M){const a=R(),p=P(),y=b(),n=q(),c=k(()=>({isLoading:e(a.activity.isLoading),state:e(a.activity.state),items:e(a.activity.data),total:e(a.activity.total)})),d=(o,r=1)=>{const s=["City ne null","Description ne null"],{keyword:i,city:t}=e(o);t&&s.push(`City eq '${t}'`),i&&s.push(`contains(Name, '${i}')`),a.activity.query(s,{page:r})},u=(o,r=1)=>d(o,r),h=o=>{var i,t,l;d(a.global,o);const r=(t=(i=p.value)==null?void 0:i.offsetParent)==null?void 0:t.offsetTop,s=((l=p.value)==null?void 0:l.offsetTop)||0;n==null||n.top(!0,{top:r+s-52})},v=o=>{n==null||n.top(!1),y.push({name:"tourism-activity-id",params:{id:o}})};return a.activity.state.value.immediate&&u(a.global),(o,r)=>{const s=j,i=x;return f(),C(i,{loading:e(c).isLoading,total:e(c).total,pagination:{page:e(c).state.page,size:e(c).state.size},class:"text-orange-200",onSearch:u,onPageChange:h},{default:D(()=>[$("div",{ref_key:"wrapperRef",ref:p,class:"flex flex-wrap items-stretch"},[(f(!0),g(L,null,B(e(c).items,t=>{var l,m;return f(),g("div",{key:t.ID,class:"group w-full p-2 md:max-w-1/2 xl:max-w-1/3 2xl:max-w-1/4 select-none"},[N(s,{src:(l=t.Picture)==null?void 0:l.PictureUrl1,alt:(m=t.Picture)==null?void 0:m.PictureDescription1,title:t.Name,description:t.Description,city:t.City,onMore:S=>v(t.ID)},null,8,["src","alt","title","description","city","onMore"])])}),128))],512)]),_:1},8,["loading","total","pagination"])}}});typeof _=="function"&&_(z);export{z as default};
