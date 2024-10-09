import React from "react";
import { render, screen } from "@testing-library/react";
import { FILTER_TYPE } from "../constants";
import FilterGroup from "..";

describe("FilterGroup Component", () => {
  const mockFilters = [
    {
      type: FILTER_TYPE.DROPDOWN,
      placeholder: "Select an option",
      options: [
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
      ],
      onChange: jest.fn(),
      value: "option1",
      isMulti: false,
      width: 200,
    },
    {
      type: FILTER_TYPE.DATEPICKER,
      value: new Date(),
      onChange: jest.fn(),
    },
  ];

  it("renders a Dropdown when the filter type is DROPDOWN", () => {
    // Render the component with mock filters
    render(<FilterGroup filters={[mockFilters[0]]} />);

    // Check if the Dropdown is rendered with the correct placeholder
    expect(screen.getByText("Select an option")).toBeInTheDocument();
  });

  it("renders a DateSelect when the filter type is DATEPICKER", () => {
    // Render the component with mock filters
    render(<FilterGroup filters={[mockFilters[1]]} />);

    // Check if the DateSelect is rendered (look for the placeholder or initial value)
    expect(screen.getByPlaceholderText("Date")).toBeInTheDocument(); // Adjust placeholder if different
  });
});
