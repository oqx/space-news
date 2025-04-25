import { CSSProperties, FC, PropsWithChildren } from "react";
import styles from "./list.module.css";

type Props = {
  style?: CSSProperties;
} & PropsWithChildren;

export const ArticleList: FC<Props> = ({ children, style }) => {
  return (
    <ul style={style} className={styles.list}>
      {children}
    </ul>
  );
};
