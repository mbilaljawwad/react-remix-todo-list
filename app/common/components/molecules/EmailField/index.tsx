import classNames from "classnames";
import type { FC } from "react";
import type { IconProps } from "../../atoms/Icon";
import Icon from "../../atoms/Icon";
import Input from "../../atoms/Input";

export type EmailProps = {
  icon?: IconProps["iconId"];
};
const EmailField: FC<EmailProps> = ({ icon }) => {
  const hasIcon = icon ? true : false;
  return (
    <div className="relative">
      {icon && (
        <Icon
          iconId={icon}
          className="w-4 h-4 absolute top-2 left-2 text-purple-700"
        />
      )}
      <Input
        classNameModifiers={classNames({ "pl-8": hasIcon, "pl-2": !hasIcon })}
        type="email"
      />
    </div>
  );
};

export default EmailField;
