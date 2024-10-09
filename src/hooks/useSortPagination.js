import { FILTER_TYPE } from "components/common/FilterGroup/constants";
import { perPageOptions, sortByOptions } from "components/features/SearchEngine/constants";
import { useMemo, useState } from "react";

const useSortPagination = () => {
  const [currentPage] = useState(1);
  const [perPage, setPerPage] = useState(perPageOptions[0]);
  const [sortBy, setSortBy] = useState(5);

  const sortFilters = useMemo(() => {
    return [
      {
        options: perPageOptions,
        onChange: setPerPage,
        value: perPage,
        type: FILTER_TYPE.DROPDOWN,
        width: 100,
      },
      {
        placeholder: "Sort By",
        options: sortByOptions,
        onChange: setSortBy,
        value: sortBy,
        type: FILTER_TYPE.DROPDOWN,
        width: 200,
      },
    ];
  }, [perPage, sortBy]);

  return { sortFilters, sortFilterValues: { currentPage, perPage: perPage.value, sortBy } };
};

export default useSortPagination;
