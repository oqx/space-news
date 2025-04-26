import { FC } from "react";
import { Article } from "../../types";
import styles from "./styles.module.css";
import { Link } from "@tanstack/react-router";

type Props = {
  articles: Article[];
};

/**
 * @summary Generates a vertical list of articles -- includes title and author.
 */
export const ArticleSidebar: FC<Props> = ({ articles }) => {
  return (
    <ul className={styles.sidebar} data-testid="ArticleSidebar">
      {articles.map((article) => (
        <li
          data-testid="ArticleSidebar.item"
          className={styles.sidebar__li}
          key={article.id}
        >
          {Array.isArray(article.authors) && article.authors.length > 0 && (
            <p className={styles.sidebar__author}>{article.authors[0].name}</p>
          )}
          <p className={styles.sidebar__title}>{article.title}</p>
          <Link
            to="/articles/$articleId"
            params={{ articleId: article.id.toString() }}
          >
            Read More
          </Link>
        </li>
      ))}
    </ul>
  );
};
