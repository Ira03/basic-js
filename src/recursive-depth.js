const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
    this.count = 0;

  }
  calculateDepth(arr) {
    if (!arr.find(item => Array.isArray(item))) {
      return 1;
    } else {
      let a = [];
      for (let item of arr) {
        let sum = 0;
        if(Array.isArray(item)) {
          sum += this.calculateDepth(item);
          a.push(sum);
        }
      }
      return 1 + Math.max(...a);
    } 
  }
};