import { useCallback, useState } from "react";
import { getSearchData } from "services";
import { filterData, paginateData, sortData } from "./utils";

const useSearchData = (filters, sortPagination) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [data, setData] = useState(getSearchData());
  const [count, setCount] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const onSearch = useCallback(() => {
    const { currentPage, perPage, sortOrder } = sortPagination;

    // Fetch and filter the data
    let filteredData = filterData(getSearchData(), filters, searchKeyword);

    // Sort the filtered data
    filteredData = sortData(filteredData, sortOrder);

    // Paginate the sorted data
    const paginatedData = paginateData(filteredData, currentPage, perPage);

    // Update count and data
    setCount(filteredData.length); // Total count before pagination
    setTotalPages(Math.ceil(filteredData.length / perPage)); // Calculate total pages
    setData(paginatedData); // Paginated data for the current page
  }, [filters, searchKeyword, sortPagination]);

  return {
    data,
    count,
    onSearch,
    totalPages,
    searchKeyword,
    setSearchKeyword,
  };
};

export default useSearchData;
