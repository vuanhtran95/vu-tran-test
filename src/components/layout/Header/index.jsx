import { Avatar } from "components/common";
import * as S from "./styles";

const fullName = "Name Surname";
const userName = "Chris Chan";

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.FullName>{fullName}</S.FullName>
      <Avatar name={userName} />
    </S.HeaderWrapper>
  );
};
export default Header;
