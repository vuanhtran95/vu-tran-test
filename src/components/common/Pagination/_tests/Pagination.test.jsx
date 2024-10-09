import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Pagination } from "components/common";

describe("Pagination Component", () => {
  const mockOnPageChange = jest.fn();
  const totalPages = 5;
  const currentPage = 3;

  it("calls onPageChange with the correct value when a specific page is clicked", () => {
    render(<Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={mockOnPageChange} />);

    const pageButton = screen.getByText("2");
    fireEvent.click(pageButton);
    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });
});
