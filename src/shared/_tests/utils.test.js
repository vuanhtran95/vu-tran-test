import moment from "moment";
import { areDatesEqual } from "shared/utils";

describe("areDatesEqual", () => {
  it("returns true when both dates are the same (same day, month, year)", () => {
    const date1 = "2024-10-10";
    const date2 = "2024-10-10";

    expect(areDatesEqual(date1, date2)).toBe(true);
  });

  it("returns false when the dates are not the same (different day)", () => {
    const date1 = "2024-10-10";
    const date2 = "2024-10-11";

    expect(areDatesEqual(date1, date2)).toBe(false);
  });

  it("returns false when the dates are not the same (different month)", () => {
    const date1 = "2024-10-10";
    const date2 = "2024-11-10";

    expect(areDatesEqual(date1, date2)).toBe(false);
  });

  it("returns false when the dates are not the same (different year)", () => {
    const date1 = "2024-10-10";
    const date2 = "2023-10-10";

    expect(areDatesEqual(date1, date2)).toBe(false);
  });

  it("returns true when dates are the same but times are different", () => {
    const date1 = "2024-10-10T08:00:00";
    const date2 = "2024-10-10T15:30:00";

    expect(areDatesEqual(date1, date2)).toBe(true);
  });

  it("returns false when one or both dates are invalid", () => {
    const invalidDate1 = "invalid-date";
    const invalidDate2 = "2024-10-10";

    expect(areDatesEqual(invalidDate1, invalidDate2)).toBe(false);
    expect(areDatesEqual(invalidDate1, invalidDate1)).toBe(false);
    expect(areDatesEqual(invalidDate2, "invalid-date")).toBe(false);
  });

  it("returns true when comparing same moment instances", () => {
    const date1 = moment("2024-10-10");
    const date2 = moment("2024-10-10");

    expect(areDatesEqual(date1, date2)).toBe(true);
  });

  it("returns false when comparing null or undefined", () => {
    expect(areDatesEqual(null, undefined)).toBe(false);
    expect(areDatesEqual(null, "2024-10-10")).toBe(false);
  });
});
