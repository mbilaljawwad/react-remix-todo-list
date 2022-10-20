import Button from ".";
import type { Meta, Story } from "@storybook/react";

export default {
  title: "Atom/Button",
  component: Button,
} as Meta;

const Template: Story = (args) => <Button {...args} />;
export const Basic = Template.bind({});
