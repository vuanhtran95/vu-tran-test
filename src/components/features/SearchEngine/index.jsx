import { useEffect } from "react";
import * as S from "./styles";

import useSearchData from "hooks/useSearchData";
import FilterGroup from "../../common/FilterGroup";
import SearchPageTitle from "./components/SearchPageTitle";
import SearchBox from "./components/SearchBox";
import ClearFilters from "./components/ClearFilters";
import SortGroup from "./components/SortGroup";
import useFilters from "hooks/useFilters";
import useSortPagination from "hooks/useSortPagination";
import DataList from "./components/DataList";
import Pagination from "components/common/Pagination";

const SearchEngine = () => {
  const {
    filters,
    onClearFilters,
    filterValues: { company, category, decision, date },
  } = useFilters();

  const {
    sortFilters,
    sortFilterValues: { perPage, currentPage, sortOrder },
    setCurrentPage,
  } = useSortPagination();

  const { data, onSearch, count, searchKeyword, setSearchKeyword, totalPages } = useSearchData(
    {
      category,
      decision,
      company,
      date,
    },
    { currentPage, perPage, sortOrder }
  );

  useEffect(() => {
    setCurrentPage(1);
    onSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [company, category, decision, date, sortOrder, perPage]);

  useEffect(() => {
    onSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
    <S.SearchEngine>
      <SearchPageTitle />

      {/* Search Box */}
      <SearchBox searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword} onSearch={() => onSearch()} />

      {/* Filter: Category, Decision, Company, Date */}
      <FilterGroup filters={filters} />

      {/* Clear search */}
      <ClearFilters onClear={onClearFilters} />

      {/* Result section */}
      <SortGroup filters={sortFilters} totalItems={count} currentPage={currentPage} perPage={perPage} />

      {/* Displayed data container */}
      <DataList data={data} />

      {/* Pagination */}
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
    </S.SearchEngine>
  );
};

export default SearchEngine;
