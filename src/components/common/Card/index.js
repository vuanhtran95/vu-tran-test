import moment from "moment";
import * as S from "./styles";
import PropTypes from "prop-types";
import { useMemo } from "react";

const Card = ({ item }) => {
  const { title, content, category, decision, company, date } = item;

  const getDate = useMemo(() => {
    const formattedDate = moment(date).isValid() ? moment(date).format("MMM DD YYYY") : "-";
    return formattedDate;
  }, [date]);

  return (
    <S.CardWrapper>
      <S.CardDate>{getDate}</S.CardDate>
      <S.CardTitle>{title}</S.CardTitle>
      <S.CardSubTitle>{content}</S.CardSubTitle>
      <S.AdditionalInfo>
        {/* Category */}
        <S.InfoItem>
          <S.ItemLabel>Category</S.ItemLabel>
          <S.ItemValue>{category}</S.ItemValue>
        </S.InfoItem>

        {/* Decision */}
        <S.InfoItem>
          <S.ItemLabel>Decision</S.ItemLabel>
          <S.ItemValue>{decision}</S.ItemValue>
        </S.InfoItem>

        {/* Company */}
        <S.InfoItem>
          <S.ItemLabel>Company</S.ItemLabel>
          <S.ItemValue>{company}</S.ItemValue>
        </S.InfoItem>
      </S.AdditionalInfo>
    </S.CardWrapper>
  );
};

Card.propTypes = {
  item: PropTypes.object,
};

export default Card;
