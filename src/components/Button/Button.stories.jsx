import { Button } from "./Button.jsx";
import { PlusIcon } from "../Icons/PlusIcon.jsx";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    children: "Button",
    variant: "primary",
  },
};

export const Secondary = {
  args: {
    children: "Button",
    variant: "secondary",
  },
};

export const WithIcon = {
  args: {
    children: "Button",
    variant: "primary",
    icon: <PlusIcon />,
  },
};
