import type { Article } from "../../types";
import type { FC } from "react";
import styles from "./styles.module.css";
import { formatDateStringToFullDate } from "../../utils";
import { Link } from "@tanstack/react-router";

type Props = {
  article: Article;
};

export const ArticleFeature: FC<Props> = ({ article }) => {
  return (
    <div className={styles.container} data-testid="ArticleFeature">
      <article className={styles.card}>
        <div className={styles.card__article}>
          <header>
            <h1
              className={styles.card__heading}
              data-testid="ArticleFeature.title"
            >
              {article.title}
            </h1>
          </header>
          <p data-testid="ArticleFeature.author">
            Published {formatDateStringToFullDate(article.published_at)} by{" "}
            {article.authors.map((author) => author.name).join(", ")}
          </p>
          <p data-testid="ArticleFeature.summar" className={styles.card__body}>
            {article.summary}
          </p>
        </div>
        {!!article.image_url && (
          <div
            data-testid="ArticleFeature.img"
            className={styles.card__img}
            style={{ backgroundImage: `url(${article.image_url})` }}
          />
        )}
        <Link
          data-testid="ArticleFeature.readmore"
          to="/articles/$articleId"
          params={{ articleId: article.id.toString() }}
        >
          Read More
        </Link>
      </article>
    </div>
  );
};
