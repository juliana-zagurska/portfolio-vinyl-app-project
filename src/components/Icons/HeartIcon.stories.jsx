import { HeartIcon } from "./HeartIcon.jsx";

export default {
  title: "HeartIcon",
  component: HeartIcon,
  tags: ["autodocs"],
};

export const Default = () => <HeartIcon></HeartIcon>;

export const SelectedView = () => <HeartIcon isActive={true}></HeartIcon>;
