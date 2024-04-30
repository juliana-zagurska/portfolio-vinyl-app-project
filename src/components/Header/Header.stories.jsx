import { Header } from "./Header.jsx";

export default {
  title: "Components/Header",
  component: Header,
};

const vinylList = [
  {
    id: 1,
    image: {
      normal: "/content/albums/cover-2.jpeg",
      double: "",
    },
    title: "Discovery",
    artist: "Daft Punk",
    year: "2001",
    country: "Europe",
    genreId: 1,
    styles: ["house", "disco", "french_house"],
  },
  {
    id: 2,
    image: {
      normal: "/content/albums/cover-4.jpg",
      double: "",
    },
    title: "Kind Of Blue",
    artist: "Miles Davis",
    year: "1959",
    country: "US",
    genreId: 2,
    styles: ["modal"],
  },
];

export const Default = {
  args: {
    vinylList,
  },
};
