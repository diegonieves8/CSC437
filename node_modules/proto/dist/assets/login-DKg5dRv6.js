import"./modulepreload-polyfill-B5Qt9EMX.js";import{d as p,a as d}from"./mustang-CkVv6GFe.js";import{a as l,x as f,r as b,i as g,b as m,n as u}from"./reset.css-CTn5KZt9.js";var v=Object.defineProperty,i=(h,r,t,o)=>{for(var e=void 0,a=h.length-1,c;a>=0;a--)(c=h[a])&&(e=c(r,t,e)||e);return e&&v(r,t,e),e};const n=class n extends l{constructor(){super(...arguments),this.formData={},this.redirect="/"}get canSubmit(){return!!(this.api&&this.formData.username&&this.formData.password)}render(){return f`
      <form
        @change=${r=>this.handleChange(r)}
        @submit=${r=>this.handleSubmit(r)}
      >
        <slot></slot>
        <slot name="button">
          <button
            ?disabled=${!this.canSubmit}
            type="submit">
            Login
          </button>
        </slot>
        <p class="error">${this.error}</p>
      </form>
    `}handleChange(r){const t=r.target,o=t?.name,e=t?.value,a=this.formData;switch(o){case"username":this.formData={...a,username:e};break;case"password":this.formData={...a,password:e};break}}handleSubmit(r){r.preventDefault(),this.canSubmit&&fetch(this?.api||"",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.formData)}).then(t=>{if(t.status!==200)throw"Login failed";return t.json()}).then(t=>{const{token:o}=t,e=new CustomEvent("auth:message",{bubbles:!0,composed:!0,detail:["auth/signin",{token:o,redirect:this.redirect}]});console.log("dispatching message",e),this.dispatchEvent(e)}).catch(t=>{console.log(t),this.error=t.toString()})}};n.styles=[b.styles,g`
      .error:not(:empty) {
        color: var(--color-error);
        border: 1px solid var(--color-error);
        padding: var(--size-spacing-medium);
      }
  `];let s=n;i([m()],s.prototype,"formData");i([u()],s.prototype,"api");i([u()],s.prototype,"redirect");i([m()],s.prototype,"error");p({"mu-auth":d.Provider,"login-form":s});
