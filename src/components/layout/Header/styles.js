import { FONT, SPACING } from "shared";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: ${SPACING.M};
  margin: ${SPACING.S} ${SPACING.M};
`;

export const FullName = styled.p`
  font-size: ${FONT.SIZE.M};
  font-weight: ${FONT.WEIGHT.NORMAL};
`;
