import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { COLORS, FONT, SPACING } from "shared";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: ${SPACING["XL"]} ${SPACING["6XL"]};
  background-color: #f7fcfa;
  position: relative;
  bottom: 0;
  min-height: 200px;

  @media (max-width: 768px) {
    padding: ${SPACING.S};
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: ${props => props.grow || 1};
`;

export const LogoText = styled.p`
  color: #2e7d32;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

export const Slogan = styled.p`
  margin: 0;
  font-size: ${FONT.SIZE.XS};
  color: ${COLORS.GREY_100};
`;

export const ContactInfo = styled.p`
  color: ${COLORS.GREY_100};
  line-height: 1.5;
  font-size: ${FONT.SIZE.XS};

  p {
    margin: 0;
  }
`;

export const QuickLinks = styled.p`
  list-style-type: none;
  margin: 0;
`;

export const QuickLinkTitle = styled.p`
  font-size: ${FONT.SIZE.S};
  font-weight: ${FONT.WEIGHT.SEMIBOLD};
  margin: 0;
`;

export const QuickLinkItem = styled.li`
  margin: 8px 0;
  color: ${COLORS.GREY_100};
  cursor: pointer;
  font-size: ${FONT.SIZE.XS};
  line-height: 20px;
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    gap: 0;
    flex-direction: column;
    align-items: start;
  }
`;

export const SocialIcon = styled(FontAwesomeIcon)`
  margin-right: 15px;
  color: #666;
  cursor: pointer;

  &:hover {
    color: #2e7d32;
  }
`;

export const LegalInfo = styled.p`
  color: #666;
  margin-top: 10px;
  font-size: ${FONT.SIZE.XS};
`;

export const FooterBody = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${COLORS.GREY_50};
  padding-bottom: ${SPACING.S};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Ltd = styled.p`
  font-size: ${FONT.SIZE.XS};
  line-height: 20px;
  color: ${COLORS.GREY_100};
`;
