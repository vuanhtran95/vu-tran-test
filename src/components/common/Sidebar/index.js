import * as S from "./styles";
import Icon from "../Icon";

const Sidebar = ({ menuItems }) => {
  return (
    <S.SideWrapper>
      Sidebar
      {menuItems.map(({ icon, url }) => {
        return <Icon key={url} icon={icon} url={url} />;
      })}
    </S.SideWrapper>
  );
};
export default Sidebar;
