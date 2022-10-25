import Field from ".";
import type { FieldProps } from ".";
import type { Meta, Story } from "@storybook/react";

export default {
  title: "Molecules/Field",
  component: Field,
  decorators: [(story) => <div style={{ maxWidth: 300 }}>{story()}</div>],
} as Meta;

const Template: Story<FieldProps> = (args) => <Field {...args} />;
export const Basic = Template.bind({});
Basic.args = {
  type: "text",
};

export const Email = Template.bind({});
Email.args = {
  type: "email",
};

export const Password = Template.bind({});
Password.args = {
  type: "password",
};
