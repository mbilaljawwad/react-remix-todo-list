import Icon from ".";
import type { IconProps } from ".";
import type { Meta, Story } from "@storybook/react";

export default {
  title: "Atom/Icon",
  component: Icon,
  decorators: [(story) => <div style={{ maxWidth: 300 }}>{story()}</div>],
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;
export const Basic = Template.bind({});
Basic.args = {};
