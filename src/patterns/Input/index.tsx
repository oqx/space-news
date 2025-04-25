import { FC, HTMLProps } from "react";
import styles from "./styles.module.css";
import classNames from "classnames";

type Props = HTMLProps<HTMLInputElement>;

export const Input: FC<Props> = (props) => (
  <input
    {...props}
    className={classNames(styles.input, props?.className)}
    type="text"
  />
);
