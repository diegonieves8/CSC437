import { Auth, ThenUpdate } from "@calpoly/mustang";
import { Msg } from "./messages";
import { Model,Forum } from "./model";

export default function update(
  message: Msg,
  model: Model,
  user: Auth.User
): Model | ThenUpdate<Model, Msg> {
  switch (message[0]) {
    case "forum/request": {
      // Ask the store to run requestForum(), then dispatch "forum/load"
      return [
        model,
        requestForum(user).then((takes: Forum[]) => [
          "forum/load",
          { takes }
        ])
      ];
    }

    case "forum/load": {
      const { takes } = message[1];
      return { ...model, hottakes: takes };
    }

    default:
      throw new Error(`Unhandled message: ${message[0]}`);
  }
}

/** Fetches your JSON forum data */
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
