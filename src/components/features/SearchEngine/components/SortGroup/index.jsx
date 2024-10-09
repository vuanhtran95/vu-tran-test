import FilterGroup from "components/common/FilterGroup";

import * as S from "./styles";
import { useMemo } from "react";

const SortGroup = ({ filters, totalItems, perPage, currentPage }) => {
  const getResultsDisplayText = useMemo(() => {
    const startIndex = totalItems === 0 ? 0 : (currentPage - 1) * perPage + 1;
    const endIndex = Math.min(currentPage * perPage, totalItems);

    return `Showing results ${startIndex}-${endIndex} of ${totalItems}.`;
  }, [currentPage, perPage, totalItems]);

  return (
    <S.ResultFilter>
      <S.ResultTitleWrapper>
        <S.ResultTitle>Results</S.ResultTitle>
        <S.ResultSubTitle>{getResultsDisplayText}</S.ResultSubTitle>
      </S.ResultTitleWrapper>
      {/* Sort */}
      <FilterGroup filters={filters} />
    </S.ResultFilter>
  );
};

export default SortGroup;
