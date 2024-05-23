import useSWR from "swr";
import { GENRE_COLORS_BY_GENRE_ID } from "../constants/genres.js";

const mapGenre = (genre) => ({
  ...genre,
  ...GENRE_COLORS_BY_GENRE_ID[genre.id],
});

export const useGenreListAsync = () => {
  const result = useSWR("/api/genres", () =>
    fetch("/api/genres")
      .then((response) => response.json())
      .then((data) => data.genres)
  );

  console.log("result", result);
  return {
    ...result,
    data: (result.data || []).map(mapGenre),
  };
};
