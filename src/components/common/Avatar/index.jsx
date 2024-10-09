import * as S from "./styles";
import { getInitials } from "./utils";
import PropTypes from "prop-types";

const Avatar = ({ name, size = 50, bgColor, textColor }) => {
  return (
    <S.AvatarWrapper size={size} bgColor={bgColor} textColor={textColor}>
      {getInitials(name)}
    </S.AvatarWrapper>
  );
};

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  bgColor: PropTypes.string,
};

export default Avatar;
