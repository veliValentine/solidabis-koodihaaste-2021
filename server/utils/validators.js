const isValidNumber = (number) => {
  if (!number || typeof number !== 'number' || Number.isNaN(number)) return false;
  if (number < 0) return false;
  return true;
};

module.exports = {
  isValidNumber,
};
