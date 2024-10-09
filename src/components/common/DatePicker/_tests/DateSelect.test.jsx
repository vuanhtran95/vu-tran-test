import React from "react";
import { render, screen } from "@testing-library/react";
import moment from "moment";
import DateSelect from "..";

describe("DateSelect Component", () => {
  const mockOnChange = jest.fn();

  it("displays the selected date in the input field", () => {
    const selectedDate = moment("2024-10-10").toDate();
    const formattedDate = moment(selectedDate).format("MM/DD/YYYY");

    render(<DateSelect value={selectedDate} onChange={mockOnChange} placeholder="Select a date" />);
    const input = screen.getByDisplayValue(formattedDate);
    expect(input).toBeInTheDocument();
  });
});
