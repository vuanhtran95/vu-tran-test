import { useEffect, useState } from "react";
import { getSearchData } from "../../../services";
import * as S from "./styles";
import InputField from "../../common/InputField";
import Button from "../../common/Button";
import Dropdown from "../../common/Dropdown";
import Card from "../../common/Card";

const SearchEngine = () => {
  const [data, setData] = useState(getSearchData());

  useEffect(() => {
    getPageData();
  }, []);

  const getPageData = () => {
    setData(getSearchData());
  };

  return (
    <S.SearchEngine>
      <S.SearchTitle>AI-Powered Regulatory Search</S.SearchTitle>
      <S.SearchSubTitle>Use the search engine to search for publications from courts and regulators.</S.SearchSubTitle>

      {/* Search Input and Button */}
      <S.SearchGroup>
        <InputField placeholder="Search" />
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
      <p>Clear filter</p>

      {/* Result section */}
      <S.ResultFilter>
        <S.ResultTitle>Result</S.ResultTitle>
        <p>Showing results 1-5 of 616.</p>
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
