import React from "react";
import { render, screen } from "@testing-library/react";
import { Dropdown } from "components/common";

describe("Dropdown Component", () => {
  const mockOptions = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const mockOnChange = jest.fn();

  it("renders the dropdown correctly", () => {
    const placeholder = "Select an option";

    render(<Dropdown placeholder={placeholder} options={mockOptions} onChange={mockOnChange} />);
    expect(screen.getByText(placeholder)).toBeInTheDocument();
  });
});
