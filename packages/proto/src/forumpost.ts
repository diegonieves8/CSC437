import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import reset from "./styles/reset.css.ts";

@customElement("forum-post")
export class ForumPostElement extends LitElement {
  @property() user = "Anonymous";
  @property() title = "Default Post Title";
  @property({ type: Number }) replies = 0;
  @property({ type: Number }) views = 0;

  override render() {
    return html`
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
    `;
  }

  static styles = [
    reset.styles,
    css`
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
    `
  ];
}
