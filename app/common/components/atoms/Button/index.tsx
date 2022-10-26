import type { FC, ReactNode, HTMLProps } from "react";
import classnames from "classnames";

export type ButtonProps = HTMLProps<HTMLButtonElement> & {
  children: ReactNode;
  variant?: string;
  type?: "button" | "submit" | "reset" | undefined;
};

const Button: FC<ButtonProps> = ({
  children,
  variant = "default",
  type,
  ...props
}) => {
  return (
    <button
      {...props}
      type={type}
      disabled={variant === "disabled"}
      className={classnames("btn", variant)}
    >
      {children}
    </button>
  );
};

export default Button;
