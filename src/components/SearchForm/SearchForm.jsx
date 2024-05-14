import PropTypes from "prop-types";
import styles from "./SearchForm.module.css";
import { useCountryList } from "../../hooks/useCountryList.js";
import { useDecadeList } from "../../hooks/useDecadeList.js";
import { useGenres } from "../../hooks/useGenres.js";
import { Select, MultiSelect } from "../Select";
import { Button } from "../Button/index.js";
import { useSearchParams } from "react-router-dom";
import {
  getFiltersFromParams,
  getSearchParamsFromFilters,
} from "../../utils/filters.js";

export const SearchForm = ({ onSubmit }) => {
  const genreList = useGenres();
  const decadeList = useDecadeList();
  const countryList = useCountryList();

  const [params, setParams] = useSearchParams({
    artist: "",
    genres: [],
    decades: [],
    country: "",
  });

  const filters = getFiltersFromParams(params);

  function handleFilterChange(name, value) {
    const nextParams = getSearchParamsFromFilters({
      ...filters,
      [name]: value,
    });

    setParams(nextParams);
  }

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit(filters);
  }

  const isFiltersEmpty = Object.values(filters).every((value) =>
    Array.isArray(value) ? !value?.length : !value
  );

  const inputClass = styles.input;
  const rootClass = styles.root;
  const twoColumnsClass = styles.twoColumns;

  return (
    <form className={rootClass} onSubmit={handleSubmit}>
      <input
        className={inputClass}
        type="text"
        name="artist"
        placeholder="Artist"
        value={filters.artist}
        onChange={(event) => handleFilterChange("artist", event.target.value)}
      />

      <div className={twoColumnsClass}>
        <MultiSelect
          onChange={(v) => handleFilterChange("genres", v)}
          options={genreList.map((genre) => ({
            label: genre.title,
            value: genre.id,
          }))}
          value={filters.genres}
          placeholder={"Genre"}
        />

        <MultiSelect
          onChange={(v) => handleFilterChange("decades", v)}
          options={decadeList.map((decade) => ({
            label: decade.title,
            value: decade.from,
          }))}
          value={filters.decades}
          placeholder={"Decade"}
        />
      </div>

      <Select
        onChange={(v) => handleFilterChange("country", v)}
        options={countryList.map((country) => ({
          label: country.title,
          value: country.id,
        }))}
        value={filters.country}
        placeholder={"Country"}
      />

      <Button type="submit" isFullWidth disabled={isFiltersEmpty}>
        Search
      </Button>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
