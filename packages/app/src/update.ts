// packages/app/src/update.ts
import { Auth, ThenUpdate } from "@calpoly/mustang";
import { Msg, Reactions } from "./messages";
import { Model, Forum } from "./model";

export default function update(
  message: Msg,
  model: Model,
  user: Auth.User
): Model | ThenUpdate<Model, Msg> {
  // destructure typed as any then narrow in cases for convenience
  const [command, payload, callbacks] = message as any;

  switch (command) {
    case "forum/request": {
      return [
        model,
        requestForum(user).then((takes) => ["forum/load", { takes }])
      ];
    }

    case "forum/load": {
      const { takes } = payload as { takes: Forum[] };
      return { ...model, hottakes: takes };
    }

    case "forum/save": {
      // payload: { index: number, forum: Forum }
      const p = payload as { index: number; forum: Forum };
      const cb = callbacks as Reactions | undefined;
      return [
        model,
        saveForum(p, user, cb).then((updated) => [
          "forum/replace",
          { index: p.index, forum: updated }
        ])
      ];
    }

    case "forum/replace": {
      const { index, forum } = payload as { index: number; forum: Forum };
      const newHottakes = (model.hottakes ?? []).slice();
      if (index >= 0 && index < newHottakes.length) {
        newHottakes[index] = forum;
      } else {
        newHottakes.push(forum);
      }
      return { ...model, hottakes: newHottakes };
    }

    default: {
      // unreachable check — TypeScript will error if you missed a Msg case
      return model;
    }
  }
}

/** Fetch your JSON forum data (unchanged) */
function requestForum(user: Auth.User): Promise<Forum[]> {
  return fetch("/data/forum-itinerary.json", {
    headers: Auth.headers(user)
  })
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch forum data");
      return res.json();
    })
    .then((json) => json as Forum[]);
}

/**
 * saveForum - does a PUT request to save the forum item on the server.
 * NOTE: Uses /api/forum/:index. Replace with /api/forum/:id if your resource uses ids.
 */
function saveForum(
  msg: { index: number; forum: Forum },
  user: Auth.User,
  callbacks?: Reactions
): Promise<Forum> {
  // Change this URL if you store an id on the forum object:
  // const url = `/api/forum/${msg.forum.id}`;
  const url = `/api/forum/${msg.index}`;

  return fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...Auth.headers(user)
    },
    body: JSON.stringify(msg.forum)
  })
    .then((response: Response) => {
      if (response.status === 200) return response.json();
      throw new Error(`Failed to save forum item at ${msg.index}`);
    })
    .then((json: unknown) => {
      if (json) {
        callbacks?.onSuccess && callbacks.onSuccess();
        return json as Forum;
      }
      throw new Error("No JSON in API response");
    })
    .catch((err) => {
      callbacks?.onFailure && callbacks.onFailure(err);
      throw err;
    });
}
