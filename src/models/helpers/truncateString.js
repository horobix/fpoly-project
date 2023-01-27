let truncateString = (str, length) => {
  return str.length > length ? `${str.substr(0, length)}...` : str;
};

export default truncateString;
