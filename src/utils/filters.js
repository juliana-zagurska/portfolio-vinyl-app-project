export const getFiltersFromParams = (params) => ({
  artist: params.get("artist") || "",
  country: params.get("country") || "",
  genres: params.getAll("genres").map(Number),
  decade: params.get("decade") ? Number(params.get("decade")) : null,
});

export const getSearchParamsFromFilters = (filters) => {
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      if (value.length) {
        value.forEach((item) => params.append(key, item));
      }
    } else {
      if (value) {
        params.set(key, value);
      }
    }
  });

  return params;
};

export const emptyFilters = {
  artist: "",
  genres: [],
  decade: "",
  country: "",
};
