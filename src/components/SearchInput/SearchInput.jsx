import PropTypes from "prop-types";
import { SearchIcon } from "../Icons/SearchIcon.jsx";
import { SearchInputTab } from "./SearchInputTab.jsx";
import { SearchInputLink } from "./SearchInputLink.jsx";
import { SearchInputVinylOption } from "./SearchInputVinylOption.jsx";
import styles from "./SearchInput.module.css";

const SearchInput = ({
  tabs,
  footer,
  children,
  isEmpty,
  value,
  onChange,
  onFocus,
  onBlur,
  isDropdownOpened,
}) => {
  const dropdownClassNames = [styles.dropdown];
  if (!isDropdownOpened) {
    dropdownClassNames.push(styles.isClosed);
  }

  return (
    <div className={styles.root}>
      <div className={styles.icon}>
        <SearchIcon size={20} color={"#090A0A"} />
      </div>

      <input
        type="text"
        className={styles.input}
        placeholder="Search artists, albums..."
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />

      <div className={dropdownClassNames.join(" ")}>
        <div className={styles.header}>
          <div className={styles.tabs}>{tabs}</div>
        </div>
        {!isEmpty ? (
          <div className={styles.options}>{children}</div>
        ) : (
          <div className={styles.emptyMessage}>
            No results for &quot;{value}&quot;. Change your query
          </div>
        )}

        <div className={styles.footer}>{footer}</div>
      </div>
    </div>
  );
};

SearchInput.Tab = SearchInputTab;
SearchInput.Link = SearchInputLink;
SearchInput.VinylOption = SearchInputVinylOption;

SearchInput.propTypes = {
  tabs: PropTypes.node,
  footer: PropTypes.node,
  children: PropTypes.node,
  isEmpty: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  isDropdownOpened: PropTypes.bool,
};

export { SearchInput };
