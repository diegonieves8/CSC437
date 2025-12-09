import"./darkmode-CXfVOGe4.js";/* empty css                  */import"./auth-check-B-Eq97Em.js";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=globalThis,L=N.ShadowRoot&&(N.ShadyCSS===void 0||N.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,q=Symbol(),Z=new WeakMap;let ot=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(L&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=Z.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Z.set(e,t))}return t}toString(){return this.cssText}};const pt=r=>new ot(typeof r=="string"?r:r+"",void 0,q),nt=(r,...t)=>{const e=r.length===1?r[0]:t.reduce(((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1]),r[0]);return new ot(e,r,q)},ut=(r,t)=>{if(L)r.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of t){const s=document.createElement("style"),i=N.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},G=L?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return pt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:$t,defineProperty:ft,getOwnPropertyDescriptor:_t,getOwnPropertyNames:mt,getOwnPropertySymbols:yt,getPrototypeOf:gt}=Object,j=globalThis,Q=j.trustedTypes,At=Q?Q.emptyScript:"",vt=j.reactiveElementPolyfillSupport,C=(r,t)=>r,R={toAttribute(r,t){switch(t){case Boolean:r=r?At:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},V=(r,t)=>!$t(r,t),X={attribute:!0,type:String,converter:R,reflect:!1,useDefault:!1,hasChanged:V};Symbol.metadata??=Symbol("metadata"),j.litPropertyMetadata??=new WeakMap;let A=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=X){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&ft(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=_t(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){const a=i?.call(this);o?.call(this,n),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??X}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;const t=gt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){const e=this.properties,s=[...mt(e),...yt(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(G(i))}else t!==void 0&&e.push(G(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ut(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const o=(s.converter?.toAttribute!==void 0?s.converter:R).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=s.getPropertyOptions(i),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:R;this._$Em=i;const a=n.fromAttribute(e,o.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){const i=this.constructor,o=this[t];if(s??=i.getPropertyOptions(t),!((s.hasChanged??V)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:o},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,o]of s){const{wrapped:n}=o,a=this[i];n!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,o,a)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((s=>s.hostUpdate?.())),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[C("elementProperties")]=new Map,A[C("finalized")]=new Map,vt?.({ReactiveElement:A}),(j.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=globalThis,k=W.trustedTypes,Y=k?k.createPolicy("lit-html",{createHTML:r=>r}):void 0,ht="$lit$",f=`lit$${Math.random().toFixed(9).slice(2)}$`,at="?"+f,bt=`<${at}>`,y=document,x=()=>y.createComment(""),O=r=>r===null||typeof r!="object"&&typeof r!="function",F=Array.isArray,Et=r=>F(r)||typeof r?.[Symbol.iterator]=="function",z=`[ 	
\f\r]`,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tt=/-->/g,et=/>/g,_=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),st=/'/g,it=/"/g,lt=/^(?:script|style|textarea|title)$/i,wt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),B=wt(1),b=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),rt=new WeakMap,m=y.createTreeWalker(y,129);function ct(r,t){if(!F(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Y!==void 0?Y.createHTML(t):t}const St=(r,t)=>{const e=r.length-1,s=[];let i,o=t===2?"<svg>":t===3?"<math>":"",n=S;for(let a=0;a<e;a++){const h=r[a];let c,p,l=-1,u=0;for(;u<h.length&&(n.lastIndex=u,p=n.exec(h),p!==null);)u=n.lastIndex,n===S?p[1]==="!--"?n=tt:p[1]!==void 0?n=et:p[2]!==void 0?(lt.test(p[2])&&(i=RegExp("</"+p[2],"g")),n=_):p[3]!==void 0&&(n=_):n===_?p[0]===">"?(n=i??S,l=-1):p[1]===void 0?l=-2:(l=n.lastIndex-p[2].length,c=p[1],n=p[3]===void 0?_:p[3]==='"'?it:st):n===it||n===st?n=_:n===tt||n===et?n=S:(n=_,i=void 0);const $=n===_&&r[a+1].startsWith("/>")?" ":"";o+=n===S?h+bt:l>=0?(s.push(c),h.slice(0,l)+ht+h.slice(l)+f+$):h+f+(l===-2?a:$)}return[ct(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class U{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const a=t.length-1,h=this.parts,[c,p]=St(t,e);if(this.el=U.createElement(c,s),m.currentNode=this.el.content,e===2||e===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=m.nextNode())!==null&&h.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const l of i.getAttributeNames())if(l.endsWith(ht)){const u=p[n++],$=i.getAttribute(l).split(f),M=/([.?@])?(.*)/.exec(u);h.push({type:1,index:o,name:M[2],strings:$,ctor:M[1]==="."?Ct:M[1]==="?"?xt:M[1]==="@"?Ot:I}),i.removeAttribute(l)}else l.startsWith(f)&&(h.push({type:6,index:o}),i.removeAttribute(l));if(lt.test(i.tagName)){const l=i.textContent.split(f),u=l.length-1;if(u>0){i.textContent=k?k.emptyScript:"";for(let $=0;$<u;$++)i.append(l[$],x()),m.nextNode(),h.push({type:2,index:++o});i.append(l[u],x())}}}else if(i.nodeType===8)if(i.data===at)h.push({type:2,index:o});else{let l=-1;for(;(l=i.data.indexOf(f,l+1))!==-1;)h.push({type:7,index:o}),l+=f.length-1}o++}}static createElement(t,e){const s=y.createElement("template");return s.innerHTML=t,s}}function E(r,t,e=r,s){if(t===b)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl;const o=O(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=E(r,i._$AS(r,t.values),i,s)),t}class Pt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??y).importNode(e,!0);m.currentNode=i;let o=m.nextNode(),n=0,a=0,h=s[0];for(;h!==void 0;){if(n===h.index){let c;h.type===2?c=new T(o,o.nextSibling,this,t):h.type===1?c=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(c=new Ut(o,this,t)),this._$AV.push(c),h=s[++a]}n!==h?.index&&(o=m.nextNode(),n++)}return m.currentNode=y,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class T{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),O(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==b&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Et(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(y.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=U.createElement(ct(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const o=new Pt(i,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=rt.get(t.strings);return e===void 0&&rt.set(t.strings,e=new U(t)),e}k(t){F(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new T(this.O(x()),this.O(x()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class I{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(o===void 0)t=E(this,t,e,0),n=!O(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else{const a=t;let h,c;for(t=o[0],h=0;h<o.length-1;h++)c=E(this,a[s+h],e,h),c===b&&(c=this._$AH[h]),n||=!O(c)||c!==this._$AH[h],c===d?t=d:t!==d&&(t+=(c??"")+o[h+1]),this._$AH[h]=c}n&&!i&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ct extends I{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class xt extends I{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Ot extends I{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=E(this,t,e,0)??d)===b)return;const s=this._$AH,i=t===d&&s!==d||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==d&&(s===d||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Ut{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const Tt=W.litHtmlPolyfillSupport;Tt?.(U,T),(W.litHtmlVersions??=[]).push("3.3.1");const Ht=(r,t,e)=>{const s=e?.renderBefore??t;let i=s._$litPart$;if(i===void 0){const o=e?.renderBefore??null;s._$litPart$=i=new T(t.insertBefore(x(),o),o,void 0,e??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=globalThis;class v extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ht(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return b}}v._$litElement$=!0,v.finalized=!0,J.litElementHydrateSupport?.({LitElement:v});const Mt=J.litElementPolyfillSupport;Mt?.({LitElement:v});(J.litElementVersions??=[]).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=r=>(t,e)=>{e!==void 0?e.addInitializer((()=>{customElements.define(r,t)})):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt={attribute:!0,type:String,converter:R,reflect:!1,hasChanged:V},Rt=(r=Nt,t,e)=>{const{kind:s,metadata:i}=e;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),s==="setter"&&((r=Object.create(r)).wrapped=!0),o.set(e.name,r),s==="accessor"){const{name:n}=e;return{set(a){const h=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,h,r)},init(a){return a!==void 0&&this.C(n,void 0,r,a),a}}}if(s==="setter"){const{name:n}=e;return function(a){const h=this[n];t.call(this,a),this.requestUpdate(n,h,r)}}throw Error("Unsupported decorator location: "+s)};function w(r){return(t,e)=>typeof e=="object"?Rt(r,t,e):((s,i,o)=>{const n=i.hasOwnProperty(o);return i.constructor.createProperty(o,s),n?Object.getOwnPropertyDescriptor(i,o):void 0})(r,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function kt(r){return w({...r,state:!0,attribute:!1})}const Dt=nt`
  * {
    margin: 0;
    box-sizing: border-box;
  }
  img {
    max-width: 100%;
  }
  ul,
  menu {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
  }
`,jt={styles:Dt};var It=Object.defineProperty,zt=Object.getOwnPropertyDescriptor,H=(r,t,e,s)=>{for(var i=s>1?void 0:s?zt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&It(t,e,i),i};let g=class extends v{constructor(){super(...arguments),this.user="Anonymous",this.title="Default Post Title",this.replies=0,this.views=0}render(){return B`
        <section class="forum-list">
            <ul>
                <li class="thread">
                    <div class="topic">
                        <h3>${this.title}</h3>
                        <p class="meta">
                            Posted by <strong>${this.user}</strong>
                        </p>
                    </div>
                <div class="replies">
                    ${this.replies}
                </div>
                <div class="views">
                ${this.views}
                </div>
                </li>
            </ul>
        </section>
    `}};g.styles=[jt.styles,nt`
      .forum-list {
        color: var(--text-primary);
      }

      .thread {
        display: grid;
        grid-template-columns: 3fr 1fr 1fr;
        align-items: center;
        border-bottom: 1px solid var(--border-color);
        transition: background 0.2s;
        padding: 10px;
      }

      .thread:hover {
        background: var(--background-tertiary);
      }

      .thread .topic h3 {
        margin: 0;
        color: var(--accent);
      }

      .thread .topic .meta {
        font-size: 0.9rem;
        color: var(--text-muted);
      }
    `];H([w()],g.prototype,"user",2);H([w()],g.prototype,"title",2);H([w({type:Number})],g.prototype,"replies",2);H([w({type:Number})],g.prototype,"views",2);g=H([dt("forum-post")],g);var Bt=Object.defineProperty,Lt=Object.getOwnPropertyDescriptor,K=(r,t,e,s)=>{for(var i=s>1?void 0:s?Lt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&Bt(t,e,i),i};let D=class extends v{constructor(){super(...arguments),this.posts=[]}hydrate(r){fetch(r).then(t=>{if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return t.json()}).then(t=>{t&&(this.posts=t)}).catch(t=>console.error("Error loading JSON:",t))}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}render(){return B`
      ${this.posts.map(r=>B`
          <forum-post
            user=${r.user}
            title=${r.title}
            replies=${r.replies}
            views=${r.views}
          ></forum-post>
        `)}
    `}};K([w()],D.prototype,"src",2);K([kt()],D.prototype,"posts",2);D=K([dt("forum-itinerary")],D);document.getElementById("profile-link").addEventListener("click",r=>{r.preventDefault(),window.checkAuthAndRedirect("./Profile.html")});const P=document.getElementById("auth-action-btn");P&&function(){if(window.isAuthenticated()){const t=window.getUsername();P.textContent=t?`${t}`:"Sign Out",P.onclick=()=>{localStorage.removeItem("token"),window.location.reload()}}else P.textContent="Sign In",P.onclick=()=>{window.location.href="./login.html"}}();
