import Select from "react-select";

const Dropdown = ({ placeholder, options, value, width }) => {
  return <Select placeholder={placeholder} options={options} value={value} />;
};

export default Dropdown;
