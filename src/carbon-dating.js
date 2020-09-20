const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity === 'string' && typeof +sampleActivity === 'number') {
    let decayRate =  0.693 / HALF_LIFE_PERIOD;
    let sampleAge = Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) / decayRate);
    return sampleAge;
  } else {
    return false;
  }
};
