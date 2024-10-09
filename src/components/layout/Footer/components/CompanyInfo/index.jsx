import * as S from "../../styles";
import CompanyLogo from "../company-logo";

const CompanyInfo = () => {
  return (
    <>
      <S.LogoText>
        <CompanyLogo />
      </S.LogoText>
      <S.Slogan>Justice for all.</S.Slogan>
      <S.ContactInfo>
        <p>hello@courtcorrect.com</p>
        <p>33 Percy St, London W1T 2DF</p>
        <p>020 7867 3925</p>
      </S.ContactInfo>
    </>
  );
};

export default CompanyInfo;
