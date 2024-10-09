import { filterData, sortData, paginateData } from "../utils";
import { SORT_ORDER } from "components/features/SearchEngine/constants";

describe("filterData", () => {
  const mockData = [
    {
      id: 1,
      title: "Loan Dispute",
      content: "Loan content",
      category: "Loan",
      decision: "Upheld",
      company: "Barclays",
      date: "2022-11-08",
    },
    {
      id: 2,
      title: "Credit Card Fraud",
      content: "Credit Card content",
      category: "Credit Card",
      decision: "Rejected",
      company: "HSBC",
      date: "2023-02-15",
    },
    {
      id: 3,
      title: "Savings Account Issue",
      content: "Savings content",
      category: "Savings",
      decision: "Partially Upheld",
      company: "Nationwide",
      date: "2022-12-17",
    },
  ];

  it("returns all data when no filters are provided", () => {
    const filters = { category: null, decision: null, company: null, date: null };
    const searchKeyword = "";

    const result = filterData(mockData, filters, searchKeyword);

    expect(result).toHaveLength(3);
  });

  it("filters data based on search keyword (title/content)", () => {
    const filters = { category: null, decision: null, company: null, date: null };
    const searchKeyword = "credit card";

    const result = filterData(mockData, filters, searchKeyword);

    expect(result).toHaveLength(1);
    expect(result[0].title).toBe("Credit Card Fraud");
  });
});

describe("sortData", () => {
  const mockData = [
    { id: 1, title: "Loan Dispute", date: "2022-11-08" },
    { id: 2, title: "Credit Card Fraud", date: "2023-02-15" },
    { id: 3, title: "Savings Account Issue", date: "2022-12-17" },
  ];

  it("sorts data by title in ascending order", () => {
    const result = sortData(mockData, SORT_ORDER.TITLE_ASC);

    expect(result[0].title).toBe("Credit Card Fraud");
    expect(result[1].title).toBe("Loan Dispute");
    expect(result[2].title).toBe("Savings Account Issue");
  });

  it("sorts data by title in descending order", () => {
    const result = sortData(mockData, SORT_ORDER.TITLE_DESC);

    expect(result[0].title).toBe("Savings Account Issue");
    expect(result[1].title).toBe("Loan Dispute");
    expect(result[2].title).toBe("Credit Card Fraud");
  });

  it("sorts data by date in ascending order", () => {
    const result = sortData(mockData, SORT_ORDER.DATE_ASC);

    expect(result[0].date).toBe("2022-11-08");
    expect(result[1].date).toBe("2022-12-17");
    expect(result[2].date).toBe("2023-02-15");
  });

  it("sorts data by date in descending order", () => {
    const result = sortData(mockData, SORT_ORDER.DATE_DESC);

    expect(result[0].date).toBe("2023-02-15");
    expect(result[1].date).toBe("2022-12-17");
    expect(result[2].date).toBe("2022-11-08");
  });

  it("returns unsorted data if no sortOrder is provided", () => {
    const result = sortData(mockData, null);

    expect(result).toEqual(mockData);
  });
});

describe("paginateData", () => {
  const mockData = [
    { id: 1, title: "Loan Dispute" },
    { id: 2, title: "Credit Card Fraud" },
    { id: 3, title: "Savings Account Issue" },
    { id: 4, title: "Mortgage Issue" },
    { id: 5, title: "Insurance Claim" },
  ];

  it("paginates data correctly for page 1", () => {
    const result = paginateData(mockData, 1, 2);

    expect(result).toHaveLength(2);
    expect(result[0].title).toBe("Loan Dispute");
    expect(result[1].title).toBe("Credit Card Fraud");
  });

  it("paginates data correctly for page 2", () => {
    const result = paginateData(mockData, 2, 2);

    expect(result).toHaveLength(2);
    expect(result[0].title).toBe("Savings Account Issue");
    expect(result[1].title).toBe("Mortgage Issue");
  });

  it("handles last page with fewer items correctly", () => {
    const result = paginateData(mockData, 3, 2);

    expect(result).toHaveLength(1);
    expect(result[0].title).toBe("Insurance Claim");
  });
});
