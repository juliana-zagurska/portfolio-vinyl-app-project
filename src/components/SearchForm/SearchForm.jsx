import PropTypes from "prop-types";
import styles from "./SearchForm.module.css";
import { useCountryList } from "../../hooks/useCountryList.js";
import { useDecadeList } from "../../hooks/useDecadeList.js";
import { useGenres } from "../../hooks/useGenres.js";
import { Button } from "../Button/index.js";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const SearchForm = ({ onSubmit }) => {
  const genres = useGenres();
  const decadeList = useDecadeList();
  const countryList = useCountryList();

  const [filters, setFilters] = useState({
    artist: "",
    genres: [],
    decades: [],
    country: "",
  });

  const handleFilterChange = (name, value) => {
    setFilters((filters) => ({
      ...filters,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(filters);
  };

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
        <select
          name="genre"
          onChange={(event) =>
            handleFilterChange("genres", [event.target.value])
          }
        >
          <option value="option-0">Genre</option>
          {genres.map((genre) => (
            <option key={genre.title} value={genre.id}>
              {genre.title}
            </option>
          ))}
        </select>
        <select
          name="decade"
          className={`${styles.select} ${styles.decade}`}
          onChange={(event) =>
            handleFilterChange("decades", [event.target.value])
          }
        >
          <option value="option-0">Decade</option>
          {decadeList.map((decade) => (
            <option key={decade.title} value={decade.from}>
              {decade.from}
            </option>
          ))}
        </select>
        <select
          name="country"
          className={`${styles.select} ${styles.country}`}
          onChange={(event) =>
            handleFilterChange("country", event.target.value)
          }
          value={filters.country}
        >
          <option value="option-0">Country</option>
          {countryList.map((country) => (
            <option key={country.title} value={country.id}>
              {country.title}
            </option>
          ))}
        </select>
      </div>

      <Button type="submit" isFullWidth disabled={isFiltersEmpty}>
        Search
      </Button>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
