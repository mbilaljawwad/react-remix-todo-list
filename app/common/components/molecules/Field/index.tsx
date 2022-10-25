import classNames from "classnames";
import type { FC, HTMLProps } from "react";
import type { IconProps } from "../../atoms/Icon";
import Icon from "../../atoms/Icon";
import { twMerge } from "tailwind-merge";

export type FieldProps = HTMLProps<HTMLInputElement> & {
  icon?: IconProps["iconId"];
  type?: "text" | "password" | "email";
  classNameModifiers?: string;
};
const Field: FC<FieldProps> = ({
  icon,
  type = "text",
  classNameModifiers = "",
  ...props
}) => {
  const hasIcon = icon ? true : false;
  return (
    <div className="relative">
      {icon && (
        <Icon
          iconId={icon}
          className="w-4 h-4 absolute top-2 left-2 text-purple-700"
        />
      )}
      <input
        type={type}
        className={twMerge(
          `p-1 ${classNames({
            "pl-8": hasIcon,
            "pl-2": !hasIcon,
          })} w-full border rounded-lg border-purple-300 bg-gray-50 active:border-purple-400 focus-visible:border-purple-400 ${classNameModifiers}`
        )}
        {...props}
      />
    </div>
  );
};

export default Field;
