import styled from "styled-components";
import { COLORS, FONT, SPACING } from "shared";

export const SearchHeader = styled.div`
  text-align: center;
`;

export const SearchTitle = styled.div`
  font-size: ${FONT.SIZE["2XL"]};
  font-weight: ${FONT.WEIGHT.SEMIBOLD};
`;

export const SearchSubTitle = styled.div`
  font-size: ${FONT.SIZE.M};
  margin: ${SPACING.L} 0 ${SPACING["3XL"]} 0;
  color: ${COLORS.GREY_100};
`;
