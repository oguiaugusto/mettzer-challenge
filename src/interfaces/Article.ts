export interface IArticle {
  id: number;
  authors: string[];
  type: string;
  title: string;
  description: string;
  fulltextUrls: string[];
}

export interface IArticlesResponse {
  status: string;
  totalHits: number;
  data: IArticle[];
}
