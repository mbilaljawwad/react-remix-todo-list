import type { FC, ReactNode, HTMLProps } from "react";
import classnames from "classnames";

export type ButtonProps = HTMLProps<HTMLButtonElement> & {
  children: ReactNode;
  variant?: string;
};

const Button: FC<ButtonProps> = ({ children, variant = "default" }) => {
  return (
    <button
      disabled={variant === "disabled"}
      className={classnames("btn", variant)}
      onClick={() => {
        alert("Not Disabled");
      }}
    >
      {children}
    </button>
  );
};

export default Button;
