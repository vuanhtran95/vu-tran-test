import { SORT_ORDER } from "components/features/SearchEngine/constants";
import { useCallback, useState } from "react";
import { getSearchData } from "services";
import { areDatesEqual } from "shared/utils";

const useSearchData = (filters, sortPagination) => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const [data, setData] = useState(getSearchData());
  const [count, setCount] = useState(0);

  const onSearch = useCallback(() => {
    const { category, decision, company, date } = filters;

    const { currentPage, perPage, sortOrder } = sortPagination;

    // Fetch and filter the data
    let filteredData = getSearchData().filter(item => {
      const categoryMatch = !category || category.length === 0 || category.includes(item.category);

      const decisionMatch = !decision || decision.length === 0 || decision.includes(item.decision);

      const companyMatch = !company || company.length === 0 || company.includes(item.company);

      const dateMatch = !date || areDatesEqual(item.date, date);

      const keywordMatch =
        !searchKeyword ||
        item.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        item.content.toLowerCase().includes(searchKeyword.toLowerCase());

      return categoryMatch && decisionMatch && companyMatch && dateMatch && keywordMatch;
    });

    // Sorting logic by title
    if (sortOrder) {
      filteredData = filteredData.sort((a, b) => {
        if (sortOrder === SORT_ORDER.TITLE_ASC) {
          return a.title.toLowerCase().localeCompare(b.title.toLowerCase()); // Sort by title ascending
        } else if (sortOrder === SORT_ORDER.TITLE_DESC) {
          return b.title.toLowerCase().localeCompare(a.title.toLowerCase()); // Sort by title descending
        }
        return 0; // If no sorting order is specified, return unchanged
      });
    }

    // Pagination logic
    const startIndex = (currentPage - 1) * perPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + perPage);

    // Update count and data
    setCount(filteredData.length); // Total count before pagination
    setData(paginatedData); // Paginated data for current page
  }, [filters, searchKeyword, sortPagination]);

  return {
    data,
    count,
    onSearch,
    searchKeyword,
    setSearchKeyword,
  };
};

export default useSearchData;
