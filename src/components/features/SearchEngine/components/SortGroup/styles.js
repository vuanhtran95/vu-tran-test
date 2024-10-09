import styled from "styled-components";
import { COLORS, FONT, SPACING } from "shared";

export const ResultTitle = styled.div`
  font-size: ${FONT.SIZE.XL};
  font-weight: ${FONT.WEIGHT.SEMIBOLD};
`;

export const ResultSubTitle = styled.div`
  font-size: ${FONT.SIZE.XS};
  margin-top: ${SPACING.XS};
  font-weight: ${FONT.WEIGHT.NORMAL};
  color: ${COLORS.GREY_100};
`;

export const ResultTitleWrapper = styled.div``;

export const ResultFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${SPACING.L};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
  }
`;
