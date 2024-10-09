import ButtonText from "components/common/ButtonText";
import PropTypes from "prop-types";

import * as S from "./styles";

const ClearFilters = ({ onClear }) => {
  return (
    <S.ClearFilterWrapper>
      <ButtonText onClick={onClear} label="Clear Filters" />
    </S.ClearFilterWrapper>
  );
};

ClearFilters.propTypes = {
  onClear: PropTypes.func,
};

export default ClearFilters;
