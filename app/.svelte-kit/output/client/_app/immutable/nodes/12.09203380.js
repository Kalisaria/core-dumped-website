import{s as Vt,j as mt,i as Kt,r as Qt,n as Wt}from"../chunks/scheduler.142d0579.js";import{S as Yt,i as Zt,r as Ht,s as d,g as i,m as ie,u as Ft,c as p,h as u,j as A,f as O,y as L,n as ue,k as t,C as h,v as Xt,a as fe,x as a,D as ae,E as Z,t as Ie,b as $t,d as Se,w as Gt,A as xt,o as Jt,p as el,F as ht}from"../chunks/index.afb31315.js";import{e as At}from"../chunks/each.e59479a4.js";import{e as tl,g as zt}from"../chunks/forms.ff805141.js";import{C as ll}from"../chunks/CardComponent.eed2c840.js";import{T as al}from"../chunks/Title.eef844be.js";const sl=async({fetch:s,params:o})=>{const f=await s("http://localhost:3000/eventos/categorias"),n=await s("http://localhost:3000/proyectos/categorias");let c=await f.json(),_=await n.json();return{events:c,projects:_}},vl=Object.freeze(Object.defineProperty({__proto__:null,load:sl},Symbol.toStringTag,{value:"Module"}));function Dt(s,o,f){const n=s.slice();return n[15]=o[f],n}function rl(s){let o;return{c(){o=ie("Crear nueva carta")},l(f){o=ue(f,"Crear nueva carta")},m(f,n){fe(f,o,n)},d(f){f&&O(o)}}}function jt(s){let o,f;return o=new ll({props:{title:s[1].title.length>0?s[1].title:"Título",image_src:s[1].image.length>0?s[1].image:"/fallback.png",date:s[1].date!==void 0&&s[1].date.length>0?s[1].date:new Date().toISOString(),category:(s[1].category!=="new"?s[1].category:s[1].newCategory)||"Categoría",status:s[1].status.length>0?s[1].status:"Estado",description:s[1].description.length>0?s[1].description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat id leo eget tincidunt. Nullam ullamcorper.",id:""}}),{c(){Ht(o.$$.fragment)},l(n){Ft(o.$$.fragment,n)},m(n,c){Xt(o,n,c),f=!0},p(n,c){const _={};c&2&&(_.title=n[1].title.length>0?n[1].title:"Título"),c&2&&(_.image_src=n[1].image.length>0?n[1].image:"/fallback.png"),c&2&&(_.date=n[1].date!==void 0&&n[1].date.length>0?n[1].date:new Date().toISOString()),c&2&&(_.category=(n[1].category!=="new"?n[1].category:n[1].newCategory)||"Categoría"),c&2&&(_.status=n[1].status.length>0?n[1].status:"Estado"),c&2&&(_.description=n[1].description.length>0?n[1].description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat id leo eget tincidunt. Nullam ullamcorper."),o.$set(_)},i(n){f||(Se(o.$$.fragment,n),f=!0)},o(n){Ie(o.$$.fragment,n),f=!1},d(n){Gt(o,n)}}}function Mt(s){let o,f=s[15]+"",n,c;return{c(){o=i("option"),n=ie(f),this.h()},l(_){o=u(_,"OPTION",{class:!0});var m=A(o);n=ue(m,f),m.forEach(O),this.h()},h(){o.__value=c=s[15],h(o,o.__value),t(o,"class","svelte-1f7e6rf")},m(_,m){fe(_,o,m),a(o,n)},p(_,m){m&16&&f!==(f=_[15]+"")&&Jt(n,f),m&16&&c!==(c=_[15])&&(o.__value=c,h(o,o.__value))},d(_){_&&O(o)}}}function Ut(s){let o,f,n=s[0].error+"",c;return{c(){o=i("div"),f=ie("! "),c=ie(n),this.h()},l(_){o=u(_,"DIV",{class:!0});var m=A(o);f=ue(m,"! "),c=ue(m,n),m.forEach(O),this.h()},h(){t(o,"class","error svelte-1f7e6rf")},m(_,m){fe(_,o,m),a(o,f),a(o,c)},p(_,m){m&1&&n!==(n=_[0].error+"")&&Jt(c,n)},d(_){_&&O(o)}}}function nl(s){var Nt;let o,f,n,c,_=[s[1].title,s[1].image,s[1].category,s[1].newCategory,s[1].status,s[1].description],m,z,e,D,ce="Tipo",se,T,I,de="Proyecto",S,pe="Evento",re,q,Ne,G,gt="Título",qe,ve,Ae,C,ze,_e,De,J,bt="Descripción",je,me,Me,$,Ct=`La primera linea será la que aparezca en la carta, tiene que intentar
        enganchar al usuario.
        <br class="svelte-1f7e6rf"/>
        Usa el resto de la descripción para dar todos los detalles relevantes.`,Ue,he,Ve,y,He,ge,Fe,K,yt="URL de la imagen",Xe,be,Ge,x,Et=`Subela a la unidad compartida de drive y hazla publica.
        <br class="svelte-1f7e6rf"/>
        Para mayor calidad, la imagen tiene que tener un ratio de aspecto de 1:1
        (cuadrada) <br class="svelte-1f7e6rf"/> y una resolucion minima de 1000x1000 pixeles.`,Je,Ce,Ke,P,Qe,ye,We,Q,wt="Fecha de publicación",Ye,Ee,Ze,ee,Lt="Si se deja vacía se guardará como hoy",$e,we,xe,R,et,Le,tt,W,Tt="Categoria",lt,Te,at,E,j,Bt="Crear nueva",st,g,Be,Oe,rt,Pe,nt,Y,Ot="Estado",ot,Re,it,b,M,Pt="Completado",U,Rt="En progreso",V,kt="Cancelado",H,It="Próximamente",ut,ke,ft,X,ct,dt,k,pt,St;o=new al({props:{$$slots:{default:[rl]},$$scope:{ctx:s}}});let N=jt(s),te=At(s[4]),w=[];for(let r=0;r<te.length;r+=1)w[r]=Mt(Dt(s,te,r));let B=((Nt=s[0])==null?void 0:Nt.error)&&Ut(s);return{c(){Ht(o.$$.fragment),f=d(),n=i("div"),c=i("div"),N.c(),m=d(),z=i("div"),e=i("form"),D=i("label"),D.textContent=ce,se=d(),T=i("select"),I=i("option"),I.textContent=de,S=i("option"),S.textContent=pe,re=d(),q=i("br"),Ne=d(),G=i("label"),G.textContent=gt,qe=d(),ve=i("br"),Ae=d(),C=i("input"),ze=d(),_e=i("br"),De=d(),J=i("label"),J.textContent=bt,je=d(),me=i("br"),Me=d(),$=i("small"),$.innerHTML=Ct,Ue=d(),he=i("br"),Ve=d(),y=i("textarea"),He=d(),ge=i("br"),Fe=d(),K=i("label"),K.textContent=yt,Xe=d(),be=i("br"),Ge=d(),x=i("small"),x.innerHTML=Et,Je=d(),Ce=i("br"),Ke=d(),P=i("input"),Qe=d(),ye=i("br"),We=d(),Q=i("label"),Q.textContent=wt,Ye=d(),Ee=i("br"),Ze=d(),ee=i("small"),ee.textContent=Lt,$e=d(),we=i("br"),xe=d(),R=i("input"),et=d(),Le=i("br"),tt=d(),W=i("label"),W.textContent=Tt,lt=d(),Te=i("br"),at=d(),E=i("select"),j=i("option"),j.textContent=Bt;for(let r=0;r<w.length;r+=1)w[r].c();st=d(),g=i("input"),rt=d(),Pe=i("br"),nt=d(),Y=i("label"),Y.textContent=Ot,ot=d(),Re=i("br"),it=d(),b=i("select"),M=i("option"),M.textContent=Pt,U=i("option"),U.textContent=Rt,V=i("option"),V.textContent=kt,H=i("option"),H.textContent=It,ut=d(),ke=i("br"),ft=d(),X=i("button"),ct=ie("Publicar"),dt=d(),B&&B.c(),this.h()},l(r){Ft(o.$$.fragment,r),f=p(r),n=u(r,"DIV",{class:!0});var v=A(n);c=u(v,"DIV",{class:!0});var F=A(c);N.l(F),F.forEach(O),m=p(v),z=u(v,"DIV",{class:!0});var ne=A(z);e=u(ne,"FORM",{method:!0,class:!0});var l=A(e);D=u(l,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),L(D)!=="svelte-19ao2ak"&&(D.textContent=ce),se=p(l),T=u(l,"SELECT",{name:!0,id:!0,class:!0});var le=A(T);I=u(le,"OPTION",{class:!0,"data-svelte-h":!0}),L(I)!=="svelte-1vgba46"&&(I.textContent=de),S=u(le,"OPTION",{class:!0,"data-svelte-h":!0}),L(S)!=="svelte-16pw422"&&(S.textContent=pe),le.forEach(O),re=p(l),q=u(l,"BR",{class:!0}),Ne=p(l),G=u(l,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),L(G)!=="svelte-1bxdx9j"&&(G.textContent=gt),qe=p(l),ve=u(l,"BR",{class:!0}),Ae=p(l),C=u(l,"INPUT",{type:!0,id:!0,name:!0,placeholder:!0,size:!0,maxlength:!0,class:!0}),ze=p(l),_e=u(l,"BR",{class:!0}),De=p(l),J=u(l,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),L(J)!=="svelte-4yvg3t"&&(J.textContent=bt),je=p(l),me=u(l,"BR",{class:!0}),Me=p(l),$=u(l,"SMALL",{class:!0,"data-svelte-h":!0}),L($)!=="svelte-fvwp4o"&&($.innerHTML=Ct),Ue=p(l),he=u(l,"BR",{class:!0}),Ve=p(l),y=u(l,"TEXTAREA",{name:!0,id:!0,placeholder:!0,cols:!0,rows:!0,minlength:!0,class:!0}),A(y).forEach(O),He=p(l),ge=u(l,"BR",{class:!0}),Fe=p(l),K=u(l,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),L(K)!=="svelte-19wabop"&&(K.textContent=yt),Xe=p(l),be=u(l,"BR",{class:!0}),Ge=p(l),x=u(l,"SMALL",{class:!0,"data-svelte-h":!0}),L(x)!=="svelte-18ollfi"&&(x.innerHTML=Et),Je=p(l),Ce=u(l,"BR",{class:!0}),Ke=p(l),P=u(l,"INPUT",{type:!0,name:!0,id:!0,placeholder:!0,class:!0}),Qe=p(l),ye=u(l,"BR",{class:!0}),We=p(l),Q=u(l,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),L(Q)!=="svelte-ozwb37"&&(Q.textContent=wt),Ye=p(l),Ee=u(l,"BR",{class:!0}),Ze=p(l),ee=u(l,"SMALL",{class:!0,"data-svelte-h":!0}),L(ee)!=="svelte-c72boz"&&(ee.textContent=Lt),$e=p(l),we=u(l,"BR",{class:!0}),xe=p(l),R=u(l,"INPUT",{type:!0,name:!0,id:!0,max:!0,class:!0}),et=p(l),Le=u(l,"BR",{class:!0}),tt=p(l),W=u(l,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),L(W)!=="svelte-p0fyn"&&(W.textContent=Tt),lt=p(l),Te=u(l,"BR",{class:!0}),at=p(l),E=u(l,"SELECT",{name:!0,id:!0,class:!0});var vt=A(E);j=u(vt,"OPTION",{class:!0,"data-svelte-h":!0}),L(j)!=="svelte-g2voz6"&&(j.textContent=Bt);for(let _t=0;_t<w.length;_t+=1)w[_t].l(vt);vt.forEach(O),st=p(l),g=u(l,"INPUT",{type:!0,id:!0,name:!0,placeholder:!0,size:!0,maxlength:!0,class:!0}),rt=p(l),Pe=u(l,"BR",{class:!0}),nt=p(l),Y=u(l,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),L(Y)!=="svelte-19r6n6a"&&(Y.textContent=Ot),ot=p(l),Re=u(l,"BR",{class:!0}),it=p(l),b=u(l,"SELECT",{id:!0,name:!0,class:!0});var oe=A(b);M=u(oe,"OPTION",{class:!0,"data-svelte-h":!0}),L(M)!=="svelte-1i8f1ye"&&(M.textContent=Pt),U=u(oe,"OPTION",{class:!0,"data-svelte-h":!0}),L(U)!=="svelte-1uzctse"&&(U.textContent=Rt),V=u(oe,"OPTION",{class:!0,"data-svelte-h":!0}),L(V)!=="svelte-1qgsv7i"&&(V.textContent=kt),H=u(oe,"OPTION",{class:!0,"data-svelte-h":!0}),L(H)!=="svelte-1skw7a"&&(H.textContent=It),oe.forEach(O),ut=p(l),ke=u(l,"BR",{class:!0}),ft=p(l),X=u(l,"BUTTON",{type:!0,class:!0});var qt=A(X);ct=ue(qt,"Publicar"),qt.forEach(O),dt=p(l),B&&B.l(l),l.forEach(O),ne.forEach(O),v.forEach(O),this.h()},h(){t(c,"class","cardColumn svelte-1f7e6rf"),t(D,"for","type"),t(D,"class","svelte-1f7e6rf"),I.__value="Proyecto",h(I,I.__value),t(I,"class","svelte-1f7e6rf"),S.__value="Evento",h(S,S.__value),t(S,"class","svelte-1f7e6rf"),t(T,"name","type"),t(T,"id","type"),T.required=!0,t(T,"class","svelte-1f7e6rf"),s[1].type===void 0&&mt(()=>s[7].call(T)),t(q,"class","svelte-1f7e6rf"),t(G,"for","title"),t(G,"class","svelte-1f7e6rf"),t(ve,"class","svelte-1f7e6rf"),t(C,"type","text"),t(C,"id","title"),t(C,"name","title"),t(C,"placeholder","Título"),t(C,"size",20),t(C,"maxlength","20"),C.disabled=s[2],C.required=!0,t(C,"class","svelte-1f7e6rf"),t(_e,"class","svelte-1f7e6rf"),t(J,"for","description"),t(J,"class","svelte-1f7e6rf"),t(me,"class","svelte-1f7e6rf"),t($,"class","svelte-1f7e6rf"),t(he,"class","svelte-1f7e6rf"),t(y,"name","description"),t(y,"id","description"),t(y,"placeholder","Descripción"),t(y,"cols","50"),t(y,"rows","10"),t(y,"minlength","100"),y.required=!0,y.disabled=s[2],t(y,"class","svelte-1f7e6rf"),t(ge,"class","svelte-1f7e6rf"),t(K,"for","image"),t(K,"class","svelte-1f7e6rf"),t(be,"class","svelte-1f7e6rf"),t(x,"class","svelte-1f7e6rf"),t(Ce,"class","svelte-1f7e6rf"),t(P,"type","url"),t(P,"name","image"),t(P,"id","image"),t(P,"placeholder","https://drive.google.com/file/d/..."),P.required=!0,P.disabled=s[2],t(P,"class","svelte-1f7e6rf"),t(ye,"class","svelte-1f7e6rf"),t(Q,"for","date"),t(Q,"class","svelte-1f7e6rf"),t(Ee,"class","svelte-1f7e6rf"),t(ee,"class","svelte-1f7e6rf"),t(we,"class","svelte-1f7e6rf"),t(R,"type","date"),t(R,"name","date"),t(R,"id","date"),t(R,"max",new Date().toLocaleDateString("fr-ca")),R.disabled=s[2],t(R,"class","svelte-1f7e6rf"),t(Le,"class","svelte-1f7e6rf"),t(W,"for","category"),t(W,"class","svelte-1f7e6rf"),t(Te,"class","svelte-1f7e6rf"),j.__value="new",h(j,j.__value),t(j,"class","svelte-1f7e6rf"),t(E,"name","category"),t(E,"id","category"),E.required=!0,E.disabled=s[2],t(E,"class","svelte-1f7e6rf"),s[1].category===void 0&&mt(()=>s[12].call(E)),t(g,"type","text"),t(g,"id","newcategory"),t(g,"name","newcategory"),t(g,"placeholder","Nueva categoría"),t(g,"size","14"),t(g,"maxlength","16"),g.disabled=Be=s[2]||s[3],g.required=Oe=!s[3],t(g,"class","svelte-1f7e6rf"),t(Pe,"class","svelte-1f7e6rf"),t(Y,"for","status"),t(Y,"class","svelte-1f7e6rf"),t(Re,"class","svelte-1f7e6rf"),M.__value="Completado",h(M,M.__value),t(M,"class","svelte-1f7e6rf"),U.__value="En progreso",h(U,U.__value),t(U,"class","svelte-1f7e6rf"),V.__value="Cancelado",h(V,V.__value),t(V,"class","svelte-1f7e6rf"),H.__value="Próximamente",h(H,H.__value),t(H,"class","svelte-1f7e6rf"),t(b,"id","status"),t(b,"name","status"),b.required=!0,b.disabled=s[2],t(b,"class","svelte-1f7e6rf"),s[1].status===void 0&&mt(()=>s[14].call(b)),t(ke,"class","svelte-1f7e6rf"),t(X,"type","submit"),X.disabled=s[2],t(X,"class","svelte-1f7e6rf"),t(e,"method","POST"),t(e,"class","svelte-1f7e6rf"),t(z,"class","formColumn svelte-1f7e6rf"),t(n,"class","container svelte-1f7e6rf")},m(r,v){Xt(o,r,v),fe(r,f,v),fe(r,n,v),a(n,c),N.m(c,null),a(n,m),a(n,z),a(z,e),a(e,D),a(e,se),a(e,T),a(T,I),a(T,S),ae(T,s[1].type,!0),a(e,re),a(e,q),a(e,Ne),a(e,G),a(e,qe),a(e,ve),a(e,Ae),a(e,C),h(C,s[1].title),a(e,ze),a(e,_e),a(e,De),a(e,J),a(e,je),a(e,me),a(e,Me),a(e,$),a(e,Ue),a(e,he),a(e,Ve),a(e,y),h(y,s[1].description),a(e,He),a(e,ge),a(e,Fe),a(e,K),a(e,Xe),a(e,be),a(e,Ge),a(e,x),a(e,Je),a(e,Ce),a(e,Ke),a(e,P),h(P,s[1].image),a(e,Qe),a(e,ye),a(e,We),a(e,Q),a(e,Ye),a(e,Ee),a(e,Ze),a(e,ee),a(e,$e),a(e,we),a(e,xe),a(e,R),h(R,s[1].date),a(e,et),a(e,Le),a(e,tt),a(e,W),a(e,lt),a(e,Te),a(e,at),a(e,E),a(E,j);for(let F=0;F<w.length;F+=1)w[F]&&w[F].m(E,null);ae(E,s[1].category,!0),a(e,st),a(e,g),h(g,s[1].newCategory),a(e,rt),a(e,Pe),a(e,nt),a(e,Y),a(e,ot),a(e,Re),a(e,it),a(e,b),a(b,M),a(b,U),a(b,V),a(b,H),ae(b,s[1].status,!0),a(e,ut),a(e,ke),a(e,ft),a(e,X),a(X,ct),a(e,dt),B&&B.m(e,null),k=!0,pt||(St=[Z(T,"change",s[7]),Z(C,"input",s[8]),Z(y,"input",s[9]),Z(P,"input",s[10]),Z(R,"input",s[11]),Z(E,"change",s[12]),Z(g,"input",s[13]),Z(b,"change",s[14]),Kt(tl.call(null,e))],pt=!0)},p(r,[v]){var ne;const F={};if(v&262144&&(F.$$scope={dirty:v,ctx:r}),o.$set(F),v&2&&Vt(_,_=[r[1].title,r[1].image,r[1].category,r[1].newCategory,r[1].status,r[1].description])?(el(),Ie(N,1,1,Wt),$t(),N=jt(r),N.c(),Se(N,1),N.m(c,null)):N.p(r,v),v&2&&ae(T,r[1].type),(!k||v&4)&&(C.disabled=r[2]),v&2&&C.value!==r[1].title&&h(C,r[1].title),(!k||v&4)&&(y.disabled=r[2]),v&2&&h(y,r[1].description),(!k||v&4)&&(P.disabled=r[2]),v&2&&P.value!==r[1].image&&h(P,r[1].image),(!k||v&4)&&(R.disabled=r[2]),v&2&&h(R,r[1].date),v&16){te=At(r[4]);let l;for(l=0;l<te.length;l+=1){const le=Dt(r,te,l);w[l]?w[l].p(le,v):(w[l]=Mt(le),w[l].c(),w[l].m(E,null))}for(;l<w.length;l+=1)w[l].d(1);w.length=te.length}(!k||v&4)&&(E.disabled=r[2]),v&2&&ae(E,r[1].category),(!k||v&12&&Be!==(Be=r[2]||r[3]))&&(g.disabled=Be),(!k||v&8&&Oe!==(Oe=!r[3]))&&(g.required=Oe),v&2&&g.value!==r[1].newCategory&&h(g,r[1].newCategory),(!k||v&4)&&(b.disabled=r[2]),v&2&&ae(b,r[1].status),(!k||v&4)&&(X.disabled=r[2]),(ne=r[0])!=null&&ne.error?B?B.p(r,v):(B=Ut(r),B.c(),B.m(e,null)):B&&(B.d(1),B=null)},i(r){k||(Se(o.$$.fragment,r),Se(N),k=!0)},o(r){Ie(o.$$.fragment,r),Ie(N),k=!1},d(r){r&&(O(f),O(n)),Gt(o,r),N.d(r),xt(w,r),B&&B.d(),pt=!1,Qt(St)}}}function ol(s,o,f){let{data:n}=o,{form:c}=o,_=!0,m=!0,z=[],e={type:"",title:"",description:"",image:"",date:"",category:"",newCategory:"",status:""};const D={capture:()=>e,restore:q=>f(1,e=q)};function ce(){e.type=ht(this),f(1,e)}function se(){e.title=this.value,f(1,e)}function T(){e.description=this.value,f(1,e)}function I(){e.image=this.value,f(1,e)}function de(){e.date=this.value,f(1,e)}function S(){e.category=ht(this),f(1,e)}function pe(){e.newCategory=this.value,f(1,e)}function re(){e.status=ht(this),f(1,e)}return s.$$set=q=>{"data"in q&&f(5,n=q.data),"form"in q&&f(0,c=q.form)},s.$$.update=()=>{s.$$.dirty&2&&f(2,_=e.type===""),s.$$.dirty&2&&f(3,m=e.category!=="new"),s.$$.dirty&34&&(e.type==="Proyecto"?f(4,z=[...n.projects]):e.type==="Evento"&&f(4,z=[...n.events])),s.$$.dirty&1&&((c==null?void 0:c.error)==="Unauthorized"?zt("/admin?back=true"):c!=null&&c.success&&zt("/edit/cartas"))},[c,e,_,m,z,n,D,ce,se,T,I,de,S,pe,re]}class _l extends Yt{constructor(o){super(),Zt(this,o,ol,nl,Vt,{data:5,form:0,snapshot:6})}get snapshot(){return this.$$.ctx[6]}}export{_l as component,vl as universal};