import { Link, useNavigate } from "@tanstack/react-router";
import styles from "./styles.module.css";
import { Input } from "../Input";
import { FormEventHandler, useCallback } from "react";
import { Button } from "../Button";

export const Navbar = () => {
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
    <header className={styles.navbar}>
      <div className={styles.navbar__upsell}>
        <form onSubmit={onSearch} className={styles.navbar__form}>
          <div className={styles.navbar__input}>
            <Input placeholder="Search for an article" name="search"></Input>
          </div>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </form>
      </div>
      <Link className={styles.navbar__title} to="/">
        Space News
      </Link>
      <nav className={styles.navbar__links}>
        <Link to="/" className={styles.navbar__link}>
          Latest
        </Link>
        <Link to="/search" className={styles.navbar__link}>
          Search
        </Link>
      </nav>
    </header>
  );
};
