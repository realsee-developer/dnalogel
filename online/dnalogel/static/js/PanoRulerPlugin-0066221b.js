import{b as ae,c as ie,w as Z}from"./mockData-390f2e53.js";import{V as O,F as le,a8 as ce,r as U,b as ue,a as de,a9 as fe,j as $,B as me,aa as he,ax as ye,c as pe,d as be,p as ge,e as xe,R as we}from"./vendor-6e04d41e.js";import"./typing-9caf697c.js";import{t as Fe}from"./throttle-19b08aa2.js";import"./loadTexture-b2c90048.js";import"./constants-6d6c99de.js";function ee(e,t){return e.x===t.x&&e.y===t.y}function ne(e,t){return Math.abs(e)===1/0&&Math.abs(t)===1/0?!0:Math.abs(e-t)<.001}function B(e,t){return(t.y-e.y)/(t.x-e.x)}function Me(e,t,n){const r=B(e[1],e[0]),i=B(t[1],t[0]);if(isNaN(r)||isNaN(i)||ne(r,i))return!1;if(Y(e[0],t))return e[0];if(Y(e[1],t))return e[1];if(Y(t[0],e))return t[0];if(Y(t[1],e))return t[1];if(n&&!ve(e,t))return!1;const p=e[0],s=t[0];if(Math.abs(r)===1/0)return{x:p.x,y:t[1].y-(t[1].x-p.x)*i};if(Math.abs(i)===1/0)return{x:s.x,y:e[1].y-(e[1].x-s.x)*r};const c=(s.y-p.y+r*p.x-i*s.x)/(r-i),I=r*c-r*p.x+p.y;return{x:c,y:I}}function Y(e,t){return ee(e,t[0])||ee(e,t[1])?!0:(t[0].x-e.x)*(e.x-t[1].x)>=0&&(t[0].y-e.y)*(e.y-t[1].y)>=0&&ne(B(t[0],e),B(e,t[1]))}function H(e,t,n){return(e.x-n.x)*(t.y-n.y)-(t.x-n.x)*(e.y-n.y)}function ve(e,t){return Math.max(e[0].x,e[1].x)>=Math.min(t[0].x,t[1].x)&&Math.max(t[0].x,t[1].x)>=Math.min(e[0].x,e[1].x)&&Math.max(e[0].y,e[1].y)>=Math.min(t[0].y,t[1].y)&&H(t[0],e[1],e[0])*H(e[1],t[1],e[0])>0&&H(e[0],t[1],t[0])*H(t[1],e[1],t[0])>0?1:0}function oe(e,t=0){t<=0?requestAnimationFrame(e):requestAnimationFrame(()=>oe(e,t-1))}const Re=`<style type="text/css">
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
`,_e=(e,t)=>Math.sqrt(Math.pow(e.z-t.z,2)+Math.pow(e.x-t.x,2)),ke=(e,t)=>{const n={},r=new ce,i=t.work;if(!i)return n;const p=e.observers;i.observers.forEach((s,c)=>{const{standingPosition:I}=s,C=new O(I.x,I.y,I.z);r.set(C,new O(0,1,0));const[E]=t.model.intersectRaycaster(r),A=E?E.point.y:2.7,z=p[c];if(!z)return n;const j=e.rooms[z].name;n[j]===void 0?n[j]={__roof:[A],__floor:[C.y]}:(n[j].__roof.push(A),n[j].__floor.push(C.y))});for(const s in n){const c=n[s];c.__roof.sort(),c.__floor.sort(),c.floor=c.__floor[~~(c.__floor.length/2)],c.roof=c.__roof[c.__roof.length-1]}return n},Ee=(e,t)=>{const n={enable:!1,loaded:!1,options:t.options||{distanceText:h=>`${h.toFixed(1)}m`}},r=(h,b)=>{const u=`
      <div class="PanoRulerPlugin-rule-line">
        <em></em>
        <div class="PanoRulerPlugin-rule-label">
          <div class="PanoRulerPlugin-rule-label-name">${n.options.distanceText(b)}</div>
        </div>
      </div>
    `,a=document.createElement("div");return a.setAttribute("class","PanoRulerPlugin-rule"),a.setAttribute("data-name",h),a.setAttribute("style","display: none"),a.innerHTML=u,a},i=document.createElement("div");i.setAttribute("style","position: absolute;pointer-events: none;width: 100%;height: 100%;left: 0;top: 0;overflow: hidden;");const p=document.createElement("div");p.innerHTML=Re,i.appendChild(p);const s={},c=(h,b)=>{if(n.loaded)throw new Error("\u6807\u5C3A\u88AB\u91CD\u590D\u521D\u59CB\u5316\uFF01");const u=ke(h,e),a=e.work;if(!a)return!1;for(const l in b){const x=b[l],{standingPosition:w}=a.observers[0],F=x.map(({x:d,z:f,observers:o})=>{const g=o.length>0?h.rooms[h.observers[o[0]]].name:"",m=u[g]?u[g].floor:null;let y=1/0,M={index:0,x:w.x,y:w.y,z:w.z};o.forEach(D=>{if(!a.observers[D])return;const{standingPosition:S}=a.observers[D],_={index:D,x:S.x,y:S.y,z:S.z},k=_e({x:d,z:f},_);m?k<y&&Math.abs(_.y-m)<.3&&(y=k,M=_):k<y&&(y=k,M=_)});const R=new O(d,M.y,f);Object.assign(R,{observers:o});const X=u[g]?u[g].roof:null,q=X?new O(d,X,f):null;return q&&Object.assign(q,{observers:o}),{origin:R,vertical:q}});s[l]={origins:F.map(d=>d.origin),rules:[]};for(const{origin:d,vertical:f}of F){if(!f)continue;const o=r(l,d.distanceTo(f));i.append(o),s[l].rules.push({vertical:!0,rule:[d,f],$element:o})}for(let d=0;d<F.length;d++){let f=d+1;f>=F.length&&(f=0);const{origin:o}=F[d],{origin:g}=F[f],m=r(l,o.distanceTo(g));i.append(m),s[l].rules.push({vertical:!1,rule:[o,g],$element:m})}}return n.loaded=!0,!0},I=async(h,b,u)=>{const a=h||t.roomInfo,l=b||t.roomRules;if(!a||!l)throw new Error("\u6807\u5C3A\u6570\u636E\u4F9D\u8D56\u4E0D\u9F50\u5168\uFF01");return n.options=Object.assign({},n.options,u||{}),e.model.loaded?c(a,l):await new Promise(x=>e.once("modelLoaded",()=>x(c(a,l))))};t.roomInfo&&t.roomRules&&I(t.roomInfo,t.roomRules);const C=(h,b,u,a)=>{const l=[[{x:0,y:0},{x:u,y:0}],[{x:0,y:0},{x:0,y:a}],[{x:u,y:0},{x:u,y:a}],[{x:0,y:a},{x:u,y:a}]],x=[];for(let w=0;w<l.length;w++){const F=Me([h,b],[l[w][0],l[w][1]],!0);F&&x.push(F)}return x.length===0?!1:x},E=()=>{const h=e.getElement()?.parentElement;if(!h||!n.loaded||Object.keys(s).length<=0)return;const{panoIndex:b,camera:u,currentMode:a}=e;if(b===void 0)return;let l;for(const o in s)o.split(",").indexOf(b.toString())>=0&&(l=o);if(!l)return;const x=u.position,w=u.getWorldDirection(new O),F=h.clientWidth,d=h.clientHeight;if(a!==le.Mode.Panorama){for(const o in s)for(const{$element:g}of s[o].rules)g.style.display="none";return}for(const o in s)for(const{$element:g}of s[o].rules)g.style.display=o===l?"block":"none";const[f]=s[l].origins.slice().filter(o=>o.observers.indexOf(b)>=0).sort((o,g)=>{const m=o.clone().setY(0).sub(x).normalize().angleTo(w.clone().setY(0)),y=g.clone().setY(0).sub(x).normalize().angleTo(w.clone().setY(0));return m-y});for(const{rule:o,vertical:g,$element:m}of s[l].rules){const[y,M]=o,R=m.querySelector(".PanoRulerPlugin-rule-line");if(!R)return;if(!f){m.style.display="none";continue}if(y!==f&&M!==f){m.style.display="none";continue}if(y.distanceTo(M)<.5){m.style.display="none";continue}if(y.observers.indexOf(b)===-1||M.observers.indexOf(b)===-1){m.style.display="none";continue}if(y.clone().sub(x).normalize().angleTo(w)>Math.PI/2){m.style.display="none";continue}if(M.clone().sub(x).normalize().angleTo(w)>Math.PI/2){m.style.display="none";continue}const G=y.distanceTo(M);if(M.clone().sub(M.clone().sub(y).divide(new O(2,2,2))).distanceTo(x)/G>8){m.style.display="none";continue}const S=y.clone().project(u),_=(S.x+1)/2*F,k=(-S.y+1)/2*d,V=M.clone().project(u),N=(V.x+1)/2*F,W=(-V.y+1)/2*d,T=Math.sqrt(Math.pow(N-_,2)+Math.pow(W-k,2));let P=T,L=50;const v=C({x:~~_,y:~~k},{x:~~N,y:~~W},F,d);if(v&&v.length===1&&(f===y?(P=Math.sqrt(Math.pow(v[0].x-_,2)+Math.pow(v[0].y-k,2)),L=P/T*50):f===M&&(P=Math.sqrt(Math.pow(v[0].x-N,2)+Math.pow(v[0].y-W,2)),L=100-P/T*50)),v&&v.length===2){const Q={x:(v[0].x+v[1].x)/2,y:(v[0].y+v[1].y)/2};L=Math.sqrt(Math.pow(Q.x-_,2)+Math.pow(Q.y-k,2))/T*100}const se=(Math.PI/2-Math.atan2(N-_,k-W))/Math.PI*180,J=R.querySelector(".PanoRulerPlugin-rule-label"),K=J.children[0].clientWidth;K>=T||K/2>=L/100*T||K/2>=(1-L/100)*T?R.style.display="none":(R.style.display="block",R.style.width=T+"px",R.style.left=_+"px",R.style.top=k+"px",R.style.transform=`rotate(${-se}deg)`,J.style.left=`${L}%`)}},A=()=>oe(E),z=Fe(E,80);return{enable:()=>n.loaded?(n.enable||(i.setAttribute("class","PanoRulerPlugin"+(n.options.className?" "+n.options.className:"")),e.getElement()?.parentElement?.append(i),E(),e.on("panoArrived",E),e.on("modeChange",E),e.on("cameraDirectionUpdate",A),e.on("movingToPano",A),e.on("mouseWheel",z),e.on("pinchGesture",z),n.enable=!0),!0):!1,disable:()=>(n.enable&&(e.off("panoArrived",E),e.off("modeChange",E),e.off("cameraDirectionUpdate",A),e.off("movingToPano",A),e.off("mouseWheel",z),e.off("pinchGesture",z),i&&i.remove(),n.enable=!1),!0),load:I,state:n}};function te(){return{width:window.innerWidth,height:window.innerHeight}}function Ie(){const[e,t]=U.exports.useState(te);return U.exports.useEffect(()=>{const n=()=>t(te());return window.addEventListener("resize",n,!1),()=>window.removeEventListener("resize",n,!1)}),e}const Te=e=>{const t=ue(),r=de().plugins.panoRulerPlugin,[i,p]=U.exports.useState(r.state.enable);fe("modelLoaded",async()=>{await r.load(ae,ie,{distanceText:c=>`\u7EA6 ${c.toFixed(1)}\u7C73`}),r.enable(),p(r.state.enable)});const s=()=>{r[r.state.enable?"disable":"enable"](),p(r.state.enable)};return t!=="Loaded"?null:$(me,{children:$(he,{sx:{position:"fixed",top:"10px",right:"10px",backgroundColor:"transparent"},children:$(ye,{onClick:s,children:i?"\u5173\u95ED\u6807\u5C3A":"\u5F00\u542F\u6807\u5C3A"})})})},Ae=pe({onlyRenderIfNeeds:!0,plugins:[[Ee,"panoRulerPlugin",{}]]}),ze=()=>{const e=Ie();return Z&&be(Ae,{initialWork:ge(Z),ref:t=>Object.assign(window,{$five:t?.five}),children:[$(xe,{...e}),$(Te,{})]})};we.render($(ze,{}),document.querySelector("#app"));
