(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[276],{2567:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/board/post/[id]/modify",function(){return n(4900)}])},2586:function(e,t,n){"use strict";let r,o,s;n.d(t,{i:function(){return h}});var i=n(4480);let u=new Uint8Array(16),a=[];for(let e=0;e<256;++e)a.push((e+256).toString(16).slice(1));let l=0,c=0;var d=n(6983);let f=window.localStorage,{persistAtom:p}=(0,d.J)({key:"post",storage:f}),h=(0,i.cn)({key:"postStore/".concat(function(e,t,n){let i=0,d=t||Array(16),f=(e=e||{}).node||o,p=void 0!==e.clockseq?e.clockseq:s;if(null==f||null==p){let t=e.random||(e.rng||function(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(u)})();null==f&&(f=o=[1|t[0],t[1],t[2],t[3],t[4],t[5]]),null==p&&(p=s=(t[6]<<8|t[7])&16383)}let h=void 0!==e.msecs?e.msecs:Date.now(),y=void 0!==e.nsecs?e.nsecs:c+1,m=h-l+(y-c)/1e4;if(m<0&&void 0===e.clockseq&&(p=p+1&16383),(m<0||h>l)&&void 0===e.nsecs&&(y=0),y>=1e4)throw Error("uuid.v1(): Can't create more than 10M uuids/sec");l=h,c=y,s=p,h+=122192928e5;let g=((268435455&h)*1e4+y)%4294967296;d[i++]=g>>>24&255,d[i++]=g>>>16&255,d[i++]=g>>>8&255,d[i++]=255&g;let v=h/4294967296*1e4&268435455;d[i++]=v>>>8&255,d[i++]=255&v,d[i++]=v>>>24&15|16,d[i++]=v>>>16&255,d[i++]=p>>>8|128,d[i++]=255&p;for(let e=0;e<6;++e)d[i+e]=f[e];return t||function(e,t=0){return a[e[t+0]]+a[e[t+1]]+a[e[t+2]]+a[e[t+3]]+"-"+a[e[t+4]]+a[e[t+5]]+"-"+a[e[t+6]]+a[e[t+7]]+"-"+a[e[t+8]]+a[e[t+9]]+"-"+a[e[t+10]]+a[e[t+11]]+a[e[t+12]]+a[e[t+13]]+a[e[t+14]]+a[e[t+15]]}(d)}()),default:[],effects_UNSTABLE:[p]})},4900:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Modify}});var r=n(5893),o=n(1163),s=n(4480),i=n(2586),u=n(7294),a=n(2602);function Modify(){let e=(0,o.useRouter)(),[t,n]=(0,u.useState)(0),[l,c]=(0,u.useState)(""),[d,f]=(0,u.useState)(""),[p,h]=(0,u.useState)(0),[y,m]=(0,s.FV)(i.i);return(0,u.useEffect)(()=>{let t=parseInt(e.query.id,10);if(void 0!==t){let e=y.findIndex(e=>e.id===t);h(e),n(y[e].id),c(y[e].title),f(y[e].content)}},[e.query,y]),(0,r.jsxs)("div",{className:"content",children:[(0,r.jsx)("div",{className:"flex items-center h-[20vh]",children:(0,r.jsx)("textarea",{value:l,onChange:e=>{c(e.target.value)},className:"text-3xl w-full"})}),(0,r.jsx)("div",{className:"flex items-center h-[40vh]",children:(0,r.jsx)("textarea",{value:d,onChange:e=>{f(e.target.value)},className:"text-lg w-full h-full"})}),(0,r.jsx)(a.default,{msg:"업로드",onClick:()=>{if(""===l){alert("제목을 입력하세요.");return}if(""===d){alert("내용을 입력하세요.");return}let n=[...y];n.splice(p,1,{id:t,title:l,content:d}),m(n),e.replace("/board/post/".concat(t))}})]})}},2602:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Btn}});var r=n(5893);function Btn(e){return(0,r.jsx)("div",{className:"center items-center w-[5vw] h-[5vh] border rounded-lg hover nnn ml-3",onClick:()=>e.onClick(),children:(0,r.jsx)("p",{className:"text-gray-500",children:e.msg})})}},6983:function(e,t){"use strict";t.J=void 0,t.J=(e={})=>{if("undefined"==typeof window)return{persistAtom:()=>{}};let{key:t="recoil-persist",storage:n=localStorage,converter:r=JSON}=e,updateState=(e,t,n,r)=>{r?delete t[n]:t[n]=e,setState(t)},getState=()=>{let e=n.getItem(t);return null==e?{}:"string"==typeof e?parseState(e):"function"==typeof e.then?e.then(parseState):{}},parseState=e=>{if(void 0===e)return{};try{return r.parse(e)}catch(e){return console.error(e),{}}},setState=e=>{try{"function"==typeof n.mergeItem?n.mergeItem(t,r.stringify(e)):n.setItem(t,r.stringify(e))}catch(e){console.error(e)}};return{persistAtom:({onSet:e,node:t,trigger:n,setSelf:r})=>{if("get"===n){let e=getState();"function"==typeof e.then&&e.then(e=>{e.hasOwnProperty(t.key)&&r(e[t.key])}),e.hasOwnProperty(t.key)&&r(e[t.key])}e(async(e,n,r)=>{let o=getState();"function"==typeof o.then?o.then(n=>updateState(e,n,t.key,r)):updateState(e,o,t.key,r)})}}}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=2567)}),_N_E=e.O()}]);