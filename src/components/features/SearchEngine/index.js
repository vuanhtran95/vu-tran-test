import { useEffect, useState } from "react";
import { Button, Dropdown, InputField, Card } from "components/common";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import * as S from "./styles";

import { getSearchData } from "../../../services";

const SearchEngine = () => {
  const [data, setData] = useState(getSearchData());

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getPageData();
  }, []);

  const getPageData = () => {
    setData(getSearchData());
  };

  return (
    <S.SearchEngine>
      <S.SearchHeader>
        <S.SearchTitle>AI-Powered Regulatory Search</S.SearchTitle>
        <S.SearchSubTitle>
          Use the search engine to search for publications from courts and regulators.
        </S.SearchSubTitle>
      </S.SearchHeader>

      {/* Search Input and Button */}
      <S.SearchGroup>
        <InputField
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          icon={faSearch}
          placeholder="Search"
        />
        <Button label="Search" />
      </S.SearchGroup>

      {/* Dropdown Filters */}
      <S.DropdownGroup>
        <Dropdown placeholder="Category" />
        <Dropdown placeholder="Decision" />
        <Dropdown placeholder="Company" />
        <Dropdown />
      </S.DropdownGroup>

      {/* Clear search */}
      <S.ClearFilter>Clear filter</S.ClearFilter>

      {/* Result section */}
      <S.ResultFilter>
        <div>
          <S.ResultTitle>Result</S.ResultTitle>
          <S.ResultSubTitle>Showing results 1-5 of 616.</S.ResultSubTitle>
        </div>
        <S.SortFilter>
          <Dropdown value={5} />
          <Dropdown placeholder="Sort By" />
        </S.SortFilter>
      </S.ResultFilter>

      {/* Result container */}
      <S.ResultData>
        {data.splice(0, 5).map(item => {
          return <Card key={item.id} item={item} />;
        })}
      </S.ResultData>
    </S.SearchEngine>
  );
};

export default SearchEngine;
