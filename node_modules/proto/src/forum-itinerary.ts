import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import "./forumpost.ts"; // ✅ same folder

@customElement("forum-itinerary")
export class ForumItinerary extends LitElement {
  @property() src?: string;
  @state() posts: any[] = [];

  hydrate(src: string) {
    fetch(src)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((json: any[]) => {
        if (json) {
          this.posts = json;
        }
      })
      .catch((err) => console.error("Error loading JSON:", err));
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.src) {
      this.hydrate(this.src);
    }
  }

  render() {
    return html`
      ${this.posts.map(
        (post) => html`
          <forum-post
            user=${post.user}
            title=${post.title}
            replies=${post.replies}
            views=${post.views}
          ></forum-post>
        `
      )}
    `;
  }
}
