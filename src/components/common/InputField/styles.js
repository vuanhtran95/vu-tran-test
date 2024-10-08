import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SPACING } from "shared";

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  border-radius: 5px;
  display: flex;
  align-items: center;
`;

// Styled component for the search icon
export const SearchIcon = styled(FontAwesomeIcon)`
  position: absolute;
  left: 15px;
  color: #aaa;
  font-size: 18px;
`;

export const StyledInput = styled.input`
  height: 46px;
  width: ${props => props.width || "100%"};
  padding-left: ${props => (props.hasIcon ? SPACING.XL : 0)};
  border: 1px solid #8c9196;
  border-radius: 5px;
`;
