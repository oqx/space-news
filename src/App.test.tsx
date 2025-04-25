import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect } from "vitest";
import { App } from "./App";
import { testWithMSW } from "./test/mws-test";

describe("App", () => {
  testWithMSW("renders Articles page correctly", async () => {
    render(<App />);

    await waitFor(() =>
      expect(screen.getByTestId("FeaturesColumn")).toBeInTheDocument()
    );

    expect(screen.getAllByTestId("ArticleFeature.author").length).toBe(4);

    expect(screen.getAllByTestId("ArticleFeature.author")[0]).toHaveTextContent(
      "Published Thursday, April 24, 2025 at 12:05 PM by NASA"
    );

    expect(screen.getAllByTestId("ArticleFeature.title")[0]).toHaveTextContent(
      "NASA, Boeing, Consider New Thin-Wing Aircraft Research Focus"
    );

    expect(screen.getAllByTestId("ArticleFeature.img")[0]).toBeInTheDocument();

    expect(
      screen.getAllByTestId("ArticleFeature.readmore")[0]
    ).toHaveTextContent("Read More");

    expect(screen.getByTestId("ArticleSidebar")).toBeInTheDocument();

    expect(screen.getAllByTestId("ArticleSidebar.item").length).toBe(11);
  });
});
