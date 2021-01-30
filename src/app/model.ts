export enum ButtonType {
  random,
  search,
}

export interface NgClassValue {
  [key: string]: boolean;
}

export const ALL_CATEGORIES_KEY = 'All categories';

export class Joke {
  categories: string[];
  createdAt: string;
  iconUrl: string;
  id: string;
  updatedAt: string;
  url: string;
  value: string;

  static fromJSON(obj: object): Joke {
    const joke = new Joke();

    joke.categories = obj['categories'];
    joke.createdAt = obj['created_at'];
    joke.iconUrl = obj['icon_url'];
    joke.id = obj['id'];
    joke.updatedAt = obj['updated_at'];
    joke.url = obj['url'];
    joke.value = obj['value'];

    return joke;
  }
}
