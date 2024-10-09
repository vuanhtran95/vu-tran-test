import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "components/common";

describe("Button Component", () => {
  it("renders the button with the correct label", () => {
    const mockLabel = "Click Me";

    render(<Button label={mockLabel} />);

    expect(screen.getByText(mockLabel)).toBeInTheDocument();
  });

  it("calls the onClick handler when the button is clicked", () => {
    const mockOnClick = jest.fn();
    const mockLabel = "Click Me";

    render(<Button label={mockLabel} onClick={mockOnClick} />);
    fireEvent.click(screen.getByText(mockLabel));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("does not fail if no onClick handler is provided", () => {
    const mockLabel = "Click Me";

    render(<Button label={mockLabel} />);

    fireEvent.click(screen.getByText(mockLabel));
  });
});
