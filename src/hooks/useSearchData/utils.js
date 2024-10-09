import { SORT_ORDER } from "components/features/SearchEngine/constants";
import { areDatesEqual } from "shared/utils";

// Helper function to filter data
export const filterData = (data, filters, searchKeyword) => {
  const { category, decision, company, date } = filters;

  return data.filter(item => {
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
};

// Helper function to sort data
export const sortData = (data, sortOrder) => {
  if (!sortOrder) return data;

  return data.sort((a, b) => {
    switch (sortOrder) {
      case SORT_ORDER.TITLE_ASC:
        return a.title.toLowerCase().localeCompare(b.title.toLowerCase()); // Sort by title ascending
      case SORT_ORDER.TITLE_DESC:
        return b.title.toLowerCase().localeCompare(a.title.toLowerCase()); // Sort by title descending
      case SORT_ORDER.DATE_ASC:
        return new Date(a.date) - new Date(b.date); // Sort by date ascending (oldest to newest)
      case SORT_ORDER.DATE_DESC:
        return new Date(b.date) - new Date(a.date); // Sort by date descending (newest to oldest)
      default:
        return 0; // If no sorting order is specified, return unchanged
    }
  });
};

// Helper function to paginate data
export const paginateData = (data, currentPage, perPage) => {
  const startIndex = (currentPage - 1) * perPage;
  return data.slice(startIndex, startIndex + perPage);
};
