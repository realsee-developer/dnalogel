import{r as D,j as A,T as k,G as z,p as E,I as S,b as Z}from"./index-85b64ddc.js";import{g as G}from"./getInitialParamFromUrl-5dd39f79.js";import{u as R,D as O}from"./useFetchDatas-45e33e50.js";import{x as y,y as N,z as j,B as W,C as Y,D as U,F as f}from"./index-62a9cd62.js";import{M as H,y as Q}from"./Point-d3172315.js";import{r as _}from"./uuid-94297524.js";import{B as P}from"./Box-d96aca33.js";import{P as J}from"./Paper-ead7a250.js";import{B as F}from"./Button-c89038b2.js";import"./createTheme-a7bd8e9d.js";import"./useTheme-28230d65.js";import"./ButtonBase-4df208c3.js";function V(o,t,i,n=Q.Linear.None){const e=new H(o).to(t,i).easing(n).start();function a(s){e.update(s)&&requestAnimationFrame(a)}return requestAnimationFrame(a),e}var C=(o=>(o.Drawline="Drawline",o.Undo="Undo",o.Exit="Exit",o))(C||{});const w=Symbol("$$PAINT_BRUSH_EVENT$$");function x(o){return o[w]||(o[w]={}),o[w]}function K(o){o[w]||delete o[w]}class X{hasListener(t){const i=x(this);return i&&i[t]&&i[t].length>0}on(t,i,n){const e=x(this);return e[t]||(e[t]=[]),e[t].push([i,n||!1]),()=>this.off(t,i)}once(t,i){return this.on(t,i,!0)}off(t,i){if(t===void 0){K(this);return}const n=x(this);if(n[t]||(n[t]=[]),i===void 0){n[t].length=0;return}let e=0;for(;e<n[t].length&&n[t][e][0]!==i;e++);e<n[t].length&&n[t].splice(e,1)}emit(t,...i){let n=!1;const e=x(this)[t]||[];for(let a of e.slice()){const[s,h=!1]=a,I=s(...i);h&&this.off(t,s),I===!1&&(n=!0)}return n}}const $=`
<style type="text/css">

#_gl_paintBrush {
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
transform: translateZ(0);
z-index: 1997;
pointer-events: none;
opacity: 0;
transition: all 500ms;
}

#_gl_paintBrush.brushing {
  opacity: 1;
}

#_gl_paintBrush ._paintBrush-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

#_gl_paintBrush ._paintBrush-canvas--sync {
  pointer-events: none;
  z-index: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

#_gl_paintBrush ._paintBrush-canvas {
  pointer-events: none;
  z-index: 1;
}

#_gl_paintBrush.brushing ._paintBrush-canvas {
  pointer-events: auto;
}

#_gl_paintBrush ._paintBrush-ctrl {
  width: 140px;
  height: 52px;
  position: absolute;
  bottom: 28px;
  right: 50%;
  transform: translateX(50%);
  font-size: 10px;
  color: white;
  z-index: 2;
}

#_gl_paintBrush.brushing ._paintBrush-ctrl {
  pointer-events: auto;
}

#_gl_paintBrush ._paintBrush-ctrl ._paintBrush-ctrlinner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 26px;
  padding: 8px 16px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(180deg, hsl(0deg 0% 0% / 57%), hsl(0deg 0% 0% / 70%) 117%);
}

._paintBrush-ctrlitem {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  cursor: pointer;
}

._paintBrush-ctrlitem--undo >.brush-icon{
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyMnB4IiB2aWV3Qm94PSIwIDAgMjIgMjIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjQ1LjY3NTI0OCUiIHgyPSItMTYuOTYxMDIzJSIgeTI9Ijg0LjIzODQxOTglIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRkZGRkYiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRkZGRiIgc3RvcC1vcGFjaXR5PSIwLjMwMzY3Njc5MiIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNDAuMDAwMDAwLCAtNzQwLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDAuMDAwMDAwLCA3NDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cmVjdCBmaWxsPSIjRDhEOEQ4IiBvcGFjaXR5PSIwIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjIiIGhlaWdodD0iMjIiPjwvcmVjdD4KICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQuMDAwMDAwLCAyLjk5MDY1OSkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMCwzLjc1ODc1NzA5IEw5Ljg0Mzc1LDMuNzU4NzU3MDkgQzEyLjY5MTQ2ODIsMy43NTg3NTcwOSAxNSw2LjA2NzI4ODg1IDE1LDguOTE1MDA3MDkgQzE1LDExLjc2MjcyNTMgMTIuNjkxNDY4MiwxNC4wNzEyNTcxIDkuODQzNzUsMTQuMDcxMjU3MSBMMSwxNC4wNzEyNTcxIiBzdHJva2U9InVybCgjbGluZWFyR3JhZGllbnQtMSkiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cG9seWxpbmUgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwb2ludHM9IjMuNzkwMjI3MDcgNy41Mzk2NjA2NCAwIDMuNzU4NzU3MDkgMy43OTAyMjcwNyAwIj48L3BvbHlsaW5lPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=);
    background-size: 100%;
    width: 22px;
    height: 22px;
}

._paintBrush-ctrlitem--close >.brush-icon {
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyMnB4IiB2aWV3Qm94PSIwIDAgMjIgMjIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjUwLjAyMDY5MyUiIHkxPSItMTMuNzMzMzc1MSUiIHgyPSI1MCUiIHkyPSIxMTQuMTEwOTk0JSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkZGRkZGIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRkZGRkYiIHN0b3Atb3BhY2l0eT0iMC42MDEwNDM0ODgiIG9mZnNldD0iNDkuMzA4NDg4MiUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRkZGRiIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjAlIiB4Mj0iNTAlIiB5Mj0iMTAwJSIgaWQ9ImxpbmVhckdyYWRpZW50LTIiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkZGRkZGIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRkZGRkYiIG9mZnNldD0iNTUuOTY4MTUzNSUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRkZGRiIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnPgogICAgICAgICAgICA8cmVjdCBmaWxsPSIjRDhEOEQ4IiBvcGFjaXR5PSIwIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjIiIGhlaWdodD0iMjIiPjwvcmVjdD4KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNC4wMDAwMDAsIDUuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik03LC0yLjk4ODE2NTY4IEM3LjUxMjgzNTg0LC0yLjk4ODE2NTY4IDcuOTM1NTA3MTYsLTIuNjAyMTI1NDkgNy45OTMyNzIyNywtMi4xMDQ3ODY4MSBMOCwtMS45ODgxNjU2OCBMOCwxMy45OTgxMTQ2IEM4LDE0LjU1MDM5OTMgNy41NTIyODQ3NSwxNC45OTgxMTQ2IDcsMTQuOTk4MTE0NiBDNi40ODcxNjQxNiwxNC45OTgxMTQ2IDYuMDY0NDkyODQsMTQuNjEyMDc0NCA2LjAwNjcyNzczLDE0LjExNDczNTcgTDYsMTMuOTk4MTE0NiBMNiwtMS45ODgxNjU2OCBDNiwtMi41NDA0NTA0MyA2LjQ0NzcxNTI1LC0yLjk4ODE2NTY4IDcsLTIuOTg4MTY1NjggWiIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNy4wMDAwMDAsIDYuMDA0OTc0KSByb3RhdGUoLTQ1LjAwMDAwMCkgdHJhbnNsYXRlKC03LjAwMDAwMCwgLTYuMDA0OTc0KSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNywtMi45ODgxNjU2OCBDNy41MTI4MzU4NCwtMi45ODgxNjU2OCA3LjkzNTUwNzE2LC0yLjYwMjEyNTQ5IDcuOTkzMjcyMjcsLTIuMTA0Nzg2ODEgTDgsLTEuOTg4MTY1NjggTDgsMTMuOTk4MTE0NiBDOCwxNC41NTAzOTkzIDcuNTUyMjg0NzUsMTQuOTk4MTE0NiA3LDE0Ljk5ODExNDYgQzYuNDg3MTY0MTYsMTQuOTk4MTE0NiA2LjA2NDQ5Mjg0LDE0LjYxMjA3NDQgNi4wMDY3Mjc3MywxNC4xMTQ3MzU3IEw2LDEzLjk5ODExNDYgTDYsLTEuOTg4MTY1NjggQzYsLTIuNTQwNDUwNDMgNi40NDc3MTUyNSwtMi45ODgxNjU2OCA3LC0yLjk4ODE2NTY4IFoiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMikiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcuMDAwMDAwLCA2LjAwNDk3NCkgcm90YXRlKC0xMzUuMDAwMDAwKSB0cmFuc2xhdGUoLTcuMDAwMDAwLCAtNi4wMDQ5NzQpICI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=);
    background-size: 100%;
    width: 22px;
    height: 22px;
}

</style>
`;var q=Object.defineProperty,tt=(o,t,i)=>t in o?q(o,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[t]=i,d=(o,t,i)=>(tt(o,typeof t!="symbol"?t+"":t,i),i);class it extends X{constructor(t){super(),d(this,"configs"),d(this,"clientWidth"),d(this,"clientHeight"),d(this,"ready",!1),d(this,"uuid",_()),d(this,"tween"),d(this,"tweening",!1),d(this,"container"),d(this,"canvas"),d(this,"data",{}),d(this,"tempLine",{}),this.configs=t,this.clientWidth=document.body.clientWidth,this.clientHeight=document.body.clientHeight,this.container=this.ifInsertToDOM(),this.canvas={},this.initCtrl()}get color(){return this.configs.currentColor}get state(){return this.data}get dpr(){return this.configs.DPR||1}ifInsertToDOM(){if(this.container)return this.container;if(this.configs.container)this.configs.container.id="_gl_paintBrush",this.container=this.configs.container;else if(document.getElementById("_gl_paintBrush"))this.container=document.getElementById("_gl_paintBrush");else{const t=document.createElement("div");t.id="_gl_paintBrush",document.body.appendChild(t),this.container=t}return this.container.innerHTML=$,this.container}initCanvas(t){const i=document.createElement("canvas");i.className=t,i.width=this.clientWidth,i.height=this.clientHeight;const n=i.getContext("2d");if(n)return n.lineWidth=5*this.dpr,n.lineCap="round",n.lineJoin="round",this.container.appendChild(i),i}initCtrl(){const t=document.createElement("div");t.className="_paintBrush-ctrl";const i=document.createElement("div");i.className="_paintBrush-ctrlinner";const n=document.createElement("a");n.className="_paintBrush-ctrlitem _paintBrush-ctrlitem--undo",n.addEventListener("click",a=>{var s;if(a.stopPropagation(),this.configs.onClickUndo&&this.configs.onClickUndo(),!this.canvas[this.uuid]||!this.data[this.uuid]||this.data[this.uuid].length===0)return;const h=this.data[this.uuid].pop();h&&this.emitStateChange({type:C.Undo,color:this.color,ready:this.ready,state:h,uuid:this.uuid});const I=(s=this.canvas[this.uuid])==null?void 0:s.getContext("2d");if(!this.canvas[this.uuid])return;const{width:p,height:u}=this.canvas[this.uuid];I&&I.clearRect(0,0,p,u),this.data[this.uuid].forEach(r=>this.handleDrawLine(this.uuid,r,{withUndo:!0}))});const e=document.createElement("a");return e.className="_paintBrush-ctrlitem _paintBrush-ctrlitem--close",e.addEventListener("click",a=>{a.stopPropagation(),this.closeBrush(),this.configs.onClickClose&&this.configs.onClickClose()}),[n,e].forEach(a=>{const s=document.createElement("i");s.className="brush-icon";const h=document.createElement("span");h.className="brush-txt",h.innerText=a.className.endsWith("undo")?this.configs.onUndoText:this.configs.onExitText,a.appendChild(s),a.appendChild(h)}),i.appendChild(n),i.appendChild(e),t.appendChild(i),this.container.appendChild(t),t}openBrush(){if(this.ready)return;this.canvas[this.uuid]||(this.canvas[this.uuid]=this.initCanvas("_paintBrush-canvas")),this.container.className="brushing";const t=this.canvas[this.uuid];t.getContext("2d").clearRect(0,0,t.width,t.height),this.openBrushHandle(),this.ready=!0,this.emit("readyChange",!0)}closeBrush(){this.ready&&(this.container.className="",this.data={},this.tempLine={},Object.keys(this.canvas).forEach(t=>{this.canvas[t].ontouchstart=()=>!1,this.canvas[t].ontouchmove=()=>!1,this.canvas[t].ontouchend=()=>!1,this.canvas[t].ontouchcancel=()=>!1;const i=this.canvas[t].getContext("2d");i&&i.clearRect(0,0,this.canvas[t].width,this.canvas[t].height)}),this.ready=!1,this.emit("readyChange",!1),this.emitStateChange({type:C.Exit,color:this.color,ready:!1,uuid:this.uuid}))}updateCurrentColor(t){const i=this.canvas[this.uuid];if(!i)return;const n=i.getContext("2d");n&&(this.configs.currentColor=t,n.strokeStyle=t)}openBrushHandle(){const t=this.canvas[this.uuid];if(!t)return;const i=t.getContext("2d");if(!i)return;const n=this.color||"#6D92FF";i.strokeStyle=n;let e=null,a=[],s,h=[],I=0;const p=(u,r,c)=>{const l=this.color||"#ff0000";i.strokeStyle=l,i.beginPath(),i.moveTo(u.x,u.y),i.quadraticCurveTo(r.x,r.y,c.x,c.y),i.stroke()};t.onmousedown=u=>{u.preventDefault(),I=Date.now();const r=u.clientX,c=u.clientY;a=[],a.push({x:r,y:c}),e={x:r,y:c},s=y({x:r,y:c},this.clientWidth,this.clientHeight),h=[]},t.onmousemove=u=>{if(u.preventDefault(),!e)return;const r=Number(u.clientX),c=Number(u.clientY);if(Math.abs(r-e.x)<5&&Math.abs(c-e.y)<5||(a.push({x:r,y:c}),h.push(y({x:r,y:c},this.clientWidth,this.clientHeight)),a.length<3))return;const{control:l,end:g}=N(a);!l||!g||(p(e,l,g),e=g)},t.onmouseup=u=>{if(u.preventDefault(),e=null,a.length<3)return;this.data[this.uuid]||(this.data[this.uuid]=[]);const r=Date.now()-I,c={move:Object.assign({},s),uuid:this.uuid,line:[...h],color:this.color,duration:r<1280?r:r<2e3?1280:0};this.data[this.uuid].push(c),j(()=>{this.emitStateChange({type:C.Drawline,color:this.color,ready:this.ready,state:c,uuid:this.uuid})})},t.ontouchstart=u=>{u.preventDefault(),I=Date.now();const r=u.touches[0].clientX,c=u.touches[0].clientY;a=[],a.push({x:r,y:c}),e={x:r,y:c},s=y({x:r,y:c},this.clientWidth,this.clientHeight),h=[]},t.ontouchmove=u=>{if(u.preventDefault(),!e)return;const r=Number(u.touches[0].clientX),c=Number(u.touches[0].clientY);if(Math.abs(r-e.x)<5&&Math.abs(c-e.y)<5||(a.push({x:r,y:c}),h.push(y({x:r,y:c},this.clientWidth,this.clientHeight)),a.length<3))return;const{control:l,end:g}=N(a);!l||!g||(p(e,l,g),e=g)},t.ontouchend=t.ontouchcancel=u=>{if(u.preventDefault(),e=null,a.length<3)return;this.data[this.uuid]||(this.data[this.uuid]=[]);const r=Date.now()-I,c={move:Object.assign({},s),line:[...h],uuid:this.uuid,color:this.color,duration:r<1280?r:r<2e3?1280:0};this.data[this.uuid].push(c),j(()=>{this.emitStateChange({type:C.Drawline,color:this.color,ready:this.ready,state:c,uuid:this.uuid})})}}emitStateChange(t,i=!0){if(t.type!==C.Drawline){this.emit("stateChange",t,i);return}const n=Date.now(),e=t.state;if(!e||!e.line)return;const a=Math.ceil(e.line.length/100);for(let s=0;s<a;s++){const h={uuid:this.uuid,color:this.color,ready:this.ready,type:t.type,state:{uuid:this.uuid,move:e.move,duration:e.duration,color:this.color,line:e.line.slice(s*100,(s+1)*100)},timestamp:n,end:s===a-1};W(s,20,()=>{this.emit("stateChange",h,i)})}}action(t){const{ready:i,type:n,uuid:e}=t;if(!i&&this.ready){this.closeBrush();return}if(i&&!this.ready){this.openBrush();return}if(this.ready)switch(n){case C.Drawline:const{state:a,timestamp:s,end:h}=t;if(!s||!a)return;this.tempLine[s]=[].concat(this.tempLine[s]||[],a.line),h&&(Object.assign(a,{line:this.tempLine[s]}),this.handleDrawLine(e,a,{},()=>delete this.tempLine[s]));break;case C.Undo:this.handleUndo(e);break}}handleDrawLine(t,i,{withUndo:n=!1},e=U){!i||Object.prototype.toString.call(i)!="[object Object]"||Object.keys(i).length===0||Y(()=>new Promise(a=>{if(n||(this.canvas[t]||(this.canvas[t]=this.initCanvas("_paintBrush-canvas--sync")),this.data[t]||(this.data[t]=[]),this.data[t].push(i)),!this.canvas[t])return;const s=this.canvas[t].getContext("2d");if(!s)return;const{line:h=[],color:I="black",duration:p=0,uuid:u}=i,r=f(i.move||{},this.clientWidth,this.clientHeight);let c=[r];if(s.strokeStyle=I,s.beginPath(),s.moveTo(r.x,r.y),p&&!n){let l=[];const g=this;g.tween=V({step:0},{step:h.length-1},p).onUpdate(({step:m})=>{var T;if(g.tweening=!0,!g.ready)return s.clearRect(0,0,g.canvas[u].width,g.canvas[u].height),(T=g.tween)==null?void 0:T.stop();const b=Math.floor(m);if(!l.find(M=>M===b)){if(l.push(b),c.push(f(h[b],g.clientWidth,g.clientHeight)),c.length<3)return;const{control:M,end:v}=N(c);if(!M||!v)return;s.quadraticCurveTo(M.x,M.y,v.x,v.y),s.stroke()}}).onComplete(m=>{g.tween=void 0,g.tweening=!1,l=[],c=[],e&&e(),a()})}else{for(let l=0;l<h.length;l++){if(c.push(f(h[l],this.clientWidth,this.clientHeight)),c.length<3)continue;const{control:g,end:m}=N(c);!g||!m||s.quadraticCurveTo(g.x,g.y,m.x,m.y)}s.stroke(),c=[],e&&e(),a()}}))}handleUndo(t){if(!this.canvas[t]||!this.data[t]||this.data[t].length===0)return;this.data[t].pop();const i=()=>{var n;const e=(n=this.canvas[t])==null?void 0:n.getContext("2d");e&&e.clearRect(0,0,this.canvas[t].width,this.canvas[t].height),this.data[t].forEach(a=>this.handleDrawLine(t,a,{withUndo:!0}))};if(this.tween&&this.tweening){this.tween.stop(),j(i,60);return}i()}destroyBrush(){this.closeBrush(),this.ready=!1,this.emit("readyChange",!0)}}var et=Object.defineProperty,nt=(o,t,i)=>t in o?et(o,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[t]=i,st=(o,t,i)=>(nt(o,typeof t!="symbol"?t+"":t,i),i);class at{constructor(t={}){st(this,"controller");const i=Object.assign({currentColor:"#f44336",onUndoText:"回退",onExitText:"关闭"},t);this.controller=new it(i)}on(t,i){this.controller.on(t,i)}off(t,i){this.controller.off(t,i)}once(t,i){this.controller.once(t,i)}show(){this.controller.openBrush()}action(t){this.controller.action(t)}get state(){return this.controller.state}get configs(){return this.controller.configs}dispose(){return this.controller.destroyBrush()}setCurrentColor(t){this.controller.updateCurrentColor(t)}}function B(){return{width:window.innerWidth,height:window.innerHeight}}function ot(){const[o,t]=D.useState(B);return D.useEffect(()=>{const i=()=>t(B());return window.addEventListener("resize",i,!1),()=>window.removeEventListener("resize",i,!1)}),o}const ct=o=>{const[t,i]=D.useState(!0),n=D.useRef(),e=()=>{var s;(s=n.current)==null||s.show(),i(!1)};D.useEffect(()=>{n.current=new at({currentColor:"#ff0000",onUndoText:"undo",onExitText:"exit"})},[]);const a=(s,h)=>{s.type===C.Exit&&i(!0)};return D.useEffect(()=>{var s;if(n)return(s=n.current)==null||s.on("stateChange",a),()=>{var h;return(h=n.current)==null?void 0:h.off("stateChange",a)}},[n.current]),A.jsx(P,{sx:{display:t?"block":"none"},children:A.jsx(J,{sx:{position:"fixed",top:"10px",right:"10px",backgroundColor:"transparent"},children:A.jsx(F,{onClick:e,children:"开启画笔 🖌️"})})})};Object.assign(window,{THREE:k});const rt={},L=G();JSON.stringify(L);const ht=z({imageOptions:{size:512},textureOptions:{size:512},plugins:[]}),ut=()=>{const o=ot(),t=R(O.WORK);return t&&A.jsxs(ht,{initialWork:E(t),children:[A.jsx(S,{...o}),A.jsx(P,{className:"plugin-full-screen-container",sx:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none"}}),A.jsx(ct,{})]})};Z.render(A.jsx(ut,{}),document.querySelector("#app"));
