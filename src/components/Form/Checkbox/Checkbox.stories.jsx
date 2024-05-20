import { useState } from "react";
import { Checkbox } from "./Checkbox.jsx";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
};

const Template = (args) => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      id="some"
      {...args}
      checked={checked}
      onChange={(event) => setChecked(event.target.checked)}
    />
  );
};

export const Default = Template.bind({});

export const WithLabel = (args) => {
  const [checked, setChecked] = useState(false);

  return (
    <label htmlFor="agree">
      <Checkbox
        id="agree"
        {...args}
        checked={checked}
        onChange={(event) => setChecked(event.target.checked)}
      />
      Agree with everything
    </label>
  );
};
