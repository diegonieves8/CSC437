export interface Forum {
  user: string;
  title: string;
  replies: number;
  views: number;
}

export interface Model {
  hottakes?: Forum[];
}

export const init: Model = {};
