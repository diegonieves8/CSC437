// packages/app/src/views/HotTakes.ts

import { LitElement, html, css } from "lit";

export class HotTakesView extends LitElement {
  static styles = css`
    @import "/style/reset.css";
    @import "/style/tokens.css";
    @import "/style/pages.css";
    @import "/style/HotTakes.css";
    @import "/style/authmodal.css";

    :host {
      display: block;
    }
  `;

  // You will later convert forum-itinerary to a component,
  // but for now we leave the tag exactly as-is so it still works.
  render() {
    return html`

      
      <div class="forum-container">
        <div class="forum-title">
          <h2>Valorant Discussion Forum</h2>
          <p>Share your thoughts, predictions, and hot takes</p>
        </div>

        
        <section class="post-form">
          <textarea
            placeholder="What's on your Valorant mind..."
            rows="4">
          </textarea>
          <button class="post-btn">Post Topic</button>
        </section>

       
        <section class="forum-header">
          <p>Topic</p>
          <p>Replies</p>
          <p>Views</p>
        </section>

        
        <forum-itinerary src="/data/forum-itinerary.json"></forum-itinerary>
      </div>
    `;
  }
}

customElements.define("forum-view", HotTakesView);
