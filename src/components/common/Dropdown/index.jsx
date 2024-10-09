import PropTypes from "prop-types";
import { StyledDropdown } from "./styles";
import { COLORS } from "shared";

const Dropdown = ({ placeholder, options, value, onChange, width, height, isMulti }) => {
  const customStyles = {
    indicatorSeparator: () => ({
      display: "none",
    }),
    container: provided => ({
      ...provided,
      width,
    }),
    control: provided => ({
      ...provided,
      minHeight: height || "48px",
    }),
    singleValue: provided => ({
      ...provided,
      color: COLORS.GREY_100,
    }),
  };

  return (
    <StyledDropdown
      onChange={onChange}
      placeholder={placeholder}
      options={options}
      value={value}
      styles={customStyles}
      isMulti={isMulti}
    />
  );
};

Dropdown.propTypes = {
  placeholder: PropTypes.string,
  options: PropTypes.array,
  value: PropTypes.string,
  width: PropTypes.number,
  onChange: PropTypes.func,
};

export default Dropdown;
