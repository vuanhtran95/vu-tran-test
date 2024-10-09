import React from "react";
import { render, screen } from "@testing-library/react";
import { Avatar } from "components/common";

describe("Avatar Component", () => {
  it("applies the correct background and text color", () => {
    const mockName = "John Doe";
    const mockBgColor = "blue";
    const mockTextColor = "white";

    const { container } = render(<Avatar name={mockName} bgColor={mockBgColor} textColor={mockTextColor} />);

    const avatarElement = container.firstChild;
    expect(avatarElement).toHaveStyle(`background-color: ${mockBgColor}`);
    expect(avatarElement).toHaveStyle(`color: ${mockTextColor}`);
  });

  it("renders initials in uppercase regardless of name casing", () => {
    const mockName = "john doe";

    render(<Avatar name={mockName} />);
    expect(screen.getByText("JD")).toBeInTheDocument();
  });
});
