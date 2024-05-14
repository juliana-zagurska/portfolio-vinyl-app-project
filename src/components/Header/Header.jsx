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
import { useState } from "react";
import { FolderIcon } from "../Icons/FolderIcon.jsx";
import { SearchInput } from "../SearchInput";
import { HeaderLayout } from "./HeaderLayout.jsx";
import { IconButton } from "../IconButton";
import { HeartIcon } from "../Icons/HeartIcon.jsx";
import { SearchIcon } from "../Icons/SearchIcon.jsx";
import { ArrowLeftIcon } from "../Icons/ArrowLeftIcon.jsx";

export const Header = ({ collectionSize, wishlistSize, vinylList, type }) => {
  const [isSearchDropdownOpened, setIsSearchDropdownOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [tabState, setTabState] = useState("all");

  const filteredSearchResults = vinylList
    .filter((vinyl) => {
      const search = searchValue.toLowerCase();
      const matchedTitle = vinyl.title.toLowerCase().startsWith(search);
      const matchedArtist = vinyl.artist.toLowerCase().startsWith(search);

      switch (tabState) {
        case "album": {
          return matchedTitle;
        }
        case "artist": {
          return matchedArtist;
        }
        case "all": {
          return matchedTitle || matchedArtist;
        }
      }
    })
    .slice(0, 5);

  function handleSearchInputBlur() {
    setSearchValue("");
    setIsSearchDropdownOpened(false);
    setTabState("all");
  }

  function handleSearchInputChange(event) {
    setSearchValue(event.target.value);
  }

  const tabs = [
    {
      value: "all",
      label: "All",
    },
    {
      value: "artist",
      label: "By artist",
    },
    {
      value: "album",
      label: "By album",
    },
  ];

  function handleSearchInputFocus() {
    setIsSearchDropdownOpened(true);
  }

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
      search={
        type === "search" && (
          <SearchInput
            value={searchValue}
            onChange={handleSearchInputChange}
            onFocus={handleSearchInputFocus}
            onBlur={handleSearchInputBlur}
            isDropdownOpened={isSearchDropdownOpened}
            tabs={tabs.map((tab) => (
              <SearchInput.Tab
                isActive={tab.value === tabState}
                onMouseDown={(event) => {
                  event.preventDefault();
                }}
                onClick={(event) => {
                  event.preventDefault();
                  setTabState(tab.value);
                }}
                label={tab.label}
                key={tab.value}
              />
            ))}
            footer={
              <SearchInput.Link
                label={"Advanced search"}
                icon={<SearchIcon />}
              />
            }
            isEmpty={filteredSearchResults.length <= 0}
          >
            {filteredSearchResults.map((item) => (
              <SearchInput.VinylOption vinyl={item} key={item.id} />
            ))}
          </SearchInput>
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
  vinylList: PropTypes.array.isRequired,
  type: PropTypes.oneOf(["search", "backButton"]).isRequired,
};
