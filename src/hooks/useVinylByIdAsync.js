import useSWR from "swr";
import { useGenreListAsync } from "./useGenreListAsync.js";
import { useCountryListAsync } from "./useCountryListAsync.js";

function mapVinyl(item, genreList, countryList) {
  return {
    id: item.id,
    title: item.title,
    artist: item.artist,
    year: item.year,
    country: countryList.find((country) => country.id === item.country),
    genre: genreList.find((genre) => genre.id === item.genre),
    styles: item.styles,
    image: item.thumb_image,
    releaseDate: new Date(item.release_date),
    countries: countryList.filter((country) =>
      item.all_countries.includes(country.id)
    ),
    genres: genreList.filter((genre) => item.all_genres.includes(genre.id)),
    tracklist: item.tracklist,
  };
}

export const useVinylByIdAsync = (id) => {
  const { data: genreList, isLoading: genreListLoading } = useGenreListAsync();
  const { data: countryList, isLoading: countryListLoading } =
    useCountryListAsync();

  const vinylQuery = useSWR(id ? ["/api/releases", id] : null, () =>
    fetch(`/api/releases/${id}`)
      .then((response) => response.json())
      .then((data) => data.release)
  );

  return {
    ...vinylQuery,
    data:
      vinylQuery.data && !countryListLoading && !genreListLoading
        ? mapVinyl(vinylQuery.data, genreList, countryList)
        : null,
  };
};
