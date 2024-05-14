import { useVinylList } from "./useVinylList.js";
import { useDecadeList } from "./useDecadeList.js";

export const useFilteredVinylList = (filters) => {
  const vinylList = useVinylList();
  const decades = useDecadeList();

  const filterVinyl = (vinyl) => {
    if (filters.country && vinyl.country !== filters.country) {
      return false;
    }

    if (filters.genres?.length && !filters.genres.includes(vinyl.genreId)) {
      return false;
    }

    if (filters.decades?.length) {
      if (
        filters.decades.some((from) => {
          const decade = decades.find((decade) => decade.from === from);

          return !decade || vinyl.year < decade.from || vinyl.year > decade.to;
        })
      ) {
        return false;
      }
    }

    if (
      filters.artist &&
      !vinyl.artist.toLowerCase().includes(filters.artist.toLowerCase())
    ) {
      return false;
    }

    if (
      filters.title &&
      !vinyl.title.toLowerCase().includes(filters.title.toLowerCase())
    ) {
      return false;
    }

    return true;
  };

  return vinylList.filter(filterVinyl);
};
