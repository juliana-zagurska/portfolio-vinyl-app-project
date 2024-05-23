import { VinylList } from "../../components/VinylList/index.js";
import { VinylCard } from "../../components/VinylCard/index.js";
import { Pagination } from "../../components/Pagination/index.js";
import { SearchFilterChips } from "../../components/SearchFilterChips";
import styles from "./SearchResultsPage.module.css";
import { Navigate, useOutletContext, useSearchParams } from "react-router-dom";
import {
  emptyFilters,
  getFiltersFromParams,
  getSearchParamsFromFilters,
} from "../../utils/filters.js";
import { useFilteredVinylListAsync } from "../../hooks/useFilteredVinylListAsync.js";
import { Loader } from "../../components/Loader/index.js";

import { useVinylDialog } from "../../hooks/useVinylDialog.js";
import { VinylDialog } from "../../components/VinylDialog/index.js";

const CARDS_PER_PAGE = 6;

export const SearchResultsPage = () => {
  const [params, setParams] = useSearchParams(emptyFilters);

  const { openedVinylId, handleOpenVinylDialog, handleCloseVinylDialog } =
    useVinylDialog();

  const { collection, wishlist, toggleCollection, toggleWishlist } =
    useOutletContext();

  const filters = getFiltersFromParams(params);

  const page = Number(params.get("page")) || 1;

  const vinylListQuery = useFilteredVinylListAsync(filters, {
    limit: CARDS_PER_PAGE,
    offset: (page - 1) * CARDS_PER_PAGE,
  });

  const setFilters = (filters) =>
    setParams(getSearchParamsFromFilters(filters));

  const setPage = (page) => {
    const nextParams = getSearchParamsFromFilters(filters);

    if (page > 1) {
      nextParams.set("page", page);
    }

    setParams(nextParams);
  };

  const pagesCount = Math.ceil(vinylListQuery.total / CARDS_PER_PAGE);

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

      {vinylListQuery.isLoading ? (
        <Loader />
      ) : (
        <VinylList isOnlyCards>
          {vinylListQuery.results.map((vinyl) => (
            <VinylCard
              key={vinyl.id}
              inCollection={collection.includes(vinyl.id)}
              onCollectionToggle={toggleCollection}
              inWishlist={wishlist.includes(vinyl.id)}
              onWishlistToggle={toggleWishlist}
              vinyl={vinyl}
              onClick={() => handleOpenVinylDialog(vinyl.id)}
            />
          ))}
        </VinylList>
      )}

      <Pagination
        pagesCount={pagesCount}
        currentPage={page}
        onPageChange={setPage}
      />

      <VinylDialog vinylId={openedVinylId} onClose={handleCloseVinylDialog} />
    </div>
  );
};

SearchResultsPage.propTypes = {};
