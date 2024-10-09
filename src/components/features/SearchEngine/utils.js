import { getSearchData } from "services";

export const FILTER_OPTIONS = () => {
  const data = getSearchData();

  // Extract unique categories
  const uniqueCategories = [...new Set(data.map(item => item.category))];
  const uniqueCompany = [...new Set(data.map(item => item.company))];
  const uniqueDecision = [...new Set(data.map(item => item.decision))];

  // Convert to options with { value, label } format
  const categoryOptions = uniqueCategories.map(category => ({
    value: category,
    label: category,
  }));

  const companyOptions = uniqueCompany.map(category => ({
    value: category,
    label: category,
  }));

  const decisionOptions = uniqueDecision.map(category => ({
    value: category,
    label: category,
  }));

  return { categoryOptions, companyOptions, decisionOptions };
};
