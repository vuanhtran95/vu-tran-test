import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import * as S from "./styles";

const Icon = ({ icon, url }) => {
  let history = useHistory();

  return (
    <S.IconItem
      onClick={() => {
        history.push(url);
      }}>
      {icon}
    </S.IconItem>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  url: PropTypes.string,
};

export default Icon;
