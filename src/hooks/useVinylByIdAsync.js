import useSWR from "swr";
import { mapVinylSearchResult } from "../utils/mapVinyl.js";
import { useGenreListAsync } from "./useGenreListAsync.js";
import { useCountryListAsync } from "./useCountryListAsync.js";

export const useVinylByIdAsync = (id) => {
  const { data: genreList, isLoading: genreListLoading } = useGenreListAsync();
  const { data: countryList, isLoading: countryListLoading } =
    useCountryListAsync();

  const vinylQuery = useSWR(
    ["/api/releases", id],
    () =>
      fetch(`/api/releases/${id}`)
        .then((response) => response.json())
        .then((data) => data.release),
    {
      suspense: true,
    }
  );

  return {
    ...vinylQuery,
    data:
      vinylQuery.data && !countryListLoading && !genreListLoading
        ? mapVinylSearchResult(vinylQuery.data, genreList, countryList)
        : null,
  };
};
