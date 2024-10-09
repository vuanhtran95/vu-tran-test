import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

const Img = ({ src, alt, url }) => {
  let history = useHistory();
  return (
    <img
      src={src}
      alt={alt}
      onClick={() => {
        history.push(url);
      }}
      width={32}
    />
  );
};

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  url: PropTypes.string,
};

export default Img;
