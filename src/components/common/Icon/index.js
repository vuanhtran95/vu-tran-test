import { useHistory } from "react-router-dom";
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

export default Icon;
