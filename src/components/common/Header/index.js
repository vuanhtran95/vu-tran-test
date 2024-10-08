import Avatar from "../Avatar";
import * as S from "./styles";

const userName = "Name Surname";

const Header = () => {
  return (
    <S.HeaderWrapper>
      {userName}
      <Avatar name="C C" />
    </S.HeaderWrapper>
  );
};
export default Header;
