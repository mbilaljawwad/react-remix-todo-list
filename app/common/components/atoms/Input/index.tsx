import type { FC, HTMLProps } from "react";
import { twMerge } from "tailwind-merge";
export type InputProps = HTMLProps<HTMLInputElement> & {
  classNameModifiers?: string;
};

const Input: FC<InputProps> = ({ classNameModifiers = "", ...props }) => {
  return (
    <input
      className={twMerge(
        `p-1 w-full border rounded-lg border-purple-300 bg-gray-50 active:border-purple-400 focus-visible:border-purple-400 ${classNameModifiers}`
      )}
      {...props}
    />
  );
};

export default Input;
