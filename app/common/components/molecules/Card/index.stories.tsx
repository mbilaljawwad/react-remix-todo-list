import Card from ".";
import type { CardProps } from ".";
import type { Meta, Story } from "@storybook/react";

export default {
  title: "Common/Molecules/Card",
  component: Card,
  decorators: [(story) => <div style={{ maxWidth: 300 }}>{story()}</div>],
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;
export const Basic = Template.bind({});
Basic.args = {
  children: <div>Card Component</div>,
};
