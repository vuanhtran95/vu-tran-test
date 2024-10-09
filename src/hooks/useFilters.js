const { FILTER_TYPE } = require("components/common/FilterGroup/constants");
const { FILTER_OPTIONS } = require("components/features/SearchEngine/utils");
const { useMemo, useState, useCallback } = require("react");

const useFilters = () => {
  const { categoryOptions, companyOptions, decisionOptions } = FILTER_OPTIONS();

  const [category, setCategory] = useState("");
  const [decision, setDecision] = useState("");
  const [company, setCompany] = useState("");
  const [date, setDate] = useState("");

  const onClearFilters = useCallback(() => {
    setCategory("");
    setDecision("");
    setCompany("");
    setDate("");
  }, []);

  const filters = useMemo(() => {
    return [
      {
        placeholder: "Category",
        options: categoryOptions,
        onChange: setCategory,
        value: category,
        type: FILTER_TYPE.DROPDOWN,
        isMulti: true,
      },
      {
        placeholder: "Decision",
        options: decisionOptions,
        onChange: setDecision,
        value: decision,
        type: FILTER_TYPE.DROPDOWN,
        isMulti: true,
      },
      {
        placeholder: "Company",
        options: companyOptions,
        onChange: setCompany,
        value: company,
        type: FILTER_TYPE.DROPDOWN,
        isMulti: true,
      },
      {
        placeholder: "Date",
        onChange: setDate,
        value: date,
        type: FILTER_TYPE.DATEPICKER,
      },
    ];
  }, [category, categoryOptions, company, companyOptions, date, decision, decisionOptions]);

  const categoryKeys = useMemo(() => (category ? category.map(e => e.value) : []), [category]);
  const decisionKeys = useMemo(() => (decision ? decision.map(e => e.value) : []), [decision]);
  const companyKeys = useMemo(() => (company ? company.map(e => e.value) : []), [company]);

  return {
    filters,
    onClearFilters,
    filterValues: { category: categoryKeys, decision: decisionKeys, date, company: companyKeys },
  };
};

export default useFilters;
