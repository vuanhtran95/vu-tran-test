import { COLORS, FONT, SPACING } from "shared";
import styled from "styled-components";

export const CardWrapper = styled.div`
  border-bottom: 1px solid ${COLORS.GREY_200};
  padding-top: ${SPACING.XL};
`;

export const AdditionalInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  margin: ${SPACING.M} 0 ${SPACING.L} 0;
  padding-bottom: ${SPACING.L};
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoItem = styled.div``;
export const ItemLabel = styled.p`
  font-size: ${FONT.SIZE.XXS};
  margin: ${SPACING.XXS} 0;
`;
export const ItemValue = styled.p`
  font-size: ${FONT.SIZE.XS};
  font-weight: ${FONT.WEIGHT.SEMIBOLD};
  margin: ${SPACING.XXS} 0;
`;

export const CardDate = styled.div`
  font-size: ${FONT.SIZE.XXS};
  font-weight: ${FONT.WEIGHT.SEMIBOLD};
  text-transform: uppercase;
  line-height: 16px;
`;

export const CardTitle = styled.div`
  font-size: ${FONT.SIZE.LL};
  font-weight: ${FONT.WEIGHT.NORMAL};
  color: ${COLORS.PRIMARY};
  margin: ${SPACING.SM} 0;
`;

export const CardSubTitle = styled.div`
  font-size: ${FONT.SIZE.XS};
  font-weight: ${FONT.WEIGHT.NORMAL};
  color: ${COLORS.GREY_100};
  line-height: 20px;
  margin-bottom: ${SPACING.M};
`;
