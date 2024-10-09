import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import * as S from "./styles";

const Icon = ({ icon, url, isActive, onClick, color, gap }) => {
  let history = useHistory();

  return (
    <S.IconItem
      isActive={isActive}
      onClick={() => {
        history.push(url);
        onClick?.();
      }}
      icon={icon}
      color={color}
      gap={gap}
    />
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  url: PropTypes.string,
  color: PropTypes.string,
  gap: PropTypes.number,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Icon;
