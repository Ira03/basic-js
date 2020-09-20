const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let counter = 0;
  let ears = "^^";
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === ears) {
        counter +=1;
      }
    }
  }
  return counter;
};
