import{r as e,c as o,p as t,a as n,o as s,b as a,w as l,d as c,e as r,t as d,f as i,T as u,g as m,F as p,h as g,i as f}from"./vendor.6541ee84.js";!function(e=".",o="__import__"){try{self[o]=new Function("u","return import(u)")}catch(t){const n=new URL(e,location),s=e=>{URL.revokeObjectURL(e.src),e.remove()};self[o]=e=>new Promise(((t,a)=>{const l=new URL(e,n);if(self[o].moduleMap[l])return t(self[o].moduleMap[l]);const c=new Blob([`import * as m from '${l}';`,`${o}.moduleMap['${l}']=m;`],{type:"text/javascript"}),r=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){a(new Error(`Failed to import: ${e}`)),s(r)},onload(){t(self[o].moduleMap[l]),s(r)}});document.head.appendChild(r)})),self[o].moduleMap={}}}("/assets/");const w=e({mode:"ask"});function y(){const e="ask"===w.mode?"answer":"ask";var o;o=e,w.mode=o}const v=o((()=>w.mode));const b={},k=l();t("data-v-19f4ad17");const h=c("h1",null,"8",-1);n();const M=k(((e,o)=>(s(),a("div",null,[h]))));b.render=M,b.__scopeId="data-v-19f4ad17";var C={positive:["It is certain","It is decidedly so","Without a doubt","Yes – definitely","You may rely on it","As I see it, yes","Most likely","Outlook good","Yes","Signs point to yes"],neutral:["Reply hazy, try again","Ask again later","Better not tell you now","Cannot predict now","Concentrate and ask again"],negative:["Don't count on it","My reply is no","My sources say no","Outlook not so good","Very doubtful"]};const _={setup(){const e=o((()=>{const e=Object.values(C).reduce(((e,o)=>[...e,...o]),[]);return e[function(e,o){const t=Math.ceil(e),n=Math.floor(o);return Math.floor(Math.random()*(n-t+1)+t)}(0,e.length-1)]}));return r((()=>function(){const e=document.getElementById("canvas");if(e.getContext){const o=e.getContext("2d");o.beginPath(),o.moveTo(0,0),o.lineTo(300,0),o.lineTo(150,150),o.fillStyle="#3f33ca",o.fill()}}())),{randomAnswer:e}}},R=l();t("data-v-631c4b8d");const U=c("canvas",{id:"canvas",class:"absolute h-48 w-56 top-1/4"},null,-1),j={class:"z-10 p-14 pt-16"};n();const A=R(((e,o,t,n,l,r)=>(s(),a("div",null,[U,c("h1",j,d(n.randomAnswer),1)]))));_.render=A,_.__scopeId="data-v-631c4b8d";const I={components:{TopNumber:b,AnswerWindow:_},setup:()=>({toggleMode:y,mode:v})},L=c("div",{class:"shadow-bg"},null,-1),O={class:"ball-bg"};I.render=function(e,o,t,n,l,r){const d=i("TopNumber"),f=i("AnswerWindow");return s(),a(p,null,[L,c("div",O,[c(u,{name:"slideDown"},{default:m((()=>["ask"===n.mode?(s(),a(d,{key:0,class:"inner-bg",onClick:n.toggleMode},null,8,["onClick"])):g("",!0)])),_:1}),c(u,{name:"slideUp"},{default:m((()=>["answer"===n.mode?(s(),a(f,{key:0,class:"window-bg",onClick:n.toggleMode},null,8,["onClick"])):g("",!0)])),_:1})])],64)};const T={components:{EightBall:I},setup:()=>({mode:v,toggleMode:y})};T.render=function(e,o,t,n,l,r){const u=i("EightBall");return s(),a(p,null,[c(u),c("button",{class:"mt-10 uppercase",onClick:o[1]||(o[1]=(...e)=>n.toggleMode&&n.toggleMode(...e))}," Click to "+d("ask"===n.mode?"answer":"ask"),1)],64)};f(T).mount("#app");