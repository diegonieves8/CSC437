// packages/app/src/views/HotTakes.ts
import { View } from "@calpoly/mustang";
import { html, css } from "lit";
import { Model } from "../model";
import { Msg } from "../messages";

export class HotTakesView extends View<Model, Msg> {

  constructor() {
    super("vct:model");
  }

  connectedCallback() {
    super.connectedCallback();
    this.dispatchMessage(["forum/request", {}]);
  }

  get takes() {
    return this.model.hottakes ?? [];
  }

  static styles = css`
    :host { display: block; }
  `;

  render() {
    return html`
      <div class="forum-container">
        <div class="forum-title">
          <h2>Valorant Discussion Forum</h2>
          <p>Share your thoughts, predictions, and hot takes</p>
        </div>

        <section class="post-form">
          <textarea placeholder="What's on your Valorant mind..." rows="4"></textarea>
          <button class="post-btn">Post Topic</button>
        </section>

        <section class="forum-header">
          <p>Topic</p>
          <p>Replies</p>
          <p>Views</p>
        </section>

        <forum-list .items=${this.takes}></forum-list>
      </div>
    `;
  }
}

customElements.define("forum-view", HotTakesView);
