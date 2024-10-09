import PropTypes from "prop-types";
import { StyledDropdown } from "./styles";

const Dropdown = ({ placeholder, options, value, onChange, width, isMulti }) => {
  const customStyles = {
    indicatorSeparator: () => ({
      display: "none",
    }),
    container: provided => ({
      ...provided,
      width,
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
