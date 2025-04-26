import { createFileRoute } from "@tanstack/react-router";
import { fetchArticleById } from "../../api";
import { ArticleIdPage } from "../../pages/ArticleIdPage";

export const Route = createFileRoute("/articles/$articleId")({
  loader: ({ params, abortController }) =>
    fetchArticleById(params.articleId, abortController.signal),
  component: ArticleIdPage,
  /**
   * 10 mins stale time
   */
  staleTime: 10 * 60 * 1000,
  /**
   * 15 mins cache time
   */
  gcTime: 15 * 60 * 1000,
});
