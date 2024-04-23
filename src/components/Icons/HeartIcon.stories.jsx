// eslint-disable-next-line import/no-unresolved
import { HeartIcon } from "./HeartIcon";

export default {
  title: "HeartIcon",
  component: HeartIcon,
  tags: ["autodocs"],
};

export const Default = () => <HeartIcon></HeartIcon>;

export const SelectedView = () => <HeartIcon isActive={true}></HeartIcon>;
