import { useState } from "react";
import { MultiSelect } from "./MultiSelect.jsx";

export default {
  title: "Form/MultiSelect",
  component: MultiSelect,
  tags: ["autodocs"],
};

const Template = (args) => {
  const [value, setValue] = useState([]);

  return (
    <MultiSelect
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
