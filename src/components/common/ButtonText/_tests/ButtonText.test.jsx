import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ButtonText } from "components/common";

describe("ButtonText Component", () => {
  it("renders the button with the correct label", () => {
    const mockLabel = "Submit";

    render(<ButtonText label={mockLabel} />);

    expect(screen.getByText(mockLabel)).toBeInTheDocument();
  });

  it("calls the onClick handler when the button is clicked", () => {
    const mockOnClick = jest.fn();
    const mockLabel = "Submit";

    render(<ButtonText label={mockLabel} onClick={mockOnClick} />);
    fireEvent.click(screen.getByText(mockLabel));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("does not fail when no onClick handler is provided", () => {
    const mockLabel = "Submit";
    render(<ButtonText label={mockLabel} />);
    fireEvent.click(screen.getByText(mockLabel));
  });
});
