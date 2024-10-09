import { useCallback, useState } from "react";
import { getSearchData } from "services";

const useSearchData = () => {
  const [data, setData] = useState(getSearchData());
  const [count, setCount] = useState(0);

  const onSearch = useCallback(({ searchKeyword, category, decision, company, date, perPage, sortBy, page }) => {
    // Fetch and filter the data
    let filteredData = getSearchData().filter(item => {
      // Category check: if no category is selected, show all categories
      const categoryMatch = !category || category.length === 0 || category.includes(item.category);

      // Decision check: if no decision is selected, show all decisions
      const decisionMatch = !decision || decision.length === 0 || decision.includes(item.decision);

      // Company check: if no company is selected, show all companies
      const companyMatch = !company || company.length === 0 || company.includes(item.company);

      // Date check (assuming 'date' is in 'YYYY-MM-DD' format)
      const dateMatch = !date || item.date === date;

      // Keyword search: match against title or content
      const keywordMatch =
        !searchKeyword ||
        item.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        item.content.toLowerCase().includes(searchKeyword.toLowerCase());

      return categoryMatch && decisionMatch && companyMatch && dateMatch && keywordMatch;
    });

    // Sorting logic
    if (sortBy) {
      filteredData = filteredData.sort((a, b) => {
        if (sortBy === "date") {
          return new Date(b.date) - new Date(a.date); // Sort by date descending
        }
        // Add more sorting logic as needed
        return 0;
      });
    }

    // Pagination logic
    const startIndex = (page - 1) * perPage;
    setCount(filteredData.length);
    const paginatedData = filteredData.slice(startIndex, startIndex + perPage);

    console.log(paginatedData, "filtered and paginated data");

    setData(paginatedData);
  }, []);

  return {
    data,
    count,
    onSearch,
  };
};

export default useSearchData;
