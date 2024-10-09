import PropTypes from "prop-types";
import * as S from "../../styles";

const Links = ({ title, links }) => {
  return (
    <>
      <S.QuickLinkTitle>{title}</S.QuickLinkTitle>
      <S.QuickLinks>
        {links.map(link => {
          return <S.QuickLinkItem>{link.name}</S.QuickLinkItem>;
        })}
      </S.QuickLinks>
    </>
  );
};

Links.propTypes = {
  title: PropTypes.string,
  links: PropTypes.array,
};

export default Links;
