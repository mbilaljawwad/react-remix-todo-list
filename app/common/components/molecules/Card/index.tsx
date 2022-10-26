import type { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type CardProps = {
  children: ReactNode;
  classNameModifier?: string;
};
const Card: FC<CardProps> = ({ children, classNameModifier = "" }) => {
  return (
    <div
      className={twMerge(
        `p-5 border w-full bg-white h-full border-gray-300 rounded-lg shadow-md shadow-gray-300 ${classNameModifier}`
      )}
    >
      {children}
    </div>
  );
};

export default Card;
