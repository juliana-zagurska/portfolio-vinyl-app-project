import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";

import styles from "./SearchForm.module.css";
import { formSchema } from "./formSchema.js";
import { useCountryList } from "../../hooks/useCountryList.js";
import { useDecadeList } from "../../hooks/useDecadeList.js";
import { useGenres } from "../../hooks/useGenres.js";
import { emptyFilters } from "../../utils/filters.js";
import { Button } from "../Button/index.js";
import { MultiSelect } from "../Form/MultiSelect";
import { TextInput } from "../Form/TextInput";
import { Select } from "../Form/Select/index.js";

export const SearchForm = ({
  onSubmit,
  onError,
  defaultValues = emptyFilters,
}) => {
  const genreList = useGenres();
  const decadeList = useDecadeList();
  const countryList = useCountryList();

  const {
    handleSubmit,
    register,
    control,
    getValues,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues,
    resolver: yupResolver(formSchema),
  });
  watch();

  const isFiltersEmpty = Object.values(getValues()).every((value) =>
    Array.isArray(value) ? !value?.length : !value
  );

  const inputClass = styles.input;
  const rootClass = styles.root;
  const twoColumnsClass = styles.twoColumns;

  return (
    <form className={rootClass} onSubmit={handleSubmit(onSubmit, onError)}>
      <TextInput
        className={inputClass}
        placeholder="Artist"
        {...register("artist")}
        error={errors.artist?.message}
      />

      <div className={twoColumnsClass}>
        <Controller
          control={control}
          name="genres"
          render={({ field }) => (
            <MultiSelect
              {...field}
              options={genreList.map((genre) => ({
                value: genre.id,
                label: genre.title,
              }))}
              ref={null}
              error={errors.genres?.message}
              placeholder="Genre"
            />
          )}
        />
        <Controller
          control={control}
          name="decades"
          render={({ field }) => (
            <MultiSelect
              {...field}
              options={decadeList.map((decade) => ({
                value: decade.from,
                label: decade.title,
              }))}
              ref={null}
              error={errors.decade?.message}
              placeholder="Decade"
            />
          )}
        />
        <Controller
          control={control}
          name="country"
          render={({ field }) => (
            <Select
              {...field}
              options={countryList.map((country) => ({
                value: country.id,
                label: country.title,
              }))}
              ref={null}
              error={errors.genres?.message}
              placeholder="Country"
            />
          )}
        />
      </div>

      <Button
        variant="primary"
        type="submit"
        isFullWidth
        disabled={isFiltersEmpty}
        onSubmit={onSubmit}
      >
        Search
      </Button>
      <Button
        variant="secondary"
        type="button"
        disabled={isFiltersEmpty}
        onClick={() => reset()}
      >
        Reset
      </Button>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onError: PropTypes.func,
  defaultValues: PropTypes.shape({
    artist: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.number),
    decade: PropTypes.string,
    country: PropTypes.string,
  }),
};
