import Avatar from "../Avatar";
import * as S from "./styles";

const userName = "Name Surname";

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.FullName>{userName}</S.FullName>
      <Avatar name="Chris Chan" />
    </S.HeaderWrapper>
  );
};
export default Header;
