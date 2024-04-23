import { useState } from "react";
import { useVinylList } from "./hooks/useVinylList";
import { useGenres } from "./hooks/useGenres";
import { HeartIcon } from "./components/Icons/HeartIcon";
import { FolderIcon } from "./components/Icons/FolderIcon";
import { Pagination } from "./components/Pagination";

export const Application = () => {
  const [collection, setCollection] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [page, setPage] = useState(1);

  const vinylList = useVinylList();
  const genres = useGenres();
  const cardsPerPage = 6;
  const pagesCount = Math.min(Math.ceil(vinylList.length / cardsPerPage), 5);

  function handleCollectionToggle(vinylId) {
    setCollection(
      collection.includes(vinylId)
        ? collection.filter((id) => id !== vinylId)
        : [...collection, vinylId]
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
        <div className="header">
          <div className="navigation">
            <button className="back-button" id="go-back">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              BACK
            </button>
          </div>
          <div className="icons">
            <div className="icon-with-counter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 9.32647C21 14.4974 12 20 12 20C12 20 3 14.4974 3 9.32647C3 2.30564 12 2.40044 12 8.57947C12 2.40044 21 2.49288 21 9.32647Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="counter">{wishlist.length}</span>
            </div>

            <div className="icon-with-counter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 18.2222V9.33333C21 8.86184 20.8104 8.40965 20.4728 8.07625C20.1352 7.74286 19.6774 7.55556 19.2 7.55556H13.1124C12.7781 7.55554 12.4503 7.46356 12.1659 7.28992C11.8816 7.11628 11.6518 6.86783 11.5023 6.57244L10.6977 4.98311C10.5482 4.68759 10.3182 4.43906 10.0337 4.2654C9.74912 4.09175 9.4212 3.99985 9.0867 4H4.8C4.32261 4 3.86477 4.1873 3.52721 4.5207C3.18964 4.8541 3 5.30628 3 5.77778V18.2222C3 18.6937 3.18964 19.1459 3.52721 19.4793C3.86477 19.8127 4.32261 20 4.8 20H19.2C19.6774 20 20.1352 19.8127 20.4728 19.4793C20.8104 19.1459 21 18.6937 21 18.2222Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="counter">{collection.length}</span>
            </div>
          </div>
        </div>
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
