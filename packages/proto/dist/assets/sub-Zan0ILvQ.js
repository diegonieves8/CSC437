import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */import{r as v,i as f,n,a as m,x as u,b as y}from"./reset.css-CTn5KZt9.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const h=e=>(r,s)=>{s!==void 0?s.addInitializer((()=>{customElements.define(e,r)})):customElements.define(e,r)};var b=Object.defineProperty,$=Object.getOwnPropertyDescriptor,p=(e,r,s,o)=>{for(var t=o>1?void 0:o?$(r,s):r,i=e.length-1,a;i>=0;i--)(a=e[i])&&(t=(o?a(r,s,t):a(t))||t);return o&&t&&b(r,s,t),t};let l=class extends m{constructor(){super(...arguments),this.user="Anonymous",this.title="Default Post Title",this.replies=0,this.views=0}render(){return u`
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
    `}};l.styles=[v.styles,f`
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
    `];p([n()],l.prototype,"user",2);p([n()],l.prototype,"title",2);p([n({type:Number})],l.prototype,"replies",2);p([n({type:Number})],l.prototype,"views",2);l=p([h("forum-post")],l);var g=Object.defineProperty,w=Object.getOwnPropertyDescriptor,d=(e,r,s,o)=>{for(var t=o>1?void 0:o?w(r,s):r,i=e.length-1,a;i>=0;i--)(a=e[i])&&(t=(o?a(r,s,t):a(t))||t);return o&&t&&g(r,s,t),t};let c=class extends m{constructor(){super(...arguments),this.posts=[]}hydrate(e){fetch(e).then(r=>{if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return r.json()}).then(r=>{r&&(this.posts=r)}).catch(r=>console.error("Error loading JSON:",r))}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}render(){return u`
      ${this.posts.map(e=>u`
          <forum-post
            user=${e.user}
            title=${e.title}
            replies=${e.replies}
            views=${e.views}
          ></forum-post>
        `)}
    `}};d([n()],c.prototype,"src",2);d([y()],c.prototype,"posts",2);c=d([h("forum-itinerary")],c);
