import{s as D,b,f as k,n as J}from"../chunks/scheduler.142d0579.js";import{S as K,i as L,B as y,r as w,s as O,u as C,c as q,v as j,a as $,d as p,t as m,f as h,w as v,m as Q,n as R,e as P,p as H,b as I,A as U}from"../chunks/index.afb31315.js";import{e as z}from"../chunks/each.e59479a4.js";import{C as V}from"../chunks/CardComponent.eed2c840.js";import{F as W,f as X}from"../chunks/Filters.f50678df.js";import{G as Y}from"../chunks/Grid.09b0b195.js";import{T as Z}from"../chunks/Title.eef844be.js";const x=async({fetch:r,params:s})=>{const o=await r("http://localhost:3000/proyectos"),t=await r("http://localhost:3000/proyectos/categorias");let e=await o.json(),n=await t.json();return{projects:e,categories:n}},ce=Object.freeze(Object.defineProperty({__proto__:null,load:x},Symbol.toStringTag,{value:"Module"}));function A(r,s,o){const t=r.slice();return t[12]=s[o],t}function ee(r){let s;return{c(){s=Q("Proyectos")},l(o){s=R(o,"Proyectos")},m(o,t){$(o,s,t)},d(o){o&&h(s)}}}function E(r){let s,o;return s=new V({props:{id:r[12]._id,title:r[12].title,description:r[12].description,image_src:r[12].image,date:r[12].date,category:r[12].category,status:r[12].status}}),{c(){w(s.$$.fragment)},l(t){C(s.$$.fragment,t)},m(t,e){j(s,t,e),o=!0},p(t,e){const n={};e&16&&(n.id=t[12]._id),e&16&&(n.title=t[12].title),e&16&&(n.description=t[12].description),e&16&&(n.image_src=t[12].image),e&16&&(n.date=t[12].date),e&16&&(n.category=t[12].category),e&16&&(n.status=t[12].status),s.$set(n)},i(t){o||(p(s.$$.fragment,t),o=!0)},o(t){m(s.$$.fragment,t),o=!1},d(t){v(s,t)}}}function M(r){let s,o,t=z(r[4]),e=[];for(let a=0;a<t.length;a+=1)e[a]=E(A(r,t,a));const n=a=>m(e[a],1,1,()=>{e[a]=null});return{c(){for(let a=0;a<e.length;a+=1)e[a].c();s=P()},l(a){for(let f=0;f<e.length;f+=1)e[f].l(a);s=P()},m(a,f){for(let l=0;l<e.length;l+=1)e[l]&&e[l].m(a,f);$(a,s,f),o=!0},p(a,f){if(f&16){t=z(a[4]);let l;for(l=0;l<t.length;l+=1){const u=A(a,t,l);e[l]?(e[l].p(u,f),p(e[l],1)):(e[l]=E(u),e[l].c(),p(e[l],1),e[l].m(s.parentNode,s))}for(H(),l=t.length;l<e.length;l+=1)n(l);I()}},i(a){if(!o){for(let f=0;f<t.length;f+=1)p(e[f]);o=!0}},o(a){e=e.filter(Boolean);for(let f=0;f<e.length;f+=1)m(e[f]);o=!1},d(a){a&&h(s),U(e,a)}}}function te(r){let s=r[4],o,t,e=M(r);return{c(){e.c(),o=P()},l(n){e.l(n),o=P()},m(n,a){e.m(n,a),$(n,o,a),t=!0},p(n,a){a&16&&D(s,s=n[4])?(H(),m(e,1,1,J),I(),e=M(n),e.c(),p(e,1),e.m(o.parentNode,o)):e.p(n,a)},i(n){t||(p(e),t=!0)},o(n){m(e),t=!1},d(n){n&&h(o),e.d(n)}}}function re(r){let s,o,t,e,n,a,f,l,u,g;s=new Z({props:{$$slots:{default:[ee]},$$scope:{ctx:r}}});function S(i){r[8](i)}function F(i){r[9](i)}function T(i){r[10](i)}function B(i){r[11](i)}let _={categories:r[5],statuses:r[6]};return r[0]!==void 0&&(_.search_text=r[0]),r[1]!==void 0&&(_.status_filter=r[1]),r[2]!==void 0&&(_.category_filter=r[2]),r[3]!==void 0&&(_.date_filter=r[3]),t=new W({props:_}),b.push(()=>y(t,"search_text",S)),b.push(()=>y(t,"status_filter",F)),b.push(()=>y(t,"category_filter",T)),b.push(()=>y(t,"date_filter",B)),u=new Y({props:{$$slots:{default:[te]},$$scope:{ctx:r}}}),{c(){w(s.$$.fragment),o=O(),w(t.$$.fragment),l=O(),w(u.$$.fragment)},l(i){C(s.$$.fragment,i),o=q(i),C(t.$$.fragment,i),l=q(i),C(u.$$.fragment,i)},m(i,c){j(s,i,c),$(i,o,c),j(t,i,c),$(i,l,c),j(u,i,c),g=!0},p(i,[c]){const G={};c&32768&&(G.$$scope={dirty:c,ctx:i}),s.$set(G);const d={};!e&&c&1&&(e=!0,d.search_text=i[0],k(()=>e=!1)),!n&&c&2&&(n=!0,d.status_filter=i[1],k(()=>n=!1)),!a&&c&4&&(a=!0,d.category_filter=i[2],k(()=>a=!1)),!f&&c&8&&(f=!0,d.date_filter=i[3],k(()=>f=!1)),t.$set(d);const N={};c&32784&&(N.$$scope={dirty:c,ctx:i}),u.$set(N)},i(i){g||(p(s.$$.fragment,i),p(t.$$.fragment,i),p(u.$$.fragment,i),g=!0)},o(i){m(s.$$.fragment,i),m(t.$$.fragment,i),m(u.$$.fragment,i),g=!1},d(i){i&&(h(o),h(l)),v(s,i),v(t,i),v(u,i)}}}function se(r,s,o){let{data:t}=s,e="",n="",a="",f="",l=t.categories,u=["En progreso","Completado","Próximamente","Cancelado"],g;function S(_){e=_,o(0,e)}function F(_){n=_,o(1,n)}function T(_){a=_,o(2,a)}function B(_){f=_,o(3,f)}return r.$$set=_=>{"data"in _&&o(7,t=_.data)},r.$$.update=()=>{r.$$.dirty&143&&o(4,g=X(t.projects,e,n,a,f))},[e,n,a,f,g,l,u,t,S,F,T,B]}class ue extends K{constructor(s){super(),L(this,s,se,re,D,{data:7})}}export{ue as component,ce as universal};