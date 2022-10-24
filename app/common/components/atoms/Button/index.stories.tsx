import Button from ".";
import type { ButtonProps } from ".";
import type { Meta, Story } from "@storybook/react";

export default {
  title: "Atom/Button",
  component: Button,
  decorators: [(story) => <div style={{ maxWidth: 300 }}>{story()}</div>],
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;
export const Basic = Template.bind({});
Basic.args = {
  children: "My Button",
  variant: "default",
};

export const Primary = Template.bind({});
Primary.args = {
  children: "My Button",
  variant: "primary",
};

export const Danger = Template.bind({});
Danger.args = {
  children: "My Button",
  variant: "danger",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "My Button",
  variant: "disabled",
};
