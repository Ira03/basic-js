const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (typeof date !== 'object') throw new Error();
  let month = date.getUTCMonth();


  let months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
   if (month >= 2 && month <= 4) {
     return 'spring';
   } else if (month >= 5 && month <= 7) {
     return 'summer';
   } else if (month >= 8 && month <= 10) {
     return 'autumn';
   } else if (month === 11 || month >= 0 && month <=1) {
     return 'winter';
   }
};
