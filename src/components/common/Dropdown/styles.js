import Select from "react-select";
import styled from "styled-components";

export const StyledDropdown = styled(Select)`
  height: 48px;
  width: ${props => props.width || "100%"};
`;
