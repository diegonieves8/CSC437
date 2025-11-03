// src/forumpost.ts
import { html, css, LitElement } from "lit";
import reset from "./styles/reset.css.ts";

export class ForumListElement extends LitElement {
    override render() {
        return html`
        <section class="forum-list">
            <ul>
                <slot name="thread">
                    <li class="thread">
                        <div class="topic">
                            <h3>Default Post Title</h3>
                        <p class="meta">
                            Posted by <strong>Anonymous</strong>
                        </p>
                        </div>
                        <div class="replies">0</div>
                        <div class="views">0</div>
                    </li>
                </slot>
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
