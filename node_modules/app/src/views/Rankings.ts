// packages/app/src/views/Rankings.ts
import { LitElement, html, css } from "lit";



export class RankingsView extends LitElement {
  static styles = css`
    @import "/style/reset.css";
    @import "/style/tokens.css";
    @import "/style/pages.css";
    @import "/style/Rankings.css";
    @import "/style/auth-modal.css";

    :host {
      display: block;
    }

    a {
      color: var(--color-text);
      text-decoration: none;
    }
  `;

  render() {
    return html`
      
      <h2>NA</h2>

      <section class="first2-grid">
        <div class="first2-card">
          <p class="number1">1.</p>
        </div>

        <div class="first2-card">
          <p class="number2">2.</p>
        </div>
      </section>

      <section class="rest-grid">
        <div class="rest-card"><p class="number">3.</p></div>
        <div class="rest-card"><p class="number">4.</p></div>
        <div class="rest-card"><p class="number">5.</p></div>
        <div class="rest-card"><p class="number">6.</p></div>
      </section>

      <section class="logos">
        <img src="assets/teamlogos/sen_logo.png" alt="SEN Logo" />
        <img src="assets/teamlogos/nrg_logo.png" alt="NRG Logo" />
        <img src="assets/teamlogos/mibr_logo.png" alt="MIBR Logo" />
        <img src="assets/teamlogos/lev_logo.png" alt="LEV Logo" />
      </section>
    `;
  }
}

customElements.define("rankings-view", RankingsView);
