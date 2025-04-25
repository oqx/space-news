import { afterEach, describe, expect, test, type Mock, vi } from "vitest";
import { fetchArticles, fetchArticleById } from "./articles";
import { testWithMSW } from "../../test/mws-test";

describe("API fetchers", () => {
  describe("fetchArticles", () => {
    afterEach(() => {
      vi.clearAllMocks();
    });

    testWithMSW("should fetch a list of articles successfully", async () => {
      const response = await fetchArticles({ limit: 2 });

      expect(response.results.length).toBe(2);
      expect(response.results[0].title).toBe(
        "NASA, Boeing, Consider New Thin-Wing Aircraft Research Focus"
      );
    });

    testWithMSW("should handle search query properly", async () => {
      const response = await fetchArticles({ search: "Nasa", limit: 10 });

      expect(response.results.length).toBe(6);
      expect(response.results[0].title).toBe(
        "NASA, Boeing, Consider New Thin-Wing Aircraft Research Focus"
      );
    });

    test("should return 400 for bad request", async () => {
      globalThis.fetch = vi.fn();

      (fetch as Mock).mockResolvedValueOnce({
        status: 400,
        json: async () => ({ error: "Bad request" }),
      });

      await expect(() => fetchArticles({ limit: 1 })).rejects.toThrow();
    });

    testWithMSW("should handle limit and offset", async () => {
      const signal = new AbortController().signal;
      const response = await fetchArticles({ limit: 1, offset: 1 }, signal);

      expect(response.results.length).toBe(1);
      expect(response.results[0].title).toBe(
        "Shenzhou-20 crewed spacecraft arrives at Tiangong space station"
      );
    });
  });

  describe("fetchArticleById", () => {
    afterEach(() => {
      vi.clearAllMocks();
    });

    testWithMSW("should fetch an article by its ID", async () => {
      const response = await fetchArticleById("30815");

      expect(response.id).toBe(30_815);
      expect(response.title).toBe(
        "LIVE COVERAGE! China Shenzhou 20 Crew Launch"
      );
    });
    test("should return 400 for bad request", async () => {
      globalThis.fetch = vi.fn();

      (fetch as Mock).mockResolvedValueOnce({
        status: 400,
        json: async () => ({ error: "Bad request" }),
      });

      await expect(() => fetchArticleById("1")).rejects.toThrow();
    });
  });
});
