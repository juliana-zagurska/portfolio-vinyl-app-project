import useSWR from "swr";

export const useCountryListAsync = (options) => {
  return useSWR(
    "/api/countries",
    () =>
      fetch("/api/countries")
        .then((response) => response.json())
        .then((data) => data.countries),
    options || {
      suspense: true,
    }
  );
};
