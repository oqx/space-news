import { getRouteApi } from "@tanstack/react-router";
import { type FC, useEffect, useRef } from "react";
import { useWindowVirtualizer } from "@tanstack/react-virtual";
import { useInfiniteQuery } from "@tanstack/react-query";
import { articlesInfiniteQuery } from "../../api/queries/articles";
import { ArticleList, ArticleListItem, Loader } from "../../patterns";
import styles from "./search-items.module.css";

const { useSearch } = getRouteApi("/search/");

const scrollToTop = () =>
  scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

/**
 * @summary Creates a separate file for search to isolate its re-renders.
 */
export const SearchItems: FC = () => {
  const containerReference = useRef<HTMLDivElement>(null);

  const searchParameters = useSearch();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetched,
    isFetching,
  } = useInfiniteQuery(articlesInfiniteQuery(searchParameters));

  const rows = data ? data.pages.flatMap((d) => d.results) : [];

  const rowVirtualizer = useWindowVirtualizer({
    count: data?.pages[0].count ?? rows.length,
    estimateSize: () => 120,
    overscan: 5,
  });

  useEffect(() => {
    const [lastItem] = [...rowVirtualizer.getVirtualItems()].reverse();

    if (!lastItem) {
      return;
    }

    if (
      lastItem &&
      lastItem.index >= rows.length - 1 &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  }, [
    rowVirtualizer,
    rows.length,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    rowVirtualizer.getVirtualItems(),
  ]);

  const virtualItems = rowVirtualizer.getVirtualItems();

  if (isFetching) {
    return <Loader />;
  }

  if (isFetched && rows.length === 0) {
    return (
      <p aria-live="polite" aria-atomic="true">
        Could not find results for &quot;{searchParameters.search}&quot;.
      </p>
    );
  }

  return (
    <>
      {isFetched && rows?.length > 0 && (
        <div
          aria-live="polite"
          aria-atomic="true"
          ref={containerReference}
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: "100%",
            position: "relative",
          }}
        >
          <ArticleList
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              transform: `translateY(${virtualItems[0]?.start ?? 0}px)`,
            }}
          >
            {virtualItems.map((item) => {
              const article = rows[item.index];

              if (!article) {
                return;
              }

              return (
                <ArticleListItem
                  data-index={item.index}
                  style={{
                    height: `${rows[item.index]}px`,
                  }}
                  key={item.key}
                  ref={rowVirtualizer.measureElement}
                  article={article}
                ></ArticleListItem>
              );
            })}
          </ArticleList>
        </div>
      )}
      <button className={styles.items__scroll} onClick={scrollToTop}>
        ↑
      </button>
    </>
  );
};
