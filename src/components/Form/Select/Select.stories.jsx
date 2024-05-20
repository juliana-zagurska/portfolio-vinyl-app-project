import { useState } from "react";
import { Select } from "./Select.jsx";

export default {
  title: "Form/Select",
  component: Select,
  tags: ["autodocs"],
};

const Template = (args) => {
  const [value, setValue] = useState(null);

  return (
    <Select
      {...args}
      placeholder="Select an option"
      options={[
        { label: "Option 1", value: "option-1" },
        { label: "Option 2", value: "option-2" },
        { label: "Option 3", value: "option-3" },
      ]}
      value={value}
      onChange={setValue}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};

export const Error = Template.bind({});
Error.args = {
  error: true,
};
