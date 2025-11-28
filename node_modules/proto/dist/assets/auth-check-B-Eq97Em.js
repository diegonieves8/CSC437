function a(){const e=localStorage.getItem("token");if(!e)return!1;try{const o=JSON.parse(atob(e.split(".")[1])).exp*1e3;return Date.now()>=o?(localStorage.removeItem("token"),!1):!0}catch{return localStorage.removeItem("token"),!1}}function s(){const e=localStorage.getItem("token");if(!e)return null;try{return JSON.parse(atob(e.split(".")[1])).username}catch{return null}}function d(e){a()?window.location.href=e:i()}function i(){document.body.classList.add("modal-open");const e=document.createElement("div");e.className="auth-modal-overlay",e.innerHTML=`
    <div class="auth-modal">
      <div class="auth-modal-icon">
        <svg class="icon" width="48" height="48">
          <use href="./assets/icons/sprites.svg#account"></use>
        </svg>
      </div>
      <h2>Login Required</h2>
      <p>You need to be logged in to access your profile.</p>
      <div class="auth-modal-buttons">
        <button class="auth-modal-login">Log In</button>
        <button class="auth-modal-cancel">Cancel</button>
      </div>
    </div>
  `,document.body.appendChild(e);function t(){e.remove(),document.body.classList.remove("modal-open")}const o=e.querySelector(".auth-modal-login"),c=e.querySelector(".auth-modal-cancel");o.addEventListener("click",()=>{window.location.href="./login.html"}),c.addEventListener("click",()=>{t()}),e.addEventListener("click",n=>{n.target===e&&t()}),document.addEventListener("keydown",function n(l){l.key==="Escape"&&(t(),document.removeEventListener("keydown",n))})}window.checkAuthAndRedirect=d;window.isAuthenticated=a;window.getUsername=s;
