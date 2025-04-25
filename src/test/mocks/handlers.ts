// @ts-check
import { http, HttpResponse } from "msw";
import { ARTICLES } from "./articles";
import { Article } from "../../types";

export const handlers = [
  http.get("https://api.spaceflightnewsapi.net/v4/articles", ({ request }) => {
    const url = new URL(request.url);

    const limit = Number(url.searchParams.get("limit") ?? 0);

    const offset = Number(url.searchParams.get("offset") ?? 0);

    const search = url.searchParams.get("search");

    const results = ARTICLES.results;

    let articles = results.slice(offset, offset + limit);

    if (typeof search === "string" && search.length > 0) {
      articles = articles.reduce<Article[]>(
        (accumulator, article) => {
          if (
            article.summary.toLowerCase().includes(search.toLowerCase()) ||
            article.title.toLowerCase().includes(search.toLowerCase())
          ) {
            accumulator.push(article);
          }
          return accumulator;
        },

        []
      );
    }

    return HttpResponse.json({
      count: articles.length,
      next:
        articles.length > 0
          ? `https://api.spaceflightnewsapi.net/v4/articles?limit=${limit}&offset=${
              offset + offset
            }`
          : undefined,
      previous:
        articles.length > 0 && offset > 0
          ? `https://api.spaceflightnewsapi.net/v4/articles?limit=${limit}&offset=${Math.max(
              offset - offset,
              0
            )}`
          : undefined,
      results: articles,
    });
  }),

  http.get(
    "https://api.spaceflightnewsapi.net/v4/articles/:articleId",
    ({ params }) => {
      const articleId = params.articleId;
      if (articleId) {
        const article = ARTICLES.results.find(
          (article) => article.id === +articleId
        );

        return HttpResponse.json(article);
      }

      return HttpResponse.json("Cannot find article", { status: 404 });
    }
  ),
];
