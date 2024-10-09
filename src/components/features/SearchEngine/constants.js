export const perPageOptions = [
  { value: 5, label: "5" },
  { value: 10, label: "10" },
  { value: 20, label: "20" },
  // can add more depends on the requirement
];

export const SORT_ORDER = Object.freeze({
  ASC: "ASC",
  DESC: "DESC",
});

export const sortByOptions = [
  { value: SORT_ORDER.ASC, label: "Name (A-Z)" },
  { value: SORT_ORDER.DESC, label: "Name (Z-A)" },
  // can add more depends on the requirement
];
