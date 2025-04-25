import { createFileRoute } from "@tanstack/react-router";
import { fetchArticles } from "../../api";
import { SearchPage } from "../../pages/SearchPage";

type SearchParameters = Parameters<typeof fetchArticles>[0];

/**
 * ### Route
 *
 * @summary Executes data loading and handles query parameters. I co-located
 * it with the JSX to avoid circular references.
 */
export const Route = createFileRoute("/search/")({
  component: SearchPage,
  validateSearch: (search: Record<string, unknown>): SearchParameters => {
    return {
      limit: Number(search?.limit ?? 15),
      offset: Number(search?.offset ?? 0),
      search: (search?.search as string) ?? "",
    };
  },
});
