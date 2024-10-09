import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { COLORS, FONT, SPACING } from "shared";

export const InputFieldContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  border-radius: 5px;
  display: flex;
  align-items: center;
`;

// Styled component for the search icon
export const InputIcon = styled(FontAwesomeIcon)`
  position: absolute;
  left: 15px;
  color: #aaa;
  font-size: 18px;
`;

export const StyledInput = styled.input`
  height: 44px;
  width: ${props => props.width || "100%"};
  padding-left: ${props => (props.hasIcon ? SPACING.XL : 0)};
  border: 1px solid ${COLORS.GREY_300};
  border-radius: 4px;
  font-size: ${FONT.SIZE.XS};
  font-weight: ${FONT.WEIGHT.MEDIUM};
  color: ${COLORS.GREY_100};
`;
