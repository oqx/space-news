import cn from "classnames";
import { FC, PropsWithChildren } from "react";
import styles from "./style.module.css";

type Props = {
  layout: "wide" | "narrow";
} & PropsWithChildren;

export const PageLayout: FC<Props> = ({ children, layout }) => (
  <div
    className={cn(styles.layout, {
      [styles["layout--wide"]]: layout === "wide",
      [styles["layout--narrow"]]: layout === "narrow",
    })}
  >
    {children}
  </div>
);
