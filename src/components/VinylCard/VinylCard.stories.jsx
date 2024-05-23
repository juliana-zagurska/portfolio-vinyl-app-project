import { VinylCard } from "./VinylCard.jsx";

export default {
  title: "Components/VinylCard",
  component: VinylCard,
  tags: ["autodocs"],
};

const vinyl = {
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
};

export const Default = {
  args: {
    vinyl,
    inCollection: false,
    inWishlist: false,
  },
};
