export function mapVinylSearchResult(item, genreList, countryList) {
  return {
    id: item.id,
    title: item.title,
    artist: item.artist,
    year: item.year,
    country: countryList.find((country) => country.id === item.country),
    genre: genreList.find((genre) => genre.id === item.genre),
    styles: item.styles,
    image: item.thumb_image,
  };
}
