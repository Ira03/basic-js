const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let separator = options.separator ? options.separator : '+';
  let additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  let addition = '';
  if (options.hasOwnProperty('addition')) {
    addition = options.addition + '';
  }
  let repeatTimes = options.repeatTimes ? options.repeatTimes : 0;
  let additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 0;
  str = str + '';
  strWithSeparator = str + separator;
  let additionStr = '';

  if (additionRepeatTimes && addition) {
    additionStr = new Array(additionRepeatTimes).join(addition + additionSeparator) + addition;
  } else if (!additionRepeatTimes && addition) {
    additionStr = addition;
  }

  if (!repeatTimes) {
    return str + additionStr;
  } else if (additionStr) {
    return new Array (repeatTimes ).join(str + additionStr + separator) + (str + additionStr);
  } else if (!additionStr) {
    return new Array (repeatTimes).join(strWithSeparator) + str;
  }
};
  