// packages/app/src/messages.ts
import { Forum } from "./model";

export type Reactions = {
  onSuccess?: () => void;
  onFailure?: (err: Error) => void;
};

export type Msg =
  | ["forum/request", {}]
  | ["forum/load", { takes: Forum[] }]
  | ["forum/save", { index: number; forum: Forum }, Reactions]
  | ["forum/replace", { index: number; forum: Forum }];
