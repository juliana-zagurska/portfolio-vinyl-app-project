import { useState } from "react";
import { useGenres } from "./useGenres.js";

const countries = [
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
];

export const useVinylList = () => {
  const genres = useGenres();

  const [vinylList] = useState(() =>
    [
      {
        id: 1,
        title: "Nothing's Gonna Hurt You Baby",
        artist: "Cigarettes After Sex",
        image: {
          x1: "./src/assets/image1@1x.jpg",
          x2: "./src/assets/image1@1x.jpg",
        },
        year: 2010,
        country: "USA",
        genreId: 3,
        styles: ["Punk", "Dub", "Funk"],
      },
      {
        id: 2,
        title: "Let It Be",
        artist: "The Beatles",
        image: {
          x1: "./src/assets/image2@1x.jpg",
          x2: "./src/assets/image1@1x.jpg",
        },
        year: 1960,
        country: "UK",
        genreId: 5,
        styles: ["Rock", "Dub", "Funk"],
      },
      {
        id: 3,
        title: "Paint The Town Red",
        artist: "Doja Cat",
        image: {
          x1: "./src/assets/image3@1x.jpg",
          x2: "./src/assets/image3@1x.jpg",
        },
        year: 2023,
        country: "USA",
        genreId: 4,
        styles: ["Punk", "Dub", "Funk"],
      },
      {
        id: 4,
        title: "Who Let The Dogs Out",
        artist: "Baha Men",
        image: {
          x1: "./src/assets/image4@1x.jpg",
          x2: "./src/assets/image4@1x.jpg",
        },
        year: 2000,
        country: "USA",
        genreId: 4,
        styles: ["House", "Ragga", "Hip-Hop"],
      },
      {
        id: 5,
        title: "U Can't touch this",
        artist: "MC Hammer",
        image: {
          x1: "./src/assets/image5@1x.jpg",
          x2: "./src/assets/image5@1x.jpg",
        },
        year: 1990,
        country: "USA",
        genreId: 4,
        styles: ["Rap", "Ragga", "Hip-Hop"],
      },
      {
        id: 6,
        title: "Ra-Ta-Ta",
        artist: "Wencke Myhre",
        image: {
          x1: "./src/assets/image7@1x.jpg",
          x2: "./src/assets/image7@1x.jpg",
        },
        year: 1970,
        country: "Germany",
        genreId: 4,
        styles: ["Electronic", "Ragga", "Hip-Hop"],
      },
      {
        id: 7,
        title: "Let There Be Rock",
        artist: "AC/DC",
        image: {
          x1: "./src/assets/image8@1x.jpg",
          x2: "./src/assets/image8@1x.jpg",
        },
        year: 1990,
        country: "USA",
        genreId: 4,
        styles: ["Electronic", "Rock", "Hip-Hop"],
      },
      {
        id: 8,
        title: "Let There Be Rock",
        artist: "AC/DC",
        image: {
          x1: "./src/assets/image9@1x.jpg",
          x2: "./src/assets/image9@1x.jpg",
        },
        year: 1990,
        country: "USA",
        genreId: 4,
        styles: ["Electronic", "Rock", "Hip-Hop"],
      },
      {
        id: 9,
        title: "Let There Be Rock",
        artist: "AC/DC",
        image: {
          x1: "./src/assets/image10@1x.jpg",
          x2: "./src/assets/image10@1x.jpg",
        },
        year: 1990,
        country: "USA",
        genreId: 4,
        styles: ["Electronic", "Rock", "Hip-Hop"],
      },
      {
        id: 10,
        title: "Let There Be Rock",
        artist: "AC/DC",
        image: {
          x1: "./src/assets/image11@1x.jpg",
          x2: "./src/assets/image11@1x.jpg",
        },
        year: 1990,
        country: "USA",
        genreId: 4,
        styles: ["Electronic", "Rock", "Hip-Hop"],
      },
      {
        id: 11,
        title: "Let There Be Rock",
        artist: "AC/DC",
        image: {
          x1: "./src/assets/image12@1x.jpg",
          x2: "./src/assets/image12@1x.jpg",
        },
        year: 1990,
        country: "USA",
        genreId: 4,
        styles: ["Electronic", "Rock", "Hip-Hop"],
      },
      {
        id: 12,
        title: "Let There Be Rock",
        artist: "AC/DC",
        image: {
          x1: "./src/assets/image13@1x.png",
          x2: "./src/assets/image13@1x.png",
        },
        year: 1990,
        country: "USA",
        genreId: 4,
        styles: ["Electronic", "Rock", "Hip-Hop"],
      },
      {
        id: 13,
        title: "Let There Be Rock",
        artist: "AC/DC",
        image: {
          x1: "./src/assets/image14@1x.jpg",
          x2: "./src/assets/image14@1x.jpg",
        },
        year: 1990,
        country: "USA",
        genreId: 4,
        styles: ["Electronic", "Rock", "Hip-Hop"],
      },
      {
        id: 14,
        title: "Let There Be Rock",
        artist: "AC/DC",
        image: {
          x1: "./src/assets/image15@1x.png",
          x2: "./src/assets/image15@1x.png",
        },
        year: 1990,
        country: "USA",
        genreId: 4,
        styles: ["Electronic", "Rock", "Hip-Hop"],
      },
      {
        id: 15,
        title: "Let There Be Rock",
        artist: "AC/DC",
        image: {
          x1: "./src/assets/image16@1x.png",
          x2: "./src/assets/image16@1x.png",
        },
        year: 1990,
        country: "USA",
        genreId: 4,
        styles: ["Electronic", "Rock", "Hip-Hop"],
      },
      {
        id: 16,
        title: "Let There Be Rock",
        artist: "AC/DC",
        image: {
          x1: "./src/assets/image17@1x.png",
          x2: "./src/assets/image17@1x.png",
        },
        year: 1990,
        country: "USA",
        genreId: 4,
        styles: ["Electronic", "Rock", "Hip-Hop"],
      },
      {
        id: 17,
        title: "Let There Be Rock",
        artist: "AC/DC",
        image: {
          x1: "./src/assets/image18@1x.png",
          x2: "./src/assets/image18@1x.png",
        },
        year: 1990,
        country: "USA",
        genreId: 4,
        styles: ["Electronic", "Rock", "Hip-Hop"],
      },
      {
        id: 18,
        title: "Nothing's Gonna Hurt You Baby",
        artist: "Cigarettes After Sex",
        image: {
          x1: "./src/assets/image19@1x.jpg",
          x2: "./src/assets/image19@1x.jpg",
        },
        year: 2010,
        country: "USA",
        genreId: 3,
        styles: ["Punk", "Dub", "Funk"],
      },
    ].map((vinyl) => {
      const countryObj = countries.find(
        (country) => country.id === vinyl.country
      );
      const genreObj = genres.find((genre) => genre.id === vinyl.genreId);

      return {
        ...vinyl,
        country: countryObj ? countryObj.title : "Unknown Country", // Use a default or a placeholder
        genre: genreObj ? genreObj : { id: null, name: "Unknown Genre" }, // Handle unknown genres similarly
      };
    })
  );

  return vinylList;
};
