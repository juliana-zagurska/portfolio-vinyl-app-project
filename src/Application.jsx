import { useState } from "react";
import { Header } from "./components/Header";
import { useVinylList } from "./hooks/useVinylList";
import { useCollection } from "./hooks/useCollection";
import { useGenres } from "./hooks/useGenres";
import { HeartIcon } from "./components/Icons/HeartIcon";
import { BackIcon } from "./components/Icons/BackIcon";
import { FolderIcon } from "./components/Icons/FolderIcon";
import { Pagination } from "./components/Pagination";

export const Application = () => {
  const [collection1, setCollection] = useState([]);
  const { collection, toggleCollection } = useCollection();
  //const [wishlist, handleWishlistToggle] = useWishList();
  const [wishlist, setWishlist] = useState([]);
  const [page, setPage] = useState(1);

  const vinylList = useVinylList();
  const genres = useGenres();
  const cardsPerPage = 6;
  const pagesCount = Math.min(Math.ceil(vinylList.length / cardsPerPage), 5);

  function handleCollectionToggle(vinylId) {
    setCollection(
      collection1.includes(vinylId)
        ? collection1.filter((id) => id !== vinylId)
        : [...collection1, vinylId]
    );
  }

  function handleWishlistToggle(vinylId) {
    setWishlist(
      wishlist.includes(vinylId)
        ? wishlist.filter((id) => id !== vinylId)
        : [...wishlist, vinylId]
    );
  }

  const renderVinylCard = (vinylCard) => {
    const vinylCardGenre = genres.find(
      (genre) => genre.id === vinylCard.genreId
    );

    const inCollection = collection.includes(vinylCard.id);
    const inFavorites = wishlist.includes(vinylCard.id);
    return (
      <div className="item" key={vinylCard.id}>
        <div className="vinyl-card">
          <div className="vinyl-card__cover">
            <button
              className="fas fa-heart"
              onClick={() => handleWishlistToggle(vinylCard.id)}
            >
              <HeartIcon isActive={inFavorites} color={"#fff"}></HeartIcon>
            </button>
            <img
              src={vinylCard.image.x1}
              alt={vinylCard.name}
              className="retina-image"
            />
          </div>
          <div className="vinyl-card__content">
            <div className="item-header">
              <h1 className="vinyl-card__title">{vinylCard.name}</h1>
              <h2 className="vinyl-card__artist">{vinylCard.artist}</h2>
              <p>
                Genre: <span>{vinylCardGenre.name}</span>
              </p>
            </div>
            <div className="vinyl-card__release">
              <p>
                Year: <span>{vinylCard.year}</span>
              </p>
              <p>
                Style:
                {vinylCard.styles.map((style) => (
                  <span key={style}>{style}</span>
                ))}
              </p>
              <p>
                Country: <span>{vinylCard.country}</span>
              </p>
            </div>
          </div>
          <div className="vinyl-card__action">
            <button
              className={
                inCollection
                  ? "button--active add-button"
                  : "add-button--default add-button"
              }
              onClick={() => handleCollectionToggle(vinylCard.id)}
            >
              <span className="button__label">
                {inCollection ? "Added" : "Add"}
              </span>
              <span className="button__icon">
                {inCollection ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 -960 960 960"
                  >
                    <path d="M378-258q-6 0-11-2t-10-7L176-448q-9-9-9-22t9-22q9-9 21-9t21 9l160 160 363-363q9-9 21.5-9t21.5 9q9 9 9 21.5t-9 21.5L399-267q-5 5-10 7t-11 2Z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 -960 960 960"
                  >
                    <path d="M479.825-200Q467-200 458.5-208.625T450-230v-220H230q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T230-510h220v-220q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510-730v220h220q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T730-450H510v220q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625Z" />
                  </svg>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="wrapper">
        <Header
          collectionSize={collection.length}
          wishlistSize={wishlist.length}
          vinylList={vinylList}
        />
        <div className="main">
          <div className="item-list" id="item-list">
            {vinylList
              .slice((page - 1) * cardsPerPage, page * cardsPerPage)
              .map(renderVinylCard)}
          </div>
          <Pagination
            className="footer"
            pagesCount={pagesCount}
            currentPage={page}
            onPageChange={setPage}
          />
        </div>
      </div>
    </>
  );
};
