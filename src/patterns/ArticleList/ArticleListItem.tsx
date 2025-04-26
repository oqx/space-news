import { CSSProperties, forwardRef, HTMLProps } from "react";
import { Article } from "../../types";
import styles from "./list-item.module.css";
import { Link } from "@tanstack/react-router";

type Props = {
  article: Article;
  style?: CSSProperties;
} & HTMLProps<HTMLLIElement>;

/**
 * @summary Basic card-like list item, created for virtualization, but can be used
 * for anything.
 */
export const ArticleListItem = forwardRef<HTMLLIElement, Props>(
  ({ article, style }, reference) => {
    return (
      <li className={styles.item} style={style} ref={reference}>
        {Array.isArray(article.authors) && article.authors.length > 0 && (
          <p className={styles.item__author}>{article.authors[0].name}</p>
        )}
        <p className={styles.item__title}>{article.title}</p>
        <Link
          to="/articles/$articleId"
          params={{ articleId: article.id.toString() }}
        >
          Read More
        </Link>
      </li>
    );
  }
);

ArticleListItem.displayName = "ArticleListItem";
