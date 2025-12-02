// packages/app/src/views/Login.ts
import { LitElement, html, css } from "lit";

export class LoginView extends LitElement {
  static styles = css`
    @import "/style/reset.css";
    @import "/style/tokens.css";
    @import "/style/pages.css";
    @import "/style/login.css";

    :host {
      display: block;
    }

    a {
      color: var(--color-text);
    }

    .error-message {
      color: red;
      margin-top: 8px;
    }
  `;

  errorMsg = "";

  render() {
    return html`
      <div class="login-container">
        <div class="login-box">
          <h2>Sign In</h2>

          <form @submit=${this.handleSubmit}>
            <div class="form-group">
              <label for="username">Username</label>
              <input id="username" name="username" required />
            </div>

            <div class="form-group">
              <label for="password">Password</label>
              <input id="password" name="password" type="password" required />
            </div>

            ${this.errorMsg
              ? html`<div class="error-message">${this.errorMsg}</div>`
              : null}

            <button class="login-btn" type="submit">Log In</button>
          </form>

          <p class="register-link">
            Don't have an account?
            <a href="/app/register">Register here</a>
          </p>
        </div>
      </div>
    `;
  }

  async handleSubmit(e: Event) {
    e.preventDefault();

    const username = (this.renderRoot.querySelector("#username") as HTMLInputElement).value;
    const password = (this.renderRoot.querySelector("#password") as HTMLInputElement).value;

    try {
      const response = await fetch("/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });

      if (!response.ok) {
        this.errorMsg = "Invalid username or password";
        this.requestUpdate();
        return;
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);

      // Go to home SPA route
      window.location.href = "/app";

    } catch (err) {
      console.error(err);
      this.errorMsg = "An error occurred. Please try again.";
      this.requestUpdate();
    }
  }
}

customElements.define("login-view", LoginView);
