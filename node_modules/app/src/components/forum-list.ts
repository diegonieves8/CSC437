import { LitElement, html, css } from "lit";
import { property } from "lit/decorators.js";
import { Forum } from "../model"; 

export class ForumList extends LitElement {
  @property({ type: Array }) items: Forum[] = [];

  static styles = css`
    :host {
      display: block;
    }

    .row {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      padding: 12px 14px;
      border-bottom: 1px solid var(--border-light);
      align-items: center;
      cursor: pointer;
      transition: 0.15s ease;
    }

    .row:hover {
      background: rgba(255,255,255,0.03);
      transform: scale(1.01);
    }

    .title {
      font-weight: 600;
      color: var(--text-bright);
    }

    .user {
      font-size: 14px;
      opacity: 0.7;
    }

    .num {
      text-align: center;
      font-weight: 600;
      color: var(--accent-valorant);
    }
  `;

  render() {
    return html`
      ${this.items.map(item => html`
        <div class="row">
          <div>
            <div class="title">${item.title}</div>
            <div class="user">Posted by ${item.user}</div>
          </div>

          <div class="num">${item.replies}</div>
          <div class="num">${item.views}</div>
        </div>
      `)}
    `;
  }
}

customElements.define("forum-list", ForumList);
