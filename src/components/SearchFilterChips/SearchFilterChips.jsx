import PropTypes from "prop-types";
import { useDecadeList } from "../../hooks/useDecadeList";
import styles from "./SearchFilterChips.module.css";
import { SearchFilterChip } from "./SearchFilterChip.jsx";
import { useCountryListAsync } from "../../hooks/useCountryListAsync.js";
import { Loader } from "../Loader/index.js";
import { useGenreListAsync } from "../../hooks/useGenreListAsync.js";

export const SearchFilterChips = ({ filters, onFiltersChange }) => {
  const decadeList = useDecadeList();
  const countryListQuery = useCountryListAsync();
  const genreListQuery = useGenreListAsync();

  if (countryListQuery.isLoading || genreListQuery.isLoading) {
    return <Loader />;
  }

  const country = (countryListQuery.data || []).find(
    (item) => item.id === filters.country
  );
  const decade = decadeList.find((item) => item.from === filters.decade);

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
      {Boolean(filters.genres?.length) && (
        <>
          {filters.genres.map((genreId) => {
            const genre = (genreListQuery.data || []).find(
              (item) => item.id === genreId
            );

            if (!genre) {
              return null;
            }

            return (
              <SearchFilterChip
                key={genre.id}
                label={genre.title}
                onRemove={() => handleArrayRemove("genres", genreId)}
              />
            );
          })}
        </>
      )}

      {decade && (
        <SearchFilterChip
          key={decade.from}
          label={decade.title}
          onRemove={() => handleRemove("decade")}
        />
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
    genres: PropTypes.arrayOf(PropTypes.number),
    decade: PropTypes.number,
    country: PropTypes.string,
  }),
  onFiltersChange: PropTypes.func,
};
