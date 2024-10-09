import * as S from "./styles";
import Icon from "../Icon";
import PropTypes from "prop-types";
import Img from "../Img";

const Sidebar = ({ menuItems }) => {
  return (
    <S.SideWrapper>
      <Img src="/icon.png" />
      {menuItems.map(({ icon, url }) => {
        return <Icon key={url} icon={icon} url={url} />;
      })}
    </S.SideWrapper>
  );
};

Sidebar.propTypes = {
  menuItems: PropTypes.array,
};

export default Sidebar;
