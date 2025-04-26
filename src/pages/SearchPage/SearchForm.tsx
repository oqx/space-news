import { useNavigate } from "@tanstack/react-router";
import { FormEventHandler, useCallback } from "react";
import styles from "./search-form.module.css";
import { Button, Input, SearchIcon } from "../../patterns";

export const SearchForm = () => {
  const nav = useNavigate();

  /**
   * @summary On submit, this fn updates the URL query params to trigger an update
   * to {@link import('@tanstack/router').useSearch}, which cycles the
   * search request.
   */
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

  /**
   * I'm a firm believer in using `<form>`, as it
   */
  return (
    <form className={styles.form} onSubmit={onSearch}>
      <Input
        className={styles.form__input}
        name="search"
        placeholder="Search for an article"
      />
      <Button
        type="submit"
        variant="primary"
        className={styles.form__btn}
        label="search"
      >
        <SearchIcon size={16} color="white" />
      </Button>
    </form>
  );
};
