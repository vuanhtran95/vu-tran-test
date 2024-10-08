import styled from "styled-components";
import { FONT, SPACING } from "../../../constants";

export const SearchEngine = styled.div`
  margin: auto;
  margin-top: 96px;
  width: 1032px;
`;

export const DropdownGroup = styled.div`
  display: flex;
  margin: ${SPACING.M} 0;
`;

export const SearchGroup = styled.div`
  display: flex;
  margin: ${SPACING.M} 0;
  gap: ${SPACING.SM};
`;

export const ResultFilter = styled.div``;

export const ResultTitle = styled.div`
  font-size: ${FONT.SIZE.XL};
`;

export const SearchTitle = styled.div`
  font-size: ${FONT.SIZE["2XL"]};
`;

export const SearchSubTitle = styled.div`
  font-size: ${FONT.SIZE.M};
`;

export const ResultData = styled.div`
  margin: ${SPACING.XL} 0;
`;
