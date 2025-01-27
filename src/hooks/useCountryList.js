import { useState } from "react";

export const useCountryList = () => {
  const [countryList] = useState([
    {
      id: "uk",
      title: "UK",
    },
    {
      id: "europe",
      title: "Europe",
    },
    {
      id: "us",
      title: "US",
    },
    {
      id: "worldwide",
      title: "Worldwide",
    },
    {
      id: "usa",
      title: "USA",
    },
    {
      id: "canada",
      title: "Canada",
    },
    {
      id: "netherlands",
      title: "Netherlands",
    },
    {
      id: "france",
      title: "France",
    },
  ]);

  return countryList;
};
