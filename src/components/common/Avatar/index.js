import * as S from "./styles";
import { getInitials } from "./utils";

const Avatar = ({ name, size = 50, bgColor, textColor }) => {
  return (
    <S.AvatarWrapper size={size} bgColor={bgColor} textColor={textColor}>
      {getInitials(name)}
    </S.AvatarWrapper>
  );
};

Avatar.propTypes = {};

export default Avatar;
