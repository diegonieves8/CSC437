import { html, css, LitElement } from "lit";
import { property, state } from "lit/decorators.js";

interface ForumPost {
  id: number;
  title: string;
  author: string;
  time: string;
  views: number;
  replies: number;
}

export class ForumListElement extends LitElement {
  @state()
  posts: ForumPost[] = [
    {
      id: 2,
      title: "What role is Zekken gonna play?",
      author: "Diego",
      time: "2h ago",
      views: 120,
      replies: 5
    },
    {
      id: 1,
      title: "ENVY is making it to kickoff playoffs",
      author: "Alex",
      time: "1d ago",
      views: 321,
      replies: 45
    }
  ];

  override render() {
    return html`
      <section class="forum-list">
        <ul>
          ${this.posts.map(
            (post) => html`
              <li class="thread">
                <div class="topic">
                  <h3>${post.title}</h3>
                  <p class="meta">
                    Posted by <strong>${post.author}</strong> • ${post.time}
                  </p>
                </div>
                <div class="views">${post.views}</div>
                <div class="replies">${post.replies}</div>
              </li>
            `
          )}
        </ul>
      </section>
    `;
  }

  static styles = css`
    .forum-list {
      color: var(--text-primary);
    }

    .thread {
      display: grid;
      grid-template-columns: 3fr 1fr 1fr;
      align-items: center;
    }

    .thread {
      border-bottom: 1px solid var(--border-color);
      transition: background 0.2s;
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
  `;
}
