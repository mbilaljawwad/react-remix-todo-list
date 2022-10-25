import EmailField from ".";
import type { EmailProps } from ".";
import type { Meta, Story } from "@storybook/react";

export default {
  title: "Molecules/EmailField",
  component: EmailField,
  decorators: [(story) => <div style={{ maxWidth: 300 }}>{story()}</div>],
} as Meta;

const Template: Story<EmailProps> = (args) => <EmailField {...args} />;
export const Basic = Template.bind({});
Basic.args = {};
