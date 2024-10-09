export const perPageOptions = [
  { value: 5, label: "5" },
  { value: 10, label: "10" },
  { value: 20, label: "20" },
  // can add more depends on the requirement
];

export const SORT_ORDER = Object.freeze({
  TITLE_ASC: "TITLE_ASC",
  TITLE_DESC: "TITLE_DESC",
});

export const sortOrderOptions = [
  { value: SORT_ORDER.TITLE_ASC, label: "Name (A-Z)" },
  { value: SORT_ORDER.TITLE_DESC, label: "Name (Z-A)" },
  // can add more depends on the requirement
];
