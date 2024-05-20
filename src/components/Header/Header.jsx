/*import PropTypes from "prop-types";
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
};
*/
import PropTypes from "prop-types";
import { FolderIcon } from "../Icons/FolderIcon.jsx";
import { HeaderLayout } from "./HeaderLayout.jsx";
import { IconButton } from "../IconButton";
import { HeartIcon } from "../Icons/HeartIcon.jsx";
import { ArrowLeftIcon } from "../Icons/ArrowLeftIcon.jsx";

export const Header = ({ collectionSize, wishlistSize, type }) => {
  return (
    <HeaderLayout
      backButton={
        type === "backButton" && (
          <IconButton
            icon={<ArrowLeftIcon />}
            onClick={() => window.history.go(-1)}
          />
        )
      }
      menu={[
        <IconButton
          icon={<HeartIcon />}
          key={"wishlist"}
          count={wishlistSize}
        />,
        <IconButton
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
  type: PropTypes.oneOf(["search", "backButton"]).isRequired,
};
