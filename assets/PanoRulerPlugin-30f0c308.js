import{V as U,C as re,at as se,r as $,n as ie,q as le,j as I,G as ae,$ as ce,I as ue,a as de}from"./index-482d3593.js";import"./index-8e67cb99.js";import{u as Z,D as ee}from"./useFetchDatas-1187231c.js";import{B as fe}from"./Box-8eaf6b81.js";import{P as me}from"./Paper-0439b28b.js";import{B as X}from"./Button-22019909.js";import{g as pe}from"./planimetry-c68691e1.js";import"./createTheme-6362cbdb.js";import"./ButtonBase-722f8064.js";function oe(o,t=0){t<=0?requestAnimationFrame(o):requestAnimationFrame(()=>oe(o,t-1))}const he=`<style type="text/css">
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
`;var be=Object.defineProperty,G=Object.getOwnPropertySymbols,ge=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable,K=(o,t,e)=>t in o?be(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,J=(o,t)=>{for(var e in t||(t={}))ge.call(t,e)&&K(o,e,t[e]);if(G)for(var e of G(t))ye.call(t,e)&&K(o,e,t[e]);return o},ve=(o,t,e)=>new Promise((u,n)=>{var z=b=>{try{l(e.next(b))}catch(M){n(M)}},s=b=>{try{l(e.throw(b))}catch(M){n(M)}},l=b=>b.done?u(b.value):Promise.resolve(b.value).then(z,s);l((e=e.apply(o,t)).next())});const xe=(o,t)=>Math.sqrt(Math.pow(o.z-t.z,2)+Math.pow(o.x-t.x,2)),we=(o,t)=>{const e={},u=new se,n=t.work;if(!n)return e;const z=o.observers;n.observers.forEach((s,l)=>{const{standingPosition:b}=s,M=new U(b.x,b.y,b.z);u.set(M,new U(0,1,0));const[k]=t.model.intersectRaycaster(u),j=k?k.point.y:2.7,L=z[l];if(!L)return e;const q=o.rooms[L].name;e[q]===void 0?e[q]={__roof:[j],__floor:[M.y]}:(e[q].__roof.push(j),e[q].__floor.push(M.y))});for(const s in e){const l=e[s];l.__roof.sort(),l.__floor.sort(),l.floor=l.__floor[~~(l.__floor.length/2)],l.roof=l.__roof[l.__roof.length-1]}return e},Pe=(o,t)=>{const e={enable:!1,loaded:!1,options:t.options||{distanceText:a=>`${a.toFixed(1)}m`}},u=(a,d)=>{const c=`
      <div class="PanoRulerPlugin-rule-line">
        <em></em>
        <div class="PanoRulerPlugin-rule-label">
          <div class="PanoRulerPlugin-rule-label-name">${e.options.distanceText(d)}</div>
        </div>
      </div>
    `,r=document.createElement("div");return r.setAttribute("class","PanoRulerPlugin-rule"),r.setAttribute("data-name",a),r.setAttribute("style","display: none"),r.innerHTML=c,r},n=document.createElement("div");n.setAttribute("style","position: absolute;pointer-events: none;width: 100%;height: 100%;left: 0;top: 0;overflow: hidden;");const z=document.createElement("div");z.innerHTML=he,n.appendChild(z);const s={},l=(a,d)=>{if(e.loaded)throw new Error("标尺被重复初始化！");const c=we(a,o),r=o.work;if(!r)return!1;for(const f in d){const y=d[f],{standingPosition:g}=r.observers[0],m=y.map(({x:p,z:v,observers:h})=>{const i=h.length>0?a.rooms[a.observers[h[0]]].name:"",w=c[i]?c[i].floor:null;let x=1/0,P={index:0,x:g.x,y:g.y,z:g.z};h.forEach(A=>{if(!r.observers[A])return;const{standingPosition:T}=r.observers[A],F={index:A,x:T.x,y:T.y,z:T.z},S=xe({x:p,z:v},F);w?S<x&&Math.abs(F.y-w)<.3&&(x=S,P=F):S<x&&(x=S,P=F)});const _=new U(p,P.y,v);Object.assign(_,{observers:h});const E=c[i]?c[i].roof:null,W=E?new U(p,E,v):null;return W&&Object.assign(W,{observers:h}),{origin:_,vertical:W}});s[f]={origins:m.map(p=>p.origin),rules:[]};for(const{origin:p,vertical:v}of m){if(!v)continue;const h=u(f,p.distanceTo(v));n.append(h),s[f].rules.push({vertical:!0,rule:[p,v],$element:h})}for(let p=0;p<m.length;p++){let v=p+1;v>=m.length&&(v=0);const{origin:h}=m[p],{origin:i}=m[v],w=u(f,h.distanceTo(i));n.append(w),s[f].rules.push({vertical:!1,rule:[h,i],$element:w})}}return e.loaded=!0,!0},b=(a,d,c)=>ve(void 0,null,function*(){const r=a||t.roomInfo,f=d||t.roomRules;if(!r||!f)throw new Error("标尺数据依赖不齐全！");return e.loaded=!1,e.options=J(J({},e.options),c||{}),o.model.loaded?l(r,f):yield new Promise(y=>o.once("modelLoaded",()=>y(l(r,f))))});t.roomInfo&&t.roomRules&&b(t.roomInfo,t.roomRules);const M=(a,d,c,r)=>{const f=[[{x:0,y:0},{x:c,y:0}],[{x:0,y:0},{x:0,y:r}],[{x:c,y:0},{x:c,y:r}],[{x:0,y:r},{x:c,y:r}]],y=[];for(let g=0;g<f.length;g++){const m=pe([a,d],[f[g][0],f[g][1]],!0);m&&y.push(m)}return y.length===0?!1:y},k=()=>{var a;const d=(a=o.getElement())==null?void 0:a.parentElement;if(!d||!e.loaded||Object.keys(s).length<=0)return;const{panoIndex:c,camera:r,currentMode:f}=o;if(c===void 0)return;let y;for(const i in s)i.split(",").indexOf(c.toString())>=0&&(y=i);if(!y){for(const i in s)for(const{$element:w}of s[i].rules)w.style.display="none";return}const g=r.position,m=r.getWorldDirection(new U),p=d.clientWidth,v=d.clientHeight;if(f!==re.Mode.Panorama){for(const i in s)for(const{$element:w}of s[i].rules)w.style.display="none";return}for(const i in s)for(const{$element:w}of s[i].rules)w.style.display=i===y?"block":"none";const[h]=s[y].origins.slice().filter(i=>i.observers.indexOf(c)>=0).sort((i,w)=>{const x=i.clone().setY(0).sub(g).normalize().angleTo(m.clone().setY(0)),P=w.clone().setY(0).sub(g).normalize().angleTo(m.clone().setY(0));return x-P});for(const{rule:i,vertical:w,$element:x}of s[y].rules){const[P,_]=i,E=x.querySelector(".PanoRulerPlugin-rule-line");if(!E)return;if(!h){x.style.display="none";continue}if(P!==h&&_!==h){x.style.display="none";continue}if(P.distanceTo(_)<.3){x.style.display="none";continue}if(P.observers.indexOf(c)===-1||_.observers.indexOf(c)===-1){x.style.display="none";continue}if(P.clone().sub(g).normalize().angleTo(m)>Math.PI/2){x.style.display="none";continue}if(_.clone().sub(g).normalize().angleTo(m)>Math.PI/2){x.style.display="none";continue}const W=P.distanceTo(_);if(_.clone().sub(_.clone().sub(P).divide(new U(2,2,2))).distanceTo(g)/W>8){x.style.display="none";continue}const A=P.clone().project(r),T=(A.x+1)/2*p,F=(-A.y+1)/2*v,S=_.clone().project(r),N=(S.x+1)/2*p,Y=(-S.y+1)/2*v,O=Math.sqrt(Math.pow(N-T,2)+Math.pow(Y-F,2));let B=O,C=50;const R=M({x:~~T,y:~~F},{x:~~N,y:~~Y},p,v);if(R&&R.length===1&&(h===P?(B=Math.sqrt(Math.pow(R[0].x-T,2)+Math.pow(R[0].y-F,2)),C=B/O*50):h===_&&(B=Math.sqrt(Math.pow(R[0].x-N,2)+Math.pow(R[0].y-Y,2)),C=100-B/O*50)),R&&R.length===2){const V={x:(R[0].x+R[1].x)/2,y:(R[0].y+R[1].y)/2};C=Math.sqrt(Math.pow(V.x-T,2)+Math.pow(V.y-F,2))/O*100}const ne=(Math.PI/2-Math.atan2(N-T,F-Y))/Math.PI*180,H=E.querySelector(".PanoRulerPlugin-rule-label"),D=H.children[0].clientWidth;D>=O||D/2>=C/100*O||D/2>=(1-C/100)*O?E.style.display="none":(E.style.display="block",E.style.width=O+"px",E.style.left=T+"px",E.style.top=F+"px",E.style.transform=`rotate(${-ne}deg)`,H.style.left=`${C}%`)}},j=()=>oe(k),L=()=>{var a,d;return e.loaded?(e.enable||(n.setAttribute("class","PanoRulerPlugin"+(e.options.className?" "+e.options.className:"")),(d=(a=o.getElement())==null?void 0:a.parentElement)==null||d.append(n),k(),o.on("modeChange",k),o.on("cameraUpdate",j),e.enable=!0),!0):!1},q=()=>(e.enable&&(o.off("modeChange",k),o.off("cameraUpdate",j),n&&n.remove(),e.enable=!1),!0);function te(a){if(a.distanceText&&a.distanceText!==e.options.distanceText){const d=a.distanceText;e.options.distanceText=d,Object.values(s).forEach(c=>{c.rules.forEach(r=>{const[f,y]=r.rule,g=f.distanceTo(y),m=r.$element.querySelector(".PanoRulerPlugin-rule-label-name");m&&(m.innerText=d(g))})})}}return{enable:L,disable:q,load:b,state:e,changeConfigs:te}};function Q(){return{width:window.innerWidth,height:window.innerHeight}}function _e(){const[o,t]=$.useState(Q);return $.useEffect(()=>{const e=()=>t(Q());return window.addEventListener("resize",e,!1),()=>window.removeEventListener("resize",e,!1)}),o}const Re=({vrCode:o})=>{const t=ie(),u=le().plugins.panoRulerPlugin,n=Z(ee.PANO_RULER_PLUGIN_SERVER_DATA,o),[z,s]=$.useState(u.state.enable),[l,b]=$.useState(!0);function M(){b(!l)}$.useEffect(()=>{u.changeConfigs({distanceText(j){return l?j.toFixed(1).toString()+"m":(j*3.2808).toFixed(1)+"ft"}})},[l]),$.useEffect(()=>{u.disable(),n&&(console.log(n==null?void 0:n.pano_ruler_data.roomInfo,n==null?void 0:n.pano_ruler_data.roomRules),u.load(n==null?void 0:n.pano_ruler_data.roomInfo,n==null?void 0:n.pano_ruler_data.roomRules).then(()=>{u.enable(),s(u.state.enable)}))},[n]);const k=()=>{u[u.state.enable?"disable":"enable"](),s(u.state.enable)};return t!=="Loaded"?null:I.jsx(fe,{children:I.jsxs(me,{sx:{position:"fixed",top:"10px",right:"10px",backgroundColor:"transparent",display:"flex",flexDirection:"column",gap:"10px 0"},children:[I.jsx(X,{variant:"contained",onClick:k,children:z?"关闭标尺":"开启标尺"}),I.jsx(X,{variant:"contained",onClick:M,children:"切换单位"})]})})},Me=ae({imageOptions:{size:512},textureOptions:{size:512},onlyRenderIfNeeds:!0,plugins:[[Pe,"panoRulerPlugin",{}]]}),Ee=()=>{const o=_e(),[t,e]=$.useState("81gmMq5a7zbF9leWMk"),u=Z(ee.WORK);return I.jsxs(Me,{work:u&&ce(u),ref:n=>Object.assign(window,{$five:n==null?void 0:n.state.five}),children:[I.jsx(ue,{...o}),I.jsx(Re,{vrCode:t})]})};de.render(I.jsx(Ee,{}),document.querySelector("#app"));
