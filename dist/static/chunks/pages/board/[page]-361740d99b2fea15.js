(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[740],{5776:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/board/[page]",function(){return n(3342)}])},2586:function(e,t,n){"use strict";let r,s,o;n.d(t,{i:function(){return p}});var l=n(4480);let c=new Uint8Array(16),u=[];for(let e=0;e<256;++e)u.push((e+256).toString(16).slice(1));let a=0,i=0;var d=n(6983);let f=window.localStorage,{persistAtom:h}=(0,d.J)({key:"post",storage:f}),p=(0,l.cn)({key:"postStore/".concat(function(e,t,n){let l=0,d=t||Array(16),f=(e=e||{}).node||s,h=void 0!==e.clockseq?e.clockseq:o;if(null==f||null==h){let t=e.random||(e.rng||function(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(c)})();null==f&&(f=s=[1|t[0],t[1],t[2],t[3],t[4],t[5]]),null==h&&(h=o=(t[6]<<8|t[7])&16383)}let p=void 0!==e.msecs?e.msecs:Date.now(),g=void 0!==e.nsecs?e.nsecs:i+1,m=p-a+(g-i)/1e4;if(m<0&&void 0===e.clockseq&&(h=h+1&16383),(m<0||p>a)&&void 0===e.nsecs&&(g=0),g>=1e4)throw Error("uuid.v1(): Can't create more than 10M uuids/sec");a=p,i=g,o=h,p+=122192928e5;let v=((268435455&p)*1e4+g)%4294967296;d[l++]=v>>>24&255,d[l++]=v>>>16&255,d[l++]=v>>>8&255,d[l++]=255&v;let y=p/4294967296*1e4&268435455;d[l++]=y>>>8&255,d[l++]=255&y,d[l++]=y>>>24&15|16,d[l++]=y>>>16&255,d[l++]=h>>>8|128,d[l++]=255&h;for(let e=0;e<6;++e)d[l+e]=f[e];return t||function(e,t=0){return u[e[t+0]]+u[e[t+1]]+u[e[t+2]]+u[e[t+3]]+"-"+u[e[t+4]]+u[e[t+5]]+"-"+u[e[t+6]]+u[e[t+7]]+"-"+u[e[t+8]]+u[e[t+9]]+"-"+u[e[t+10]]+u[e[t+11]]+u[e[t+12]]+u[e[t+13]]+u[e[t+14]]+u[e[t+15]]}(d)}()),default:[],effects_UNSTABLE:[h]})},3342:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Board}});var r=n(5893),s=n(1163),o=n(7294),l=n(4480),c=n(2586),u=n(2063),a=n(3464);function Board(){let e=(0,s.useRouter)(),t=(0,l.sJ)(c.i),[n,i]=(0,o.useState)(""),[d,f]=(0,o.useState)(),[h,p]=(0,o.useState)(1);(0,o.useEffect)(()=>{void 0!==e.query.page&&p(parseInt(e.query.page,10))},[e.query]),(0,o.useEffect)(()=>{if(0===t.length)i("게시물이 없습니다");else{let e=(h-1)*5,n=e+5,r=t.slice(e,n);f(r)}},[h,t]);let handleClick=t=>{e.push("/board/post/".concat(t.id))};return(0,r.jsxs)("div",{className:"content",children:[(0,r.jsx)(u.default,{func:"create"}),(0,r.jsxs)("div",{className:"h-[40vh]",children:[(0,r.jsx)("p",{className:"center",children:n}),void 0!==d&&d.map((e,t)=>{if(void 0!==e)return(0,r.jsx)("div",{className:"flex items-center h-[5vh] px-8 mb-6 border rounded-xl hover",onClick:()=>handleClick(e),children:(0,r.jsx)("p",{className:"text-xl nnn",children:null==e?void 0:e.title})},t)})]}),(0,r.jsx)(a.default,{curPage:h,length:t.length-1})]})}},3464:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Paging}});var r=n(5893),s=n(1163),o=n(7294);function Paging(e){let t=(0,s.useRouter)(),n=e.curPage,l=Math.floor(e.length/5),[c,u]=(0,o.useState)(!1),[a,i]=(0,o.useState)(!1),[d,f]=(0,o.useState)(0),[h,p]=(0,o.useState)([]),g="center w-[3vw] h-[3vw] rounded-full border mr-3 hover";(0,o.useEffect)(()=>{f(Math.floor((n-1)/5))},[n]),(0,o.useEffect)(()=>{let t=[];u(!1),i(!1);for(let e=1;e<6;e++)5*d+e-2<l&&t.push(5*d+e);(t[t.length-1]===l+1||-1===e.length)&&u(!0),(1===t[0]||-1===e.length)&&i(!0),p(t)},[l,d,e.length]);let handleClick=e=>{t.push("/board/".concat(e))};return(0,r.jsxs)("div",{className:"flex justify-center w-full h-[5vh] px-44 mt-12",children:[a?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)("div",{className:g,onClick:()=>{f(e=>e-1)},children:(0,r.jsx)("p",{children:"<"})}),h.map((e,t)=>(0,r.jsx)("div",{className:n===e?"center w-[3vw] h-[3vw] rounded-full border-2 bg-gray-200 mr-3":g,onClick:()=>handleClick(e),children:(0,r.jsx)("p",{children:e})},t)),c?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)("div",{className:g,onClick:()=>{f(e=>e+1)},children:(0,r.jsx)("p",{children:">"})})]})}},2063:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Tool}});var r=n(5893),s=n(1163),o=n(2602);function Tool(e){let t=(0,s.useRouter)(),n=e.func;return(0,r.jsxs)("div",{className:"flex justify-between items-center w-full h-[10vh]",children:[(0,r.jsx)("div",{}),(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)(o.default,{msg:"create"===n?"작성":"수정",onClick:"create"===n?()=>{t.push("/board/create")}:()=>{let e=t.query.id;t.push("/board/post/".concat(e,"/modify"))}}),"create"===n?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(o.default,{msg:"목록으로",onClick:()=>{t.push("/")}})]})]})}},2602:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Btn}});var r=n(5893);function Btn(e){return(0,r.jsx)("div",{className:"center items-center w-[5vw] h-[5vh] border rounded-lg hover nnn ml-3",onClick:()=>e.onClick(),children:(0,r.jsx)("p",{className:"text-gray-500",children:e.msg})})}},6983:function(e,t){"use strict";t.J=void 0,t.J=(e={})=>{if("undefined"==typeof window)return{persistAtom:()=>{}};let{key:t="recoil-persist",storage:n=localStorage,converter:r=JSON}=e,updateState=(e,t,n,r)=>{r?delete t[n]:t[n]=e,setState(t)},getState=()=>{let e=n.getItem(t);return null==e?{}:"string"==typeof e?parseState(e):"function"==typeof e.then?e.then(parseState):{}},parseState=e=>{if(void 0===e)return{};try{return r.parse(e)}catch(e){return console.error(e),{}}},setState=e=>{try{"function"==typeof n.mergeItem?n.mergeItem(t,r.stringify(e)):n.setItem(t,r.stringify(e))}catch(e){console.error(e)}};return{persistAtom:({onSet:e,node:t,trigger:n,setSelf:r})=>{if("get"===n){let e=getState();"function"==typeof e.then&&e.then(e=>{e.hasOwnProperty(t.key)&&r(e[t.key])}),e.hasOwnProperty(t.key)&&r(e[t.key])}e(async(e,n,r)=>{let s=getState();"function"==typeof s.then?s.then(n=>updateState(e,n,t.key,r)):updateState(e,s,t.key,r)})}}}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5776)}),_N_E=e.O()}]);