import PropTypes from "prop-types";

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

SocialMedia.propTypes = {
  items: PropTypes.array,
};

export default SocialMedia;
