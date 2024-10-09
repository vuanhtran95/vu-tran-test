import { FILTER_TYPE } from "components/common/FilterGroup/constants";
import { perPageOptions, sortOrderOptions } from "components/features/SearchEngine/constants";
import { useMemo, useState } from "react";

const useSortPagination = () => {
  const [currentPage] = useState(1);
  const [perPage, setPerPage] = useState(perPageOptions[0]);
  const [sortOrder, setSortOrder] = useState();

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
        options: sortOrderOptions,
        onChange: setSortOrder,
        value: sortOrder,
        type: FILTER_TYPE.DROPDOWN,
        width: 200,
      },
    ];
  }, [perPage, sortOrder]);

  return {
    sortFilters,
    sortFilterValues: { currentPage, perPage: perPage.value, sortOrder: sortOrder?.value || undefined },
  };
};

export default useSortPagination;
