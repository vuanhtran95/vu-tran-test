import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import * as S from "./styles";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <S.PaginationContainer>
      <S.PageButton onClick={handlePrevious} disabled={currentPage === 1}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </S.PageButton>
      {Array.from({ length: totalPages }, (_, index) => (
        <S.PageNumber key={index} active={currentPage === index + 1} onClick={() => onPageChange(index + 1)}>
          {index + 1}
        </S.PageNumber>
      ))}
      <S.PageButton onClick={handleNext} disabled={currentPage === totalPages}>
        <FontAwesomeIcon icon={faChevronRight} />
      </S.PageButton>
    </S.PaginationContainer>
  );
};

export default Pagination;
