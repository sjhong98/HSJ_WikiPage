"use strict";exports.id=63,exports.ids=[63],exports.modules={2063:(e,s,r)=>{r.r(s),r.d(s,{default:()=>Tool});var t=r(997),n=r(1163),l=r(2602);function Tool(e){let s=(0,n.useRouter)(),r=e.func;return(0,t.jsxs)("div",{className:"flex justify-between items-center w-full h-[10vh]",children:[t.jsx("div",{}),(0,t.jsxs)("div",{className:"flex",children:[t.jsx(l.Btn,{msg:"create"===r?"작성":"수정",onClick:"create"===r?()=>{s.push("/board/create")}:()=>{let e=s.query.id;s.push(`/board/post/${e}/modify`)}}),"create"===r?t.jsx(t.Fragment,{}):t.jsx(l.Btn,{msg:"목록으로",onClick:()=>{s.push("/")}})]})]})}},2602:(e,s,r)=>{r.r(s),r.d(s,{Btn:()=>Btn});var t=r(997);function Btn(e){return t.jsx("div",{className:"center items-center w-[5vw] h-[5vh] border rounded-lg hover nnn ml-3",onClick:()=>e.onClick(),children:t.jsx("p",{className:"text-gray-500",children:e.msg})})}}};