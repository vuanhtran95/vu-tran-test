const { getInitials } = require("../utils");

describe("getInitials", () => {
  it("should return initials for a two-word name", () => {
    const result = getInitials("John Doe");
    expect(result).toBe("JD");
  });

  it("should return initials for a single-word name", () => {
    const result = getInitials("John");
    expect(result).toBe("J");
  });

  it("should return initials for a three-word name", () => {
    const result = getInitials("John Michael Doe");
    expect(result).toBe("JMD");
  });

  it("should handle names with multiple spaces correctly", () => {
    const result = getInitials("  John    Doe  ");
    expect(result).toBe("JD");
  });

  it("should return an empty string when an empty name is provided", () => {
    const result = getInitials("");
    expect(result).toBe("");
  });

  it("should return initials for names with special characters", () => {
    const result = getInitials("John-Doe O'Brien");
    expect(result).toBe("JO");
  });

  it("should handle names with only spaces", () => {
    const result = getInitials("     ");
    expect(result).toBe("");
  });

  it("should handle names with lowercase and return uppercase initials", () => {
    const result = getInitials("john doe");
    expect(result).toBe("JD");
  });
});
