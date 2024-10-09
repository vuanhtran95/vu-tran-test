import PropTypes from "prop-types";

import "react-datepicker/dist/react-datepicker.css";

import * as S from "./styles";
import { forwardRef } from "react";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

const CustomInput = forwardRef(({ value, onClick, placeholder }, ref) => (
    <S.StyledCalendarInput onClick={onClick} ref={ref} type="text" value={value} readOnly placeholder="Date" />
  
));

const DateSelect = ({ value, onChange, placeholder }) => {
  return (
    <S.InputContainer>
      <S.StyledDatePicker
        customInput={<CustomInput />}
        showIcon
        selected={value}
        onChange={onChange}
        placeholderText={placeholder}
        icon={<S.SearchIcon icon={faCalendar} />}
        isClearable={!!value}
      />
    </S.InputContainer>
  );
};

DateSelect.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default DateSelect;
