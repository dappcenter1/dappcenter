"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[725],{65650:function(e,t,a){var n=a(85893);a(67294);var s=a(48781);t.Z=function(e){let{checked:t,onChange:a}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{children:(0,n.jsx)(s.i,{checked:t,onChange:a,height:40,width:70,className:"react-switch mt-1",id:"small-radius-switch"})})})}},4831:function(e,t,a){var n=a(85893),s=a(74598),r=a(95675),l=a(86597);t.Z=function(e){let{show:t,handleClose:a,erc721:c}=e;return c&&"ERC721"==c?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s.R,{onClose:a,centered:!0,isOpen:t,children:(0,n.jsx)(r.A,{children:e=>(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(l.I,{children:[(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("p",{children:"Example List"}),(0,n.jsx)("p",{children:"Please paste addresses and id's comma seperated."}),(0,n.jsx)("hr",{className:"mt-3 mb-3"})]}),(0,n.jsx)("div",{style:{marginTop:"2rem"},children:"0x370D71435cC9882bA5682C3B1387D5A252f0CF81,3 0xD928f36135Cd0362995545234d49110808fa0671,8 0x61F341b19e1F11F9563b53502B8663A22b77D70C,9 0xb0C2269e4E4F09FDaAc116669725Be124DBf936a,16 0xA51b9AC0AA3EdCE1bba7eEbf902CB12966250ecA,25 0xcf0A55bf3DcfB75692D91A03C27782CBd0a60b40,32"})]})})})})}):c&&"ERC1155"==c?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s.R,{onClose:a,centered:!0,isOpen:t,children:(0,n.jsx)(r.A,{children:e=>(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(l.I,{children:[(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("p",{children:"Example List"}),(0,n.jsx)("p",{children:"Please paste addresses, id's and amounts comma seperated."}),(0,n.jsx)("hr",{className:"mt-3 mb-3"})]}),(0,n.jsx)("div",{style:{marginTop:"2rem"},children:"0x370D71435cC9882bA5682C3B1387D5A252f0CF81,5,10 0xD928f36135Cd0362995545234d49110808fa0671,3,15 0x61F341b19e1F11F9563b53502B8663A22b77D70C,8,4"})]})})})})}):(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s.R,{onClose:a,centered:!0,isOpen:t,children:(0,n.jsx)(r.A,{children:e=>(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(l.I,{children:[(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("p",{children:"Example List"}),(0,n.jsx)("p",{children:"Please paste addresses and amounts comma seperated."}),(0,n.jsx)("hr",{className:"mt-3 mb-3"})]}),(0,n.jsx)("div",{style:{marginTop:"2rem"},children:"0x370D71435cC9882bA5682C3B1387D5A252f0CF81,500.5 0xD928f36135Cd0362995545234d49110808fa0671,15 0x61F341b19e1F11F9563b53502B8663A22b77D70C,32.008 0xb0C2269e4E4F09FDaAc116669725Be124DBf936a,16.8956 0xA51b9AC0AA3EdCE1bba7eEbf902CB12966250ecA,8.5 0xcf0A55bf3DcfB75692D91A03C27782CBd0a60b40,0.001"})]})})})})})}},56199:function(e,t,a){var n=a(85893),s=a(67294),r=a(14456),l=a(68551),c=a(23538),d=a(92321),i=a(9134),o=a(24211),m=a(33471),u=a(8155),h=a(62110),f=a(32616);a(52622),t.Z=function(){let e=(0,l.x)(),{chains:t,error:a,isLoading:x,pendingChainId:p,switchChain:g}=(0,c.o)(),{address:v,isConnected:j}=(0,d.m)();(0,s.useEffect)(()=>{console.log(t)},[t]);let b=e=>{v&&j?g({chainId:e}):i.Am.error("You need to connect your wallet")};if(v&&j)return(0,n.jsxs)("div",{className:"mt-10",children:[(0,n.jsx)("h3",{className:"flex justify-center items-center font-bold mb-5 mt-4",children:"NETWORK"}),(0,n.jsx)("div",{className:"w-full flex justify-center items-center",children:(0,n.jsxs)(o.F,{children:[(0,n.jsx)(m.S,{children:(0,n.jsx)(u.A,{variant:"bordered",className:"flex",children:v&&j&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.fq,{id:Number(e)}),(0,n.jsx)("span",{className:"ml-2",children:t.filter(t=>t.id==e)[0].name})]})})}),(0,n.jsx)(h.a,{variant:"flat","aria-label":"Select Chain",onAction:b,style:{minWidth:"20px"},children:t.map(e=>(0,n.jsx)(f.W,{"aria-label":e.name,onPress:()=>b(e.id),children:(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)(r.fq,{id:Number(e.id)}),(0,n.jsx)("span",{className:"ml-2",children:e.name})]})},e.id))})]})})]})}},35111:function(e,t,a){var n=a(85893),s=a(67294),r=a(1571);t.Z=function(e){let{dataArray:t}=e,[a,l]=(0,s.useState)(null),{resolvedTheme:c}=(0,r.F)();return(0,s.useEffect)(()=>{t&&l(t)},[t]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"row",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,n.jsx)("div",{className:"col-md-12 mt-3 text-center addresses-scroll",style:{width:"100%",border:"1px solid #383632",backgroundColor:"dark"==c?"#171F29":"#f5f8fa",borderRadius:"15px",padding:"8px",height:"300px",overflowY:"scroll"},children:a&&a.map((e,t)=>(0,n.jsxs)("div",{style:{justifyContent:"space-between",display:"flex",width:"100%"},children:[(0,n.jsx)("div",{className:"address-text",children:t+1}),(0,n.jsx)("div",{className:"address-text",children:e.address}),e.id&&(0,n.jsx)("div",{className:"address-text",children:e.id}),(0,n.jsx)("div",{className:"address-text",children:e.amount})]},t))})})})}},24238:function(e,t,a){var n=a(85893);a(67294);var s=a(38016),r=a(1646);t.Z=e=>{let{id:t,title:a,text:l,theme:c}=e;return(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("h5",{className:"text-md md:text-xl font-bold my-2",children:l}),(0,n.jsx)(s.e,{content:a,placement:"top",children:(0,n.jsx)("span",{className:"ml-1 cursor-pointer",children:(0,n.jsx)(r.Z,{iconName:"InfoCircleFill",size:15})})})]})}},93399:function(e,t,a){var n=a(85893);a(67294);var s=a(45837),r=a(19314),l=a(34863),c=a(89250);t.Z=function(e){let{text:t,link:a,status:d,noAnimation:i}=e;return(0,n.jsx)(s.w,{style:{backgroundColor:"success"===d?"#4caf50":"danger"===d?"#f44336":"#ff9800",padding:"5px",color:"white"},className:"mt-5",children:(0,n.jsx)(r.G,{style:{display:"flex",alignItems:"center"},children:(0,n.jsxs)("div",{className:"flex",children:[!i&&(0,n.jsx)(l.c,{size:"sm",color:"primary",css:{marginRight:"10px"}}),a?(0,n.jsx)(c.O,{href:a,target:"_blank",color:"white",children:t}):(0,n.jsx)("h3",{children:t})]})})})}},87570:function(e,t,a){var n=a(85893);a(67294);var s=a(45837),r=a(1646);t.Z=function(e){let{text:t}=e;return(0,n.jsx)(s.w,{variant:"danger",className:"bg-danger mt-5 p-5",children:(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)(r.Z,{iconName:"ExclamationTriangleFill",style:{marginRight:"8px"}}),t]})})}},5636:function(e,t,a){a(67294),a(9134);var n=a(57460),s=a.n(n);t.Z=function(e,t){let a=e.target.files[0],n=new FileReader,r=e=>{let t="";return e.forEach(e=>{let a=e.map(e=>e.trim());t+=a.join(",")+"\n"}),t};n.onload=e=>{let a=e.target.result;s().parse(a,{complete:e=>{t(r(e.data))}})},n.readAsText(a)}},676:function(e,t,a){a.d(t,{Hv:function(){return j},JV:function(){return h},Jq:function(){return v},R1:function(){return m},XA:function(){return c},Y_:function(){return x},cf:function(){return p},p0:function(){return b},s1:function(){return o},xj:function(){return g},zy:function(){return u}});var n=a(70794),s=a(9134),r=a(76369),l=a(25619);function c(e,t,a,n,r,l,c,o,m){c(!0),t([]),n([]),a([]),m([]);var u=!0,h=e.split(/\r?\n/);if(1==(h=h.filter(e=>""!==e)).length&&(h=h[0].split(" ")),0==h.length){s.Am.error("Please add addresses and amounts",{className:"mt-1"}),c(!1),u=!1;return}try{let e=h.map((e,a)=>{let n=e.concat(" ","").split(",").map(e=>e.trim());if(2!==n.length)return t(t=>[...t,{message:"Invalid data at line ".concat(a+1,": ").concat(e),index:a+1}]),u=!1,m(e=>[...e,a]),null;let s=n[0],r=n[1];return d(s)||(t(e=>[...e,{message:"Invalid address at line ".concat(a+1,": ").concat(s),index:a+1}]),u=!1,m(e=>[...e,a])),i(r)||(t(e=>[...e,{message:"Invalid amount at line ".concat(a+1,": ").concat(r),index:a+1}]),u=!1,m(e=>[...e,a])),{address:s,amount:r}}),s=new Map;e.forEach((e,t)=>{if(e&&s.has(e.address)){let a=s.get(e.address);a.push(t),s.set(e.address,a),u=!1}else e&&s.set(e.address,[t])});let l=[];s.forEach(e=>{e.length>1&&(l.push(e),u=!1)});var f="";return e.forEach(e=>{f+=e.address+","+e.amount+"\n"}),o(f),(r.length>0||l.length>0)&&(c(!1),a(l),c(!1),n(e),u=!1),n(e),c(!1),u}catch(e){return t(e=>[...e,{index:0,message:"Please paste addresses and amounts comma seperated"}]),c(!1),!1}}function d(e){return/^0x[a-fA-F0-9]{40}$/.test(e)}function i(e){return/^\d+(\.\d+)?$/.test(e)}a(23438);let o=(e,t,a,n,s,r)=>{if(0!==e.length){var l=(e.forEach(e=>{let a=e[0],n=t[a],s=parseFloat(n.amount);for(let a=1;a<e.length;a++){let n=e[a];s+=parseFloat(t[n].amount),delete t[n]}t[a]={address:n.address,amount:s.toString()}}),t.filter(e=>null!=e)),c="";l.forEach(e=>{c+=e.address+","+e.amount+"\n"}),a(c),s(l),n([]),r([])}},m=(e,t,a,n,s,r)=>{let l=function(e,t){let a=new Set;return t.forEach(e=>{for(let t=1;t<e.length;t++)a.add(e[t])}),e.filter((e,t)=>!a.has(t))}(t,e);var c="";l.forEach(e=>{c+=e.address+","+e.amount+"\n"}),a(c),s(l),n([]),r([])},u=async(e,t,a,s,c,d,i,o,m)=>{if(e(!0),!t){d(e=>[...e,{message:"Please select token"}]),e(!1);return}"0x0000000000000000000000000000000000000000"!==t.value?(x="token",i(e=>({...e,approveNeeded:!0}))):(x="currency",i(e=>({...e,approveNeeded:!1})));try{"token"===x?await (0,l.yX)(t.value,o.chainId)&&i(e=>({...e,token:!0,native:!1})):i(e=>({...e,native:!0,token:!1}))}catch(e){i(e=>({...e,token:!1,native:!1,error:!0})),d(e=>[...e,"Token not found, please check if token contract exists"])}let u=Math.floor(a.length/r.u.tokensenderArrayLength)+1;i(e=>({...e,transactionsCount:u}));try{let e=await (0,l.Nd)(c,o.chainId);i(t=>({...t,nativeBalance:new n.Z(e.formatted).toFixed(5)}))}catch(e){d(e=>[...e,"Your native currency balance couldn't fetched"])}if("token"===x){try{(p=await (0,l.Wb)(c,t.value,o.tokensenderAddress,o.chainId)).toString()?(i(e=>({...e,allowance:p.toString(),allowanceNoDecimal:(0,l.HM)(p.toString(),t.decimals,0)})),p=p.toString()):(d(e=>[...e,"Token allowance couldn't fetch"]),p=null)}catch(e){d(e=>[...e,"Token allowance couldn't fetch"]),p=null}i(e=>({...e,token:x,decimals:t.decimals}))}let h=(()=>{let e=a.map(e=>e.amount),n=a.map(e=>(0,l.x$)(e.amount,t.decimals,0)),s=a.map(e=>e.address);i(t=>({...t,amounts:e,amountsDecimal:n,addresses:s}));var r=0;for(let t=0;t<e.length;t++)r+=Number(e[t]);return r})();i(e=>({...e,totalAmount:h}));let f=(0,l.x$)(h,t.decimals);if("token"===x){if(Number(p)>=Number(f))i(e=>({...e,allowanceNeeded:!1,approveAmount:0,approveAmountWithoutDecimal:0}));else{var x,p,g=Number(f)-Number(p),v=(0,l.HM)(g,t.decimals,5);i(e=>({...e,allowanceNeeded:!0,approveAmount:g,approveAmountWithoutDecimal:v}))}}},h=(e,t)=>e.reduce((e,a,n)=>{let s=Math.floor(n/t);return e[s]=[].concat(e[s]||[],a),e},[]);function f(e){return Number.isInteger(Number(e))}function x(e,t,a,n,r,l,c,i,o){c(!0),t([]),n([]),a([]),o([]);var m=!0,u=e.split(/\r?\n/);if(1==(u=u.filter(e=>""!==e)).length&&(u=u[0].split(" ")),0==u.length){s.Am.error("Please add addresses and id's",{className:"mt-1"}),c(!1),m=!1;return}try{let e=u.map((e,a)=>{let n=e.concat(" ","").split(",").map(e=>e.trim());if(2!==n.length)return t(t=>[...t,{message:"Invalid data at line ".concat(a+1,": ").concat(e),index:a+1}]),m=!1,o(e=>[...e,a]),null;let s=n[0],r=n[1];return d(s)||(t(e=>[...e,{message:"Invalid address at line ".concat(a+1,": ").concat(s),index:a+1}]),m=!1,o(e=>[...e,a])),f(r)||(t(e=>[...e,{message:"Invalid token Id at line ".concat(a+1,": ").concat(r),index:a+1}]),m=!1,o(e=>[...e,a])),{address:s,amount:r}}),s=new Map;e.forEach((e,t)=>{if(e&&s.has(e.amount)){let a=s.get(e.amount);a.push(t),s.set(e.amount,a),m=!1}else e&&s.set(e.amount,[t])});let l=[];s.forEach(e=>{e.length>1&&(l.push(e),m=!1)});var h="";return e.forEach(e=>{h+=e.address+","+e.amount+"\n"}),i(h),(r.length>0||l.length>0)&&(c(!1),a(l),c(!1),n(e),m=!1),n(e),c(!1),m}catch(e){return t(e=>[...e,{index:0,message:"Please paste addresses and id's comma seperated"}]),c(!1),!1}}let p=async(e,t,a,s,c,d,i,o,m)=>{var u;if(e(!0),!t){d(e=>[...e,{message:"Please select token"}]),e(!1);return}try{let e=await (0,l.Nb)(c,t.value,o.chainId);e&&i(t=>({...t,balance:e}))}catch(e){i(e=>({...e,error:!0})),d(e=>[...e,"NFT not found, please check if NFT contract exists"])}let h=Math.floor(a.length/r.u.tokensenderArrayLength)+1;i(e=>({...e,transactionsCount:h}));try{let e=await (0,l.Nd)(c,o.chainId);i(t=>({...t,nativeBalance:new n.Z(e.formatted).toFixed(5)}))}catch(e){d(e=>[...e,"Your native currency balance couldn't fetched"])}let f=a.map(e=>e.address),x=a.map(e=>e.amount);i(e=>({...e,amounts:x,addresses:f}));try{u=await (0,l.Ky)(c,t.value,o.tokensenderAddress,o.chainId),console.log(u),i(e=>({...e,allowance:u}))}catch(e){d(e=>[...e,"NFT allowance couldn't fetch"]),u=null}i(e=>({...e,totalAmount:a.length}))};function g(e,t,a,n,r,l,c,o,m){c(!0),t([]),n([]),a([]),m([]);var u=!0,h=e.split(/\r?\n/);if(1==(h=h.filter(e=>""!==e)).length&&(h=h[0].split(" ")),0==h.length){s.Am.error("Please add addresses and id's",{className:"mt-1"}),c(!1),u=!1;return}try{let e=h.map((e,a)=>{let n=e.concat(" ","").split(",").map(e=>e.trim());if(3!==n.length)return t(t=>[...t,{message:"Invalid data at line ".concat(a+1,": ").concat(e),index:a+1}]),u=!1,m(e=>[...e,a]),null;let s=n[0],r=n[1],l=n[2];return d(s)||(t(e=>[...e,{message:"Invalid address at line ".concat(a+1,": ").concat(s),index:a+1}]),u=!1,m(e=>[...e,a])),i(l)||(t(e=>[...e,{message:"Invalid amount at line ".concat(a+1,": ").concat(l),index:a+1}]),u=!1,m(e=>[...e,a])),f(r)||(t(e=>[...e,{message:"Invalid token Id at line ".concat(a+1,": ").concat(r),index:a+1}]),u=!1,m(e=>[...e,a])),{address:s,id:r,amount:l}}),s={},l=[];e.forEach((e,t)=>{if(e){let a="".concat(e.address,"-").concat(e.id);s[a]?s[a].push(t):s[a]=[t]}}),Object.keys(s).forEach(e=>{s[e].length>1&&(l.push(s[e]),u=!1)}),console.log(e);var x="";return e.forEach(e=>{x+=e.address+","+e.id+","+e.amount+"\n"}),o(x),(r.length>0||l.length>0)&&(c(!1),a(l),c(!1),n(e),u=!1),n(e),c(!1),u}catch(e){return console.log(e),t(e=>[...e,{index:0,message:"Please paste addresses, id's and amounts comma seperated"}]),c(!1),!1}}let v=async(e,t,a,s,c,d,i,o,m)=>{var u;if(e(!0),!t){d(e=>[...e,{message:"Please select token"}]),e(!1);return}try{let e=await (0,l.i1)(c,t.value,o.chainId);e&&i(t=>({...t,balance:e}))}catch(e){i(e=>({...e,error:!0})),d(e=>[...e,"NFT not found, please check if NFT contract exists"])}let h=Math.floor(a.length/r.u.tokensenderArrayLength)+1;i(e=>({...e,transactionsCount:h}));try{let e=await (0,l.Nd)(c,o.chainId);i(t=>({...t,nativeBalance:new n.Z(e.formatted).toFixed(5)}))}catch(e){d(e=>[...e,"Your native currency balance couldn't fetched"])}let f=a.map(e=>e.address),x=a.map(e=>e.id),p=a.map(e=>e.amount);i(e=>({...e,amounts:p,ids:x,addresses:f}));try{u=await (0,l.bF)(c,t.value,o.tokensenderAddress,o.chainId),console.log(u),i(e=>({...e,allowance:u}))}catch(e){d(e=>[...e,"NFT allowance couldn't fetch"]),u=null}i(e=>({...e,totalAmount:a.length}))},j=(e,t,a,n,s,r)=>{if(0!==e.length){var l=(e.forEach(e=>{let a=e[0],n=t[a],s=parseFloat(n.amount);for(let a=1;a<e.length;a++){let n=e[a];s+=parseFloat(t[n].amount),delete t[n]}t[a]={address:n.address,id:n.id,amount:s.toString()}}),t.filter(e=>null!=e)),c="";l.forEach(e=>{c+=e.address+","+e.id+","+e.amount+"\n"}),a(c),s(l),n([]),r([])}},b=(e,t,a,n,s,r)=>{let l=function(e,t){let a=new Set;return t.forEach(e=>{for(let t=1;t<e.length;t++)a.add(e[t])}),e.filter((e,t)=>!a.has(t))}(t,e);var c="";l.forEach(e=>{c+=e.address+","+e.id+","+e.amount+"\n"}),a(c),s(l),n([]),r([])}}}]);