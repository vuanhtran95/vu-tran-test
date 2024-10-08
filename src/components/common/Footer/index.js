import SocialMedia from "../SocialMedia";
import { socialMediaItems } from "./constants";
import * as S from "./styles";

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.FooterMainContent>
        {/* Company Information */}
        <S.CompanyInfo>CourtCorrect</S.CompanyInfo>

        {/* Quick Links */}
        <S.QuickLinks>Quick Links</S.QuickLinks>

        {/* Legals */}
        <S.Legals>Legals</S.Legals>
      </S.FooterMainContent>

      {/* Social Media Links */}
      <S.FooterSocialLinks>
        <div>2023 CourtCorrect LTD</div>
        <SocialMedia items={socialMediaItems} />
      </S.FooterSocialLinks>
    </S.FooterWrapper>
  );
};
export default Footer;
