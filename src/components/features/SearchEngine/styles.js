import styled from "styled-components";
import { COLORS, FONT, SPACING } from "../../../shared";

export const SearchEngine = styled.div`
  margin: auto;
  margin-top: 96px;
  width: 1032px;
`;

export const DropdownGroup = styled.div`
  display: flex;
  margin: ${SPACING.M} 0;
  gap: ${SPACING.S};
`;

export const SearchGroup = styled.div`
  display: flex;
  gap: ${SPACING.SM};
  width: 100%;
  margin: ${SPACING.L} 0;
`;

export const ResultFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${SPACING["3XL"]};
`;

export const ResultTitleWrapper = styled.div``;

export const SortFilter = styled.div`
  display: flex;
  gap: ${SPACING.S};
`;

export const ResultTitle = styled.div`
  font-size: ${FONT.SIZE.XL};
`;

export const ResultSubTitle = styled.div`
  font-size: ${FONT.SIZE.S};
  margin-top: ${SPACING.S};
`;

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

export const ResultData = styled.div`
  margin: ${SPACING.XL} 0;
`;

export const ClearFilter = styled.div`
  display: flex;
  justify-content: center;
  color: ${COLORS.GREEN_300};
  margin: ${SPACING["XL"]} 0;
`;
