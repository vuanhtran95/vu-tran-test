import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import * as S from "./styles";

const Icon = ({ icon, url, isActive, onClick }) => {
  let history = useHistory();

  return (
    <S.IconItem
      isActive={isActive}
      onClick={() => {
        history.push(url);
        onClick();
      }}
      icon={icon}
    />
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  url: PropTypes.string,
};

export default Icon;
