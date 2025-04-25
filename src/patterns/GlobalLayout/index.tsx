import { Outlet } from "@tanstack/react-router";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import styles from "./styles.module.css";

export const GlobalLayout = () => {
  return (
    <>
      <Navbar />
      <div className={styles.layout}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
