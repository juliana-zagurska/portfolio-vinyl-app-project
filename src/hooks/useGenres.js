import { useState } from "react";

export const useGenres = () => {
  const [genres] = useState([
    {
      id: 1,
      title: "Jazz",
      color: "#ffc3f3",
      textTheme: "dark",
    },
    {
      id: 2,
      title: "Country",
      color: "#ffa161",
      textTheme: "light",
    },
    {
      id: 3,
      title: "Alternative",
      color: "#ffa161",
      textTheme: "light",
    },
    {
      id: 4,
      title: "Pop",
      color: "#ffa161",
      textTheme: "light",
    },
    {
      id: 5,
      title: "Rock",
      color: "#ffa161",
      textTheme: "light",
    },
  ]);

  return genres;
};
