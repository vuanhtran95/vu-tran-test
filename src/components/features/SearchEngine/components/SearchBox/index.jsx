import PropTypes from "prop-types";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Button, InputField } from "components/common";

import * as S from "./styles";

const SearchBox = ({ searchKeyword, setSearchKeyword, onSearch }) => {
  return (
    <S.SearchGroup>
      <InputField
        value={searchKeyword}
        onChange={e => setSearchKeyword(e.target.value)}
        icon={faSearch}
        placeholder="Search"
      />
      <Button label="Search" onClick={onSearch} />
    </S.SearchGroup>
  );
};

SearchBox.propTypes = {
  searchKeyword: PropTypes.string,
  setSearchKeyword: PropTypes.func,
  onSearch: PropTypes.func,
};

export default SearchBox;
