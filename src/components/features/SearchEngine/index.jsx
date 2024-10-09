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

const SearchEngine = () => {
  const {
    filters,
    onClearFilters,
    filterValues: { company, category, decision, date },
  } = useFilters();

  const {
    sortFilters,
    sortFilterValues: { perPage, currentPage, sortOrder },
  } = useSortPagination();

  const { data, onSearch, count, searchKeyword, setSearchKeyword } = useSearchData(
    {
      category,
      decision,
      company,
      date,
    },
    { currentPage, perPage, sortOrder }
  );

  useEffect(() => {
    onSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [company, category, decision, date, sortOrder, currentPage, perPage]);

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
      <SortGroup filters={sortFilters} count={count} />

      {/* Displayed data container */}
      <DataList data={data} />
    </S.SearchEngine>
  );
};

export default SearchEngine;
