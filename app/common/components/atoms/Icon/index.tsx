import type { FC } from "react";
import icons from "./icons.svg";

type IconIds = "user";

export type IconProps = {
  className: string;
  iconId: IconIds;
};

const Icon: FC<IconProps> = ({ className, iconId }) => {
  return (
    <svg className={className}>
      <use xlinkHref={`${icons}#${iconId}`} />
    </svg>
  );
};

export default Icon;
