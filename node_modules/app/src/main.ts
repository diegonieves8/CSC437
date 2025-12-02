import { Auth, define, History, Switch } from "@calpoly/mustang";
import { html } from "lit";
import "./components/vct-header";

// import views so customElements are registered
import "./views/HotTakes";
import "./views/Rankings";
import "./views/Friends";
import "./views/Profile";
import "./views/Login";
import "./views/Compare";

const routes = [
  { path: "/app/rankings", 
    view: () => html`
    <rankings-view></rankings-view>` },

  { path: "/app/forum",  
      view: () => html`
      <forum-view></forum-view>` },

  {path: "/app/rankings", view: () => html`<rankings-view></rankings-view>`},
  { path: "/app/login", view: () => html`<login-view></login-view>` },

  { path: "/app", view: () => html`<rankings-view><rankings-view>` },
  { path: "/",  redirect: "/app" }
];


define({
  "mu-auth": Auth.Provider,
  "mu-history": History.Provider,
  "mu-switch": class AppSwitch extends Switch.Element {
    constructor() { super(routes, "vct:history", "vct:auth"); }
  }
});
