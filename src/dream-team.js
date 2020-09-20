const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }
  return arr.filter(item => typeof item === "string")
            .map(item => item.trim().toUpperCase())
            .sort()
            .map(item => item.slice(0, 1))
            .join("");
};
