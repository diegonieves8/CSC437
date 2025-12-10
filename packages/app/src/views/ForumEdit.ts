
import { define, Form, View, History } from "@calpoly/mustang";
import { html } from "lit";
import { property, state } from "lit/decorators.js";
import { Model, Forum } from "../model";
import { Msg } from "../messages";

export class ForumEditView extends View<Model, Msg> {
  static uses = define({
    "mu-form": Form.Element
  });

  @property({ type: Number })
  index?: number;

  constructor() {
    super("vct:model");
  }

  @state()
  get forum(): Forum | undefined {
    const i = this.index ?? -1;
    return (this.model.hottakes && this.model.hottakes[i]) ?? undefined;
  }

  handleSubmit(e: Form.SubmitEvent<Forum>) {
    // index should be set — we force it here with !
    const payload = { index: this.index!, forum: e.detail };
    this.dispatchMessage([
      "forum/save",
      payload,
      {
        onSuccess: () => {
          // example: navigate back to forum list page
          History.dispatch(this, "history/navigate", { href: "/forum" });
        },
        onFailure: (err: Error) => {
          console.error("Save failed:", err);
        }
      }
    ]);
  }

  render() {
    return html`
      <main class="page">
        <h2>Edit Forum Item</h2>

        <mu-form .init=${this.forum} @mu-form:submit=${this.handleSubmit}>
          <label>
            Title
            <input name="title" />
          </label>
          <label>
            User
            <input name="user" />
          </label>
          <label>
            Replies
            <input name="replies" type="number" />
          </label>
          <label>
            Views
            <input name="views" type="number" />
          </label>

          <div class="form-actions">
            <button type="submit">Save</button>
          </div>
        </mu-form>
      </main>
    `;
  }
}

customElements.define("forum-edit", ForumEditView);
