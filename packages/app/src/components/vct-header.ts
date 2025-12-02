import { LitElement, html, css } from "lit";

export class VctHeader extends LitElement {
  static styles = css`/* copy small header-specific CSS or import */`;
  render() {
    return html`
      <header>
        <a href="/app"><h1>VCT Rank</h1></a>
        <nav>
          <a href="/app" data-link>
            <img src="/assets/icon/account.svg" alt="Home icon" />
            Home
          </a>

          <a href="/app/rankings" data-link>
            <img src="/assets/icons/rank.svg" alt="Rankings icon" />
            Rankings
          </a>

          <a href="/app/forum" data-link>
            <img src="/assets/icons/forum.svg" alt="Forum icon" />
            Forum
          </a>
          
          <a href="/app/forum" data-link>
            <img src="/assets/icons/friends.svg" alt="Friends icon" />
            Friends
          </a>

        </nav>
      </header>
    `;
  }
}
customElements.define("vct-header", VctHeader);
export { VctHeader as HeaderElement };