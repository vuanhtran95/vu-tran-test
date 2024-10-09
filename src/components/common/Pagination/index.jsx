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

  // Ensure we display at least 3 pages
  let startPage = Math.max(1, currentPage - 1); // One page before current
  let endPage = Math.min(totalPages, currentPage + 1); // One page after current

  // If at the start, push the range forward to always display 3 pages
  if (currentPage === 1) {
    endPage = Math.min(totalPages, 3); // Show pages 1, 2, and 3 if possible
  }

  // If at the end, push the range backward to always display 3 pages
  if (currentPage === totalPages) {
    startPage = Math.max(1, totalPages - 2); // Show the last 3 pages if possible
  }

  const pagesToDisplay = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

  return (
    <S.PaginationContainer>
      <S.PageButton onClick={handlePrevious} disabled={currentPage === 1}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </S.PageButton>

      {pagesToDisplay.map(page => (
        <S.PageNumber key={page} active={currentPage === page} onClick={() => onPageChange(page)}>
          {page}
        </S.PageNumber>
      ))}

      <S.PageButton onClick={handleNext} disabled={currentPage === totalPages}>
        <FontAwesomeIcon icon={faChevronRight} />
      </S.PageButton>
    </S.PaginationContainer>
  );
};

export default Pagination;
