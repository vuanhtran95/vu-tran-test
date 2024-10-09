import { SPACING } from "shared";
import styled from "styled-components";

export const FilterGroup = styled.div`
  display: flex;
  margin: ${SPACING.M} 0;
  gap: ${SPACING.S};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
