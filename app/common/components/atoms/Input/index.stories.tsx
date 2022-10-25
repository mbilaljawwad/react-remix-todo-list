import Input from ".";
import type { InputProps } from ".";
import type { Meta, Story } from "@storybook/react";

export default {
  title: "Atom/Input",
  component: Input,
  decorators: [(story) => <div style={{ maxWidth: 300 }}>{story()}</div>],
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;
export const Basic = Template.bind({});
Basic.args = {};
