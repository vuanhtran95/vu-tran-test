import React from "react";

import * as S from "./styles";
import CompanyInfo from "./components/CompanyInfo";
import Links from "./components/QuickLinks";
import { legalLinks, quickLinks, socialMediaItems } from "./constants";
import { SocialMedia } from "..";

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterBody>
        <S.FooterSection>
          <CompanyInfo />
        </S.FooterSection>

        <S.FooterSection>
          <Links title="Quick Links" links={quickLinks} />
        </S.FooterSection>

        <S.FooterSection>
          <Links title="Legals" links={legalLinks} />
        </S.FooterSection>
      </S.FooterBody>

      <S.SocialMediaIcons>
        <S.Ltd>
          <span>©</span> 2023 CourtCorrect LTD
        </S.Ltd>
        <SocialMedia items={socialMediaItems} />
      </S.SocialMediaIcons>
    </S.FooterContainer>
  );
};

export default Footer;
