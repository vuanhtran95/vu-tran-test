import PropTypes from "prop-types";

import * as S from "./styles";
import { Dropdown } from "components/common";
import { FILTER_TYPE } from "./constants";
import DateSelect from "../DatePicker";

const FilterGroup = ({ filters }) => {
  return (
    <S.FilterGroup>
      {filters.map(filter => {
        const { placeholder, options, onChange, value, isMulti, width, type } = filter;
        switch (type) {
          case FILTER_TYPE.DROPDOWN:
            return (
              <Dropdown
                width={width}
                isMulti={isMulti}
                placeholder={placeholder}
                options={options}
                onChange={onChange}
                value={value}
              />
            );
          case FILTER_TYPE.DATEPICKER:
            return <DateSelect value={value} onChange={onChange} />;
          default:
            return <p>This type of filter has not been developed yet.</p>;
        }
      })}
    </S.FilterGroup>
  );
};

FilterGroup.propTypes = {
  filters: PropTypes.array,
};

export default FilterGroup;
