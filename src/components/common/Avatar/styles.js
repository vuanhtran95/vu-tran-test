import { COLORS, FONT } from "shared";
import styled from "styled-components";

export const AvatarWrapper = styled.div`
  background-color: ${({ bgColor }) => bgColor || COLORS.GREEN_200};
  color: ${({ textColor }) => textColor || COLORS.GREEN_400};
  width: ${({ size }) => size || 48}px;
  height: ${({ size }) => size || 48}px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${FONT.SIZE.M}
  font-weight: ${FONT.WEIGHT.BOLD};
  text-transform: uppercase;
`;
