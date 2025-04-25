import { Link } from "@tanstack/react-router";
import styles from "./styles.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__grid}>
        <div>
          <Link className={styles.footer__title} to="/">
            Space News
          </Link>
        </div>
        <section>
          <h3>Links</h3>
          <ul className={styles.footer__list}>
            <li>
              <a href="https://github.com/oqx" target="_blank" rel="noreferrer">
                Github
              </a>
            </li>
            <li>
              <a
                href="http://codepen.io/collection/DpRRQP"
                target="_blank"
                rel="noreferrer"
              >
                CodePen
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jaykariesch/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </section>
        <section>
          <h3>Team</h3>
          <ul className={styles.footer__list}>
            <li>Mr Krebs, Chief Editor</li>
            <li>Artie, Editor</li>
            <li>Little Pete, Editor</li>
          </ul>
        </section>
      </div>
    </footer>
  );
};
