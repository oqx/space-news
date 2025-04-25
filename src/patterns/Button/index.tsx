import { FC, HTMLProps, PropsWithChildren } from "react";
import styles from "./styles.module.css";
import classNames from "classnames";

type Props = {
  type: "button" | "reset" | "submit";
  variant: "primary" | "secondary";
} & Omit<HTMLProps<HTMLButtonElement>, "type"> &
  PropsWithChildren;

export const Button: FC<Props> = ({ className, variant, ...props }) => (
  <button
    className={classNames(styles.btn, className, {
      [styles["btn--secondary"]]: variant === "secondary",
    })}
    {...props}
  ></button>
);
