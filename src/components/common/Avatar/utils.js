export const getInitials = name => {
  const nameArray = name.split(" ");
  const initials = nameArray
    .map(word => word[0])
    .join("")
    .toUpperCase();
  return initials;
};
