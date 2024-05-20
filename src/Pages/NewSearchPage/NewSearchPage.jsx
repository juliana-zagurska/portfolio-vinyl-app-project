import { SearchForm } from "../../components/SearchForm";
import { useNavigate } from "react-router-dom";
import { getSearchParamsFromFilters } from "../../utils/filters.js";

export const NewSearchPage = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (filters) => {
    const params = getSearchParamsFromFilters(filters);

    navigate({
      pathname: "/search/results",
      search: params.toString(),
    });
  };

  return (
    <>
      <div className="content">
        <div className={"container"}>
          <SearchForm onSubmit={handleFormSubmit} />
        </div>
      </div>
    </>
  );
};

NewSearchPage.propTypes = {};
