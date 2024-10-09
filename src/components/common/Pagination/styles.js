import styled from "styled-components";
import { COLORS, SPACING } from "shared";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageButton = styled.button`
  border: 1px solid #ccc;
  background-color: white;
  color: ${COLORS.GREY_400};
  padding: ${SPACING.XS} ${SPACING.S};
  margin: 0 ${SPACING.XXS};
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${COLORS.GREY_150};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const PageNumber = styled.span`
  margin: 0 8px;
  cursor: pointer;
  color: ${props => (props.active ? COLORS.GREEN_200 : COLORS.GREY_300)};

  &:hover {
    color: ${props => (!props.active ? COLORS.GREY_100 : COLORS.GREEN_400)};
  }
`;
