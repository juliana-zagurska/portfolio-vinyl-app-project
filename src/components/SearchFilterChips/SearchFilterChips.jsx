import PropTypes from "prop-types";
import { useCountryList } from "../../hooks/useCountryList";
import { useDecadeList } from "../../hooks/useDecadeList";
import styles from "./SearchFilterChips.module.css";
import { SearchFilterChip } from "./SearchFilterChip.jsx";

export const SearchFilterChips = ({ filters, onFiltersChange }) => {
  const decadeList = useDecadeList();
  const countryList = useCountryList();

  const country = countryList.find((item) => item.id === filters.country);

  function handleRemove(name) {
    onFiltersChange({ ...filters, [name]: "" });
  }

  function handleArrayRemove(name, value) {
    onFiltersChange({
      ...filters,
      [name]: filters[name].filter((item) => item !== value),
    });
  }

  return (
    <div className={styles.root}>
      {filters.artist && (
        <SearchFilterChip
          label={filters.artist}
          onRemove={() => handleRemove("artist")}
        />
      )}

      {Boolean(filters.decades?.length) && (
        <>
          {filters.decades.map((from) => {
            const decade = decadeList.find((item) => item.from === from);

            if (!decade) {
              return null;
            }

            return (
              <SearchFilterChip
                key={decade.from}
                label={decade.title}
                onRemove={() => handleArrayRemove("decades", from)}
              />
            );
          })}
        </>
      )}

      {country && (
        <SearchFilterChip
          label={country.title}
          onRemove={() => handleRemove("country")}
        />
      )}
    </div>
  );
};

SearchFilterChips.propTypes = {
  filters: PropTypes.shape({
    artist: PropTypes.string,
    decades: PropTypes.arrayOf(PropTypes.number),
    country: PropTypes.string,
  }),
  onFiltersChange: PropTypes.func,
};
