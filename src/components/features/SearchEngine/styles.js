import styled from "styled-components";
import { FONT, SPACING } from "shared";

export const SearchEngine = styled.div`
  margin: auto;
  margin-top: 96px;
  width: 1032px;

  @media (max-width: 768px) {
    width: calc(100% - 30px);
  }
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

export const SortFilter = styled.div`
  display: flex;
  gap: ${SPACING.S};
`;

export const ClearFilterButton = styled.p`
  font-size: ${FONT.SIZE.XS};
  font-weight: ${FONT.WEIGHT.MEDIUM};
`;
