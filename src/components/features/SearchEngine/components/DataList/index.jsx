import PropTypes from "prop-types";

import { Card } from "components/common";
import * as S from "./styles";
import NoRecord from "../NoRecord";

const DataList = ({ data }) => {
  return (
    <S.ResultData>
      {data.map(item => {
        return <Card key={item.id} item={item} />;
      })}

      {!data.length && <NoRecord />}
    </S.ResultData>
  );
};

DataList.propTypes = {
  data: PropTypes.array,
};

export default DataList;
