import{V as C,F as re,u as ie,r as A,n as se,q as le,j as S,G as ae,p as ce,I as ue,a as de}from"./index-85b64ddc.js";import"./index-62a9cd62.js";import{u as Z,D as ee}from"./useFetchDatas-45e33e50.js";import{B as fe}from"./Box-d96aca33.js";import{P as me}from"./Paper-ead7a250.js";import{B as X}from"./Button-c89038b2.js";import{g as pe}from"./planimetry-c68691e1.js";import"./Point-d3172315.js";import"./createTheme-a7bd8e9d.js";import"./useTheme-28230d65.js";import"./ButtonBase-4df208c3.js";function ne(n,t=0){t<=0?requestAnimationFrame(n):requestAnimationFrame(()=>ne(n,t-1))}const he=`<style type="text/css">
.PanoRulerPlugin-rule-line {
  position: absolute;
  transform-origin: left center;
  width: 0;
  height: 0.0625rem;
}

.PanoRulerPlugin-rule-line::after {
  content: '';
  position: absolute;
  left: -0.125rem;
  top: -0.1rem;
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 50%;
  background: #FFFFFF;
  z-index: 1;
  animation: viewport-rule-point 0.1s 1s;
  animation-fill-mode: both;
}

.PanoRulerPlugin-rule-line::before {
  content: '';
  position: absolute;
  right: -0.125rem;
  top: -0.1rem;
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 50%;
  background: #FFFFFF;
  animation: viewport-rule-point 0.1s 1.5s;
  animation-fill-mode: both;
}

.PanoRulerPlugin-rule-line em {
  background: #fff;
  display: block;
  height: 100%;
  animation: viewport-rule-line 0.5s ease 1s;
  animation-fill-mode: both;
  box-shadow: 0 0 0.25rem rgb(0 0 0 / 40%);
}

.PanoRulerPlugin-rule-label {
  position: absolute;
  width: 0;
  height: 0;
  top: 0.0625rem;
}

.PanoRulerPlugin-rule-label-name {
  position: absolute;
  padding: 0.1875rem 0.375rem;
  background: rgba(195,195,195,0.30);
  backdrop-filter: blur(0.25rem);
  -webkit-backdrop-filter: blur(0.25rem);
  border-radius: 6.25rem;
  border: 0.0625rem solid rgba(255,255,255,0.6);
  white-space: nowrap;
  overflow: hidden;
  color: #FFFFFF;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1;
  -webkit-animation: viewport-rule-label 0.25s ease 1s;
  animation: viewport-rule-label 0.25s ease 1s;
  animation-fill-mode: both;
  box-shadow: inset 0 0 0.625rem 0 rgba(255,255,255,0.30);
}

@keyframes viewport-rule-line {
  0% { width: 0% }
  100% { width: 100% }
}

@keyframes viewport-rule-label {
  0% { opacity: 0; transform: scaleX(0); }
  100% { opacity: 1; transform: translate(-50%, -50%) scaleX(1); }
}

@keyframes viewport-rule-point {
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
}
</style>
`;var be=Object.defineProperty,G=Object.getOwnPropertySymbols,ye=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable,K=(n,t,e)=>t in n?be(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,J=(n,t)=>{for(var e in t||(t={}))ye.call(t,e)&&K(n,e,t[e]);if(G)for(var e of G(t))ge.call(t,e)&&K(n,e,t[e]);return n},xe=(n,t,e)=>new Promise((c,o)=>{var j=h=>{try{l(e.next(h))}catch(E){o(E)}},s=h=>{try{l(e.throw(h))}catch(E){o(E)}},l=h=>h.done?c(h.value):Promise.resolve(h.value).then(j,s);l((e=e.apply(n,t)).next())});const ve=(n,t)=>Math.sqrt(Math.pow(n.z-t.z,2)+Math.pow(n.x-t.x,2)),we=(n,t)=>{const e={},c=new ie,o=t.work;if(!o)return e;const j=n.observers;o.observers.forEach((s,l)=>{const{standingPosition:h}=s,E=new C(h.x,h.y,h.z);c.set(E,new C(0,1,0));const[T]=t.model.intersectRaycaster(c),O=T?T.point.y:2.7,L=j[l];if(!L)return e;const $=n.rooms[L].name;e[$]===void 0?e[$]={__roof:[O],__floor:[E.y]}:(e[$].__roof.push(O),e[$].__floor.push(E.y))});for(const s in e){const l=e[s];l.__roof.sort(),l.__floor.sort(),l.floor=l.__floor[~~(l.__floor.length/2)],l.roof=l.__roof[l.__roof.length-1]}return e},Pe=(n,t)=>{const e={enable:!1,loaded:!1,options:t.options||{distanceText:a=>`${a.toFixed(1)}m`}},c=(a,f)=>{const d=`
      <div class="PanoRulerPlugin-rule-line">
        <em></em>
        <div class="PanoRulerPlugin-rule-label">
          <div class="PanoRulerPlugin-rule-label-name">${e.options.distanceText(f)}</div>
        </div>
      </div>
    `,r=document.createElement("div");return r.setAttribute("class","PanoRulerPlugin-rule"),r.setAttribute("data-name",a),r.setAttribute("style","display: none"),r.innerHTML=d,r},o=document.createElement("div");o.setAttribute("style","position: absolute;pointer-events: none;width: 100%;height: 100%;left: 0;top: 0;overflow: hidden;");const j=document.createElement("div");j.innerHTML=he,o.appendChild(j);const s={},l=(a,f)=>{var d;if(e.loaded)throw new Error("标尺被重复初始化！");const r=we(a,n),b=n.work;if(!b)return!1;for(const u in f){const w=f[u],x=(d=b.observers[0])==null?void 0:d.standingPosition;if(!x)return;const R=w.map(({x:m,z:p,observers:i})=>{const y=i.length>0?a.rooms[a.observers[i[0]]].name:"",g=r[y]?r[y].floor:null;let v=1/0,P={index:0,x:x.x,y:x.y,z:x.z};i.forEach(F=>{if(!b.observers[F])return;const{standingPosition:k}=b.observers[F],q={index:F,x:k.x,y:k.y,z:k.z},z=ve({x:m,z:p},q);g?z<v&&Math.abs(q.y-g)<.3&&(v=z,P=q):z<v&&(v=z,P=q)});const M=new C(m,P.y,p);Object.assign(M,{observers:i});const N=r[y]?r[y].roof:null,W=N?new C(m,N,p):null;return W&&Object.assign(W,{observers:i}),{origin:M,vertical:W}});s[u]={origins:R.map(m=>m.origin),rules:[]};for(const{origin:m,vertical:p}of R){if(!p)continue;const i=c(u,m.distanceTo(p));o.append(i),s[u].rules.push({vertical:!0,rule:[m,p],$element:i})}for(let m=0;m<R.length;m++){let p=m+1;p>=R.length&&(p=0);const{origin:i}=R[m],{origin:y}=R[p],g=c(u,i.distanceTo(y));o.append(g),s[u].rules.push({vertical:!1,rule:[i,y],$element:g})}}return e.loaded=!0,!0},h=(a,f,d)=>xe(void 0,null,function*(){const r=a||t.roomInfo,b=f||t.roomRules;if(!r||!b)throw new Error("标尺数据依赖不齐全！");return e.loaded=!1,e.options=J(J({},e.options),d||{}),n.model.loaded?l(r,b):yield new Promise(u=>n.once("modelLoaded",()=>u(l(r,b))))});t.roomInfo&&t.roomRules&&h(t.roomInfo,t.roomRules);const E=(a,f,d,r)=>{const b=[[{x:0,y:0},{x:d,y:0}],[{x:0,y:0},{x:0,y:r}],[{x:d,y:0},{x:d,y:r}],[{x:0,y:r},{x:d,y:r}]],u=[];for(let w=0;w<b.length;w++){const x=pe([a,f],[b[w][0],b[w][1]],!0);x&&u.push(x)}return u.length===0?!1:u},T=()=>{var a;const f=(a=n.getElement())==null?void 0:a.parentElement;if(!f||!e.loaded||Object.keys(s).length<=0)return;const{panoIndex:d,camera:r,currentMode:b}=n;if(d===void 0)return;let u;for(const i in s)i.split(",").indexOf(d.toString())>=0&&(u=i);if(!u){for(const i in s)for(const{$element:y}of s[i].rules)y.style.display="none";return}const w=r.position,x=r.getWorldDirection(new C),R=f.clientWidth,m=f.clientHeight;if(b!==re.Mode.Panorama){for(const i in s)for(const{$element:y}of s[i].rules)y.style.display="none";return}for(const i in s)for(const{$element:y}of s[i].rules)y.style.display=i===u?"block":"none";const[p]=s[u].origins.slice().filter(i=>i.observers.indexOf(d)>=0).sort((i,y)=>{const g=i.clone().setY(0).sub(w).normalize().angleTo(x.clone().setY(0)),v=y.clone().setY(0).sub(w).normalize().angleTo(x.clone().setY(0));return g-v});for(const{rule:i,vertical:y,$element:g}of s[u].rules){const[v,P]=i,M=g.querySelector(".PanoRulerPlugin-rule-line");if(!M)return;if(!p){g.style.display="none";continue}if(v!==p&&P!==p){g.style.display="none";continue}if(v.distanceTo(P)<.3){g.style.display="none";continue}if(v.observers.indexOf(d)===-1||P.observers.indexOf(d)===-1){g.style.display="none";continue}if(v.clone().sub(w).normalize().angleTo(x)>Math.PI/2){g.style.display="none";continue}if(P.clone().sub(w).normalize().angleTo(x)>Math.PI/2){g.style.display="none";continue}const N=v.distanceTo(P);if(P.clone().sub(P.clone().sub(v).divide(new C(2,2,2))).distanceTo(w)/N>8){g.style.display="none";continue}const W=v.clone().project(r),F=(W.x+1)/2*R,k=(-W.y+1)/2*m,q=P.clone().project(r),z=(q.x+1)/2*R,Y=(-q.y+1)/2*m,I=Math.sqrt(Math.pow(z-F,2)+Math.pow(Y-k,2));let B=I,U=50;const _=E({x:~~F,y:~~k},{x:~~z,y:~~Y},R,m);if(_&&_.length===1&&(p===v?(B=Math.sqrt(Math.pow(_[0].x-F,2)+Math.pow(_[0].y-k,2)),U=B/I*50):p===P&&(B=Math.sqrt(Math.pow(_[0].x-z,2)+Math.pow(_[0].y-Y,2)),U=100-B/I*50)),_&&_.length===2){const V={x:(_[0].x+_[1].x)/2,y:(_[0].y+_[1].y)/2};U=Math.sqrt(Math.pow(V.x-F,2)+Math.pow(V.y-k,2))/I*100}const oe=(Math.PI/2-Math.atan2(z-F,k-Y))/Math.PI*180,H=M.querySelector(".PanoRulerPlugin-rule-label"),D=H.children[0].clientWidth;D>=I||D/2>=U/100*I||D/2>=(1-U/100)*I?M.style.display="none":(M.style.display="block",M.style.width=I+"px",M.style.left=F+"px",M.style.top=k+"px",M.style.transform=`rotate(${-oe}deg)`,H.style.left=`${U}%`)}},O=()=>ne(T),L=()=>{var a,f;return e.loaded?(e.enable||(o.setAttribute("class","PanoRulerPlugin"+(e.options.className?" "+e.options.className:"")),(f=(a=n.getElement())==null?void 0:a.parentElement)==null||f.append(o),T(),n.on("modeChange",T),n.on("cameraUpdate",O),e.enable=!0),!0):!1},$=()=>(e.enable&&(n.off("modeChange",T),n.off("cameraUpdate",O),o&&o.remove(),e.enable=!1),!0);function te(a){if(a.distanceText&&a.distanceText!==e.options.distanceText){const f=a.distanceText;e.options.distanceText=f,Object.values(s).forEach(d=>{d.rules.forEach(r=>{const[b,u]=r.rule,w=b.distanceTo(u),x=r.$element.querySelector(".PanoRulerPlugin-rule-label-name");x&&(x.innerText=f(w))})})}}return{enable:L,disable:$,load:h,state:e,changeConfigs:te}};function Q(){return{width:window.innerWidth,height:window.innerHeight}}function _e(){const[n,t]=A.useState(Q);return A.useEffect(()=>{const e=()=>t(Q());return window.addEventListener("resize",e,!1),()=>window.removeEventListener("resize",e,!1)}),n}const Ee=({vrCode:n})=>{const t=se(),c=le().plugins.panoRulerPlugin,o=Z(ee.PANO_RULER_PLUGIN_SERVER_DATA,n),[j,s]=A.useState(c.state.enable),[l,h]=A.useState(!0);function E(){h(!l)}A.useEffect(()=>{c.changeConfigs({distanceText(O){return l?O.toFixed(1).toString()+"m":(O*3.2808).toFixed(1)+"ft"}})},[l]),A.useEffect(()=>{c.disable(),o&&(console.info(o==null?void 0:o.pano_ruler_data.roomInfo,o==null?void 0:o.pano_ruler_data.roomRules),c.load(o==null?void 0:o.pano_ruler_data.roomInfo,o==null?void 0:o.pano_ruler_data.roomRules).then(()=>{c.enable(),s(c.state.enable)}))},[o]);const T=()=>{c[c.state.enable?"disable":"enable"](),s(c.state.enable)};return t!=="Loaded"?null:S.jsx(fe,{children:S.jsxs(me,{sx:{position:"fixed",top:"10px",right:"10px",backgroundColor:"transparent",display:"flex",flexDirection:"column",gap:"10px 0"},children:[S.jsx(X,{variant:"contained",onClick:T,children:j?"关闭标尺":"开启标尺"}),S.jsx(X,{variant:"contained",onClick:E,children:"切换单位"})]})})},Me=ae({imageOptions:{size:512},textureOptions:{size:512},onlyRenderIfNeeds:!0,plugins:[[Pe,"panoRulerPlugin",{}]]}),Re=()=>{const n=_e(),[t,e]=A.useState("81gmMq5a7zbF9leWMk"),c=Z(ee.WORK);return S.jsxs(Me,{work:c&&ce(c),children:[S.jsx(ue,{...n}),S.jsx(Ee,{vrCode:t})]})};de.render(S.jsx(Re,{}),document.querySelector("#app"));
