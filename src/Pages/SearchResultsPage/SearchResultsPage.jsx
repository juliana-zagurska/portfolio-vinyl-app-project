import { VinylList } from "../../components/VinylList";
import { VinylCard } from "../../components/VinylCard/index.js";
import { Pagination } from "../../components/Pagination/index.js";
import { useFilteredVinylList } from "../../hooks/useFilteredVinylList.js";
import { SearchFilterChips } from "../../components/SearchFilterChips";
import styles from "./SearchResultsPage.module.css";
import { Navigate, useOutletContext, useSearchParams } from "react-router-dom";
import {
  emptyFilters,
  getFiltersFromParams,
  getSearchParamsFromFilters,
} from "../../utils/filters.js";

const CARDS_PER_PAGE = 8;

export const SearchResultsPage = () => {
  const [params, setParams] = useSearchParams(emptyFilters);

  const { collection, wishlist, toggleCollection, toggleWishlist } =
    useOutletContext();

  const filters = getFiltersFromParams(params);

  const page = Number(params.get("page")) || 1;

  const vinylList = useFilteredVinylList(filters);

  const setFilters = (filters) =>
    setParams(getSearchParamsFromFilters(filters));

  const setPage = (page) => {
    const nextParams = getSearchParamsFromFilters(filters);

    if (page > 1) {
      nextParams.set("page", page);
    }

    setParams(nextParams);
  };

  const pagesCount = Math.min(Math.ceil(vinylList.length / CARDS_PER_PAGE), 5);

  const isFiltersEmpty = Object.values(filters).every((value) =>
    Array.isArray(value) ? !value?.length : !value
  );

  if (isFiltersEmpty) {
    return <Navigate to={"/search"} />;
  }

  return (
    <div className="content">
      <div className={styles.header}>
        <div className={styles.title}>Filters applied:</div>
        <div
          className={styles.resetButton}
          onClick={() => setFilters(emptyFilters)}
          role="button"
          tabIndex={0}
        >
          Reset changes
        </div>
      </div>

      <SearchFilterChips filters={filters} onFiltersChange={setFilters} />

      <VinylList isOnlyCards>
        {vinylList
          .slice((page - 1) * CARDS_PER_PAGE, page * CARDS_PER_PAGE)
          .map((vinyl) => (
            <VinylCard
              key={vinyl.id}
              inCollection={collection.includes(vinyl.id)}
              onCollectionToggle={toggleCollection}
              onWishlistToggle={toggleWishlist}
              vinyl={vinyl}
              inWishlist={wishlist.includes(vinyl.id)}
            />
          ))}
      </VinylList>

      <Pagination
        pagesCount={pagesCount}
        currentPage={page}
        onPageChange={setPage}
      />
    </div>
  );
};

SearchResultsPage.propTypes = {};
