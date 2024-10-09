import FilterGroup from "components/common/FilterGroup";

import * as S from "./styles";

const SortGroup = ({ filters, count }) => {
  return (
    <S.ResultFilter>
      <S.ResultTitleWrapper>
        <S.ResultTitle>Result</S.ResultTitle>
        <S.ResultSubTitle>Showing results 1-5 of {count}.</S.ResultSubTitle>
      </S.ResultTitleWrapper>
      {/* Sort */}
      <FilterGroup filters={filters} />
    </S.ResultFilter>
  );
};

export default SortGroup;
