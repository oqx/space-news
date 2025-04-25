import { infiniteQueryOptions } from "@tanstack/react-query";
import { fetchArticles } from "../requests/articles";
import { getPageParametersForArticlesQuery } from "../utils";

/**
 * @summary A query function intended to be passed into a react-query hook. Has the same
 * function signature as {@link fetchArticles}.
 *
 * @param parameters
 */
export const articlesInfiniteQuery = (
  parameters: Parameters<typeof fetchArticles>[0]
) =>
  infiniteQueryOptions({
    enabled:
      typeof parameters.search === "string" && parameters.search.length > 0,
    queryKey: ["articles", parameters],
    queryFn: ({ signal }) => fetchArticles(parameters, signal),
    initialPageParam: 0,
    getNextPageParam: (lastPage) =>
      getPageParametersForArticlesQuery(lastPage.next),
    getPreviousPageParam: (firstPage) =>
      getPageParametersForArticlesQuery(firstPage.previous),
  });
