import * as S from "./styles";

const Card = ({ item }) => {
  const { title, content, category, decision, company } = item;
  return (
    <S.CardWrapper>
      <h2>{title}</h2>
      <p>{content}</p>
      <S.AdditionalInfo>
        {/* Category */}
        <S.InfoItem>
          <p>Category</p>
          <p>{category}</p>
        </S.InfoItem>

        {/* Decision */}
        <S.InfoItem>
          <p>Category</p>
          <p>{decision}</p>
        </S.InfoItem>

        {/* Company */}
        <S.InfoItem>
          <p>Company</p>
          <p>{company}</p>
        </S.InfoItem>
      </S.AdditionalInfo>
    </S.CardWrapper>
  );
};

export default Card;
