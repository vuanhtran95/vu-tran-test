import * as S from "../../styles";
import { socialMediaItems } from "../../constants";

const SocialMedia = () => {
  return (
    <>
      {socialMediaItems().map(item => {
        return <S.SocialIcon icon={item.icon} size="2x" />;
      })}
    </>
  );
};

export default SocialMedia;
