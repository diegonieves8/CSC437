import { Forum } from "./model";

export type Msg =
  | ["forum/request", {}]
  | ["forum/load", { takes: Forum[] }];
