(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3538],{28316:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/create-token/[slug]",function(){return t(15513)}])},92808:function(e,s,t){"use strict";var a=t(85893),n=t(67294),l=t(90290),c=t(1571);s.Z=function(e){let{label:s,placeholder:t,required:r,onChange:i,name:o,value:d,disabled:m,type:x}=e,[h,u]=(0,n.useState)(!1),{resolvedTheme:j}=(0,c.F)();return(0,a.jsxs)("div",{className:"col",children:[s&&(0,a.jsxs)("label",{className:"mt-4",style:{color:"dark"===j?"#ffffff":"#000000"},children:[s,(0,a.jsx)("span",{style:{color:"red"},children:r&&" *"})]}),(0,a.jsx)(l.Y,{type:x,onFocus:()=>u(!0),onBlur:()=>u(!1),placeholder:t,onChange:i,name:o,value:d,disabled:m,bordered:!0,fullWidth:!0,autoComplete:"off",style:{marginTop:"8px",height:"40px"}})]})}},56199:function(e,s,t){"use strict";var a=t(85893),n=t(67294),l=t(14456),c=t(68551),r=t(23538),i=t(92321),o=t(9134),d=t(24211),m=t(33471),x=t(8155),h=t(62110),u=t(32616);t(52622),s.Z=function(){let e=(0,c.x)(),{chains:s,error:t,isLoading:j,pendingChainId:f,switchChain:p}=(0,r.o)(),{address:N,isConnected:v}=(0,i.m)();(0,n.useEffect)(()=>{console.log(s)},[s]);let b=e=>{N&&v?p({chainId:e}):o.Am.error("You need to connect your wallet")};if(N&&v)return(0,a.jsxs)("div",{className:"mt-10",children:[(0,a.jsx)("h3",{className:"flex justify-center items-center font-bold mb-5 mt-4",children:"NETWORK"}),(0,a.jsx)("div",{className:"w-full flex justify-center items-center",children:(0,a.jsxs)(d.F,{children:[(0,a.jsx)(m.S,{children:(0,a.jsx)(x.A,{variant:"bordered",className:"flex",children:N&&v&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.fq,{id:Number(e)}),(0,a.jsx)("span",{className:"ml-2",children:s.filter(s=>s.id==e)[0].name})]})})}),(0,a.jsx)(h.a,{variant:"flat","aria-label":"Select Chain",onAction:b,style:{minWidth:"20px"},children:s.map(e=>(0,a.jsx)(u.W,{"aria-label":e.name,onPress:()=>b(e.id),children:(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(l.fq,{id:Number(e.id)}),(0,a.jsx)("span",{className:"ml-2",children:e.name})]})},e.id))})]})})]})}},15513:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return k}});var a=t(85893),n=t(67294),l=t(45837),c=t(8155),r=t(19314),i=t(84367),o=t(34863),d=t(9134),m=t(92321),x=t(68551),h=t(41283),u=t(15911),j=t(17299),f=t(52622),p=t(56199),N=n.memo(function(e){let{title:s}=e;return(0,a.jsxs)("div",{className:"section-title1",children:[(0,a.jsx)("span",{className:"line1"}),(0,a.jsx)("h5",{className:"title1 text-xl font-bold",children:s}),(0,a.jsx)("span",{className:"line1"})]})}),v=t(11163),b=t(92808),y=t(77042),g=t(9533),w=t(53885),S=t(83938),D=t(24031),E=t(67619),F=t(76718),T=t(16693),k=n.memo(function(){let e=(0,v.useRouter)(),[s,t]=(0,n.useState)(null),[k,_]=(0,n.useState)({}),[C,A]=(0,n.useState)(1),{address:O,isConnected:Z}=(0,m.m)(),[W,Y]=(0,n.useState)([]),q=(0,x.x)(),[M,P]=(0,n.useState)(null),[R,H]=(0,n.useState)(null);(0,n.useEffect)(()=>{let s=j.Z.filter(s=>s.slug==e.query.slug)[0];s&&t(s)},[e]);let z=e=>D.Z.filter(s=>s.chainId==e)[0],[G,I]=(0,n.useState)(""),[X,B]=(0,n.useState)(!1),[K,L]=(0,n.useState)(""),[U,V]=(0,n.useState)(""),$=async e=>await (0,w.A)(F.config,{contracts:e}),[J,Q]=(0,n.useState)(null);(0,n.useEffect)(()=>{Q(localStorage.getItem("ref"))},[]);let ee=e=>{_(s=>({...s,[e.target.name]:e.target.value}))},es=async()=>{let e={...k};s.constructors.forEach(s=>{let t=s.name;t&&void 0!==k[t]&&void 0!==s.decimals&&(e[t]=(0,u.x$)(k[t],s.decimals,0))});let t={...Object.fromEntries(Object.entries(e).sort((e,t)=>{var a,n;let l=null===(a=s.constructors.find(s=>s.name===e[0]))||void 0===a?void 0:a.order,c=null===(n=s.constructors.find(e=>e.name===t[0]))||void 0===n?void 0:n.order;return(void 0!==l?l:1/0)-(void 0!==c?c:1/0)})),router:s.chainData[q].routerAddress,newOwner:O},a=async e=>{let t=Object.values(e);console.log(s.bytecode,"encoded",J,z(q).tokensenderAddress,s.chainData[q].deployFee);let a=new g.R().encode(["tuple(".concat(s.encodetypes.toString(),")")],[t]);V(a);try{let e=await (0,S.n)(F.config,{abi:E.a,address:z(q).tokensenderAddress,functionName:"deployContract",account:O,args:["0x"+s.bytecode,a,J],value:s.chainData[q].deployFee});P(e),console.log(e)}catch(e){console.log(e),d.Am.error(e.message)}};setTimeout(()=>{a(t)},1500)},{data:et,error:ea,isLoading:en}=(0,h.A)({hash:M&&M});if((0,n.useEffect)(()=>{if(console.log(et),et){I("Your Transaction has been confirmed."),L("Please wait for source code verification. Do not close window!!!!"),B(!0);let e=et.logs.map(e=>({address:e.address,abi:T.Wo,functionName:"name"}));console.log(e),$(e).then(t=>{var a=t.filter(e=>e.result==k.name);let n=e[t.indexOf(a[0])].address;H(n),(0,u.WF)(n,s.tokenCode,U,I,B,L,z(q),s.contractName)})}},[et]),s)return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(y.Z,{pageTitle:"".concat(s.name," Generator")}),(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:"container max-w-6xl mx-auto",children:[(0,a.jsx)("div",{className:"row mt-2 mb-2",children:(0,a.jsx)(p.Z,{})}),(0,a.jsxs)("div",{className:"row mt-4 mb-4 p-5",children:[(0,a.jsxs)("div",{className:"col-12 text-center",children:[(0,a.jsx)("h4",{className:"text-2xl",children:s.name}),(0,a.jsx)("h5",{className:"text-xl mt-3 font-bold",children:Z?(0,u.HM)(s.chainData[q].deployFee,18)+" "+s.chainData[q].currencyName:(0,u.HM)(s.chainData[1].deployFee,18)+" "+s.chainData[1].currencyName})]}),1==C&&(0,a.jsx)(l.w,{className:"mt-10 p-5",children:(0,a.jsx)("form",{onSubmit:e=>{e.preventDefault();let t=[];if(Y(t),s.constructors.forEach((e,t)=>{"range"!=e.componentType||k[e.name]||_(a=>({...a,[e.name]:s.constructors[t].min}))}),s.constructors.forEach(e=>{e.validate&&!1==e.validate(k[e.name])&&t.push(e.title+e.validateMessages)}),s.feeValidation){var a=0;s.constructors.forEach(e=>{e.fee&&(a+=Number(k[e.name]))}),a>s.maxFee&&t.push("Fee totals can not be bigger than "+s.maxFee)}Y(t),0==t.length&&A(C+1)},children:(0,a.jsxs)("div",{className:"row w-full",children:[s.constructors.map(e=>(0,a.jsxs)("div",{className:"mt-3 ".concat(e.className),children:["range"!==e.componentType&&"split"!==e.componentType&&(0,a.jsxs)("div",{className:"text-center mt-5",children:[(0,a.jsx)("h5",{className:"mb-4",children:e.title}),(0,a.jsx)(b.Z,{type:e.componentType,className:"mt-5",name:e.name,value:k[e.name]||"",onChange:ee,autoComplete:!1,placeholder:e.placeholder&&e.placeholder,required:!0})]}),"range"==e.componentType&&(0,a.jsxs)("div",{className:"text-center mt-3",children:[(0,a.jsx)("p",{children:e.title}),(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[(0,a.jsx)("input",{type:e.componentType,name:e.name,value:k[e.name]||e.min,onChange:ee,style:{width:"80%"},min:e.min,max:e.max,step:e.step,className:"mt-3"}),(0,a.jsx)("span",{className:"mt-1",children:(0,a.jsx)("h5",{className:"mt-3",children:k[e.name]||"0.5"})})]})]}),"split"==e.componentType&&(0,a.jsx)("div",{className:"text-center mt-5",children:(0,a.jsx)(N,{title:e.text})})]},e.name)),(0,a.jsx)("div",{className:"col-md-12 text-center mt-10",children:W&&W.map(e=>(0,a.jsx)("div",{className:"badge bg-red-700 w-5/6 mx-auto p-3 m-2 rounded-xl mt-4",children:(0,a.jsx)("span",{children:e})},e))}),(0,a.jsx)("div",{className:"text-center mt-3 w-full flex justify-center items-center mt-5",children:O?(0,a.jsx)(c.A,{type:"submit",children:"Next"}):(0,a.jsx)(f.Z,{})})]})})}),2==C&&(0,a.jsxs)("div",{className:"col-md-12 mt-5 mb-5",children:[(0,a.jsxs)("div",{className:"module-border-wrap",children:[(0,a.jsx)(l.w,{children:(0,a.jsxs)(r.G,{className:"p-3",children:[Object.entries(k).map(e=>{let[t,n]=e;return(0,a.jsxs)("div",{className:"row text-center",children:[(0,a.jsx)("div",{className:"col-4",children:(0,a.jsx)("h5",{className:"responsive-text text-xl m-3 font-bold",children:s.constructors.filter(e=>e.name==t)[0].title})}),(0,a.jsx)("div",{className:"col-8 m-3",children:(0,a.jsx)("h5",{className:"text-xs md:text-xl",children:n})}),(0,a.jsx)(i.j,{color:"zinc-600"})]},t+n)}),(0,a.jsxs)("div",{className:"row text-center",children:[(0,a.jsx)("div",{className:"col-4",children:(0,a.jsx)("h5",{className:"responsive-text m-3 text-xl font-bold",children:"Router"})}),(0,a.jsx)("div",{className:"col-8",children:(0,a.jsx)("h5",{className:"responsive-text m-3",children:s.chainData[q].routerName})}),(0,a.jsx)(i.j,{color:"zinc-600"})]}),(0,a.jsxs)("div",{className:"row text-center",children:[(0,a.jsx)("div",{className:"col-4",children:(0,a.jsx)("h5",{className:"responsive-text m-3 text-xl font-bold",children:"Deploy Fee"})}),(0,a.jsx)("div",{className:"col-8",children:(0,a.jsxs)("h5",{className:"responsive-text m-3 text-xl font-bold",children:[" ",(0,u.HM)(s.chainData[q].deployFee,18,4)+" "+s.chainData[q].currencyName]})})]})]})})," "]}),(0,a.jsx)("div",{className:"row",children:(0,a.jsxs)("div",{className:"col-12 text-center mt-5",children:[!en&&!ea&&!et&&(0,a.jsx)(c.A,{onClick:es,children:"Deploy"}),(en||X)&&(0,a.jsx)(o.c,{}),ea&&(0,a.jsx)("div",{className:"badge bg-red-700 p-3 m-3",children:"Your contract couldn't deployed, please contact support"}),K&&G&&(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)("h4",{className:"text-xl m-5",children:G}),(0,a.jsx)("h5",{className:"text-xl m-5",children:K})]}),et&&R&&(0,a.jsxs)("div",{className:"badge bg-success p-3 rounded-xl m-5",children:["Your token deployed"," ",(0,a.jsxs)("a",{href:s.chainData[q].explorerUrl+"address/"+R,target:"_blank",children:["click"," "]})," ","to see on explorer"]})]})})]})]})]})})]})})}},function(e){e.O(0,[9585,9598,4102,2770,7341,3115,674,5397,9913,7299,2888,9774,179],function(){return e(e.s=28316)}),_N_E=e.O()}]);