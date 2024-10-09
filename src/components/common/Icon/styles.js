import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { COLORS, SPACING } from "shared";
import styled from "styled-components";

export const IconItem = styled(FontAwesomeIcon)`
  color: ${props => (props.isActive ? COLORS.GREEN_300 : COLORS.GREEN_90)};
  background-color: ${props => (props.isActive ? COLORS.GREEN_100 : "none")};
  padding: ${SPACING.SM};
  border-radius: 8px;
`;
