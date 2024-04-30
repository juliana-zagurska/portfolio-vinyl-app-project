import PropTypes from "prop-types";
import { HeaderLayout } from "./HeaderLayout.jsx";
import { HeaderIcon } from "../HeaderIcon";
import { HeartIcon } from "../Icons/HeartIcon.jsx";
import { FolderIcon } from "../Icons/FolderIcon.jsx";

export const Header = ({ collectionSize, wishlistSize }) => {
  return (
    <HeaderLayout
      menu={[
        <HeaderIcon
          icon={<HeartIcon />}
          key={"wishlist"}
          count={wishlistSize}
        />,
        <HeaderIcon
          icon={<FolderIcon />}
          key={"collection"}
          count={collectionSize}
        />,
      ]}
    />
  );
};

Header.propTypes = {
  collectionSize: PropTypes.number.isRequired,
  wishlistSize: PropTypes.number.isRequired,
  vinylList: PropTypes.array.isRequired,
};
