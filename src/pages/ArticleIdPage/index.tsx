import { getRouteApi } from "@tanstack/react-router";
import { formatDateStringToFullDate } from "../../utils";
import styles from "./styles.module.css";

const { useLoaderData } = getRouteApi("/articles/$articleId");

export const ArticleIdPage = () => {
  const article = useLoaderData();

  return (
    <article className={styles.card}>
      <div className={styles.card__article}>
        {!!article.image_url && (
          <div
            className={styles.card__img}
            style={{ backgroundImage: `url(${article.image_url})` }}
          />
        )}
        <header>
          <h1 className={styles.card__heading}>{article.title}</h1>
        </header>
        <p>
          Published {formatDateStringToFullDate(article.published_at)} by{" "}
          {article.authors.map((author) => author.name).join(", ")}
        </p>
        <p className={styles.card__body}>{article.summary}</p>
        <p className={styles.card__body}>
          Vastness is bearable only through love vanquish the impossible bits of
          moving fluff great turbulent clouds globular star cluster
          extraordinary claims require extraordinary evidence? With pretty
          stories for which there&apos;s little good evidence two ghostly white
          figures in coveralls and helmets are softly dancing permanence of the
          stars permanence of the stars stirred by starlight two ghostly white
          figures in coveralls and helmets are softly dancing. Across the
          centuries with pretty stories for which there&apos;s little good
          evidence made in the interiors of collapsing stars citizens of distant
          epochs with pretty stories for which there&apos;s little good evidence
          the ash of stellar alchemy and billions upon billions upon billions
          upon billions upon billions upon billions upon billions.
        </p>
        <p className={styles.card__body}>
          Astonishment emerged into consciousness decipherment Jean-François
          Champollion invent the universe as a patch of light. Extraordinary
          claims require extraordinary evidence from which we spring concept of
          the number one rich in mystery intelligent beings two ghostly white
          figures in coveralls and helmets are softly dancing. Descended from
          astronomers vastness is bearable only through love Sea of Tranquility
          a mote of dust suspended in a sunbeam are creatures of the cosmos
          descended from astronomers and billions upon billions upon billions
          upon billions upon billions upon billions upon billions.
        </p>
      </div>
    </article>
  );
};
