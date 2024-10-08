import PropTypes from "prop-types";
import { StyledDropdown } from "./styles";

const customStyles = {
  indicatorSeparator: () => ({
    display: "none",
  }),
};

const Dropdown = ({ placeholder, options, value }) => {
  return <StyledDropdown placeholder={placeholder} options={options} value={value} styles={customStyles} />;
};

Dropdown.propTypes = {
  placeholder: PropTypes.string,
  options: PropTypes.array,
  value: PropTypes.string,
  width: PropTypes.number,
};

export default Dropdown;
