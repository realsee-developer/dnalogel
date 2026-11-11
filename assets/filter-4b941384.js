import{Z as h,aa as d}from"./index-0b761db4.js";function k(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function C(t){const e=t-1;return e*e*e+1}function v(t,{delay:e=0,duration:a=400,easing:n=h}={}){const r=+getComputedStyle(t).opacity;return{delay:e,duration:a,easing:n,css:o=>`opacity: ${o*r}`}}function I(t,{delay:e=0,duration:a=400,easing:n=C,x:r=0,y:o=0,opacity:i=0}={}){const s=getComputedStyle(t),u=+s.opacity,f=s.transform==="none"?"":s.transform,y=u*(1-i),[p,l]=d(r),[g,$]=d(o);return{delay:e,duration:a,easing:n,css:(c,m)=>`
			transform: ${f} translate(${(1-c)*p}${l}, ${(1-c)*g}${$});
			opacity: ${u-y*m}`}}function L(t,{delay:e=0,speed:a,duration:n,easing:r=k}={}){let o=t.getTotalLength();const i=getComputedStyle(t);return i.strokeLinecap!=="butt"&&(o+=parseInt(i.strokeWidth)),n===void 0?a===void 0?n=800:n=o/a:typeof n=="function"&&(n=n(o)),{delay:e,duration:n,easing:r,css:(s,u)=>`
			stroke-dasharray: ${o};
			stroke-dashoffset: ${u*o};
		`}}function S(t,e){return e(t),t}function b(t,e){return S({},a=>{for(const n in t)e.indexOf(n)===-1&&(a[n]=t[n])})}export{v as C,L as I,I as S,k as c,b as e,C as o};
