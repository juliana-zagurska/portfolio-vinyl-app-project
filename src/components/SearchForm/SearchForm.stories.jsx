import { SearchForm } from "./SearchForm.jsx";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Search Form",
  component: SearchForm,
  tags: ["autodocs"],
};

export const Default = () => <SearchForm onSubmit={action("Form submitted")} />;
