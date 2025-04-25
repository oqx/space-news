import { useNavigate } from "@tanstack/react-router";
import { FormEventHandler, useCallback } from "react";
import styles from "./search-form.module.css";
import { Input } from "../../patterns";

export const SearchForm = () => {
  const nav = useNavigate();

  const onSearch: FormEventHandler<HTMLFormElement> = useCallback(
    (event) => {
      event.preventDefault();

      if (event.target instanceof HTMLFormElement) {
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        if (typeof data.search === "string") {
          nav({ to: "/search", search: { search: data.search } });
        }
      }
    },
    [nav]
  );

  return (
    <form className={styles.form} onSubmit={onSearch}>
      <Input
        className={styles.form__input}
        name="search"
        placeholder="Search for an article"
      />
    </form>
  );
};
