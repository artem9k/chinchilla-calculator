(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return l(9467)}])},9467:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return T}});var a=l(5893),r=l(7183),n=l(6516),o=l(6269),s=l(6317),i=l(6226),h=l(2918),d=l(4432),c=l(6713),x=l(882);l(7083);var u=l(3148),g=l(7294),j=l(5430);u.kL.register(u.WV,u.f$,u.od,u.jn,u.Gu,u.Dx,u.u,u.De,u.Gu);let m=[6e18,6e18,6e18,6e18,1e19,1e19,1e19,1e19,3e19,3e19,3e19,3e19,1e20,1e20,1e20,1e20,3e20,3e20,3e20,3e20,6e20,6e20,6e20,6e20,1e21,1e21,1e21,1e21,3e21,3e21,3e21,3e21],p=[70,150,300,600,105,300,1e3,2500,150,300,600,1500,300,600,1e3,1700,300,400,800,1e3,300,700,1200,3e3,600,1e3,2e3,6e3,800,1500,2e3,5e3,1500,2e3,6e3,8e3,3e3,6e3,9e3,15e3];p.forEach(e=>1e7*e),console.log([{x:15e21,y:27e8,r:2}]);let f=e=>e.toExponential(1),M=e=>{var t=Math.floor((e/10).toFixed(0).toString().length);return Math.round(Math.abs(Number(e))/Number("1.0e+"+(t-t%3)).toFixed(2))+" "+["M","B","T","Q"][Math.floor(t/3)-2]},C=e=>e>=1e6?M(e):e,y=p.map((e,t)=>({x:m[t],y:1e6*e,r:2}));console.log(y);let b={datasets:[{label:"Your Model",data:[{x:203013,y:69696969,r:5}],backgroundColor:"yellow",border:"black"},{label:"GPT-3",data:[{x:12e22,y:175e9,r:7}],backgroundColor:"#ff0000"},{label:"Chinchilla-70B",data:[{x:14e22,y:67e9,r:5}],backgroundColor:"#f75d98"},{label:"OPT-175B",data:[{x:2e22,y:67e9,r:5}],backgroundColor:"#ADD8E6"},{label:"Megatron-Turing-NLG-530B",data:[{x:153e21,y:53e10,r:10}],backgroundColor:"#1c62ce"},{label:"GPT-J-6B",data:[{x:15e21,y:6e9,r:5}],backgroundColor:"#FFC0CB"},{label:"GPTNeo-2.7B",data:[{x:68e20,y:27e8,r:5}],backgroundColor:"#A020F0"},{label:"Chinchilla-experimental",data:y,backgroundColor:"#32CD32"}]},Z={scales:{x:{max:1e26,min:5e18,display:!0,type:"logarithmic",ticks:{callback:f}},y:{max:1e13,min:1e8,display:!0,type:"logarithmic",ticks:{callback:C}}}},{Header:k,Footer:w,Content:v}=r.Z,N=()=>{var e,t,l;let[r,u]=(0,g.useState)(5e18),[m,p]=(0,g.useState)(1e8),[f,M]=(0,g.useState)(1e11),[C,y]=(0,g.useState)(0),[k,w]=(0,g.useState)(b),N=(0,g.useRef)(null),T=e=>{var t=Math.floor((e/10).toFixed(0).toString().length);return(Math.abs(Number(e))/Number("1.0e+"+(t-t%3)).toFixed(2)).toFixed(2)+" "+["M","B","T","Q"][Math.floor(t/3)-2]},F=e=>{var t=Math.log(5e18);return Math.exp(t+(Math.log(1e26)-t)/100*(e-0))},B=e=>{var t=Math.log(1e8);return Math.exp(t+(Math.log(1e13)-t)/100*(e-0))},_=e=>{var t=Math.log(1e11);return Math.exp(t+(Math.log(1e13)-t)/100*(e-0))},D=[67e9,175e9,53e10],I=[1e8,239e9,48e11],P=e=>{let t=D[e],l=Math.exp(Math.log(6.5*t)/.49);u(l),p(l**.49/6.5),M(l**.51/.8547),y(406.4/m**.34+410.7/f**.28+1.69),L(l,m)},E=e=>{let t=I[e],l=Math.exp(Math.log(.8547*t)/.51);u(l),p(l**.49/6.5),M(l**.51/.8547),y(406.4/m**.34+410.7/f**.28+1.69),L(l,m)},G=(0,a.jsxs)(n.Z,{children:[(0,a.jsx)(n.Z.Item,{onClick:()=>P(0),children:"Chinchilla (67B)"}),(0,a.jsx)(n.Z.Item,{onClick:()=>P(1),children:"GPT-3 (175B)"}),(0,a.jsx)(n.Z.Item,{onClick:()=>P(2),children:"Megatron-Turing NLG (530B)"})]}),S=(0,a.jsxs)(n.Z,{children:[(0,a.jsx)(n.Z.Item,{onClick:()=>E(0),children:"enwik8 (100M)"}),(0,a.jsx)(n.Z.Item,{onClick:()=>E(1),children:"The Pile (239B)"}),(0,a.jsx)(n.Z.Item,{onClick:()=>E(2),children:"MassiveText (4.8T)"})]}),z=e=>e>999999?T(e):Math.floor(e),L=(e,t)=>{console.log("updating model with"),console.log(e),console.log(t);let l=k;l.datasets[0].data[0].x=e,l.datasets[0].data[0].y=t,w(l),N.current.update()},O=e=>{var t=F(e);u(t),p(t**.49/6.5),M(t**.51/.8547),y(406.4/m**.34+410.7/f**.28+1.69),L(r,m)},V=e=>{var t=B(e);let l=Math.exp(Math.log(6.5*t)/.49);u(l),p(l**.49/6.5),M(l**.51/.8547),y(406.4/m**.34+410.7/f**.28+1.69),L(l,m)},A=e=>{var t=_(e);let l=Math.exp(Math.log(.8547*t)/.51);u(l),p(l**.49/6.5),M(l**.51/.8547),y(406.4/m**.34+410.7/f**.28+1.69),L(l,m)};return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(v,{style:{width:"800px",paddingBottom:"50px"},children:[(0,a.jsxs)(o.Z,{size:"large",width:100,children:[(0,a.jsx)(s.Z,{children:(0,a.jsx)(i.Z,{border:"1px solid",children:(0,a.jsx)("h1",{children:"Chinchilla Scaling Laws Calculator"})})}),(0,a.jsxs)(s.Z,{children:[(0,a.jsxs)(i.Z,{span:12,children:[(0,a.jsx)(o.Z,{title:"Num FLOPs",bordered:!0,size:"small",children:(0,a.jsxs)(s.Z,{style:{width:"100%"},children:[(0,a.jsx)(h.Z,{defaultValue:30,style:{width:"80%"},value:Math.round((Math.log(r)-(e=Math.log(5e18)))/((Math.log(1e26)-e)/100)),onChange:O}),(0,a.jsx)("h1",{style:{fontFamily:"Courier New"},children:r.toExponential(1)})]})}),(0,a.jsxs)(o.Z,{title:"Parameter Count",bordered:!0,size:"small",children:[(0,a.jsx)(d.Z,{overlay:G,arrow:!0,children:(0,a.jsx)("a",{onClick:e=>e.preventDefault(),children:(0,a.jsxs)(c.Z,{children:["Common models",(0,a.jsx)(x.Z,{})]})})}),(0,a.jsxs)(s.Z,{style:{width:"100%"},children:[(0,a.jsx)(h.Z,{defaultValue:30,style:{width:"80%"},value:Math.round((Math.log(m)-(t=Math.log(1e8)))/((Math.log(1e13)-t)/100)),onChange:V}),(0,a.jsx)("h1",{style:{fontFamily:"Courier New"},children:z(m)})]})]}),(0,a.jsxs)(o.Z,{title:"Num Training Tokens",bordered:!0,size:"small",children:[(0,a.jsx)(d.Z,{overlay:S,arrow:!0,selectable:!0,children:(0,a.jsx)("a",{onClick:e=>e.preventDefault(),children:(0,a.jsxs)(c.Z,{children:["Common Datasets",(0,a.jsx)(x.Z,{})]})})}),(0,a.jsxs)(s.Z,{style:{width:"100%"},children:[(0,a.jsx)(h.Z,{defaultValue:30,style:{width:"80%"},value:Math.round((Math.log(f)-(l=Math.log(1e11)))/((Math.log(1e13)-l)/100)),onChange:A}),(0,a.jsx)("h1",{style:{fontFamily:"Courier New"},children:z(f)})]})]})]}),(0,a.jsxs)(i.Z,{span:12,children:[(0,a.jsxs)(o.Z,{title:"Chinchilla Loss and Chart",bordered:!0,children:[(0,a.jsxs)("h1",{style:{fontFamily:"Courier New"},children:["loss: ",C.toFixed(4)]}),(0,a.jsxs)("h1",{style:{fontFamily:"Courier New"},children:["v100 hours: ",(r/10909091e11).toFixed(0)]})]}),(0,a.jsx)(j.xj,{ref:N,data:k,width:80,height:80,options:Z})]})]})]}),(0,a.jsxs)(o.Z,{size:"large",width:100,children:[(0,a.jsx)("h1",{children:"Disclaimers"}),(0,a.jsxs)("p",{children:["1. I used the ",(0,a.jsx)("a",{href:"https://arxiv.org/abs/2106.04884",children:"Chinchilla paper from DeepMind"}),". Their results are somewhat different from ",(0,a.jsx)("a",{href:"https://arxiv.org/abs/2001.08361",children:"Kaplan et al."})]}),(0,a.jsx)("p",{children:"2. The results can be thought of as accurate to about half an order of magnitude, as long as you use the setup from the paper. Not all models and datasets are created equal."}),(0,a.jsx)("p",{children:"3. I used Approach 2 from the paper."})]}),(0,a.jsx)(o.Z,{size:"large",width:100,style:{alignContent:"center",justifyContent:"center",alignItems:"center"},children:(0,a.jsx)("a",{href:"https://github.com/artem9k",children:"@artem_9k"})})]})})};function T(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{style:{alignContent:"center",justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column",paddingTop:"50px"},children:(0,a.jsx)(v,{style:{},children:(0,a.jsx)(N,{style:{width:"500px"}})})})})}}},function(e){e.O(0,[196,437,966,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);