const n=(a,u)=>{a.indexOf(u)===-1&&a.push(u)},s=a=>{const u=e=>+e.replace(/(.*~)?(\d+).*/,"$2")||0;return a.sort((e,o)=>{const r=u(e),c=u(o);return r-c})},t=a=>{const u=/^\u4e0d\u9650/,[e,...o]=a,r=e.replace(u,"");return[e,...s(o)].map(c=>({label:u.test(c)?c:`${r}: ${c}`,value:u.test(c)?"":c}))},d=(a=[])=>{const u={job:["\u4E0D\u9650\u8077\u7A31"],gender:["\u4E0D\u9650\u6027\u5225"],age:["\u4E0D\u9650\u5E74\u9F61"],major:["\u4E0D\u9650\u79D1\u7CFB"],education:["\u4E0D\u9650\u5B78\u6B77"],industry:["\u4E0D\u9650\u7522\u696D\u985E\u578B"],work:["\u4E0D\u9650\u5DE5\u4F5C\u578B\u614B"],area:["\u4E0D\u9650\u516C\u53F8\u4F4D\u7F6E"],scale:["\u4E0D\u9650\u516C\u53F8\u898F\u6A21\u4EBA\u6578"],people:["\u4E0D\u9650\u76F8\u540C\u8077\u4F4D\u4EBA\u6578"]};return a.forEach(e=>{n(u.industry,e.company.industry),n(u.work,e.company.work),n(u.area,e.company.area),n(u.scale,e.company.scale),n(u.people,e.company.people),Object.keys(e).forEach(o=>{const r=e[o];typeof r=="string"&&(o==="job"&&n(u.job,r),o==="gender"&&n(u.gender,r),o==="age"&&n(u.age,r),o==="major"&&n(u.major,r),o==="education"&&n(u.education,r))})}),{job:t(u.job),gender:t(u.gender),age:t(u.age),major:t(u.major),education:t(u.education),industry:t(u.industry),work:t(u.work),area:t(u.area),scale:t(u.scale),people:t(u.people)}};export{d as createSelectOptions};