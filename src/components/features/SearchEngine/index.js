import { useCallback, useEffect, useMemo, useState } from "react";
import { Button, Dropdown, InputField, Card } from "components/common";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import * as S from "./styles";

import useSearchData from "hooks/useSearchData";
import { perPageOptions, sortByOptions } from "./constants";
import { FILTER_OPTIONS } from "./utils";
import FilterGroup from "../../common/FilterGroup";
import { FILTER_TYPE } from "components/common/FilterGroup/constants";

const SearchEngine = () => {
  const { data, onSearch, count } = useSearchData();

  const { categoryOptions, companyOptions, decisionOptions } = FILTER_OPTIONS();

  const [searchKeyword, setSearchKeyword] = useState("");

  const [category, setCategory] = useState("");
  const [decision, setDecision] = useState("");
  const [company, setCompany] = useState("");
  const [date, setDate] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(perPageOptions[0]);
  const [sortBy, setSortBy] = useState(5);

  const filters = useMemo(() => {
    return [
      {
        placeholder: "Category",
        options: categoryOptions,
        onChange: setCategory,
        value: category,
        type: FILTER_TYPE.DROPDOWN,
      },
      {
        placeholder: "Decision",
        options: decisionOptions,
        onChange: setDecision,
        value: decision,
        type: FILTER_TYPE.DROPDOWN,
      },
      {
        placeholder: "Company",
        options: companyOptions,
        onChange: setCompany,
        value: company,
        type: FILTER_TYPE.DROPDOWN,
      },
      {
        placeholder: "Date",
        onChange: setDate,
        value: date,
        type: FILTER_TYPE.DATEPICKER,
      },
    ];
  }, [category, categoryOptions, company, companyOptions, date, decision, decisionOptions]);

  const onClearFilters = () => {
    setCategory("");
    setDecision("");
    setCompany("");
  };

  const onCallSearch = useCallback(() => {
    const categoryKeys = category ? category.map(e => e.value) : [];
    const decisionKeys = decision ? decision.map(e => e.value) : [];
    const companyKeys = company ? company.map(e => e.value) : [];
    const perPageKeys = perPage.value;

    onSearch({
      searchKeyword: searchKeyword || "",
      category: categoryKeys,
      decision: decisionKeys,
      company: companyKeys,
      page: currentPage,
      perPage: perPageKeys,
      sortBy,
    });
  }, [category, company, currentPage, decision, onSearch, perPage.value, searchKeyword, sortBy]);

  const onClickSearchButton = () => {
    onSearch();
  };

  useEffect(() => {
    onCallSearch();
  }, [category, company, decision, perPage, sortBy]);

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
          value={searchKeyword}
          onChange={e => setSearchKeyword(e.target.value)}
          icon={faSearch}
          placeholder="Search"
        />
        <Button label="Search" onClick={onClickSearchButton} />
      </S.SearchGroup>

      {/* Filter: Category, Decision, Company, Date */}
      <FilterGroup filters={filters} />

      {/* Clear search */}
      <S.ClearFilter onClick={onClearFilters}>Clear filter</S.ClearFilter>

      {/* Result section */}
      <S.ResultFilter>
        <S.ResultTitleWrapper>
          <S.ResultTitle>Result</S.ResultTitle>
          <S.ResultSubTitle>Showing results 1-5 of {count}.</S.ResultSubTitle>
        </S.ResultTitleWrapper>
        <S.SortFilter>
          <Dropdown value={perPage} options={perPageOptions} onChange={setPerPage} width={100} />
          <Dropdown value={sortBy} options={sortByOptions} placeholder="Sort By" onChange={setSortBy} width={200} />
        </S.SortFilter>
      </S.ResultFilter>

      {/* Displayed data container */}
      <S.ResultData>
        {data.map(item => {
          return <Card key={item.id} item={item} />;
        })}
      </S.ResultData>
    </S.SearchEngine>
  );
};

export default SearchEngine;
