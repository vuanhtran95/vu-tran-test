import styled from "styled-components";
import { COLORS, FONT, SPACING } from "../../../constants";

export const StyledButton = styled.button`
  width: 193px;
  height: 48px;
  padding: ${SPACING.SM} ${SPACING.M}
  gap: ${SPACING.XS};
  border-radius: 5px;
  opacity: 0px;
  font-weight: ${FONT.WEIGHT.MEDIUM};
  font-size: ${FONT.SIZE.XS};
  background-color: ${COLORS.PRIMARY};
  color: white;
  border: none;
`;
