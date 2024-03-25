import { useState } from "react";

export const useGenres = () => {
  const [genres] = useState([
    {
      id: 1,
      name: "Jazz",
      color: "#ffc3f3",
      textTheme: "dark",
    },
    {
      id: 2,
      name: "Country",
      color: "#ffa161",
      textTheme: "light",
    },
    {
      id: 3,
      name: "Alternative",
      color: "#ffa161",
      textTheme: "light",
    },
    {
      id: 4,
      name: "Pop",
      color: "#ffa161",
      textTheme: "light",
    },
    {
      id: 5,
      name: "Rock",
      color: "#ffa161",
      textTheme: "light",
    },
  ]);

  return genres;
};
