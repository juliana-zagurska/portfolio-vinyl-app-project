import { TextInput } from "./TextInput.jsx";

export default {
  title: "TextInput",
  component: TextInput,
  tags: ["autodocs"],
  argTypes: {
    error: {
      control: "text",
    },
  },
};

export const Default = (args) => (
  <TextInput {...args} placeholder="Enter text..." />
);
Default.args = {
  error: "",
};

export const WithError = (args) => (
  <TextInput {...args} placeholder="Enter text..." />
);
WithError.args = {
  error: "Some error message",
};
