const truncate = (text = "", indexEnd = 20) => {
  if (text.length < indexEnd) {
    return text;
  }

  const truncateText = text.slice(0, indexEnd);
  return `${truncateText}...`;
};

export default truncate;
