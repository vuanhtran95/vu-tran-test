import ButtonText from "components/common/ButtonText";

import * as S from "./styles";

const ClearFilters = ({ onClear }) => {
  return (
    <S.ClearFilterWrapper>
      <ButtonText onClick={onClear} label="Clear Filters" />
    </S.ClearFilterWrapper>
  );
};

export default ClearFilters;
