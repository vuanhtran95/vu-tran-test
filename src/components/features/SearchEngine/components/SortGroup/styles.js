import styled from "styled-components";
import { FONT, SPACING } from "shared";

export const ResultTitle = styled.div`
  font-size: ${FONT.SIZE.XL};
`;

export const ResultSubTitle = styled.div`
  font-size: ${FONT.SIZE.S};
  margin-top: ${SPACING.S};
`;

export const ResultTitleWrapper = styled.div``;

export const ResultFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${SPACING["3XL"]};
`;
