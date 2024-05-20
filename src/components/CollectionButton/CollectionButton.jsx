import { Button } from "../Button/index.js";
import PropTypes from "prop-types";
import { CheckIcon } from "../Icons/CheckIcon.jsx";
import { PlusIcon } from "../Icons/PlusIcon.jsx";

export const CollectionButton = ({ isActive, onClick }) => {
  return (
    <Button
      variant={isActive ? "secondary" : "primary"}
      isFullWidth
      onClick={onClick}
      icon={isActive ? <CheckIcon /> : <PlusIcon />}
    >
      {isActive ? "Added" : "Add"}
    </Button>
  );
};

CollectionButton.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};
