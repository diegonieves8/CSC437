// packages/app/src/update.ts

import { Auth, ThenUpdate } from "@calpoly/mustang";
import { Msg } from "./messages";
import { Model, Forum } from "./model";

export default function update(
  message: Msg,
  model: Model,
  user: Auth.User
): Model | ThenUpdate<Model, Msg> {

  switch (message[0]) {
    case "forum/request": {
      return [
        model,
        requestForum(user).then((takes) => ["forum/load", { takes }])
      ];
    }

    case "forum/load": {
      const { takes } = message[1];
      return { ...model, hottakes: takes };
    }

    default:
      return model; // <-- Must return something instead of throwing error
  }
}

/** Fetch your JSON forum data */
function requestForum(user: Auth.User): Promise<Forum[]> {
  return fetch("/data/forum-itinerary.json", {
    headers: Auth.headers(user) // Works even if user is null (public fetch)
  })
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch forum data");
      return res.json();
    })
    .then((json) => json as Forum[]);
}
