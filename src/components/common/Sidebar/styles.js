import styled from "styled-components";
import { SPACING } from "../../../shared";

export const SideWrapper = styled.div`
  width: 60px;
  padding: ${SPACING.M};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #ddd;
  gap: ${SPACING.L};
`;
