import { getRouteApi, Link } from "@tanstack/react-router";
import { PageLayout } from "../../patterns/PageLayout";
import { ArticleFeature } from "../../patterns/ArticleFeature";
import { ArticleSidebar } from "../../patterns/ArticleSidebar";
import styles from "./styles.module.css";
import { Button } from "../../patterns";

const { useLoaderData, useSearch } = getRouteApi("/");

/**
 * @summary Page JSX for rendering articles. This is the
 * root route.
 */
export const ArticlesPage = () => {
  const data = useLoaderData();
  const parameters = useSearch();

  const featuredArticles = data.results.slice(0, 4);

  const sidebarArticles = data.results.slice(4, 16);

  return (
    <PageLayout layout="wide">
      <div className={styles.articles}>
        <div className={styles.articles__features} data-testid="FeaturesColumn">
          {featuredArticles.map((article) => (
            <ArticleFeature key={article.id} article={article} />
          ))}
        </div>
        <ArticleSidebar articles={sidebarArticles} />
      </div>
      <nav className={styles.articles__nav}>
        {typeof data.previous === "string" && (
          <Link
            to="/"
            search={{
              limit: 15,
              offset: (parameters.offset ?? 15) - 15,
            }}
          >
            <Button variant="secondary" type="button">
              ← Previous
            </Button>
          </Link>
        )}
        <Link
          to="/"
          search={{
            limit: 15,
            offset: (parameters.offset ?? 0) + 15,
          }}
        >
          <Button variant="primary" type="button">
            Next →
          </Button>
        </Link>
      </nav>
    </PageLayout>
  );
};
