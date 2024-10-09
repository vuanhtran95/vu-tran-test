import { COLORS, FONT, SPACING } from "shared";
import styled from "styled-components";

export const CardWrapper = styled.div`
  border-bottom: 1px solid ${COLORS.GREY_200};
  margin-top: ${SPACING.XL};
`;

export const AdditionalInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  margin: ${SPACING.L} 0;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoItem = styled.div``;
export const ItemLabel = styled.p`
  font-size: ${FONT.SIZE.XXS};
`;
export const ItemValue = styled.p`
  font-size: ${FONT.SIZE.XS};
  font-weight: ${FONT.WEIGHT.SEMIBOLD};
`;

export const CardDate = styled.div`
  font-size: ${FONT.SIZE.XXS};
  font-weight: ${FONT.WEIGHT.SEMIBOLD};
  text-transform: uppercase;
`;

export const CardTitle = styled.div`
  font-size: ${FONT.SIZE.LL};
  font-weight: ${FONT.WEIGHT.SEMIBOLD};
  color: ${COLORS.PRIMARY};
  margin: ${SPACING.ML} 0;
`;

export const CardSubTitle = styled.div`
  font-size: ${FONT.SIZE.XS};
  font-weight: ${FONT.WEIGHT.SEMIBOLD};
  color: ${COLORS.GREY_100};
`;
