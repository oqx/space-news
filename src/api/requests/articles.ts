import type { Article, PaginatedArticleList } from "../../types";
import { fetcher, objectToQueryParameters } from "../utils";

type FetchArticlesParameters = {
  /**
   * Limits the number of entities returned in the articles array.
   */
  limit?: number;
  /**
   * Searches article titles and summaries via text.
   */
  search?: string;
  /**
   * A value representing the index of results, where it retrieves all entities after the offset.
   */
  offset?: number;
};

/**
 * Fetches space news articles.
 *
 * @param params
 *
 * @see https://api.spaceflightnewsapi.net/v4/docs/#/articles/articles_list
 */
export const fetchArticles = (
  parameters: FetchArticlesParameters,
  signal?: AbortSignal
) => {
  const queryParameters = objectToQueryParameters({
    ...parameters,
    format: "json",
  });

  return fetcher<PaginatedArticleList>(
    fetch(`https://api.spaceflightnewsapi.net/v4/articles/${queryParameters}`, {
      signal,
    }),
    "json"
  );
};

/**
 * Fetches a single space news article by ID.
 *
 * @param {string} id ID of a space news article.
 *
 * @see https://api.spaceflightnewsapi.net/v4/docs/#/articles/articles_retrieve
 */
export const fetchArticleById = (id: string, signal?: AbortSignal) =>
  fetcher<Article>(
    fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`, { signal }),
    "json"
  );
