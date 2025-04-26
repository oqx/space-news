import { createFileRoute } from "@tanstack/react-router";
import { fetchArticles } from "../api";
import { Loader } from "../patterns/Loader";
import { ArticlesPage } from "../pages/ArticlesPage";

type SearchParameters = Parameters<typeof fetchArticles>[0];
/**
 * ### Route
 *
 * @summary Executes data loading and handles query parameters.
 */
export const Route = createFileRoute("/")({
  component: ArticlesPage,
  validateSearch: (search: Record<string, unknown>): SearchParameters => {
    return {
      limit: Number(search?.limit ?? 15),
      offset: Number(search?.offset ?? 0),
      search: (search?.search as string) ?? "",
    };
  },
  pendingComponent: () => <Loader />,
  loaderDeps: ({ search }) => search,
  /**
   * Loads articles at route level.
   */
  loader: async ({ deps, abortController }) =>
    fetchArticles(deps, abortController.signal),

  /**
   * 10 mins stale time
   */
  staleTime: 10 * 60 * 1000,
  /**
   * 15 mins cache time
   */
  gcTime: 15 * 60 * 1000,
});
