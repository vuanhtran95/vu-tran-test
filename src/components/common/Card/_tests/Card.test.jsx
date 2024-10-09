import React from "react";
import { render, screen } from "@testing-library/react";
import moment from "moment";
import { Card } from "components/common";

describe("Card Component", () => {
  const mockItem = {
    title: "Card Title",
    content: "This is a card content",
    category: "Tech",
    decision: "Approved",
    company: "OpenAI",
    date: "2024-10-10",
  };

  it("renders the card with correct content", () => {
    render(<Card item={mockItem} />);
    expect(screen.getByText(mockItem.title)).toBeInTheDocument();
    expect(screen.getByText(mockItem.content)).toBeInTheDocument();
    expect(screen.getByText(mockItem.category)).toBeInTheDocument();
    expect(screen.getByText(mockItem.decision)).toBeInTheDocument();
    expect(screen.getByText(mockItem.company)).toBeInTheDocument();
  });

  it("formats and displays the date correctly", () => {
    render(<Card item={mockItem} />);
    const formattedDate = moment(mockItem.date).format("MMM DD YYYY");
    expect(screen.getByText(formattedDate)).toBeInTheDocument();
  });
});
