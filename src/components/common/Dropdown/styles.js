import Select from "react-select";
import { COLORS, FONT } from "shared";
import styled from "styled-components";

export const StyledDropdown = styled(Select)`
  height: 48px;
  width: ${props => props.width || "100%"};
  font-size: ${FONT.SIZE.XS};
  font-weight: ${FONT.WEIGHT.MEDIUM};
  color: ${COLORS.GREY_100};
`;
