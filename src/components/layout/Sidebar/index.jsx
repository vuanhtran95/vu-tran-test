import * as S from "./styles";
import PropTypes from "prop-types";
import { useState } from "react";
import { Icon, Img } from "components/common";

const Sidebar = ({ menuItems }) => {
  const [activeMenuId, setActiveMenuId] = useState(5);

  return (
    <S.SidebarContainer>
      <Img src="/icon.png" />

      <S.ItemsWrapper>
        {menuItems.map(item => {
          return (
            <S.IconWrapper key={item.id}>
              <Icon
                icon={item.icon}
                size="2x"
                isActive={item.id === activeMenuId}
                onClick={() => setActiveMenuId(item.id)}
              />
            </S.IconWrapper>
          );
        })}
      </S.ItemsWrapper>
    </S.SidebarContainer>
  );
};

Sidebar.propTypes = {
  menuItems: PropTypes.array,
};

export default Sidebar;
