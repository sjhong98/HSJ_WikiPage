"use strict";exports.id=63,exports.ids=[63],exports.modules={2063:(e,s,t)=>{t.r(s),t.d(s,{default:()=>Tool});var r=t(997),l=t(1163),d=t(2602);function Tool(e){let s=(0,l.useRouter)(),t=e.func;return(0,r.jsxs)("div",{className:"flex justify-between items-center w-full h-[10vh]",children:[r.jsx("div",{}),(0,r.jsxs)("div",{className:"flex",children:[r.jsx(d.default,{msg:"create"===t?"작성":"수정",onClick:"create"===t?()=>{s.push("/board/create")}:()=>{let e=s.query.id;s.push(`/board/post/${e}/modify`)}}),"create"===t?r.jsx(r.Fragment,{}):r.jsx(d.default,{msg:"목록으로",onClick:()=>{s.push("/")}})]})]})}}};