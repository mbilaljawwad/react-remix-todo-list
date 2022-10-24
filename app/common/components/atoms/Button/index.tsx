import type { FC, ReactNode, HTMLProps } from "react";
import classnames from "classnames";

export type ButtonProps = HTMLProps<HTMLButtonElement> & {
  children: ReactNode;
  variant?: string;
};

const Button: FC<ButtonProps> = ({ children, variant = "default" }) => {
  return <button className={classnames(variant)}>{children}</button>;
};

export default Button;
