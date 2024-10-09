import PropTypes from "prop-types";
import * as S from "./styles";
import { Dropdown } from "components/common";

const FilterGroup = ({ filters }) => {
  return (
    <S.FilterGroup>
      {filters.map(filter => {
        const { placeholder, options, onChange, value } = filter;
        return <Dropdown isMulti placeholder={placeholder} options={options} onChange={onChange} value={value} />;
      })}
    </S.FilterGroup>
  );
};

FilterGroup.propTypes = {
  filters: PropTypes.array,
};

export default FilterGroup;
