import { PageLayout } from "../../patterns/PageLayout";
import { SearchForm } from "./SearchForm";
import { SearchItems } from "./SearchItems";
import styles from "./styles.module.css";

export const SearchPage = () => {
  return (
    <PageLayout layout="narrow">
      <div className={styles.page}>
        <h1 className={styles.page__title}>Article Search</h1>
        <SearchForm />
        <SearchItems />
      </div>
    </PageLayout>
  );
};
