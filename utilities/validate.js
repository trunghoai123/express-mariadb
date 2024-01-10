const isNumber = (value) => {
  return !isNaN(value);
};

const isFloat = (value) => {
  return isNumber(value) && value.toString().indexOf('.') !== -1;
};

const isInteger = (value) => {
  return isNumber(value) && value.toString().indexOf('.') === -1;
};

const isString = (value) => {
  return typeof value === 'string';
};

const isBoolean = (value) => {
  return typeof value === 'boolean';
};

const isDate = (value) => {
  return value instanceof Date;
};

const isTime = (value) => {
  const timeRegex = /^([0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
  return timeRegex.test(value);
};

module.exports = {
  isNumber,
  isFloat,
  isInteger,
  isString,
  isBoolean,
  isDate,
  isTime,
};
