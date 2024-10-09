import PropTypes from "prop-types";

import * as S from "./styles";
import { COLORS, SPACING } from "shared";
import { Icon } from "components/common";

const SocialMedia = ({ items }) => {
  return (
    <S.SocialMediaWrapper>
      {items.map(({ icon, url }) => {
        return <Icon key={url} icon={icon} url={url} color={COLORS.GREY_800} gap={SPACING.XS} />;
      })}
    </S.SocialMediaWrapper>
  );
};

SocialMedia.propTypes = {
  items: PropTypes.array,
};

export default SocialMedia;
