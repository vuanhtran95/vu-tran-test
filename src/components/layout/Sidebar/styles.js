import { COLORS, SPACING } from "shared";
import styled from "styled-components";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-right: 1px solid ${COLORS.GREEN_100};
  width: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const IconWrapper = styled.div`
  margin: 10px 0;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const ItemsWrapper = styled.div`
  margin-top: ${SPACING["6XL"]};
`;
