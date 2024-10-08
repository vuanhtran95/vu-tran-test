import Icon from "../Icon";
import * as S from "./styles";

const SocialMedia = ({ items }) => {
  return (
    <S.SocialMediaWrapper>
      {items.map(({ icon, url }) => {
        return <Icon key={url} icon={icon} url={url} />;
      })}
    </S.SocialMediaWrapper>
  );
};

export default SocialMedia;
