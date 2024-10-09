import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { InputField } from "components/common";

describe("InputField Component", () => {
  const mockOnChange = jest.fn();

  it("renders the input field with the correct value and placeholder", () => {
    const placeholder = "Enter your text";
    const value = "Sample value";

    render(<InputField value={value} placeholder={placeholder} onChange={mockOnChange} />);
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
    expect(screen.getByDisplayValue(value)).toBeInTheDocument();
  });

  it("calls the onChange handler when input value changes", () => {
    const placeholder = "Enter your text";
    const newValue = "New input value";

    render(<InputField value="" placeholder={placeholder} onChange={mockOnChange} />);
    const inputElement = screen.getByPlaceholderText(placeholder);
    fireEvent.change(inputElement, { target: { value: newValue } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(expect.any(Object));
  });
});
