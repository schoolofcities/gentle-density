function x(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}class y extends Map{constructor(t,n=w){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),t!=null)for(const[s,c]of t)this.set(s,c)}get(t){return super.get(p(this,t))}has(t){return super.has(p(this,t))}set(t,n){return super.set(a(this,t),n)}delete(t){return super.delete(b(this,t))}}function p({_intern:e,_key:t},n){const s=t(n);return e.has(s)?e.get(s):n}function a({_intern:e,_key:t},n){const s=t(n);return e.has(s)?e.get(s):(e.set(s,n),n)}function b({_intern:e,_key:t},n){const s=t(n);return e.has(s)&&(n=e.get(s),e.delete(s)),n}function w(e){return e!==null&&typeof e=="object"?e.valueOf():e}function g(e){return e}function M(e,...t){return d(e,g,g,t)}function j(e,t,...n){return d(e,g,t,n)}function d(e,t,n,s){return function c(o,i){if(i>=s.length)return n(o);const u=new y,l=s[i++];let k=-1;for(const r of o){const f=l(r,++k,o),h=u.get(f);h?h.push(r):u.set(f,[r])}for(const[r,f]of u)u.set(r,c(f,i));return t(u)}(e,0)}function m(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e);break}return this}export{y as I,x as e,M as g,m as i,j as r};