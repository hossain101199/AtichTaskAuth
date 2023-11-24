export const isFutureDate = (dueDate: Date) => {
  const today = new Date();
  return dueDate > today;
};

export const parseDate = (dateString: Date | string) => new Date(dateString);

export const isValidDate = (dateString: string) => {
  if (isNaN(Date.parse(dateString))) {
    return false;
  } else {
    return true;
  }
};
